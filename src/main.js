import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import router from './router'

// 导入全局样式
import './assets/styles/main.css'

const app = createApp(App)

// 错误处理
app.config.errorHandler = (err) => {
  console.error('Global error:', err)
}

// 注册路由
app.use(router)

// 挂载应用
app.mount('#app')

// 移除加载指示器（如果你在index.html中有的话）
const loader = document.querySelector('.loading-indicator')
if (loader) {
  loader.style.display = 'none'
}