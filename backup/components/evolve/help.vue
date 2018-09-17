<template>
	<div style="width:100%;height:100%;" id="help"></div>
</template>

<script>
	import axios from 'axios';
	import echarts from 'echarts';
	export default {
		name: 'money',
		data() {
			return {}
		},
		mounted() {
			axios.get('/static/evolve.json').then(response => {
				this.$nextTick(() => {
					let help = echarts.init(document.getElementById('help'));

					//数据筛选逻辑可以交给后端
					let data = response.data;

					const option = {
						tooltip: {
							trigger: 'item',
							formatter: "{a} <br/>{b}: {c} ({d}%)"
						},
						series: [{
							name: '访问来源',
							type: 'pie',
							radius: ['60%', '80%'],
							avoidLabelOverlap: false,
							label: {
								show: true,
								color: '#fff',
							},
							labelLine: {
								normal: {
									show: true,
									length: 0,
									lineStyle: {
										color: "#fff"
									}
								}
							},
							data: [{
									value: data.help.helped,
									name: '累计报销',
								},
								{
									value: data.help.own,
									name: '患者自付',
								}
							]
						},{
							name: "",
							type: 'pie',
							radius: ['60%', '80%'],
							avoidLabelOverlap: false,
							data: [{
									value: data.help.helped,
									name: '累计报销',
									label: {
						                show: true,
						                position: 'center',
						                formatter: "{num|{d}%}\n报销比例",
						                color: '#fff',
						                rich: {
						                	num: {
						                		color: '#fff',
						                		fontSize: 16,
						                	}
						                }
						            },
								},
								{
									value: data.help.own,
									name: '患者自付',
									label: {
										show: false
									},
									labelLine: {
										show: false
									}
								}
							]
						}]
					};

					help.setOption(option);
					window.addEventListener('resize', function() {
						help.resize();
					});
				})
			})
			axios.interceptors.request.use(config => {
				return config
			})
			axios.interceptors.response.use(response => {
				return response
			})
		},
		created() {},
		updated() {},
		methods: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

</style>