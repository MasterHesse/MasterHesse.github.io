<template>
    <div class="achievement">
      <h1>Achievements</h1>
      <div class="text-background">
      <ul class="achievements-list">
        <li v-for="(achievement, index) in achievements" :key="index">
          <strong>{{ achievement.title }}</strong>: {{ achievement.description }}
        </li>
      </ul>
      </div>
    </div>

</template>

<script setup>
const achievements = [
  { title: '2024大学生服务外包大赛', description: '全国三等奖，东部赛区二等奖' },

];
</script>

<style scoped>
.achievement {
  display: flex;
  flex-direction: column;
  position: relative;

  margin-top: 60px;
  color: #092a2a;
  font-size: 30px;
  padding: 20px;
  text-align: center;
  height: 100vh; /* 父容器的高度，可根据需求调整 */
}

.achievements-list {
  list-style: none;
  padding: 0;
}
</style>
