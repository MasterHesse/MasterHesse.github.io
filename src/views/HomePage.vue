<template>
  <div class="home">
    <h1>Welcome, my Amigo! ^_^</h1>
    <p class="text">Welcome to MasterHesse's Blog,
            where I will show my programming works,
            learning experience and academic achievements.</p>
    <ProjectList :projects="projects"/>
  </div>
</template>

<script setup>
</script>

<style scoped>
.home {
  margin-top: 30px;
  color: #333;
  padding: 20px;
  font-size: 30px;
}
.text{
  font-size: 24px;
}
</style>
