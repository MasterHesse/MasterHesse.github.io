<template>
  <div class="works">
    <h1>My Works</h1>
    <div class="work-item" v-for="(work, index) in works" :key="index">
      <h3>{{ work.title }}</h3>
      <p>{{ work.description }}</p>
      <a :href="work.link" target="_blank">View Project</a>
    </div>
  </div>
</template>

<script setup>
const works = [
  { title: 'Project 1', description: '这是一个有趣的项目...', link: 'https://example.com/project1' },
  { title: 'Project 2', description: '这是另一个有趣的项目...', link: 'https://example.com/project2' },
];
</script>

<style scoped>
.works {
  padding: 20px;
  text-align: left;
  max-width: 800px;
  margin-top: 30px;           /* 顶部间距 */
  margin-inline: auto;        /* 左右居中 */
}

.work-item {
  margin-bottom: 20px;
}
</style>
