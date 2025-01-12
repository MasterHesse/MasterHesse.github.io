<template>
    <main class="home">
      <!-- Hero Section -->
      <section class="hero">
        <div class="container hero__container">
          <div class="hero__content">
            <h1 class="hero__title" ref="titleRef">
              <span class="hero__greeting">Hello, I'm</span>
              <span class="hero__name">MasterHesse</span>
              <span class="hero__role">Full-Stack Developer</span>
            </h1>
            <p class="hero__description" ref="descriptionRef">
              专注于计算机科学领域，深耕后端开发与全栈技术。
              目前正在学习 Spring 生态系统、Vue.js 前端开发和 Rust 系统编程。
            </p>
            <div class="hero__cta" ref="ctaRef">
              <router-link to="/projects" class="hero__button">
                查看项目
              </router-link>
              <router-link to="/contact" class="hero__button hero__button--outline">
                联系我
              </router-link>
            </div>
          </div>
        </div>
        <div class="hero__scroll-indicator" @click="scrollToAbout">
          <div class="hero__scroll-arrow"></div>
        </div>
      </section>
  
      <!-- About Section -->
      <section class="about" ref="aboutRef">
        <div class="container about__container">
          <h2 class="about__title">关于这个网站</h2>
          <div class="about__grid">
            <div class="about__card" v-for="(feature, index) in features" :key="index">
              <div class="about__card-icon">{{ feature.icon }}</div>
              <h3 class="about__card-title">{{ feature.title }}</h3>
              <p class="about__card-description">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { gsap } from 'gsap'
  
  const titleRef = ref(null)
  const descriptionRef = ref(null)
  const ctaRef = ref(null)
  const aboutRef = ref(null)
  
  const features = [
    {
      icon: '🚀',
      title: '响应式设计',
      description: '完全响应式的设计确保在所有设备上都能完美展示'
    },
    {
      icon: '📝',
      title: '博客系统',
      description: '基于Markdown的博客系统，阐述我的最新想法'
    },
    {
      icon: '💼',
      title: '项目展示',
      description: '展示个人项目作品，给新手开发者提供一些思路'
    },
    {
      icon: '📬',
      title: '联系方式',
      description: '多种联系方式，让我们保持联系'
    }
  ]
  
  const scrollToAbout = () => {
    aboutRef.value.scrollIntoView({ behavior: 'smooth' })
  }
  
  onMounted(() => {
    // 入场动画
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    
    tl.from(titleRef.value.children, {
      y: '100%',
      opacity: 0,
      duration: 1,
      stagger: 0.2
    })
    .from(descriptionRef.value, {
      y: 20,
      opacity: 0,
      duration: 0.8
    }, '-=0.4')
    .from(ctaRef.value.children, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2
    }, '-=0.4')
  })
  </script>
  
  <style scoped>
  .home {
    overflow-x: hidden;
  }
  
  .hero {
    position: relative;
    min-height: 100vh;
    min-height: 100dvh;
    display: flex;
    align-items: center;
    background: var(--background-color);
  }
  
  .hero__container {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  
  .hero__content {
    max-width: min(100%, 50rem);
  }
  
  .hero__title {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    line-height: 1.2;
    margin-bottom: var(--spacing-unit);
    overflow: hidden;
  }
  
  .hero__greeting {
    font-size: clamp(1.2rem, calc(1rem + 1vw), 2rem);
    color: var(--secondary-color);
  }
  
  .hero__name {
    font-size: var(--heading-font-size);
    font-weight: 700;
  }
  
  .hero__role {
    font-size: clamp(1.5rem, calc(1rem + 2vw), 3rem);
  }
  
  .hero__description {
    font-size: var(--base-font-size);
    max-width: min(100%, 40rem);
    margin: 0 auto var(--spacing-unit);
    line-height: 1.8;
  }
  
  .hero__cta {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }
  
  .hero__button {
    padding: 0.8em 2em;
    font-size: var(--base-font-size);
    border-radius: 0.5rem;
    text-decoration: none;
    transition: all 0.3s ease;
    background-color: var(--secondary-color);
    color: white;
  }
  
  .hero__button--outline {
    background-color: transparent;
    border: 0.125rem solid var(--secondary-color);
    color: var(--secondary-color);
  }
  
  .hero__button:hover {
    transform: translateY(-0.25rem);
  }
  
  .hero__scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    animation: bounce 2s infinite;
  }
  
  .hero__scroll-arrow {
    width: 1.5rem;
    height: 1.5rem;
    border-right: 0.2rem solid var(--text-color);
    border-bottom: 0.2rem solid var(--text-color);
    transform: rotate(45deg);
  }
  
  .about {
    padding: calc(var(--spacing-unit) * 2) 0;
    background-color: color-mix(in srgb, var(--background-color) 95%, var(--secondary-color) 5%);
  }
  
  .about__title {
    text-align: center;
    font-size: clamp(2rem, calc(1.5rem + 2vw), 3.5rem);
    margin-bottom: calc(var(--spacing-unit) * 2);
  }
  
  .about__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr));
    gap: var(--spacing-unit);
  }
  
  .about__card {
    padding: var(--spacing-unit);
    border-radius: 1rem;
    background-color: var(--background-color);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .about__card:hover {
    transform: translateY(-0.5rem);
  }
  
  .about__card-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .about__card-title {
    font-size: calc(var(--base-font-size) * 1.2);
    margin-bottom: 0.5rem;
  }
  
  .about__card-description {
    font-size: var(--base-font-size);
    color: color-mix(in srgb, var(--text-color) 80%, transparent);
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0) translateX(-50%);
    }
    40% {
      transform: translateY(-30px) translateX(-50%);
    }
    60% {
      transform: translateY(-15px) translateX(-50%);
    }
  }
  
  @media (max-width: 48em) {
    .hero__cta {
      flex-direction: column;
    }
    
    .hero__button {
      width: 100%;
    }
  }
  </style>