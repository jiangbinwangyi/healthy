<template>
	<div style="width:100%;height:100%;" id="forecast"></div>
</template>

<script>
	import axios from 'axios';
	import echarts from 'echarts';
	import ecTheme from '@/assets/ecTheme.js';
	echarts.registerTheme('ecTheme', ecTheme);
	export default {
		name: 'areaRisk',
		data() {
			return {
                riskModa: false
            }
		},
		props: {
			userChart: {
				type: Array,
			}
		},
		mounted() {},
		created() {},
		updated() {},
		watch: {
			userChart: function(){
				this.newChart(this.userChart);
			}
		},
		methods: {
			newChart: function(value){
				let forecast = echarts.init(document.getElementById('forecast'), 'ecTheme');

				//配置机构数量图表
				const option = {
					radar: [
				        {
				            indicator: [
				            	{text: "居住情况",max: 100},
				            	{text: "收入情况",max: 100},
				            	{text: "劳动能力",max: 100},
				            	{text: "社保情况",max: 100},
				            	{text: "家庭情况",max: 100}
				            ],
				            center: ['50%','55%'],
				            radius: '75%',
				            name: {
					            formatter:'{value}',
					            textStyle: {
					                color:'#fff'
					            }
					        },
				            splitArea: {
					            areaStyle: {
					                color: ['rgba(0,0,0,0)']
					            }
					        },
					        splitLine: {
					            lineStyle: {
					                color: '#203f6d'
					            }
					        },
					        axisLine: {
					            lineStyle: {
					                color: '#203f6d'
					            }
					        },
				        }
				    ],
					series: [{
						name: "个人情况",
						type: 'radar',
						tooltip: {
			                trigger: 'item'
			            },
						itemStyle: {normal: {areaStyle: {type: 'default'}}},
						data: [{
							value: value
						}]
					}]
				};

				forecast.setOption(option);
				window.addEventListener('resize', function () {
					forecast.resize();
				})
			}
        }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
</style>