<template>
    <div class="not-found">
      <div class="container not-found__container">
        <h1 class="not-found__title">404</h1>
        <p class="not-found__text">页面未找到</p>
        <router-link to="/" class="not-found__link">
          返回首页
        </router-link>
      </div>
    </div>
  </template>
  
  <style scoped>
  .not-found {
    min-height: 100vh;
    min-height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  
  .not-found__container {
    padding: var(--spacing-unit);
  }
  
  .not-found__title {
    font-size: var(--heading-font-size);
    color: var(--secondary-color);
    margin-bottom: 1rem;
  }
  
  .not-found__text {
    font-size: var(--base-font-size);
    margin-bottom: 2rem;
  }
  
  .not-found__link {
    display: inline-block;
    padding: 0.8em 2em;
    background-color: var(--secondary-color);
    color: white;
    text-decoration: none;
    border-radius: 0.5rem;
    transition: transform 0.3s ease;
  }
  
  .not-found__link:hover {
    transform: translateY(-0.25rem);
  }
  </style>