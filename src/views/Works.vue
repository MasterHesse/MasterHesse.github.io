<template>
  <div class="works">
    <h1>My Works</h1>
    <div class="text-background custom-style">
      <div class="work-item" v-for="(work, index) in works" :key="index">
        <h3>{{ work.title }}</h3>
        <p>{{ work.description }}</p>
        <a :href="work.link" target="_blank">View Project</a>
      </div>
    </div>
  </div>
</template>

<script setup>
const works = [
  {title: 'Timus Solution', description: 'My Solutions to timus', link: 'https://github.com/MasterHesse/HDU_ITMO_ADS-My_Solution_to_Timus'},

];
</script>

<style scoped>
.works {
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
  max-width: 300%;
  width: 200%; /* 可以根据需要设置宽度 */
}

.work-item {
  margin-bottom: 20px;
}
</style>
