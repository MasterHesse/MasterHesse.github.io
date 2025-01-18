<template>
    <!-- 添加一个包装容器 -->
    <div class="blog-post-wrapper">
  <article class="blog-post" v-if="post">
    <header class="blog-post__header">
      <h1 class="blog-post__title">{{ post.title }}</h1>
      
      <div class="blog-post__meta">
        <div class="blog-post__tags">
          <span class="blog-post__category">{{ post.category }}</span>
          <span 
            v-for="tag in post.tags" 
            :key="tag" 
            class="blog-post__tag"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </header>

    <div 
      class="blog-post__content markdown-body" 
      v-html="renderedContent"
    ></div>

    <footer class="blog-post__footer">
        <!-- 修改返回按钮，添加点击事件 -->
        <router-link 
          to="/blog" 
          class="blog-post__back"
          @click="handleReturn"
        >
          返回列表
        </router-link>
      </footer>
  </article>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'

const route = useRoute()
const post = ref(null)
const renderedContent = ref('')
// 返回按钮处理函数
const handleReturn = () => {
  // 方法1：使用路由导航带重载
  // router.push('/blog').then(() => {
  //   window.location.reload()
  // })

  // 或者方法2：直接替换当前页面
  window.location.href = '/blog'
}

const fetchBlogData = async () => {
  try {
    // 1. 获取博客索引
    const indexResponse = await fetch('/blogs/index.json')
    if (!indexResponse.ok) throw new Error('Failed to fetch blog index')
    const data = await indexResponse.json()
    
    // 2. 找到当前博客
    const currentBlog = data.blogs.find(blog => blog.id === route.params.id)
    if (!currentBlog) throw new Error('Blog not found')
    
    post.value = currentBlog
    
    // 3. 获取博客内容
    const contentResponse = await fetch(currentBlog.path)
    if (!contentResponse.ok) throw new Error('Failed to fetch blog content')
    const content = await contentResponse.text()
    
    // 4. 渲染 Markdown
    renderedContent.value = marked(content)
  } catch (error) {
    console.error('Error loading blog:', error)
  }
}

onMounted(() => {
  fetchBlogData()
})
</script>

<style scoped>
/* 添加包装容器样式，处理顶部间距 */
.blog-post-wrapper {
  padding-top: calc(var(--navbar-height) + 2rem); /* 导航栏高度 + 额外间距 */
  min-height: 100vh;
  min-height: 100dvh;
  background-color: var(--background-color);
}

.blog-post {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: var(--background-color-light);
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.blog-post__header {
  margin-bottom: 3rem;
}

.blog-post__title {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #002569;
  font-family: Arial Black, Gadget, sans-serif; /* 标题使用衬线字体 */
  font-weight: 700;
  line-height: 1.2;
}

.blog-post__meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.blog-post__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.blog-post__category {
  background-color: transparent; /* 移除背景色 */
  color: #f97316; /* 橙色文字 */
  padding: 0.4rem 1rem;
  border-radius: 2rem;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  border: 2px solid #c2410c; /* 深橙色边框 */
  transition: all 0.3s ease;
}

.blog-post__category:hover {
  background-color: rgba(194, 65, 12, 0.1); /* 淡深橙色背景 */
}

.blog-post__tag {
  background-color: transparent;
  color: #3b82f6; /* 蓝色文字 */
  padding: 0.4rem 1rem;
  border-radius: 2rem;
  font-size: 0.9rem;
  border: 2px solid #1d4ed8; /* 深蓝色边框 */
  transition: all 0.3s ease;
}

.blog-post__tag:hover {
  background-color: rgba(29, 78, 216, 0.1); /* 淡深蓝色背景 */
}

.blog-post__content {
  margin: 2rem 0;
  line-height: 1.8;
  /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;  */
  font-size: 1.1rem;
  color: #002569;
}

.blog-post__footer {
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
}

.blog-post__back {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: var(--secondary-color);
  color: white;
  text-decoration: none;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.blog-post__back:hover {
  background-color: var(--primary-color-dark);
}
</style>

<style>
/* GitHub Markdown 样式覆盖 */
.markdown-body {
  color: #002569 !important;
  background-color: transparent !important;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, sans-serif !important;
}

.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4,
.markdown-body h5,
.markdown-body h6 {
  /* font-family: 'Playfair Display', serif !important; */
  color: var(--text-color) !important;
  margin-top: 2em !important;
  margin-bottom: 1em !important;
}

.markdown-body pre {
  background-color: var(--code-background) !important;
  border-radius: 0.5rem !important;
  padding: 1rem !important;
}

.markdown-body code {
  color: var(--code-color) !important;
  background-color: var(--code-background) !important;
  border-radius: 0.3rem !important;
  padding: 0.2em 0.4em !important;
}

.markdown-body a {
  color: var(--link-color) !important;
  text-decoration: none !important;
  border-bottom: 1px solid var(--link-color) !important;
}

.markdown-body a:hover {
  border-bottom-width: 2px !important;
}

.markdown-body img {
  max-width: 100%;
  height: auto;
  border-radius: 0.5rem;
  margin: 1.5rem 0;
}

.markdown-body blockquote {
  border-left: 4px solid var(--primary-color) !important;
  color: var(--text-color-light) !important;
  margin: 1.5rem 0 !important;
  padding: 0.5rem 1rem !important;
  background-color: var(--background-color-light) !important;
}

.markdown-body ul,
.markdown-body ol {
  padding-left: 1.5rem !important;
}

.markdown-body li + li {
  margin-top: 0.5rem !important;
}

.markdown-body table {
  border-collapse: collapse !important;
  width: 100% !important;
  margin: 1.5rem 0 !important;
}

.markdown-body th,
.markdown-body td {
  border: 1px solid var(--border-color) !important;
  padding: 0.75rem !important;
}

.markdown-body th {
  background-color: var(--background-color-light) !important;
}
</style>