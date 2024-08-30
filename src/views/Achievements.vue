<template>
  <div class="achievement">
    <h1>Achievements</h1>
    <ul class="achievements-list">
      <li v-for="(achievement, index) in achievements" :key="index">
        <strong>{{ achievement.title }}</strong>: {{ achievement.description }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const achievements = [
  { title: '奖项 1', description: '获得了一项重要的学术奖励。' },
  { title: '成就 2', description: '完成了一个重大项目。' },
];
</script>

<style scoped>
.achievement {
  padding: 20px;
  text-align: left;
  max-width: 800px;
  margin-top: 30px;           /* 顶部间距 */
  margin-inline: auto;        /* 左右居中 */
}

.achievements-list {
  list-style: none;
  padding: 0;
}
</style>
