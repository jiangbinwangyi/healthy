<template>
	<div style="width:100%;height:100%;" id="helpPerson"></div>
</template>

<script>
	import axios from 'axios';
	import echarts from 'echarts';
	import ecTheme from '@/assets/ecTheme.js';
	echarts.registerTheme('ecTheme', ecTheme);
	export default {
		name: 'helpPerson',
		data() {
			return {}
		},
		props: {},
		mounted() {
			axios.get('./static/count.json').then(response => {
				this.$nextTick(() => {
					let helpPerson = echarts.init(document.getElementById('helpPerson'), 'ecTheme');

					let data = response.data;
					//配置机构数量图表
					const option = {
						grid: {
							top: 0,
							bottom: '15%',
						},
						xAxis: {
							type: 'value',
						},
						yAxis: {
							type: 'category',
							data: data.area,
						},
						tooltip:{
							formatter: "{a}\n{c}人"
						},
						series: [{
							name: "贫困人数",
							type: 'bar',
							label: {
								normal: {
									show: true,
									position: 'right'
								}
							},
							barGap: 0,
							data: data.helpPerson.count,
						}, {
							name: "已帮扶人数",
							type: 'bar',
							label: {
								normal: {
									show: true,
									position: 'right'
								}
							},
							barGap: 0,
							data: data.helpPerson.helped,
						}]
					};

					helpPerson.setOption(option);
					window.addEventListener('resize', function () {
						helpPerson.resize();
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