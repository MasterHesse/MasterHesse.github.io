<template>
    <transition name="fade">
      <div v-if="show" class="loading-overlay">
        <img 
          src="/images/loading.gif" 
          alt="Loading..."
          class="loading-gif"
        />
      </div>
    </transition>
  </template>
  
  <script setup>
  defineProps({
    show: {
      type: Boolean,
      default: false
    }
  })
  </script>
  
  <style scoped>
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
  
  .loading-gif {
    max-width: 120px;
    height: auto;
    border-radius: 10px;
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  
  @media (prefers-color-scheme: dark) {
    .loading-overlay {
      background-color: rgba(26, 26, 26, 0.95);
    }
  }
  </style>