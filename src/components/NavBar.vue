<template>
  <nav class="navbar">
    <div class="navbar-left">
      <ul>
        <li><router-link to="/blog">Blog</router-link></li>
        <li><router-link to="/works">Works</router-link></li>
        <li><router-link to="/achievements">Achievements</router-link></li>
      </ul>
    </div>

    <div class="navbar-center">
      <ul>
        <li><router-link to="/">MasterHesse</router-link></li>
      </ul>
    </div>

    <div class="navbar-right">
      <ul>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/faq">FAQ</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.1); /* 透明底色 */
  padding: 12px 20px;
  position: fixed;
  top: 0;
  width: calc(100% - 24px);
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px) saturate(180%); /* 增加饱和度和模糊效果 */
  overflow: hidden;
  transition: background 0.3s ease-in-out; /* 平滑过渡效果 */
}

.navbar-left,
.navbar-center,
.navbar-right {

  display: flex;
  align-items: center;
}

.navbar-left ul,
.navbar-right ul {
  display: flex;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar-center ul {
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar li a {
  color: #ffffff;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  padding: 8px 12px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.navbar li a:hover {
  background-color: rgba(32, 143, 157, 0.8);
  color: #ffffff;
}

@media (max-width: 1024px) {
  .navbar {
    flex-wrap: wrap;
    padding: 10px 20px;
  }

  .navbar-left,
  .navbar-center,
  .navbar-right {
    flex-basis: 100%;
    justify-content: center;
    margin-bottom: 15px;
  }

  .navbar-left ul,
  .navbar-right ul {
    justify-content: center;
    gap: 15px;
  }
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 10px;
  }

  .navbar-left,
  .navbar-center,
  .navbar-right {
    width: 100%;
    justify-content: space-between;
  }

  .navbar-left ul,
  .navbar-right ul {
    gap: 8px;
  }
}
</style>
