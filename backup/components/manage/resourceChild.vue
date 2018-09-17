<template>
    <div width="100%" height="100%" :id="area"></div>
</template>

<script>
	import axios from 'axios';
	import echarts from 'echarts';
	export default {
		name: 'resourceChild',
		data() {
			return {
			}
		},
		props: {
			area: String
		},
		mounted() {
			axios.get('/static/manage.json').then(response => {
				this.$nextTick(() => {
					let resource = echarts.init(document.getElementById(this.area));
					
					//数据筛选逻辑可以交给后端
					let data = response.data;
					let areaArr = []; //区域集合
					let resourceArr = { //机构数量集合
						doctor: [],
						bed: []
					}
					
					for(let r in data[this.area].resource){
						resourceArr.doctor.push(data[this.area].resource[r].doctor) ;
						resourceArr.bed.push(data[this.area].resource[r].bed);
					}
					
					//配置机构数量图表
					let type = "line";
					let label = {
						normal: {
		                    show: false,
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
							data: ['每千人口公共卫生专业人员数', '每千人口床位数'],
						},
						yAxis: {
							type: 'value',
							max: 3
						},
						xAxis: {
							type: 'category',
							data: [2015,2016,2017,2018],
						},
						series: [{
							type: type,
							name: '每千人口公共卫生专业人员数',
							label: label,
							data: resourceArr.doctor
						}, {
							type: type,
							name: '每千人口床位数',
							label: label,
							data: resourceArr.bed
						}]
					};
					resource.setOption(option);
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
		methods: {}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	.resourceChart{
		width: 100%;
		height: 3.8rem;
	}
</style>