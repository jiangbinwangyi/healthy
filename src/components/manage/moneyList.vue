<template>
	<div style="width:100%;height:100%;" id="yearList"></div>
</template>

<script>
	import axios from 'axios';
	import echarts from 'echarts';
	import ecTheme from '@/assets/ecTheme.js';
	echarts.registerTheme('ecTheme', ecTheme);
	export default {
		name: 'yearList',
		data() {
			return {}
		},
		props: {},
		mounted() {
			axios.get('./static/manage.json').then(response => {
				this.$nextTick(() => {
					let yearList = echarts.init(document.getElementById('yearList'), 'ecTheme');

					let data = response.data;
					//配置机构数量图表
					const option = {
						grid: {
							top: '3%',
							bottom: '12%',
							left: '16%',
							right: '4%'
						},
						xAxis: {
							type: 'value',
							max: 450
						},
						yAxis: {
							type: 'category',
							inverse: true,
							data: data.list,
						},
						tooltip:{
							formatter: "{a}年\n{c}万元"
						},
						series: [{
							name: '2016',
							type: 'bar',
							label: {
								normal: {
									show: true,
									position: 'right',
									color: '#fff'
								}
							},
							barWidth: '40%',
							data: data.moneyList,
						}]
					};

					yearList.setOption(option);
					window.addEventListener('resize', function () {
						yearList.resize();
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