import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue';
import Create from '@/views/Create.vue';
import Select from '@/views/Select.vue';
import Character from '@/views/Character.vue';

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/create', name: 'Create', component: Create},
    {path: '/:anime', name: 'Select', component: Select},
    {path: '/:anime/:character', name: 'Character', component: Character},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router