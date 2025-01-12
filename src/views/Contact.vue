<script setup>
import ContactForm from '../components/ContactForm.vue'
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
            <li class="contact__link-item">
                <a 
                href="https://space.bilibili.com/407512807"
                target="_blank"
                rel="noopener noreferrer"
                class="contact__link"
                >
                <svg 
                    class="contact__link-icon" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    stroke="none"
                >
                    <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906L17.813 4.653zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773H5.333zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z"/>
                </svg>
                <span>Bilibili</span>
                </a>
            </li>

            <li class="contact__link-item">
              <a 
                href="mailto:mackenzieyip@outlook.com"
                class="contact__link"
              >
                <svg class="contact__link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2m20 0l-10 7L2 6m20 0v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6" />
                </svg>
                <span>Outlook email</span>
              </a>
            </li>
            
            <li class="contact__link-item">
              <a 
                href="https://github.com/masterhesse"
                target="_blank"
                rel="noopener noreferrer"
                class="contact__link"
              >
                <svg class="contact__link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                <span>GitHub</span>
              </a>
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
}
</style>