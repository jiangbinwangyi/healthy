<template>
	<div style="width:100%;height:100%;" id="evolveDevice"></div>
</template>

<script>
	import axios from 'axios';
	import echarts from 'echarts';
	import ecTheme from '@/assets/ecTheme.js';
	echarts.registerTheme('ecTheme', ecTheme);
	export default {
		name: 'evolveDevice',
		data() {
			return {
			}
		},
		methods: {
		},
		mounted() {
			axios.get('./static/evolve.json').then(response => {
				this.$nextTick(() => {
					let evolveDevice = echarts.init(document.getElementById('evolveDevice'), 'ecTheme');
					
					let data = response.data;
					//配置机构数量图表
					const option = {
						grid: {
							top: '4%',
							right: 0
						},
						legend: {
							data: ["CT设备","核磁设备","超声设备"],
							bottom: 0
						},
						yAxis: {
							type: 'value',
							max: 6
						},
						xAxis: {
							type: 'category',
							data: data.area,
						},
						tooltip:{
							formatter: "{a}\n{c}台"
						},
						series: [{
							type: 'bar',
							name: "CT设备",
							label: {
								normal: {
									show: true,
									position: 'inside'
								}
							},
							data: data.deviceClass.ct,
						},{
							type: 'bar',
							name: "核磁设备",
							label: {
								normal: {
									show: true,
									position: 'inside'
								}
							},
							data: data.deviceClass.hc,
						},{
							type: 'bar',
							name: "超声设备",
							label: {
								normal: {
									show: true,
									position: 'inside'
								}
							},
							data: data.deviceClass.cs,
						}]
					};
					
					evolveDevice.setOption(option);
					window.addEventListener('resize', function () {
			            evolveDevice.resize();
			        });
				})
			})
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
</style>