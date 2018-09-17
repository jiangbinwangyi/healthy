<template>
	<div style="width:100%;height:100%;">
		<Row style="height: 100%;">
			<Col span="12">
				<div class="insuranceText">
					<p>定点医疗机构住院费用</p>
					<CountTo :endVal="insuranceData.helped || 0" :mainStyle="mainStyle" :countStyle="countStyle">
						<span slot="rightText">&nbsp;万元</span>
					</CountTo>
				</div>
				<div class="insuranceText">
					<p>累计报销基本医保，大病保险</p>
					<CountTo :endVal="insuranceData.own || 0" :mainStyle="mainStyle" :countStyle="countStyle">
						<span slot="rightText">&nbsp;万元</span>
					</CountTo>
				</div>
			</Col>
			<Col span="12" style="height: 100%;">
				<div style="width: 100%;height: 100%;margin-top: -.3rem;" id="helpInsurance"></div>
			</Col>
		</Row>
	</div>
</template>

<script>
	import axios from 'axios';
	import echarts from 'echarts';
	import ecTheme from '@/assets/ecTheme.js';
	echarts.registerTheme('ecTheme', ecTheme);
	import CountTo from '../other/CountTo.vue';
	export default {
		name: 'helpInsurance',
		components: {
	        CountTo
	    },
		data() {
			return {
				insuranceData: {},
				mainStyle: {
	                fontSize: '.3rem',
	                color: '#00fff4',
	                lineHeight: 1.2
	            },
	            countStyle: {
	                fontSize: '.6rem',
	                color: '#00fff4'
	            },
			}
		},
		mounted() {
			axios.get('./static/evolve.json').then(response => {
				this.$nextTick(() => {
					let helpInsurance = echarts.init(document.getElementById('helpInsurance'), 'ecTheme');

					//数据筛选逻辑可以交给后端
					let data = response.data;
					this.insuranceData = data.help;
//					this.$set(this.insuranceData,'own',500)
					
					const option = {
						tooltip: {
							trigger: 'item',
							formatter: "{b}<br/>{c} ({d}%)"
						},
						series: [{
							type: 'pie',
							avoidLabelOverlap: false,
							label: {
								show: true,
								color: '#fff',
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
							type: 'pie',
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
						                		fontSize: 22,
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

					helpInsurance.setOption(option);
					window.addEventListener('resize', function() {
						helpInsurance.resize();
					});
				})
			})
		},
		created() {},
		updated() {},
		methods: {}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	.insuranceText{
		color: #eee;
		margin-bottom: .2rem;
	}
</style>