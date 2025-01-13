<template>
  <article class="blog-card">
    <div class="blog-card__content">
      <!-- 分类标签 -->
      <div class="blog-card__category">
        {{ blog.category }}
      </div>

      <!-- 标题和日期 -->
      <h3 class="blog-card__title">{{ blog.title }}</h3>
      <div class="blog-card__subtitle">{{ blog.subtitle }}</div>
      
      <!-- 标签列表 -->
      <div class="blog-card__tags">
        <span 
          v-for="tag in blog.tags" 
          :key="tag" 
          class="blog-card__tag"
        >
          {{ tag }}
        </span>
      </div>

      <!-- 描述 -->
      <p class="blog-card__description">{{ blog.description }}</p>

      <!-- 底部状态栏 -->
      <div class="blog-card__footer">
            <div class="blog-card__meta">
              <span class="blog-card__icon">{{ blog.status === 'completed' ? '✅' : '🚧' }}</span>
              <span 
                class="blog-card__status"
                :class="{ 'blog-card__status--in-progress': blog.status === 'in-progress' }"
              >
                {{ blog.status === 'in-progress' ? '进行中' : '已完成' }}
              </span>
            </div>

            <!-- Read按钮 -->
            <router-link 
              :to="`/blog/${blog.id}`"
              class="blog-card__button"
            >
              Read
            </router-link>
          </div>
    </div>
  </article>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  blog: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.blog-card {
  background-color: rgba(30, 41, 59, 0.5);
  border-radius: 1rem;
  overflow: hidden;
  height: 100%;
  transition: transform 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.blog-card:hover {
  transform: translateY(-4px);
}

.blog-card__content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.blog-card__category {
  font-size: 0.875rem;
  color: #3b82f6;
  margin-bottom: 1rem;
}

.blog-card__title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.blog-card__subtitle {
  color: #94a3b8;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.blog-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.blog-card__tag {
  background-color: rgba(255, 255, 255, 0.1);
  color: #e2e8f0;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
}

.blog-card__description {
  color: #94a3b8;
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.blog-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.blog-card__meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.blog-card__year {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #94a3b8;
  font-size: 0.875rem;
}

.blog-card__icon {
  font-size: 1rem;
}

.blog-card__status {
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  background-color: rgba(34, 197, 94, 0.2);
  color: #22c55e;
}

.blog-card__status--in-progress {
  background-color: rgba(245, 158, 11, 0.2);
  color: #f59e0b;
}

.blog-card__button {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: white;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.blog-card__button:hover {
  transform: translateY(-0.25rem);
  background-color: color-mix(in srgb, var(--primary-color) 90%, black);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); /* 悬浮时增加阴影 */
}

.blog-card:active{
  transform: translateY(0); /* 点击时的效果 */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
</style>