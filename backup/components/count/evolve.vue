<template>
	<div style="width:100%;height:100%;" id="evolve"></div>
</template>

<script>
	import axios from 'axios';
	import echarts from 'echarts';
	export default {
		name: 'evolve',
		data() {
			return {}
		},
		props: {
			evolveData: Array
		},
		mounted() {},
		created() {},
		updated() {},
		watch: {
			evolveData: function(){
				let evolve = echarts.init(document.getElementById('evolve'));
	
				//数据筛选逻辑由父组件完成
				
				//配置机构数量图表
				const option = {
					grid: {
						top: '2%',
						bottom: '15%',
					},
					yAxis: {
						type: 'value',
					},
					xAxis: {
						type: 'category',
						name: '(年)',
						data: ['2015', '2016', '2017', '2018'],
					},
					series: [{
						type: 'bar',
						label: {
							normal: {
								show: true,
								position: 'inside'
							}
						},
						data: this.evolveData,
					},{
						type: 'line',
						label: {
							show: false
						},
						data: this.evolveData,
					}]
				};
				
				evolve.setOption(option);
			}
		},
		methods: {}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

</style>