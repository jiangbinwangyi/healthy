<template>
	<div style="width:100%;height:100%;" id="helpRecord"></div>
</template>

<script>
	import axios from 'axios';
	import echarts from 'echarts';
	import ecTheme from '@/assets/ecTheme.js';
	echarts.registerTheme('ecTheme', ecTheme);
	export default {
		name: 'helpRecord',
		data() {
			return {}
		},
		props: {},
		mounted() {
			axios.get('./static/count.json').then(response => {
				this.$nextTick(() => {
					let helpRecord = echarts.init(document.getElementById('helpRecord'), 'ecTheme');

					let data = response.data;
					//配置机构数量图表
					const option = {
						grid: {
							top: 0,
							bottom: '15%',
						},
						xAxis: {
							type: 'value',
							splitNumber: 3
						},
						yAxis: {
							type: 'category',
							data: data.area,
						},
						tooltip:{
							formatter: "{a}\n{c}人"
						},
						series: [{
							name: "已建档人数",
							type: 'bar',
							label: {
								normal: {
									show: true,
									position: 'inside'
								}
							},
							barWidth: '40%',
							stack: "count",
							data: data.helpRecord.recorded,
						}, {
							name: "未建档人数",
							type: 'bar',
							label: {
								normal: {
									show: true,
									position: 'inside'
								}
							},
							barWidth: '40%',
							stack: "count",
							data: data.helpRecord.record,
						}]
					};

					helpRecord.setOption(option);
					window.addEventListener('resize', function () {
						helpRecord.resize();
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