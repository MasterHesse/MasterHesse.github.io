"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _ExportedContent_exports, _ExportedContent_contextCode;
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugin = exports.Mode = void 0;
const front_matter_1 = __importDefault(require("front-matter"));
const markdown_it_1 = __importDefault(require("markdown-it"));
const htmlparser2_1 = require("htmlparser2");
const domhandler_1 = require("domhandler");
var Mode;
(function (Mode) {
    Mode["TOC"] = "toc";
    Mode["HTML"] = "html";
    Mode["REACT"] = "react";
    Mode["VUE"] = "vue";
    Mode["MARKDOWN"] = "markdown";
})(Mode || (exports.Mode = Mode = {}));
const markdownCompiler = (options) => {
    var _a, _b, _c;
    if (options.markdownIt) {
        if (options.markdownIt instanceof markdown_it_1.default || (((_b = (_a = options.markdownIt) === null || _a === void 0 ? void 0 : _a.constructor) === null || _b === void 0 ? void 0 : _b.name) === 'MarkdownIt')) {
            return options.markdownIt;
        }
        else if (typeof options.markdownIt === 'object') {
            return (0, markdown_it_1.default)(options.markdownIt);
        }
    }
    else if (options.markdown) {
        return { render: options.markdown };
    }
    return (0, markdown_it_1.default)({ html: true, xhtmlOut: (_c = options.mode) === null || _c === void 0 ? void 0 : _c.includes(Mode.REACT) }); // TODO: xhtmlOut should be got rid of in next major update
};
class ExportedContent {
    constructor() {
        _ExportedContent_exports.set(this, []);
        _ExportedContent_contextCode.set(this, '');
    }
    addContext(contextCode) {
        __classPrivateFieldSet(this, _ExportedContent_contextCode, __classPrivateFieldGet(this, _ExportedContent_contextCode, "f") + `${contextCode}\n`, "f");
    }
    addExporting(exported) {
        __classPrivateFieldGet(this, _ExportedContent_exports, "f").push(exported);
    }
    export() {
        return [__classPrivateFieldGet(this, _ExportedContent_contextCode, "f"), `export { ${__classPrivateFieldGet(this, _ExportedContent_exports, "f").join(', ')} }`].join('\n');
    }
}
_ExportedContent_exports = new WeakMap(), _ExportedContent_contextCode = new WeakMap();
const tf = (code, id, options) => {
    var _a, _b, _c, _d, _e;
    if (!id.endsWith('.md'))
        return null;
    const content = new ExportedContent();
    const fm = (0, front_matter_1.default)(code);
    content.addContext(`const attributes = ${JSON.stringify(fm.attributes)}`);
    content.addExporting('attributes');
    const html = markdownCompiler(options).render(fm.body);
    if ((_a = options.mode) === null || _a === void 0 ? void 0 : _a.includes(Mode.HTML)) {
        content.addContext(`const html = ${JSON.stringify(html)}`);
        content.addExporting('html');
    }
    if ((_b = options.mode) === null || _b === void 0 ? void 0 : _b.includes(Mode.MARKDOWN)) {
        content.addContext(`const markdown = ${JSON.stringify(fm.body)}`);
        content.addExporting('markdown');
    }
    if ((_c = options.mode) === null || _c === void 0 ? void 0 : _c.includes(Mode.TOC)) {
        const root = (0, htmlparser2_1.parseDOM)(html);
        const indicies = root.filter(rootSibling => rootSibling instanceof domhandler_1.Element && ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(rootSibling.tagName));
        const toc = indicies.map(index => ({
            level: index.tagName.replace('h', ''),
            content: htmlparser2_1.DomUtils.getInnerHTML(index),
        }));
        content.addContext(`const toc = ${JSON.stringify(toc)}`);
        content.addExporting('toc');
    }
    if ((_d = options.mode) === null || _d === void 0 ? void 0 : _d.includes(Mode.REACT)) {
        const root = (0, htmlparser2_1.parseDOM)(html, { lowerCaseTags: false });
        const subComponentNamespace = 'SubReactComponent';
        const markCodeAsPre = (node) => {
            var _a;
            if (node instanceof domhandler_1.Element) {
                if (node.tagName.match(/^[A-Z].+/)) {
                    node.tagName = `${subComponentNamespace}.${node.tagName}`;
                }
                if (['pre', 'code'].includes(node.tagName) && ((_a = node.attribs) === null || _a === void 0 ? void 0 : _a.class)) {
                    node.attribs.className = node.attribs.class;
                    delete node.attribs.class;
                }
                if (node.tagName === 'code') {
                    const codeContent = htmlparser2_1.DomUtils.getInnerHTML(node, { decodeEntities: true });
                    node.attribs.dangerouslySetInnerHTML = `vfm{{ __html: \`${codeContent.replace(/([\\`])/g, '\\$1')}\`}}vfm`;
                    node.childNodes = [];
                }
                if (node.childNodes.length > 0) {
                    node.childNodes.forEach(markCodeAsPre);
                }
            }
        };
        root.forEach(markCodeAsPre);
        const h = htmlparser2_1.DomUtils.getOuterHTML(root, { selfClosingTags: true }).replace(/"vfm{{/g, '{{').replace(/}}vfm"/g, '}}');
        const reactCode = `
      const markdown =
        <div>
          ${h}
        </div>
    `;
        const compiledReactCode = `
      function (props) {
        Object.keys(props).forEach(function (key) {
          SubReactComponent[key] = props[key]
        })
        ${require('@babel/core').transformSync(reactCode, { ast: false, presets: ['@babel/preset-react'] }).code}
        return markdown
      }
    `;
        content.addContext(`import React from "react"\nconst ${subComponentNamespace} = {}\nconst ReactComponent = ${compiledReactCode}`);
        content.addExporting('ReactComponent');
    }
    if ((_e = options.mode) === null || _e === void 0 ? void 0 : _e.includes(Mode.VUE)) {
        const root = (0, htmlparser2_1.parseDOM)(html);
        // Top-level <pre> tags become <pre v-pre>
        root.forEach((node) => {
            if (node instanceof domhandler_1.Element) {
                if (['pre', 'code'].includes(node.tagName)) {
                    node.attribs['v-pre'] = 'true';
                }
            }
        });
        // Any <code> tag becomes <code v-pre> excepting under `<pre>`
        const markCodeAsPre = (node) => {
            if (node instanceof domhandler_1.Element) {
                if (node.tagName === 'code')
                    node.attribs['v-pre'] = 'true';
                if (node.childNodes.length > 0)
                    node.childNodes.forEach(markCodeAsPre);
            }
        };
        root.forEach(markCodeAsPre);
        const { code: compiledVueCode } = require('@vue/compiler-sfc').compileTemplate({ source: htmlparser2_1.DomUtils.getOuterHTML(root, { decodeEntities: true }), filename: id, id });
        content.addContext(compiledVueCode.replace('\nexport function render(', '\nfunction vueRender(') + `\nconst VueComponent = { render: vueRender }\nVueComponent.__hmrId = ${JSON.stringify(id)}\nconst VueComponentWith = (components) => ({ components, render: vueRender })\n`);
        content.addExporting('VueComponent');
        content.addExporting('VueComponentWith');
    }
    return {
        code: content.export(),
    };
};
const plugin = (options = {}) => {
    return {
        name: 'vite-plugin-markdown',
        enforce: 'pre',
        transform(code, id) {
            return tf(code, id, options);
        },
    };
};
exports.plugin = plugin;
exports.default = exports.plugin;
exports.default = exports.plugin;
//# sourceMappingURL=index.js.map