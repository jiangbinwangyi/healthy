import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'

Vue.use(Router)

// 路由配置
const RouterConfig = {
	// mode: 'history',
	routes: [{
		path: '/',
		name: 'main',
		redirect: '/count',
		component: main,
		meta: {
			title: '健康扶贫大数据综合管理平台',
		},
		children: [{
				path: 'count',
				icon: 'md-analytics',
				name: 'count',
				meta: {
					title: '统计汇报',
				},
				component: () =>
					import('@/components/count.vue')
			},
			{
				path: 'manage',
				icon: 'logo-dropbox',
				name: 'manage',
				meta: {
					title: '资金管理',
				},
				component: () =>
					import('@/components/manage.vue')
			},
			{
				path: 'evolve',
				icon: 'md-beaker',
				name: 'evolve',
				meta: {
					title: '工作进展',
				},
				component: () =>
					import('@/components/evolve.vue')
			},
			{
				path: 'application',
				icon: 'md-cube',
				name: 'application',
				meta: {
					title: '智能应用',
				},
				component: () =>
					import('@/components/application.vue')
			},
		]
	}]
};

export const router = new Router(RouterConfig)

router.beforeEach((to, from, next) => {
	let title = to.meta.title;
	let iTitle = this.a.options.routes[0].meta.title;
	if(title) {
		iTitle = title + '-' + iTitle;
	}
	window.document.title = iTitle;
	next();
})