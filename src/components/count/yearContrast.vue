<template>
	<div style="width:100%;height:100%;" id="yearContrast"></div>
</template>

<script>
	import axios from 'axios';
	import echarts from 'echarts';
	import ecTheme from '@/assets/ecTheme.js';
	echarts.registerTheme('ecTheme', ecTheme);
	export default {
		name: 'yearContrast',
		data() {
			return {}
		},
		props: {},
		mounted() {
			axios.get('./static/count.json').then(response => {
				this.$nextTick(() => {
					let yearContrast = echarts.init(document.getElementById('yearContrast'), 'ecTheme');

					let data = response.data;
					//配置机构数量图表
					const option = {
						grid: {
							top: '3%',
							bottom: '25%',
							left: '14%',
						},
						yAxis: {
							type: 'value',
						},
						xAxis: {
							type: 'category',
							data: data.year,
						},
						legend: {
							data: ['因病致贫','因病返贫'],
							bottom: 0,
							padding: 0
						},
						tooltip:{
							formatter: "{a}\n{c}人"
						},
						series: [{
							name: "因病致贫",
							type: 'bar',
							label: {
								normal: {
									show: true,
									position: 'inside'
								}
							},
							barWidth: '40%',
							stack: "contrast",
							data: data.yearContrast.fanpin,
						}, {
							name: "因病返贫",
							type: 'bar',
							label: {
								normal: {
									show: true,
									position: 'inside'
								}
							},
							barWidth: '40%',
							stack: "contrast",
							data: data.yearContrast.zhipin,
						}]
					};

					yearContrast.setOption(option);
					window.addEventListener('resize', function () {
						yearContrast.resize();
					})
				})
			})
		},
		created() {},
		updated() {},
		watch: {
			evolveData: function() {}
		},
		methods: {}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

</style>