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
            <span class="project-card__stat">
              <span class="project-card__stat-icon">
                {{ project.status === 'completed' ? '✅' : '🚧' }}
              </span>
              {{ getStatusText(project.status) }}
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
  
  const getStatusText = (status) => {
    return status === 'completed' ? '已完成' : '进行中'
  }
  
  defineEmits(['click'])
  </script>
  
  <style scoped>
  .project-card {
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    background-color: color-mix(in srgb, var(--background-color) 95%, var(--secondary-color) 5%);
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
  }
  
  .project-card__stat {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: calc(var(--base-font-size) * 0.9);
    color: color-mix(in srgb, var(--text-color) 70%, transparent);
  }
  
  .project-card__stat-icon {
    font-size: 1em;
  }
  
  .project-card__link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5em 1em;
    border-radius: 0.5rem;
    text-decoration: none;
    font-size: calc(var(--base-font-size) * 0.9);
    transition: all 0.3s ease;
    background-color: var(--secondary-color);
    color: white;
  }
  
  .project-card__link:hover {
    transform: translateY(-0.25rem);
    background-color: color-mix(in srgb, var(--secondary-color) 90%, black);
  }
  
  @media (max-width: 48em) {
    .project-card__footer {
      flex-direction: column;
      gap: 1rem;
    }
    
    .project-card__link {
      width: 100%;
      justify-content: center;
    }
  }
  </style>