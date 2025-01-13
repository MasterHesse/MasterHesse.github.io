<script setup>
import ContactForm from '../components/ContactForm.vue'
import { ref } from 'vue'

// 跟踪哪个链接刚刚被复制
const copiedStates = ref({})

const copyToClipboard = async (text, linkName) => {
  try {
    await navigator.clipboard.writeText(text)
    // 设置复制状态
    copiedStates.value[linkName] = true
    // 1.5秒后重置状态
    setTimeout(() => {
      copiedStates.value[linkName] = false
    }, 1500)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}

const links = [
  {
    name: 'Bilibili',
    url: 'https://space.bilibili.com/407512807',
    copyText: 'space.bilibili.com/407512807',
    icon: `<path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906L17.813 4.653zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773H5.333zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z"/>`,
    fill: 'currentColor',
    stroke: 'none'
  },
  {
    name: 'Outlook email',
    url: 'mailto:mackenzieyip@outlook.com',
    copyText: 'mackenzieyip@outlook.com',
    icon: `<path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2m20 0l-10 7L2 6m20 0v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6" />`,
    fill: 'none',
    stroke: 'currentColor'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/masterhesse',
    copyText: 'github.com/masterhesse',
    icon: `<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />`,
    fill: 'none',
    stroke: 'currentColor'
  }
]
</script>

<template>
  <main class="contact">
    <div class="contact__container">
      <header class="contact__header">
        <h1 class="contact__title">联系我</h1>
        <p class="contact__subtitle">
          有任何问题或建议？欢迎随时联系我
        </p>
      </header>

      <div class="contact__content">
        <section class="contact__info">
          <h2 class="contact__info-title">联系方式</h2>
          
          <ul class="contact__links">
      <li v-for="link in links" :key="link.name" class="contact__link-item">
        <div class="contact__link-wrapper">
          <a 
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="contact__link"
          >
            <svg 
              class="contact__link-icon" 
              viewBox="0 0 24 24" 
              :fill="link.fill"
              :stroke="link.stroke"
              stroke-width="2"
              v-html="link.icon"
            />
            <span>{{ link.name }}</span>
          </a>
          <button 
            class="contact__copy-btn"
            @click="copyToClipboard(link.copyText, link.name)"
            :class="{ 'contact__copy-btn--copied': copiedStates[link.name] }"
            :title="copiedStates[link.name] ? '已复制！' : '复制链接'"
          >
            <svg 
              v-if="!copiedStates[link.name]"
              class="contact__copy-icon" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2"
            >
              <path d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 4a2 2 0 002 2h2a2 2 0 002-2M8 4a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
            <svg
              v-else
              class="contact__copy-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span class="contact__copy-text" :class="{ 'contact__copy-text--visible': copiedStates[link.name] }">
              已复制
            </span>
          </button>
        </div>
      </li>
    </ul>
        </section>

        <section class="contact__form-section">
          <h2 class="contact__form-title">发送消息</h2>
          <ContactForm />
        </section>
      </div>
    </div>
  </main>
</template>

<style scoped>
.contact {
  min-height: 100vh;
  min-height: 100dvh;
  padding-top: var(--navbar-height);
  background-color: var(--background-color);
}

.contact__container {
  padding: clamp(1rem, 5vw, 3rem);
  max-width: min(90%, 75rem);
  margin: 0 auto;
}

.contact__header {
  text-align: center;
  margin-bottom: clamp(2rem, 5vw, 4rem);
}

.contact__title {
  font-size: clamp(2rem, calc(7vw + 1rem), 4rem);
  margin-bottom: 1rem;
  color: var(--text-color);
}

.contact__subtitle {
  font-size: clamp(1rem, calc(0.8rem + 0.5vw), 1.2rem);
  color: color-mix(in srgb, var(--text-color) 70%, transparent);
}

.contact__content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 20rem), 1fr));
  gap: clamp(2rem, 5vw, 4rem);
  align-items: start;
}

.contact__info,
.contact__form-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact__info-title,
.contact__form-title {
  font-size: clamp(1.25rem, calc(0.8rem + 1vw), 1.5rem);
  color: var(--text-color);
}

.contact__links {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact__link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-color);
  text-decoration: none;
  font-size: clamp(0.875rem, calc(0.8rem + 0.3vw), 1rem);
  transition: all 0.3s ease;
}

.contact__link:hover {
  color: var(--accent-color);
}

.contact__link-icon {
  width: 1.5em;
  height: 1.5em;
  flex-shrink: 0;
}

.contact__link-wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
}

.contact__copy-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border: none;
  background: transparent;
  color: var(--text-color);
  opacity: 0.7;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 0.25rem;
}

.contact__copy-btn:hover {
  opacity: 1;
  background-color: color-mix(in srgb, var(--text-color) 10%, transparent);
}

.contact__copy-btn--copied {
  color: #22c55e;
  opacity: 1;
  background-color: rgba(34, 197, 94, 0.1);
}

.contact__copy-icon {
  width: 1.25em;
  height: 1.25em;
}

.contact__copy-text {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(calc(100% + 0.5rem), -50%);
  font-size: 0.875rem;
  background-color: var(--background-color);
  color: var(--text-color);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: all 0.2s ease;
}

.contact__copy-text--visible {
  opacity: 1;
  transform: translate(calc(100% + 1rem), -50%);
}

@media (max-width: 48em) {
  .contact__content {
    grid-template-columns: 1fr;
  }
  
  .contact__info {
    text-align: center;
  }
  
  .contact__link {
    justify-content: center;
  }

  .contact__link-wrapper {
    justify-content: center;
  }
  
  .contact__copy-btn {
    padding: 0.5rem;
  }

  .contact__copy-text {
    position: fixed;
    bottom: 2rem;
    right: 50%;
    top: auto;
    transform: translateX(50%) translateY(1rem);
    background-color: #000;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    font-size: 0.875rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .contact__copy-text--visible {
    transform: translateX(50%) translateY(0);
  }
}
</style>

