<template>
	<div class="forecastInfoMain">
		<ul>
			<li v-for="(v,k) in userInfo">{{k}}：<span>{{v}}</span></li>
		</ul>
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
		props: {
			userInfo: {
				type: Object,
			}
		},
		mounted() {
			axios.get('./static/manage.json').then(response => {
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
		methods: {}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	.forecastInfoMain ul{
		margin: 0;
		padding: 0;
		color: #fff;
		font-size: 12px;
		list-style: none;
		width: 100%;
		li{
			display: inline-block;
			width: 32%;
		}
	}
</style>