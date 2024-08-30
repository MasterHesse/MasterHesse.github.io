import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '../views/HomePage.vue';
import About from '../views/About.vue';
import Achievements from '../views/Achievements.vue';
import Blog from '../views/Blog.vue';
import Works from '../views/Works.vue';
import Contact from '../views/Contact.vue';
import FAQ from '../views/FAQ.vue';
import BlogContent from "../views/BlogContent.vue";

const routes = [
    {path: '/', component: HomePage},
    {path: '/about', component: About},
    {path: '/achievements', component: Achievements},
    { path: '/', redirect: '/blog' },
    { path: '/blog', component: Blog },
    { path: '/blog/:id', component: BlogContent }, // 确保路由参数 id 的命名和页面使用一致,
    {path: '/works', component: Works},
    {path: '/contact', component: Contact},
    {path: '/faq', component: FAQ},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
