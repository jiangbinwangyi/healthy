<template>
	<Row style="height: 100%;">
		<Col :md="10" style="height: 100%;">
			<div style="width:100%;height:100%;" id="allMoney"></div>
		</Col>
		<Col :md="14" style="height: 100%;">
			<div style="width:100%;height:100%;" id="areaMoney"></div>
		</Col>
	</Row>
</template>

<script>
	import axios from 'axios';
	import echarts from 'echarts';
	export default {
		name: 'money',
		data() {
			return {
			}
		},
		mounted() {
			axios.get('/static/manage.json').then(response => {
				this.$nextTick(() => {
					let allChart = echarts.init(document.getElementById('allMoney'));
					let areaChart = echarts.init(document.getElementById('areaMoney'));

					//数据筛选逻辑可以交给后端
					let data = response.data;
					let areaArr = []; //区域集合
					let moneyArr = {
						count: [],
						nouse: [],
						used: []
					}
					for(let i in data) {
						areaArr.push(i);
	
						moneyArr.count.push(data[i].money.count);
						moneyArr.nouse.push(data[i].money.count-data[i].money.used);
						moneyArr.used.push(data[i].money.used);
					}
					let allMoney = moneyArr.count.reduce((result,item) => {
					    return result+item;
					})
					let allUsed = moneyArr.used.reduce((result,item) => {
					    return result+item;
					})
					const allOption = {
					    tooltip: {
					        trigger: 'item',
					        formatter: "{a} <br/>{b}: {c} ({d}%)"
					    },
					    series: [
					        {
					            name:'访问来源',
					            type:'pie',
					            radius: ['70%', '90%'],
					            avoidLabelOverlap: false,
					            labelLine: {
					                normal: {
					                    show: false
					                }
					            },
					            data:[
					            	{value:allUsed, name:'已使用',
					                    label: {
							                show: true,
							                position: 'center',
							                formatter: "{num|{d}%}\n资金使用率",
							                color: '#fff',
							                rich: {
							                	num: {
							                		color: '#fff',
							                		lineHeight: 40,
							                		fontSize: 26,
							                	}
							                }
							            },
					                },
					                {value:allMoney-allUsed, name:'未使用',
						                label: {
							                show: false
							            },
					                }					                
					            ]
					        }
					    ]
					};
					
					//配置机构数量图表
					let type = "bar";
					let label = {
						normal: {
		                    show: true,
		                    position: 'inside',
		               }
					}
					const areaOption = {
						tooltip: {
							trigger: 'axis',
							formatter: function(a,b,c){
								return "总数："+(a[0].data+a[1].data)+"<br/>已使用："+a[0].data;
							},
							axisPointer: {
								type: 'shadow'
							}
						},
						grid: {
							top: '5%’',
							left: '14%',
						},
						legend: {
							data: [],
						},
						xAxis: {
							type: 'value',
						},
						yAxis: {
							type: 'category',
							data: areaArr,
						},
						series: [{
							type: type,
							stack: 'now',
							label: label,
							data: moneyArr.used
						}, {
							type: type,
							stack: 'now',
							label: label,
							data: moneyArr.nouse
						}]
					};
	
					allChart.setOption(allOption);
					areaChart.setOption(areaOption);
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