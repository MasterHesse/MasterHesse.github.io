<template>
  <nav :class="['navbar', { 'navbar--scrolled': scrolled }]">
    <div class="navbar__container">
      <!-- Logo 部分 -->
      <router-link to="/" class="navbar__logo">
        <img 
          src="/images/logo.png"

          alt="MasterHesse Logo" 
          class="logo"
        />
        <span class="logo-text">MasterHesse</span>
      </router-link>

      <!-- 导航菜单 -->
      <div class="navbar__menu">
        <router-link to="/" class="navbar__link">Home</router-link>
        <router-link to="/projects" class="navbar__link">Projects</router-link>
        <router-link to="/blog" class="navbar__link">Blog</router-link>
        <router-link to="/contact" class="navbar__link">Contact</router-link>
        <router-link to="/faq" class="navbar__link">FAQ</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--navbar-height);
  background: transparent;
  transition: all 0.3s ease;
  z-index: 1000;
}

.navbar--scrolled {
  background-color: var(--background-color);
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
}

.navbar__container {
  max-width: var(--container-width);
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--spacing-unit);
}

.navbar__logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--text-color);
  gap: 0.5rem;
}

.logo {
  height: 30px;
  width: auto;
  transition: transform 0.3s ease;
  /* 确保图片渲染清晰 */
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}

.logo-text {
  font-family: 'Arial Black', Gadget, sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--text-color);
  transition: color 0.3s ease;
}

.navbar__menu {
  display: flex;
  gap: calc(var(--spacing-unit) / 2);
}

.navbar__link {
  color: var(--text-color);
  text-decoration: none;
  font-size: var(--base-font-size);
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}

.navbar__link:hover {
  color: var(--secondary-color);
  background-color: var(--background-color-light);
}

.navbar__link.router-link-active {
  background-color: var(--secondary-color);
  color: white;
}

.navbar__logo:hover .logo {
  transform: scale(1.05);
}

.navbar__logo:hover .logo-text {
  color: var(--secondary-color);
}

/* 响应式设计 */
@media (max-width: 48em) {
  .navbar__menu {
    display: none;
  }
  
  .logo-text {
    display: none;
  }
  
  .logo {
    height: 25px;
  }
}
</style>