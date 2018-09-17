<template>
	<div style="width:100%;height:100%;" id="number"></div>
</template>

<script>
	import axios from 'axios';
	import echarts from 'echarts';
	export default {
		name: 'number',
		data() {
			return {
			}
		},
		mounted() {
			axios.get('/static/manage.json').then(response => {
				this.$nextTick(() => {
					let number = echarts.init(document.getElementById('number'));

					//数据筛选逻辑可以交给后端
					let data = response.data;
					let areaArr = []; //区域集合
					let numberArr = { //机构数量集合
						plan: [],
						now: [],
						new: []
					};
					for(let i in data) {
						areaArr.push(i);
	
						numberArr.plan.push(data[i].number.plan);
						numberArr.now.push(data[i].number.now);
						numberArr.new.push(data[i].number.new);
					}
					//配置机构数量图表
					let type = "bar";
					let label = {
						normal: {
		                    show: true,
		                    position: 'inside'
		                }
					}
					const option = {
						tooltip: {
							trigger: 'axis',
							axisPointer: {
								type: 'shadow'
							}
						},
						grid: {
							top: '15%',
							bottom: '10%',
						},
						legend: {
							data: ['计划中', '现有', '新增'],
						},
						yAxis: {
							type: 'value',
							max: 40
						},
						xAxis: {
							type: 'category',
							data: areaArr,
						},
						series: [{
							type: type,
							name: '计划中',
							label: label,
							data: numberArr.plan
						}, {
							type: type,
							name: '现有',
							stack: 'now',
							label: label,
							data: numberArr.now
						}, {
							type: type,
							name: '新增',
							stack: 'now',
							label: label,
							data: numberArr.new
						}]
					};
	
					number.setOption(option);
				})
			})
			axios.interceptors.request.use(config =>{
				return config
			})
			axios.interceptors.response.use(response =>{
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