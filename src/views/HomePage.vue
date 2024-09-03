<template>
  <div class="home ">
      <h1>Welcome, my Amigo! ^_^</h1>
    <div class="text-background">
      <p class="text">
        Welcome to MasterHesse's Blog, where I will show my programming works,
        learning experience and academic achievements.
      </p>
      <ProjectList :projects="projects" />
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>


.home {
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

.text {
  font-size: 24px;
  color: #f0f0f0;
}
</style>
