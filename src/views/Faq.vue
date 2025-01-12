<template>
    <main class="faq">
      <div class="container faq__container">
        <header class="faq__header">
          <h1 class="faq__title">常见问题</h1>
          <p class="faq__subtitle">这里整理了一些经常被问到的问题</p>
        </header>
  
        <div class="faq__content">
          <FaqItem
            v-for="faq in faqs"
            :key="faq.id"
            :question="faq.question"
            :answer="faq.answer"
          />
        </div>
      </div>
    </main>
  </template>
  
  <script setup>
  import FaqItem from '../components/FaqItem.vue'
  
  const faqs = [
    {
      id: 1,
      question: "你的技术栈是什么？",
      answer: "主要技术栈包括：前端（Vue3 + Vite、TypeScript）、后端（Spring Framework 及其生态系统）和系统编程（Rust）。持续关注技术发展，不断学习和实践新技术。"
    },
    {
      id: 2,
      question: "如何联系你？",
      answer: "你可以通过我的GitHub、Outlook邮箱或者Bilibili私信与我取得联系。我会尽快回复你的消息。具体联系方式可以在网站底部找到。"
    },
    {
      id: 3,
      question: "你接受远程工作吗？",
      answer: "是的，我接受远程工作。我有良好的远程协作经验，能够有效地进行线上沟通和团队协作。"
    },
    {
      id: 4,
      question: "你会持续更新个人网站吗？",
      answer: "是的，我会定期更新网站内容，包括新的项目展示、技术博客等。同时也会不断优化网站的用户体验和性能。"
    },
    {
      id: 5,
      question: "可以查看你的源代码吗？",
      answer: "当然可以，我的大部分项目都开源在GitHub上，包括这个个人网站。你可以通过GitHub链接查看源代码，也欢迎提出建议和贡献代码。"
    }
  ]
  </script>
  
  <style scoped>
  .faq {
    min-height: 100vh;
    min-height: 100dvh;
    padding-top: var(--navbar-height);
    background-color: var(--background-color);
  }
  
  .faq__container {
    padding: var(--spacing-unit);
    max-width: min(90%, 50rem);
    margin: 0 auto;
  }
  
  .faq__header {
    text-align: center;
    margin-bottom: calc(var(--spacing-unit) * 2);
  }
  
  .faq__title {
    font-size: clamp(2rem, calc(7vw + 1rem), 4rem);
    margin-bottom: 1rem;
    color: var(--text-color);
  }
  
  .faq__subtitle {
    font-size: clamp(1rem, calc(0.8rem + 0.5vw), 1.2rem);
    color: color-mix(in srgb, var(--text-color) 70%, transparent);
  }
  
  .faq__content {
    background-color: color-mix(in srgb, var(--background-color) 95%, var(--secondary-color) 5%);
    border-radius: 1rem;
    padding: 1rem;
  }
  
  @media (min-width: 48em) {
    .faq__content {
      padding: 2rem;
    }
  }
  </style>
