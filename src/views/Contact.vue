<template>
  <div class="contact">
    <h1>Contact Me</h1>
    <p>你可以通过以下方式联系我：</p>
    <ul class="contact-info">
      <li>Email: <a href="hesskuro@gmail.com">hesskuro@gmail.com</a></li>
      <li>GitHub: <a href="https://github.com/MasterHesse" target="_blank">github.com/MasterHesse</a></li>
    </ul>
    <form @submit.prevent="submitForm">
      <input type="text" placeholder="Your Name" v-model="name" required />
      <input type="email" placeholder="Your Email" v-model="email" required />
      <textarea placeholder="Your Message" v-model="message" required></textarea>
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');

const submitForm = () => {
  // 模拟提交表单的处理
  alert(`Message sent by ${name.value}`);
};
</script>

<style scoped>
.contact {
  margin-top: 30px;           /* 顶部间距 */
  margin-inline: auto;        /* 左右居中 */
  padding: 20px;
  max-width: 600px;
  text-align: center;
  align-content: center;
}

.contact-info {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input, textarea {
  padding: 10px;
  font-size: 14px;
}

button {
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
