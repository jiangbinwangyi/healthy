<template>
	<div class="evolve">
		<Row gutter="10">
	        <Col :xs="2" :sm="4" :md="6" :lg="10">
	        	<Card class="card" :bordered="false" style="margin-bottom: 0.189rem;">
					<p slot="title">贫困人口建档立卡情况</p>
					<div style="height: 2.475rem;">
						<recourd></recourd>
					</div>
				</Card>
				<Card class="card" :bordered="false" style="margin-bottom: 0.189rem;">
					<p slot="title">贫困人口医保救助情况</p>
					<div style="height: 2.475rem;">
						<help></help>
					</div>
				</Card>
				<Card class="card" :bordered="false">
					<p slot="title">家庭医生签约情况</p>
					<div style="height: 2.475rem;">
						<evolve :evolveData="evolveData"></evolve>
					</div>
				</Card>
	        </Col>
	        <Col :xs="20" :sm="16" :md="12" :lg="14">
	        	<Card class="card" :bordered="false" style="margin-bottom: 0.189rem;">
					<p slot="title">2018年度健康扶贫工作任务和项目进展</p>
					<div style="height: 100%;">
						<Steps :current="1">
					        <Step title="一季度"></Step>
					        <Step title="二季度"></Step>
					        <Step title="三季度"></Step>
					        <Step title="四季度"></Step>
					    </Steps>
					</div>
				</Card>
				<Card class="card" :bordered="false" style="margin-bottom: 0.189rem;">
					<p slot="title">设备投放及使用情况</p>
					<div style="height: 100%;">
						<evolve :evolveData="evolveData"></evolve>
					</div>
				</Card>
	        </Col>
	    </Row>
	</div>
</template>

<script>
	import recourd from "./evolve/recourd.vue";
	import help from "./evolve/help.vue";
	export default {
		components:{
			recourd,
			help
		},
		data() {
			return {
			}
		},
		methods: {
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	.ivu-steps .ivu-steps-head,
	.ivu-steps .ivu-steps-title{
		background: none;
	}
	.ivu-steps .ivu-steps-head{
		margin-left: 10px;
	}
	.ivu-steps .ivu-steps-title{
		display: block;
		margin-top: 5px;
	}
	.ivu-steps-horizontal .ivu-steps-item:not(:first-child) .ivu-steps-head{
		margin: 0;
	}
</style>