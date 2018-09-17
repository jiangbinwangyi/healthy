<template>
	<div class="evolveMain">
		<div class="evolveStepHeight">
			<Steps :current="2">
				<Step title="一季度" icon="md-checkmark-circle"></Step>
		        <Step title="二季度" icon="md-checkmark-circle"></Step>
		        <Step title="三季度" icon="ios-arrow-dropright-circle"></Step>
		        <Step title="四季度" icon="ios-arrow-dropright-circle"></Step>
			</Steps>
		</div>
		<div class="evolveProjectHeight">
			<Table border :columns="projectTitle" :data="projectData"></Table>
		</div>
		<Row>
			<Col span="14">
				<Table border :columns="evolveTile" :data="evolveData"></Table>
			</Col>
			<Col span="10">
				<div class="evolveChartHeight">
					<evolveChart></evolveChart>
				</div>
			</Col>
		</Row>
	</div>
</template>

<script>
	import axios from 'axios';
	import evolveChart from './evolveChart.vue';
	export default {
		components: {
			evolveChart
		},
		name: 'familyDoctorTable',
		data() {
			return {
				projectTitle: [
					{
						title: '扶贫目标',
						key: 'target',
						render: (h, params) => {
                            return h('div', [
                            	h('p', params.row.target[0]),
                            	h('p', params.row.target[1]),
                            	h('p', params.row.target[2]),
                            ]);
                        }
					},
					{
						title: '扶贫任务',
						key: 'task',
						render: (h, params) => {
                            return h('div', [
                            	h('p', params.row.task[0]),
                            	h('p', params.row.task[1]),
                            ]);
                        }
					},
					{
						title: '扶贫进展',
						key: 'evolve',
						render: (h, params) => {
                            return h('div', [
                            	h('p', params.row.evolve[0]),
                            	h('p', params.row.evolve[1]),
                            	h('p', params.row.evolve[2]),
                            ]);
                        }
					}
				],
				projectData: [
					{
						target: [
							"1）完成2万贫困人员建立健康扶贫档案",
							"2）组织健康义务诊疗50次",
							"3）健康扶贫补助金发放500万",
							],
						task: [
							"1）一期工程确保1万特困人口建立健康福扶贫 档案，组织下下乡义诊25次，发放扶贫补助金 300万",
							"2）二期工程确保1万贫困人口建立健康福扶贫 档案，组织下下乡义诊25次，发放扶贫补助金 200万"
							],
						evolve: [
							"1）完成1.5万贫困人口的健康扶贫档案",
							"2）组织健康会诊20次，会诊2000人、 健康查体1.2万人",
							"3）扶贫补助金累计发放390万元，贫困 患者住院1600人次",
							]
					}
				],
				evolveTile: [
					{
						title: '项目名称',
						key: 'name'
					},{
						title:'项目周期',
						key: 'date',
						width: 56
					},{
						title: '资金投入',
						key: 'money',
						width: 56
					},{
						title: '人员投入',
						key: 'person',
						width: 56
					},{
						title: '项目进展',
						key: 'evolve',
						width: 56
					}
				],
				evolveData: [
					{
						name: "因病致贫人口健康扶贫档案",
						date: "12个月",
						money: "10万",
						person: "100人",
						evolve: "顺利进行"
					},{
						name: "健康义务诊疗活动",
						date: "12个月",
						money: "10万",
						person: "100人",
						evolve: "顺利进行"
					},{
						name: "健康扶贫补助金发放",
						date: "12个月",
						money: "10万",
						person: "100人",
						evolve: "顺利进行"
					}
				]
			}
		},
		mounted() {
			axios.get('./static/evolve.json').then(response => {
				this.$nextTick(() => {

					//数据筛选逻辑可以交给后端
					let data = response.data;
					this.doctorData = data.doctorData;
					
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
		methods: {}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	.evolveMain{
		.evolveStepHeight{
			height: .8rem;
			.ivu-steps.ivu-steps-horizontal{
				.ivu-steps-item.ivu-steps-custom,
				.ivu-steps-item.ivu-steps-custom,
				.ivu-steps-item.ivu-steps-custom{
					.ivu-steps-tail{
						padding: 0 0 0 6px;
						left: 8px;
						i{
							background: none;
							border-bottom: dashed 1px #1e87c1;
							margin-top: -1px;
						}
					}
					.ivu-steps-head{
						background: none;
						padding: 0;
						margin-left: 6px;
						.ivu-steps-head-inner{
							.ivu-steps-icon.ivu-icon{
								top: 0;
								height: auto;
								width: auto;
								color: #00fff6;
								font-size: 20px;
							}
						}
					}
					.ivu-steps-main{
						.ivu-steps-title{
							background: none;
							display: block;
							margin-top: 5px;
							font-size: 12px;
							color: #fff;
						}
					}
					&.vu-steps-status-finish{
						.ivu-steps-title{
							color: #fff;
						}
					}
					&.ivu-steps-status-process,
					&.ivu-steps-status-wait{
						.ivu-steps-title{
							color: #999;
						}
						.ivu-steps-head{
							.ivu-steps-head-inner{
								.ivu-steps-icon.ivu-icon{
									color: #00baff;
								}
							}
						}
					}
				}
			}	
		}
		.evolveProjectHeight{
			height: 2.24rem;
			overflow:hidden;
		}
		.evolveChartHeight{
			height: 2.3rem;
		}
	}
</style>