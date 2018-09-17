<template>
	<div id="">
		因病返贫表格
	</div>
</template>

<script>
	import axios from 'axios';
	import echarts from 'echarts';
	export default {
		name: 'fanpin',
		data() {
			return {
			}
		},
		mounted() {
			axios.get('/static/manage.json').then(response => {
				this.$nextTick(() => {
					
				})
			})
			axios.interceptors.request.use(config =>{
				return config
			})
			axios.interceptors.response.use(response =>{
				return response
			})
		},
		created() {},
		updated() {},
		methods: {
			
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

</style>