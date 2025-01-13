<template>
  <transition name="fade">
    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-container">
        <img 
          src="/images/loading.gif" 
          alt="Loading..."
          class="loading-gif"
        />
        <div class="loading-text">
          Loading<span class="dots"></span>
        </div>
      </div>
    </div>
  </transition>

  <NavBar />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import NavBar from './components/NavBar.vue'

const router = useRouter()
const isLoading = ref(false)

const handleRouteChange = async () => {
  const startTime = Date.now()
  isLoading.value = true
  
  // 等待路由组件加载完成
  try {
    await router.isReady()
  } catch (error) {
    console.error('Route loading error:', error)
  }

  // 确保最少显示 500ms
  const elapsedTime = Date.now() - startTime
  if (elapsedTime < 500) {
    await new Promise(resolve => setTimeout(resolve, 500 - elapsedTime))
  }
  
  isLoading.value = false
}

onMounted(() => {
  router.beforeEach(async (to, from, next) => {
    if (to.path !== from.path) {
      handleRouteChange()
    }
    next()
  })
})
</script>

<style>
@import './assets/styles/main.css';

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Loading 样式 */
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(26, 26, 26, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(5px);
}

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.loading-gif {
  max-width: 120px;
  height: auto;
  border-radius: 10px;
}

.loading-text {
  color: #ffffff;
  font-size: 1.75rem;
  font-weight: 700;
  font-family: "SF Pro Display", "Segoe UI", "Helvetica Neue", -apple-system, sans-serif;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
}

/* 点号动画 */
.dots::after {
  content: '.';
  animation: dots 0.8s steps(4, end) infinite;
  width: 1.5em;
  display: inline-block;
}

@keyframes dots {
  0%, 20% {
    content: '.';
  }
  40% {
    content: '..';
  }
  60%, 80% {
    content: '...';
  }
}

/* 响应式调整 */
@media (max-width: 768px) {
  .loading-gif {
    max-width: 80px;
  }
  
  .loading-text {
    font-size: 1.5rem;
  }
}

/* 深色模式适配 */
@media (prefers-color-scheme: dark) {
  .loading-overlay {
    background-color: rgba(26, 26, 26, 0.95);
  }
}
</style>