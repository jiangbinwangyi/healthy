<template>
	<div style="width:100%;height:100%;" id="evolveChart"></div>
</template>

<script>
	import axios from 'axios';
	import echarts from 'echarts';
	import ecTheme from '@/assets/ecTheme.js';
	echarts.registerTheme('ecTheme', ecTheme);
	export default {
		name: 'evolveChart',
		data() {
			return {
			}
		},
		methods: {
		},
		mounted() {
			axios.get('./static/evolve.json').then(response => {
				this.$nextTick(() => {
					let evolveChart = echarts.init(document.getElementById('evolveChart'), 'ecTheme');
					
					let data = response.data;
					//配置机构数量图表
					const option = {
						grid: {
							top: '4%',
							right: 0,
							bottom:'30%'
						},
						legend: {
							data: ["已完成","未完成"],
							bottom: 0,
							padding: 0
						},
						yAxis: {
							type: 'value',
						},
						xAxis: {
							type: 'category',
							data: data.evolveClass,
						},
						tooltip:{
							formatter: "{a}\n{c}%"
						},
						series: [{
							type: 'bar',
							name: "已完成",
							stack:"bai",
							label: {
								normal: {
									show: true,
									position: 'inside',
									formatter: "{c}%"
								}
							},
							barWidth: '40%',
							data: data.evolve.yes,
						},{
							type: 'bar',
							name: "未完成",
							stack:"bai",
							label: {
								normal: {
									show: true,
									position: 'inside',
									formatter: "{c}%"
								}
							},
							barWidth: '40%',
							data: data.evolve.no,
						}]
					};
					
					evolveChart.setOption(option);
					window.addEventListener('resize', function () {
			            evolveChart.resize();
			        });
				})
			})
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
</style>