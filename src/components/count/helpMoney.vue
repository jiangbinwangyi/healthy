<template>
	<div style="width:100%;height:100%;" id="helpMoney"></div>
</template>

<script>
	import axios from 'axios';
	import echarts from 'echarts';
	import ecTheme from '@/assets/ecTheme.js';
	echarts.registerTheme('ecTheme', ecTheme);
	export default {
		name: 'helpMoney',
		data() {
			return {}
		},
		props: {},
		mounted() {
			axios.get('./static/count.json').then(response => {
				this.$nextTick(() => {
					let helpMoney = echarts.init(document.getElementById('helpMoney'), 'ecTheme');

					let data = response.data;
					let allMoney = data.helpMoney.areaMoney.reduce((result, item) => {
						return result + item;
					})
					let allUsed = data.helpMoney.useMoney.reduce((result, item) => {
						return result + item;
					})
					//配置机构数量图表
					const option = {
						tooltip: {
							trigger: 'item',
							formatter: "{b}<br>{c}万元({d}%)"
						},
						series: [{
							name: '资金使用情况',
							type: 'pie',
							radius: ['30%', '80%'],
							avoidLabelOverlap: false,
							selectedOffset: 0,
							label: {
								show: true,
								color: '#fff',
								position: 'inside',
								formatter: '{c}万元\n{b}{d}%'
							},
							labelLine: {
								normal: {
									show: true,
									lineStyle: {
										color: "#80eaea"
									}
								}
							},
							data: [{
									value: allUsed,
									name: '已使用',
								},
								{
									value: allMoney - allUsed,
									name: '未使用',
								}
							]
						}]
					};

					helpMoney.setOption(option);
					window.addEventListener('resize', function () {
						helpMoney.resize();
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