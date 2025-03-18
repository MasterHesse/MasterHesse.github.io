<template>
    <main class="projects">
      <div class="container">
      <div class="container projects__container">
        <!-- 项目页面标题 -->
        <header class="projects__header">
          <h1 class="projects__title">我的项目</h1>
          <p class="projects__subtitle">这里展示了我的一些个人项目作品</p>
        </header>
  
        <!-- 项目筛选器 -->
        <div class="projects__filters">
          <button 
            v-for="category in categories" 
            :key="category"
            :class="['projects__filter-btn', { 'active': currentFilter === category }]"
            @click="filterProjects(category)"
          >
            {{ category }}
          </button>
        </div>
  
        <!-- 搜索栏 -->
        <div class="projects__search">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="搜索项目..."
            class="projects__search-input"
          />
        </div>
  
        <!-- 项目网格 -->
        <div class="projects__grid">
          <ProjectCard
            v-for="project in filteredAndSearchedProjects"
            :key="project.id"
            :project="project"
            @click="openProject"
          />
          
          <!-- 无结果提示 -->
          <div v-if="filteredAndSearchedProjects.length === 0" class="projects__no-results">
            <p>没有找到匹配的项目</p>
          </div>
        </div>
      </div>
  
      <!-- 项目详情模态框 -->
      <Transition name="fade">
        <div 
          v-if="selectedProject" 
          class="project-modal"
          @click.self="closeProject"
        >
          <div class="project-modal__content">
            <button class="project-modal__close" @click="closeProject">×</button>
            
            <h2 class="project-modal__title">{{ selectedProject.title }}</h2>
            
            <div class="project-modal__meta">
              <span class="project-modal__category">{{ selectedProject.category }}</span>
              <!-- <div class="project-modal__stats">
                <span class="project-modal__stat">
                  <span class="project-modal__stat-icon">⭐</span>
                  {{ selectedProject.stars || 0 }}
                </span>
                <span class="project-modal__stat">
                  <span class="project-modal__stat-icon">🔄</span>
                  {{ selectedProject.forks || 0 }}
                </span>
              </div> -->
            </div>
  
            <div class="project-modal__tags">
              <span 
                v-for="tag in selectedProject.tags" 
                :key="tag" 
                class="project-modal__tag"
              >
                {{ tag }}
              </span>
            </div>
  
            <div class="project-modal__details">
              <p class="project-modal__description">{{ selectedProject.longDescription }}</p>
              
              <div class="project-modal__features" v-if="selectedProject.features">
                <h3 class="project-modal__subtitle">主要特性</h3>
                <ul class="project-modal__feature-list">
                  <li v-for="feature in selectedProject.features" :key="feature">
                    {{ feature }}
                  </li>
                </ul>
              </div>
  
              <div class="project-modal__links">
                <!-- <a 
                  v-if="selectedProject.demoUrl" 
                  :href="selectedProject.demoUrl" 
                  target="_blank" 
                  class="project-modal__link"
                >
                  在线演示
                </a> -->
                <a 
                  v-if="selectedProject.githubUrl" 
                  :href="selectedProject.githubUrl" 
                  target="_blank" 
                  class="project-modal__link project-modal__link--secondary"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
    </main>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import ProjectCard from '../components/ProjectCard.vue'
  
  // 项目分类
  const categories = ['全部', '前端', '后端', '全栈', '系统','算法','其他']
  const currentFilter = ref('全部')
  const searchQuery = ref('')
  const selectedProject = ref(null)
  
  // 项目数据
// Projects.vue 中的项目数据
const projects = [
  {
    id: 1,
    title: '个人主页',
    category: '前端',
    description: '基于Vue3和Node.js的个人博客系统',
    longDescription: '这是一个使用Vue3、vite和Node.js构建的完整个人网页。包括项目展示、联系等',
    year: '2025',
    status: 'completed', // 'completed' 或 'in-progress'
    features: [
      '响应式设计，支持多端适应',
      'Markdown文章编辑器',
      '文章分类与标签系统'
    ],
    tags: ['Vue3', 'Node.js', 'Vite'],
    githubUrl: 'https://github.com/MasterHesse/MasterHesse.github.io'
  },
  {
    id: 2,
    title: '课程信息管理系统',
    category: '全栈',
    description: '基于Vue3、Springboot和MySQl的课程信息管理系统',
    longDescription: '这是一个使用Vue3、Springboot和MySQl的课程信息管理系统。实现了用户登陆注册，用户权限切换，课程信息增删改以及课程大纲文件的上传和下载。',
    year: '2024',
    status: 'completed',
    features: [
      '用户权限切换',
      '可审核注册'
    ],
    tags: ['Vue3', 'Springboot', 'MySQl', 'Java'],
    githubUrl: 'https://github.com/MasterHesse/InformationSystem_EduCourseCatalog'
  },
  {
    id: 3,
    title: 'Timus算法网站-我的解法',
    category: '算法',
    description: 'Timus算法题目的一些解法',
    longDescription: '',
    year: '2024',
    status: 'completed',
    features: [
      'C++',
      'Python',
      'Java'
    ],
    tags: ['C++', 'Python', 'Java'],
    githubUrl: 'https://github.com/MasterHesse/Algorithms_and_DataStructures-MyTimusSolution'
  },
  {
    id: 4,
    title: '智航路控-路段车辆检测系统',
    category: '全栈',
    description: '2025服务外包大赛赛题：大型交通枢纽辖域内通行车辆智能检测系统',
    longDescription: '车辆智能检测系统的设计目的是为保障大型交通枢纽辖域内的安全与秩序，其核心功能是对进入域内道路的车辆进行精确检测、识别和分类，确保机场或车站等场所内道路的通行安全和旅客安全。',
    year: '2025',
    status: 'in-progress',
    features: [
      'Yolo',
      'Python',
      'Spring',
      'SQL',
      'CV'
    ],
    tags: ['C++', 'Python', 'Java'],
    githubUrl: 'https://github.com/HuBuGuii/FWWB-Vehicle_Detection_System'
  },
  {
    id: 5,
    title: '基于Rust的Leetcode精华150解决方案',
    category: '算法',
    description: '对于Leetcode的150精华面试题的Rust解决方案',
    longDescription: '用于我在应聘面试前的个人练习和Rust学习',
    year: '2025',
    status: 'in-progress',
    features: [
      'Rust',
      'Leetcode'
    ],
    tags: ['leetcode', 'Rust'],
    githubUrl: 'https://github.com/MasterHesse/Rust-for-leetcode-top150'
  }
]
  
  // 项目筛选和搜索
  const filteredAndSearchedProjects = computed(() => {
    let result = projects
  
    // 分类筛选
    if (currentFilter.value !== '全部') {
      result = result.filter(project => project.category === currentFilter.value)
    }
  
    // 搜索筛选
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase()
      result = result.filter(project => 
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }
  
    return result
  })
  
  // 筛选方法
  const filterProjects = (category) => {
    currentFilter.value = category
  }
  
  // 打开项目详情
  const openProject = (project) => {
    selectedProject.value = project
    document.body.style.overflow = 'hidden'
  }
  
  // 关闭项目详情
  const closeProject = () => {
    selectedProject.value = null
    document.body.style.overflow = ''
  }
  </script>
  
  <style scoped>
  .projects {
    min-height: 100vh;
    min-height: 100dvh;
    padding-top: var(--navbar-height);
    background-color: var(--background-color);
  }
  
  .projects__container {
    padding: var(--spacing-unit);
  }
  
  .projects__header {
    text-align: center;
    margin-bottom: calc(var(--spacing-unit) * 2);
  }
  
  .projects__title {
    font-size: clamp(2rem, calc(7vw + 1rem), 4rem);
    margin-bottom: 1rem;
  }
  
  .projects__subtitle {
    font-size: clamp(1rem, calc(0.8rem + 0.5vw), 1.2rem);
    color: color-mix(in srgb, var(--text-color) 70%, transparent);
  }
  
  .projects__filters {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    margin-bottom: calc(var(--spacing-unit) * 2);
  }
  
  .projects__filter-btn {
    font-size: var(--base-font-size);
    padding: 0.5em 1em;
    border: none;
    background: transparent;
    color: var(--text-color);
    cursor: pointer;
    border-radius: 2rem;
    transition: all 0.3s ease;
  }
  
  .projects__filter-btn.active {
    background-color: var(--secondary-color);
    color: white;
  }
  
  .projects__search {
    margin-bottom: calc(var(--spacing-unit) * 2);
  }
  
  .projects__search-input {
    width: min(100%, 30rem);
    margin: 0 auto;
    display: block;
    padding: 0.8em 1.2em;
    font-size: var(--base-font-size);
    border: 0.0625rem solid color-mix(in srgb, var(--text-color) 20%, transparent);
    border-radius: 2rem;
    background-color: transparent;
    color: var(--text-color);
    transition: all 0.3s ease;
  }
  
  .projects__search-input:focus {
    outline: none;
    border-color: var(--secondary-color);
    box-shadow: 0 0 0 0.125rem color-mix(in srgb, var(--secondary-color) 30%, transparent);
  }
  
  .projects__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 22rem), 1fr));
    gap: var(--spacing-unit);
  }
  
  .projects__no-results {
    grid-column: 1 / -1;
    text-align: center;
    padding: calc(var(--spacing-unit) * 2);
    color: color-mix(in srgb, var(--text-color) 70%, transparent);
  }
  
  .project-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-unit);
    z-index: 1000;
  }
  
  .project-modal__content {
    background-color: var(--background-color);
    border-radius: 1rem;
    padding: var(--spacing-unit);
    width: min(90%, 40rem);
    max-height: min(80vh, 40rem);
    overflow-y: auto;
    position: relative;
  }
  
  .project-modal__close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: calc(var(--base-font-size) * 1.5);
    border: none;
    background: transparent;
    cursor: pointer;
    color: var(--text-color);
    transition: transform 0.3s ease;
  }
  
  .project-modal__close:hover {
    transform: rotate(90deg);
  }
  
  .project-modal__title {
    font-size: clamp(1.5rem, calc(1rem + 1vw), 2rem);
    margin-bottom: 1rem;
  }
  
  .project-modal__meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .project-modal__category {
    font-size: var(--base-font-size);
    color: var(--secondary-color);
  }
  
  .project-modal__stats {
    display: flex;
    gap: 1rem;
  }
  
  .project-modal__stat {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: var(--base-font-size);
    color: color-mix(in srgb, var(--text-color) 70%, transparent);
  }
  
  .project-modal__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
  
  .project-modal__tag {
    font-size: calc(var(--base-font-size) * 0.8);
    padding: 0.25em 0.75em;
    background-color: color-mix(in srgb, var(--secondary-color) 15%, transparent);
    border-radius: 1rem;
  }
  
  .project-modal__description {
    font-size: var(--base-font-size);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
  
  .project-modal__subtitle {
    font-size: calc(var(--base-font-size) * 1.2);
    margin-bottom: 1rem;
  }
  
  .project-modal__feature-list {
    list-style-type: none;
    margin-bottom: 1.5rem;
  }
  
  .project-modal__feature-list li {
    position: relative;
    padding-left: 1.5em;
    margin-bottom: 0.5rem;
    font-size: var(--base-font-size);
  }
  
  .project-modal__feature-list li::before {
    content: "→";
    position: absolute;
    left: 0;
    color: var(--secondary-color);
  }
  
  .project-modal__links {
    display: flex;
    gap: 1rem;
  }
  
  .project-modal__link {
    padding: 0.8em 2em;
    border-radius: 0.5rem;
    text-decoration: none;
    font-size: var(--base-font-size);
    transition: transform 0.3s ease;
    background-color: var(--secondary-color);
    color: white;
    text-align: center;
    flex: 1;
  }
  
  .project-modal__link--secondary {
    background-color: transparent;
    border: 0.125rem solid var(--secondary-color);
    color: var(--secondary-color);
  }
  
  .project-modal__link:hover {
    transform: translateY(-0.25rem);
  }
  
  /* 过渡动画 */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  
  @media (max-width: 48em) {
    .projects__filters {
      flex-direction: column;
      align-items: stretch;
    }
    
    .project-modal__meta {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
    
    .project-modal__links {
      flex-direction: column;
    }
  }
  </style>