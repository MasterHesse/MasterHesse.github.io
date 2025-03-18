<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const status = ref('')
const loading = ref(false)
const confirmChecked = ref(false) // 添加确认复选框的状态

const handleSubmit = async (e) => {
  e.preventDefault()
  
  // 添加确认复选框的验证
  if (!confirmChecked.value) {
    status.value = 'error'
    return
  }
  
  loading.value = true
  
  try {
    const response = await fetch('https://formspree.io/f/mvggdwkp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData.value)
    })

    if (response.ok) {
      status.value = 'success'
      formData.value = { name: '', email: '', subject: '', message: '' }
      confirmChecked.value = false // 重置复选框
    } else {
      throw new Error('Failed to send message')
    }
  } catch (err) {
    status.value = 'error'
    console.error('Error sending message:', err)
  } finally {
    loading.value = false
    setTimeout(() => {
      status.value = ''
    }, 5000)
  }
}
</script>

<template>
  <form @submit="handleSubmit" class="contact-form">
    <div class="contact-form__group">
      <label for="name" class="contact-form__label">姓名</label>
      <input
        id="name"
        type="text"
        v-model="formData.name"
        required
        class="contact-form__input"
        placeholder="请输入你的姓名"
      />
    </div>

    <div class="contact-form__group">
      <label for="email" class="contact-form__label">邮箱</label>
      <input
        id="email"
        type="email"
        v-model="formData.email"
        required
        class="contact-form__input"
        placeholder="请输入你的邮箱"
      />
    </div>

    <div class="contact-form__group">
      <label for="subject" class="contact-form__label">主题</label>
      <input
        id="subject"
        type="text"
        v-model="formData.subject"
        required
        class="contact-form__input"
        placeholder="请输入主题"
      />
    </div>

    <div class="contact-form__group">
      <label for="message" class="contact-form__label">内容</label>
      <textarea
        id="message"
        v-model="formData.message"
        required
        class="contact-form__input contact-form__textarea"
        placeholder="请输入你想说的话"
        rows="5"
      ></textarea>
    </div>

        <!-- 添加确认复选框 -->
        <div class="contact-form__checkbox-group">
      <label class="contact-form__checkbox-label">
        <input
          type="checkbox"
          v-model="confirmChecked"
          required
          class="contact-form__checkbox"
        />
        <span class="contact-form__checkbox-text">
          我确认我已阅读过FAQ，且我的问题不在FAQ中
        </span>
      </label>
    </div>

    <div class="contact-form__footer">
      <button 
        type="submit" 
        class="contact-form__submit-btn"
        :disabled="loading"
      >
        {{ loading ? '发送中...' : '发送消息' }}
      </button>

      <p 
        v-if="status" 
        :class="[
          'contact-form__status',
          `contact-form__status--${status}`
        ]"
      >
        {{ status === 'success' ? '消息已发送！' : '发送失败，请重试。' }}
      </p>
    </div>
  </form>
</template>

<style scoped>
.contact-form {
  width: 100%;
  max-width: min(100%, 40rem);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-form__group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.contact-form__label {
  font-size: clamp(0.875rem, calc(0.8rem + 0.3vw), 1rem);
  color: var(--text-color);
}

.contact-form__input {
  width: 100%;
  padding: 0.75em 1em;
  font-size: clamp(0.875rem, calc(0.8rem + 0.3vw), 1rem);
  background-color: color-mix(in srgb, var(--text-color) 5%, transparent);
  border: 0.0625rem solid color-mix(in srgb, var(--text-color) 20%, transparent);
  border-radius: 0.5rem;
  color: var(--text-color);
  transition: all 0.3s ease;
}

.contact-form__input:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 0.125rem color-mix(in srgb, var(--accent-color) 30%, transparent);
}

.contact-form__textarea {
  resize: vertical;
  min-height: 8rem;
}

.contact-form__footer {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin-top: 1rem;
}

.contact-form__submit-btn {
  width: 100%;
  max-width: 20rem;
  padding: 1em 2em;
  font-size: clamp(1rem, calc(0.8rem + 0.3vw), 1.2rem);
  font-weight: 600;
  
  /* 渐变背景 */
  background: linear-gradient(
    135deg,
    #3b82f6 0%,
    #2563eb 100%
  );
  
  /* 文字颜色和阴影 */
  color: #ffffff;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  
  /* 边框和圆角 */
  border: none;
  border-radius: 0.5rem;
  
  /* 光效 */
  box-shadow: 
    0 0.25rem 1rem rgba(59, 130, 246, 0.3),
    0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
  
  /* 过渡效果 */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

/* 悬浮效果 */
.contact-form__submit-btn:hover {
  transform: translateY(-0.125rem);
  background: linear-gradient(
    135deg,
    #2563eb 0%,
    #1d4ed8 100%
  );
  box-shadow: 
    0 0.5rem 1.5rem rgba(59, 130, 246, 0.4),
    0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
}

/* 点击效果 */
/* .contact-form__submit-btn:active {
  transform: translateY(0);
  background: linear-gradient(
    135deg,
    #1d4ed8 0%,
    #1e40af 100%
  );
  box-shadow: 
    0 0.125rem 0.5rem rgba(59, 130, 246, 0.3),
    0 0.0625rem 0.125rem rgba(0, 0, 0, 0.1);
} */

/* 禁用状态 */
/* .contact-form__submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
  background: linear-gradient(
    135deg,
    #94a3b8 0%,
    #64748b 100%
  );
  box-shadow: none;
} */

/* 加载动画效果（当按钮处于加载状态时） */
.contact-form__submit-btn[data-loading="true"] {
  background-size: 200% 200%;
  animation: gradient-animation 2s ease infinite;
}

@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.contact-form__submit-btn:hover {
  transform: translateY(-0.125rem);
  box-shadow: 0 0.5rem 1.5rem color-mix(in srgb, var(--accent-color) 40%, transparent);
}

.contact-form__submit-btn:active {
  transform: translateY(0);
  box-shadow: 0 0.125rem 0.5rem color-mix(in srgb, var(--accent-color) 20%, transparent);
}

.contact-form__submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.contact-form__status {
  font-size: clamp(0.875rem, calc(0.8rem + 0.3vw), 1rem);
  text-align: center;
  padding: 0.75em 1.5em;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 20rem;
}

.contact-form__status--success {
  background-color: color-mix(in srgb, #22c55e 15%, transparent);
  color: #22c55e;
}

.contact-form__status--error {
  background-color: color-mix(in srgb, #ef4444 15%, transparent);
  color: #ef4444;
}

.contact-form__checkbox-group {
  margin-top: 0.5rem;
}

.contact-form__checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  cursor: pointer;
}

.contact-form__checkbox {
  margin-top: 0.25rem;
  width: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
  border: 0.125rem solid var(--primary-color);
  appearance: none;
  background-color: transparent;
  cursor: pointer;
  position: relative;
  flex-shrink: 0;
}

.contact-form__checkbox:checked {
  background-color: var(--accent-color);
  border-color: var(--accent-color);
}

.contact-form__checkbox:checked::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0.5rem;
  height: 0.5rem;
  background-color: var(--text-color); /* 正方形颜色 */
  border-radius: 0.125rem; /* 圆角，使边缘缓和 */
}

/* .contact-form__checkbox:focus {
  outline: none;
  box-shadow: 0 0 0 0.125rem rgba(59, 130, 246, 0.5);
} */

.contact-form__checkbox-text {
  font-size: 0.875rem;
  color: var(--text-color);
  line-height: 1.5;
}

</style>