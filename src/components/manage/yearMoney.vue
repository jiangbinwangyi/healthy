<template>
	<div style="width:100%;height:100%;" id="yearMoney"></div>
</template>

<script>
	import axios from 'axios';
	import echarts from 'echarts';
	import ecTheme from '@/assets/ecTheme.js';
	echarts.registerTheme('ecTheme', ecTheme);
	export default {
		name: 'yearMoney',
		data() {
			return {}
		},
		props: {},
		mounted() {
			axios.get('./static/manage.json').then(response => {
				this.$nextTick(() => {
					let yearMoney = echarts.init(document.getElementById('yearMoney'), 'ecTheme');

					let data = response.data;
					//配置机构数量图表
					const option = {
						grid: {
							top: '3%',
							bottom: '18%',
							left: '8%',
							right: 0
						},
						legend: {
							bottom: 0,
							padding: 0,
							data: data.year,
						},
						yAxis: {
							type: 'value',
							max: 1200
						},
						xAxis: {
							type: 'category',
							axisLabel: {
								interval: 0
							},
							data: data.trouble,
						},
						tooltip:{
							formatter: "{a}年\n{c}万元"
						},
						series: [
							{
								name: '2016',
								type: 'bar',
								label: {
									normal: {
										show: true,
										position: 'top',
										color: '#fff'
									}
								},
								data: data.yearMoney[0],
							},{
								name: '2017',
								type: 'bar',
								label: {
									normal: {
										show: true,
										position: 'top',
										color: '#fff'
									}
								},
								data: data.yearMoney[1],
							},{
								name: '2018',
								type: 'bar',
								label: {
									normal: {
										show: true,
										position: 'top',
										color: '#fff'
									}
								},
								data: data.yearMoney[2],
							}
						]
					};

					yearMoney.setOption(option);
					window.addEventListener('resize', function () {
						yearMoney.resize();
					})
				})
			})
		},
		created() {},
		updated() {},
		watch: {},
		methods: {}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

</style>