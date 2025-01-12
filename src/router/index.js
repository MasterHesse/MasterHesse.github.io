import { createRouter, createWebHistory } from 'vue-router'
import Blog from '../views/Blog.vue'
import BlogPost from '../views/BlogPost.vue'

// 路由懒加载
const Home = () => import('../views/Home.vue')
const Projects = () => import('../views/Projects.vue')
// const Blog = () => import('../views/Blog.vue')
const Contact = () => import('../views/Contact.vue')
const Faq = () => import('../views/Faq.vue')

const routes = [
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue')  // 使用相对路径
  },
  {
    path: '/blog/:id',
    name: 'BlogPost',
    component: () => import('../views/BlogPost.vue')  // 使用相对路径
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: {
      title: 'Projects'
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    meta: {
      title: 'Blogs'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contact'
    }
  },
  {
    path: '/faq',
    name: 'Faq',
    component: Faq,
    meta: {
      title: 'FAQ'
    }
  },
  // 404页面
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
    meta: {
      title: '404 Not Found'
    }
  }
]

const router = createRouter({
  // 使用history模式
  history: createWebHistory(),
  routes,
  // 平滑滚动
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // 更新页面标题
  document.title = `${to.meta.title} | MasterHesse's Portfolio`
  
  // 添加页面切换的loading效果（如果需要的话）
  const loader = document.querySelector('.loading-indicator')
  if (loader) {
    loader.style.display = 'block'
  }
  
  next()
})

// 全局后置钩子
router.afterEach((to, from) => {
  // 隐藏loading效果
  const loader = document.querySelector('.loading-indicator')
  if (loader) {
    loader.style.display = 'none'
  }
})



export default router