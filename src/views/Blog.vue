<script setup>
import { ref, computed, onMounted } from 'vue'
import BlogPreview from '../components/BlogPreview.vue'  // 修正导入路径


const categories = ['全部', '前端', '后端', '全栈', '系统', '其它']
const currentCategory = ref('全部')
const searchQuery = ref('')
const blogs = ref([])

const fetchBlogs = async () => {
  try {
    const response = await fetch('/blogs/index.json')
    const data = await response.json()
    blogs.value = data.blogs
  } catch (err) {
    console.error('Error loading blog index:', err)
  }
}

// 博客筛选和搜索
const filteredAndSearchedBlogs = computed(() => {
  let result = blogs.value

  // 分类筛选
  if (currentCategory.value !== '全部') {
    result = result.filter(blog => blog.category === currentCategory.value)
  }

  // 搜索筛选
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(blog => 
      blog.title.toLowerCase().includes(query) ||
      blog.excerpt.toLowerCase().includes(query) ||
      blog.tags.some(tag => tag.toLowerCase().includes(query))
    )
  }

  return result.sort((a, b) => new Date(b.date) - new Date(a.date))
})

onMounted(() => {
  fetchBlogs()
})
</script>

<template>
  <main class="blog">
    <div class="container blog__container">
      <header class="blog__header">
        <h1 class="blog__title">博客文章</h1>
        <p class="blog__subtitle">分享我的技术见解和学习心得</p>
      </header>

      <!-- 博客筛选器 -->
      <div class="blog__filters">
        <div class="blog__categories">
          <button 
            v-for="category in categories" 
            :key="category"
            :class="['blog__category-btn', { 'active': currentCategory === category }]"
            @click="currentCategory = category"
          >
            {{ category }}
          </button>
        </div>

        <div class="blog__search">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="搜索文章..."
            class="blog__search-input"
          />
        </div>
      </div>

      <!-- 加载状态 -->
      <div v-if="loading" class="blog__loading">
        加载中...
      </div>

      <!-- 错误状态 -->
      <div v-else-if="error" class="blog__error">
        {{ error }}
      </div>

      <!-- 博客列表 -->
      <div v-else class="blog__grid">
        <BlogPreview
          v-for="blog in filteredAndSearchedBlogs"
          :key="blog.slug"
          :blog="blog"
        />
        
        <!-- 无结果提示 -->
        <div v-if="filteredAndSearchedBlogs.length === 0" class="blog__no-results">
          <p>没有找到匹配的文章</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.blog {
  min-height: 100vh;
  min-height: 100dvh;
  padding-top: var(--navbar-height);
  background-color: var(--background-color);
}

.blog__container {
  padding: clamp(1rem, 5vw, 3rem);
  max-width: min(90%, 75rem);
  margin: 0 auto;
}

.blog__header {
  text-align: center;
  margin-bottom: clamp(2rem, 5vw, 4rem);
}

.blog__title {
  font-size: clamp(2rem, calc(7vw + 1rem), 4rem);
  margin-bottom: 1rem;
  color: var(--text-color);
}

.blog__subtitle {
  font-size: clamp(1rem, calc(0.8rem + 0.5vw), 1.2rem);
  color: color-mix(in srgb, var(--text-color) 70%, transparent);
}

.blog__filters {
  margin-bottom: clamp(2rem, 5vw, 3rem);
}

.blog__categories {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.blog__category-btn {
  font-size: var(--base-font-size);
    padding: 0.5em 1em;
    border: none;
    background: transparent;
    color: var(--text-color);
    cursor: pointer;
    border-radius: 2rem;
    transition: all 0.3s ease;
}

.blog__category-btn.active {
  background-color: var(--secondary-color);
  color: white;
}

.blog__search {
  max-width: min(100%, 30rem);
  margin: 0 auto;
}

.blog__search-input {
  width: 100%;
  padding: 0.8em 1.2em;
  font-size: clamp(0.875rem, calc(0.8rem + 0.3vw), 1rem);
  border: 0.0625rem solid color-mix(in srgb, var(--text-color) 20%, transparent);
  border-radius: 2rem;
  background-color: transparent;
  color: var(--text-color);
  transition: all 0.3s ease;
}

.blog__search-input:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 0.125rem color-mix(in srgb, var(--accent-color) 30%, transparent);
}

.blog__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 20rem), 1fr));
  gap: clamp(1rem, 3vw, 2rem);
}

.blog__loading,
.blog__error,
.blog__no-results {
  text-align: center;
  padding: clamp(2rem, 5vw, 4rem);
  color: color-mix(in srgb, var(--text-color) 70%, transparent);
  font-size: clamp(1rem, calc(0.8rem + 0.5vw), 1.2rem);
}

.blog__error {
  color: #ef4444;
}

@media (max-width: 48em) {
  .blog__filters {
    flex-direction: column;
  }
  
  .blog__categories {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>