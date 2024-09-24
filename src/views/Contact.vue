<template>

    <div class="contact">
      <h1>Contact Me</h1>
      <div class="text-background">
      <p>Please note the FAQs above before writing in.</p>
        <p>I do read all messages that come in, but am not always able to respond to them personally,
        and hope you understand.</p>
      <p>You can contact me via:</p>
      <ul class="contact-info">
        <li>Email: <a href="mailto:hesskuro@gmail.com">hesskuro@gmail.com</a></li>
        <li>GitHub: <a href="https://github.com/MasterHesse" target="_blank">github.com/MasterHesse</a></li>
      </ul>
      <form action="https://formsubmit.co/hesskuro@gmail.com" method="POST">
        <input type="text" name="name" placeholder="Your Name" required/>
        <input type="email" name="email" placeholder="Your Email" required/>
        <textarea name="message" placeholder="Your Message" required></textarea>

        <!-- 添加勾选框 -->
        <div class="checkbox-container">
          <input type="checkbox" id="faq-confirmation" name="faq-confirmation" required />
          <label for="faq-confirmation">I am not asking a question that is answered in the FAQs</label>
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  </div>
</template>


<style scoped>
.contact {
  display: flex;
  flex-direction: column;

  position: relative;
  top: 0;
  color: #ffffff;
  margin-left: 15px;
  font-size: 30px;
  margin-top: 60px;
  padding: 20px;
  text-align: center;
  max-width: 800px;

  height: 100vh; /* 父容器的高度，可根据需求调整 */
  margin-right: 43px;
}

.contact-info {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
  color: #ffffff; /* 设置链接的颜色 */
  text-decoration: none; /* 去除下划线 */
}

.contact-info a:hover {
  color: rgba(50, 216, 241, 0.8); /* 设置悬停时链接的颜色 */
  text-decoration: underline; /* 添加下划线以突出显示 */
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
  background-color: rgba(50, 216, 241, 0.8);
  color: #030303;
  font-weight: bold;
  border: none;
  cursor: pointer;
}

/* 勾选框容器样式 */
.checkbox-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.checkbox-container input {
  accent-color: #007bf5; /* 设置勾选框颜色 */
}

.checkbox-container label {
  font-size: 20px;
  color: #ffffff;
  margin: 0;
}
</style>
<script setup>
</script>