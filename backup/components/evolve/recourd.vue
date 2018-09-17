<template>
	<div style="width:100%;height:100%;" id="recourd"></div>
</template>

<script>
	import axios from 'axios';
	import echarts from 'echarts';
	export default {
		data() {
			return {
			}
		},
		methods: {
		},
		mounted() {
			axios.get('/static/evolve.json').then(response => {
				this.$nextTick(() => {
					let data = response.data;
					//配置机构数量图表
					const option = {
						grid: {
							top: '2%',
							bottom: '15%',
						},
						xAxis: {
							type: 'value',
						},
						yAxis: {
							type: 'category',
							name: '(年)',
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
					let recourd = echarts.init(document.getElementById('recourd'));
					recourd.setOption(option);
					window.addEventListener('resize', function () {
			            recourd.resize();
			        });
				})
			})
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
</style>