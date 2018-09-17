<template>
	<div style="width:100%;height:100%;" id="evolveRecord"></div>
</template>

<script>
	//暂时没用到改组件，调用的是count下的helpRecord
	import axios from 'axios';
	import echarts from 'echarts';
	import ecTheme from '@/assets/ecTheme.js';
	echarts.registerTheme('ecTheme', ecTheme);
	export default {
		name: 'evolveRecord',
		data() {
			return {
			}
		},
		methods: {
		},
		mounted() {
			axios.get('./static/count.json').then(response => {
				this.$nextTick(() => {
					let evolveRecord = echarts.init(document.getElementById('evolveRecord'), 'ecTheme');
					
					let data = response.data;
					//配置机构数量图表
					const option = {
						grid: {
							top: '2%',
							bottom: '16%',
						},
						xAxis: {
							type: 'value',
						},
						yAxis: {
							type: 'category',
							data: data.area,
						},
						series: [{
							type: 'bar',
							label: {
								normal: {
									show: true,
									position: 'inside'
								}
							},
							stack: 'now',
							data: data.recourd.yes,
						},{
							type: 'bar',
							label: {
								normal: {
									show: true,
									position: 'inside'
								}
							},
							stack: 'now',
							data: data.recourd.no,
						}]
					};
					
					evolveRecord.setOption(option);
					window.addEventListener('resize', function () {
			            evolveRecord.resize();
			        });
				})
			})
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
</style>