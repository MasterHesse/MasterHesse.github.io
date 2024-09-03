<template>
  <div className="blog-content markdown-body">
    <router-link to="/blog" className="back-button">Back to Blog</router-link>
    <article v-html="content"></article>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import {useRoute} from 'vue-router';
import 'github-markdown-css'; // 引入 GitHub Markdown CSS 样式

const content = ref('');
const route = useRoute();

onMounted(async () => {
  const {id} = route.params;
  try {
    const markdownContent = await import(`../posts/${id}.md`);
    content.value = markdownContent.html;
  } catch (error) {
    console.error('Error loading Markdown file:', error);
  }
});
</script>

<style scoped>
.blog-content {
  width: 90%;
  padding: 20px;
  background-color: #092a2a;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  /* Ensure top margin to keep the content visible without vertical centering */
  margin-top: 40px;
  position: relative;
  top: 0; /* Ensure no vertical offset */
}

.back-button {
  display: inline-block;
  margin-bottom: 20px;
  color: #3eda91;
  text-decoration: none;
}

.back-button:hover {
  text-decoration: underline;
}
</style>
