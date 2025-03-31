# MasterHesse's Portfolio

一个现代化的响应式个人作品集网站，基于 Vue 3 和 Vite 构建。

## 🌟 特性

- 💻 响应式设计，完美适配各种设备
- 🎨 现代化 UI/UX 设计
- 🚀 基于 Vue 3 + Vite 构建，性能优异
- 📱 移动端优先的开发理念
- 🌓 支持深色/浅色模式
- 🔍 SEO 优化
- 📊 页面加载性能优化
- 🌍 国际化支持

## 🛠️ 技术栈

- Vue 3
- Vite
- Vue Router
- Tailwind CSS
- HeadlessUI
- Framer Motion
- Lucide Icons

## 📦 项目结构
```
portfolio/
├── public/
│ ├── favicon/
│ │ ├── favicon-16x16.png
│ │ ├── favicon-32x32.png
│ │ └── favicon-64x64.png
│ └── images/
│ └── logo.png
├── src/
│ ├── assets/
│ ├── components/
│ ├── layouts/
│ ├── router/
│ ├── styles/
│ ├── utils/
│ ├── views/
│ ├── App.vue
│ └── main.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```
## 🚀 快速开始

### 前置要求

- Node.js 16.0 或更高版本
- pnpm 7.0 或更高版本

### 安装

1. 克隆仓库
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. 安装依赖
```bash
pnpm install
启动开发服务器
```

3. 启动开发服务器 
```bash
pnpm dev
```

4. 构建生产版本
```bash
pnpm build
```

## 📝 配置说明
### 环境变量
创建 .env 文件：
```env
VITE_APP_TITLE=MasterHesse's Portfolio
VITE_APP_DESCRIPTION=Web Developer & Designer
```

### 自定义主题
修改 src/styles/variables.css：

```css
:root {
  --primary-color: #0984e3;
  --secondary-color: #00b894;
  --background-color: #ffffff;
  --text-color: #2d3436;
}

[data-theme="dark"] {
  --background-color: #2d3436;
  --text-color: #ffffff;
}
```

## 🔧 自定义配置
### Logo 设置
1. 替换 logo 文件：
- 将你的 logo 文件放在 public/images/ 目录下
- 支持 PNG 和 SVG 格式
2. 修改导航栏配置：
- 编辑 src/components/NavBar.vue
- 调整 logo 大小和位置
### 标题和图标
1. 修改网站标题：
- 编辑 index.html 中的 <title> 标签
- 更新 router/index.js 中的路由元信息
2. 更换图标：
- 替换 public/favicon/ 目录下的图标文件
- 建议提供多种尺寸（16x16, 32x32, 64x64）

## 📞 联系方式
Email: masterhesse@163.com
Blibili: 407512807

Built with ❤️ by MasterHesse
