<template>
  <div class="post">
    <h1>Blog Posts</h1>
    <div class="text-background custom-style">
      <ul class="post-list">
        <li v-for="post in posts" :key="post.title" class="post-item">
          <router-link :to="`/blog/${post.id}`">{{ post.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const posts = ref([]);

onMounted(async () => {
  try {
    const modules = import.meta.glob('../posts/*.md');
    for (const path in modules) {
      const module = await modules[path]();
      const title = module.metadata?.title || path.split('/').pop().replace('.md', '');
      posts.value.push({ id: title, title, content: module.default });
    }
  } catch (error) {
    console.error('Failed to load posts:', error);
  }
});
</script>

<style scoped>
.post {
  display: flex;
  flex-direction: column;
  align-items: center; /* 垂直居中对齐 */

  color: #092a2a;
  font-size: 30px;
  margin-top: 60px;
  padding: 20px;
  max-width: 800px;
  height: 100vh; /* 如果需要可以调整 */
}

.text-background.custom-style {
  width: 200%; /* 可以根据需要设置宽度 */
}

.post-list {
  text-align: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

.post-item {
  margin: 10px 0;
  padding: 15px;
  background-color: #f1cd17;
  border: 1px solid #ffffff;
  border-radius: 5px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.post-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.post-item a {
  font-weight: bold;
  font-size: 1.1em;
  color: #030303;
}
</style>
