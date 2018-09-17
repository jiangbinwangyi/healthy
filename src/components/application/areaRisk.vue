<template>
	<div style="width:100%;height:100%;text-align: center;">
		<div style="width:100%;height:80%;" id="areaRisk"></div>
		<Button type="primary" @click="riskModa = true">下发到各区域</Button>
		<Modal
	        v-model="riskModa"
	        title="下发提示"
	        cancel-text= ""
	        @on-ok="ok">
	        <p>高危人口列表已下发到各区域！</p>
	    </Modal>
	</div>
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
		mounted() {
			axios.get('./static/application.json').then(response => {
				this.$nextTick(() => {
					let areaRisk = echarts.init(document.getElementById('areaRisk'), 'ecTheme');
					//数据筛选逻辑可以交给后端
					let data = response.data;
					let riskPercent = [];
					data.area.forEach((v,i)=>{
						riskPercent.push(data.risk[i].risk)
					})

					//配置机构数量图表
					const option = {
						tooltip: {
					        trigger: 'axis',
						},
						radar: [
					        {
					            indicator: [
					            	{text: "A区",max: 10000},
					            	{text: "B区",max: 10000},
					            	{text: "C区",max: 10000},
					            	{text: "D区",max: 10000}
					            ],
					            center: ['50%','50%'],
					            radius: '60%',
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
							name: "风险人数",
							type: 'radar',
							tooltip: {
				                trigger: 'item',
				            },
							itemStyle: {normal: {areaStyle: {type: 'default'}}},
							data: [{
								value: riskPercent
							}]
						}]
					};
	
					areaRisk.setOption(option);
					window.addEventListener('resize', function () {
						areaRisk.resize();
					})
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
		watch: {},
		methods: {
			ok: function(){}
        }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

</style>