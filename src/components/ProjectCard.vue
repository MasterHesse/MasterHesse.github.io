<template>
    <article 
      class="project-card"
      @click="$emit('click', project)"
    >
      <div class="project-card__content">
        <div class="project-card__header">
          <span class="project-card__category">{{ project.category }}</span>
          <h2 class="project-card__title">{{ project.title }}</h2>
        </div>
        
        <p class="project-card__description">{{ project.description }}</p>
        
        <div class="project-card__tags">
          <span 
            v-for="tag in project.tags" 
            :key="tag" 
            class="project-card__tag"
          >
            {{ tag }}
          </span>
        </div>
  
        <div class="project-card__footer">
          <div class="project-card__stats">
      <span class="project-card__stat">
        <span class="project-card__stat-icon">📅</span>
        {{ project.year }}
      </span>
      <span class="project-card__stat project-card__stat--status">
        <span class="project-card__stat-icon">
          {{ project.status === 'completed' ? '✅' : '🚧' }}
        </span>
        <span 
          class="project-card__status"
          :class="{ 'project-card__status--in-progress': project.status === 'in-progress' }"
        >
          {{ project.status === 'in-progress' ? '进行中' : '已完成' }}
        </span>
      </span>
    </div>
          
          <a 
            v-if="project.githubUrl"
            :href="project.githubUrl"
            class="project-card__link"
            target="_blank"
            @click.stop
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  </template>
  
  <script setup>
  const props = defineProps({
    project: {
      type: Object,
      required: true,
      validator: (project) => {
        return [
          'id',
          'title',
          'category',
          'description',
          'tags',
          'year',
          'status'
        ].every(key => key in project)
      }
    }
  })

  
  defineEmits(['click'])
  </script>
  
  <style scoped>
  .project-card {
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    background-color: rgba(30, 41, 59, 0.5);
    cursor: pointer;
    transition: all 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .project-card:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
  }
  
  .project-card__content {
    padding: var(--spacing-unit);
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .project-card__header {
    margin-bottom: 1rem;
  }
  
  .project-card__category {
    font-size: calc(var(--base-font-size) * 0.8);
    color: var(--secondary-color);
    margin-bottom: 0.5rem;
    display: block;
  }
  
  .project-card__title {
    font-size: calc(var(--base-font-size) * 1.2);
    margin-bottom: 0.5rem;
    line-height: 1.4;
    font-weight: 600;
  }
  
  .project-card__description {
    font-size: var(--base-font-size);
    margin-bottom: 1rem;
    color: color-mix(in srgb, var(--text-color) 80%, transparent);
    line-height: 1.6;
    flex-grow: 1;
  }
  
  .project-card__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .project-card__tag {
    font-size: calc(var(--base-font-size) * 0.8);
    padding: 0.25em 0.75em;
    background-color: color-mix(in srgb, var(--secondary-color) 15%, transparent);
    border-radius: 1rem;
    transition: background-color 0.3s ease;
  }
  
  .project-card__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    padding-top: 1rem;
    border-top: 0.0625rem solid color-mix(in srgb, var(--text-color) 10%, transparent);
  }
  
  .project-card__stats {
  display: flex;
  gap: 1rem;
  flex-wrap: nowrap; /* 防止换行 */
  min-width: 0; /* 允许子元素收缩 */
}

.project-card__stat {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: calc(var(--base-font-size) * 0.9);
  color: color-mix(in srgb, var(--text-color) 70%, transparent);
  white-space: nowrap; /* 防止文本换行 */
}

.project-card__stat--status {
  flex-shrink: 0; /* 防止状态标签被压缩 */
}

.project-card__status {
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  background-color: rgba(34, 197, 94, 0.2);
  color: #22c55e;
  white-space: nowrap; /* 防止文本换行 */
  display: inline-block; /* 确保标签保持在一行 */
}

.project-card__status--in-progress {
  background-color: rgba(245, 158, 11, 0.2);
  color: #f59e0b;
}

.project-card__link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5em 1em;
  border-radius: 0.5rem;
  text-decoration: none;
  font-size: calc(var(--base-font-size) * 0.9);
  transition: all 0.3s ease;
  background-color: var(--primary-color);
  color: white;
  border: none; /* 确保没有边框 */
  cursor: pointer; /* 保持指针样式 */
  font-weight: 500; /* 添加字重 */
  min-width: 5rem; /* 确保最小宽度 */
  text-align: center; /* 文字居中 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加阴影增加按钮感 */
}

.project-card__link:hover {
  transform: translateY(-0.25rem);
  background-color: color-mix(in srgb, var(--secondary-color) 90%, black);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); /* 悬浮时增加阴影 */
}

.project-card__link:active {
  transform: translateY(0); /* 点击时的效果 */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

@media (max-width: 48em) {
  .project-card__footer {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start; /* 在移动端左对齐 */
  }
  
  .project-card__stats {
    width: 100%;
    justify-content: space-between; /* 在移动端分散对齐 */
  }
  
  project-card__link {
    width: 100%;
    justify-content: center;
  }
}
  </style>