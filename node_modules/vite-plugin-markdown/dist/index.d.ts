import MarkdownIt from 'markdown-it';
import { Plugin } from 'vite';
export declare enum Mode {
    TOC = "toc",
    HTML = "html",
    REACT = "react",
    VUE = "vue",
    MARKDOWN = "markdown"
}
export interface PluginOptions {
    mode?: Mode[];
    markdown?: (body: string) => string;
    markdownIt?: MarkdownIt | MarkdownIt.Options;
}
export declare const plugin: (options?: PluginOptions) => Plugin;
export default plugin;
