<template>
  <div class="faq">
    <h1>Frequently Asked Questions</h1>
    <div class="text-background">
      <ul>
        <li class="faq-item">
          <strong>Q: How to contact you?</strong>
          <p>A: You can contact me via email, see the Contact page for details</p>
        </li>
        <li class="faq-item">
          <strong>Q: What type of development do you primarily do?</strong>
          <p>A: I focus on full stack development, and also do some research on Prompt and model fine-tuning.</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.faq {
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

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.faq-item {
  border: 1px solid #ddd; /* 添加边框 */
  padding: 15px; /* 添加内边距 */
  margin-bottom: 20px; /* 问答项之间的间距 */
  border-radius: 5px; /* 圆角边框 */
  background-color: #333333; /* 背景颜色 */
}
</style>
