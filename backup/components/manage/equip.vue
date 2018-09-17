<template>
	<div>
		这里是一个表格
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		name: 'equip',
		data() {
			return {
			}
		},
		mounted() {
			axios.get('/static/manage.json').then(response => {
				this.$nextTick(() => {
					//数据筛选逻辑可以交给后端
					let data = response.data;
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