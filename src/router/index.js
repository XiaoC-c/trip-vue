import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Detail from '../views/Detail.vue'
import Feature from '../views/Feature.vue'
import Lianxi from '../views/Lianxi.vue'
import List from '../views/List.vue'
import News from '../views/News.vue'
import Picdetail from '../views/Picdetail.vue'
import Strategy from '../views/Strategy.vue'
import Login from '../views/Login.vue'
import Map from '../views/Map.vue'
import Task from '../views/Task.vue'

Vue.use(VueRouter)

const routes = [
	{
	path: '/',
	name: 'Index',
	component: Index
	}, 
	{
	path: '/detail',
	name: 'Detail',
	component: Detail
	}, 
	{
	path: '/feature',
	name: 'Feature',
	component: Feature
	}, 
	{
	path: '/lianxi',
	name: 'Lianxi',
	component: Lianxi
	}, 
	{
	path: '/list',
	name: 'List',
	component: List
	}, 
	{
	path: '/news',
	name: 'News',
	component: News
	}, 
	{
	path: '/picdetail',
	name: 'Picdetail',
	component: Picdetail
	}, 
	{
	path: '/strategy',
	name: 'Strategy',
	component: Strategy
	}, 
	{
	path: '/login',
	name: 'Login',
	component: Login
	}, 
	{
	path: '/map',
	name: 'Map',
	component: Map
	},
	{
	path: '/task',
	name: 'Task',
	component: Task,
	meta: {
		isAuth:true
	}
	},
]

const router = new VueRouter({
	mode: 'history',
	routes
})

router.beforeEach((to, from, next) => {
	if (to.meta.isAuth) {
		if(!window.localStorage.getItem('username')){
			next('/login')
		}else{
			next()
		}
	}else {
		next()
	}
})

export default router
