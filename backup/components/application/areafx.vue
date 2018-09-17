<template>
	<div style="width:100%;height:100%;" id="areafx"></div>
</template>

<script>
	import axios from 'axios';
	import echarts from 'echarts';
	export default {
		name: 'areafx',
		data() {
			return {
				mydata: [],
			}
		},
		mounted() {
			axios.get('./static/forecast.json').then(response => {
				this.$nextTick(() => {
					let areafx = echarts.init(document.getElementById('areafx'));
					//数据筛选逻辑可以交给后端
					let data = response.data;
					let areaArr = []; //区域集合
					let fengxianArr = [] //机构数量集合
					for(let i in data) {
						areaArr.push(i);
	
						fengxianArr.push(data[i].fengxian);
					}
					this.mydata = fengxianArr;
					//配置机构数量图表
					const option = {
						tooltip: {
					        trigger: 'axis'
					    },
						radar: [
					        {
					            indicator: [
					            	{text: "A区",max: 5500},
					            	{text: "B区",max: 5500},
					            	{text: "C区",max: 5500},
					            	{text: "D区",max: 5500}
					            ],
					            center: ['50%','50%'],
					            radius: '80%'
					        }
					    ],
						series: [{
							type: 'radar',
							tooltip: {
				                trigger: 'item'
				            },
							itemStyle: {normal: {areaStyle: {type: 'default'}}},
							data: [{
								value: fengxianArr
							}]
						}]
					};
	
					areafx.setOption(option);
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
		updated() {
		},
		watch: {
		},
		methods: {
			
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

</style>