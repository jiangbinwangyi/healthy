<template>
    <div width="100%" height="100%" :id="area"></div>
</template>

<script>
	import axios from 'axios';
	import echarts from 'echarts';
	import ecTheme from '@/assets/ecTheme.js';
	echarts.registerTheme('ecTheme', ecTheme);
	export default {
		name: 'resourceChild',
		data() {
			return {
			}
		},
		props: {
			area: String
		},
		mounted() {
			axios.get('./static/count.json').then(response => {
				this.$nextTick(() => {
					let resource = echarts.init(document.getElementById(this.area),'ecTheme');
					
					//数据筛选逻辑可以交给后端
					let data = response.data;
					
					//配置机构数量图表
					let type = "line";
					let label = {
						normal: {
		                    show: false,
		                    position: 'inside'
		                }
					}
					const option = {
						tooltip: {
							trigger: 'axis',
							axisPointer: {
								type: 'shadow'
							}
						},
						grid: {
							top: '15%',
							bottom: '15%',
						},
						legend: {
							top: 0,
							padding: 0,
							data: ['每千人口公共卫生专业人员数', '每千人口床位数'],
						},
						yAxis: {
							type: 'value',
							max: 3
						},
						xAxis: {
							type: 'category',
							data: data.year,
						},
						series: [{
							type: type,
							name: '每千人口公共卫生专业人员数',
							label: label,
							data: data.resource[this.area].doctor,
							areaStyle: {}
						}, {
							type: type,
							name: '每千人口床位数',
							label: label,
							data: data.resource[this.area].bed,
							areaStyle: {},
							itemStyle: {
								color: '#7ee8e8'
							}
						}]
					};
					resource.setOption(option);
					window.addEventListener('resize', function() {
						resource.resize();
					})
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
</style>