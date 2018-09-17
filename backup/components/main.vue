<template>
	<div class="main">
        <Layout>
            <Header>
            	<main-nav :nav="nav" :activeNav="activeNav"></main-nav>
            	<div class="logo"><h1>{{ msg }}</h1></div>
            </Header>
            <Content class="main-box">
                <router-view/>
            </Content>
        </Layout>
    </div>
</template>

<script>
	import mainNav from './mainNav.vue';
	export default {
		components: {
		    mainNav
		},
		data() {
			return {
				msg: '健康扶贫大数据综合管理平台',
				title: '',
				nav: [],
				activeNav: '',
			}
		},
		methods: {

		},
		computed: {

		},
		mounted() {
			this.nav = this.$router.options.routes[0].children;
		},
		created() {
			
		},
		updated () {
			let curNav = this.$router.currentRoute.name;
			this.activeNav = curNav;
			for(let nav of this.nav){
				if(nav.name == curNav){
					this.title = "——"+nav.title;
				}
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	@import './main.less';
</style>