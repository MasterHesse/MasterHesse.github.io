// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { plugin as markdownPlugin } from 'vite-plugin-markdown'; // 确保这里的导入方式正确

export default defineConfig({
  plugins: [
    vue(),
    markdownPlugin({ mode: ['html'] }) // 正确使用 markdownPlugin 而非 markdown
  ],
  base: '/MasterHesse.github.io/',
});
