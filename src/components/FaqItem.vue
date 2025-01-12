<template>
    <div class="faq-item">
      <button 
        class="faq-item__header"
        @click="isOpen = !isOpen"
        :aria-expanded="isOpen"
      >
        <h3 class="faq-item__question">{{ question }}</h3>
        <span 
          class="faq-item__icon"
          :class="{ 'faq-item__icon--open': isOpen }"
        >
          ＋
        </span>
      </button>
      
      <div 
        class="faq-item__content"
        :class="{ 'faq-item__content--open': isOpen }"
      >
        <p class="faq-item__answer">{{ answer }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  defineProps({
    question: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
    }
  })
  
  const isOpen = ref(false)
  </script>
  
  <style scoped>
  .faq-item {
    border-bottom: 0.0625rem solid color-mix(in srgb, var(--text-color) 10%, transparent);
  }
  
  .faq-item__header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 0;
    background: transparent;
    border: none;
    cursor: pointer;
    text-align: left;
    color: var(--text-color);
  }
  
  .faq-item__question {
    font-size: clamp(1rem, calc(0.9rem + 0.5vw), 1.25rem);
    font-weight: 500;
    margin: 0;
    padding-right: 2rem;
  }
  
  .faq-item__icon {
    font-size: 1.5rem;
    transition: transform 0.3s ease;
    flex-shrink: 0;
  }
  
  .faq-item__icon--open {
    transform: rotate(45deg);
  }
  
  .faq-item__content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
  }
  
  .faq-item__content--open {
    max-height: 25rem;
  }
  
  .faq-item__answer {
    padding: 0 0 1.5rem;
    margin: 0;
    font-size: clamp(0.875rem, calc(0.8rem + 0.4vw), 1rem);
    line-height: 1.6;
    color: color-mix(in srgb, var(--text-color) 80%, transparent);
  }
  </style>