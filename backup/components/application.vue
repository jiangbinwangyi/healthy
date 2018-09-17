<template>
	<div class="application">
		<Row :gutter="10" style="margin-bottom: 0.189rem;">
			<Col :md="12">
				<Card class="card" :bordered="false">
					<p slot="title">高危贫困人口智能排查</p>
					<count></count>
				</Card>
			</Col>
			<Col :md="12">
				<Card class="card" :bordered="false">
					<p slot="title">因病致贫人口预测</p>
					<zhipin></zhipin>
				</Card>
			</Col>
		</Row>
		<Row :gutter="10" type="flex" align="top" justify="center">
			<Col :xs="24" :sm="12" :md="12" height="100%">
				<Card class="card" :bordered="false" style="height: 8.6rem;">
					<areafx></areafx>
				</Card>
			</Col>
			<Col :xs="24" :sm="12" :md="12">
				<Card class="card" :bordered="false" style="margin-bottom: 0.189rem; height: 4.2rem;">
					<p slot="title">因病致贫人口预测</p>
					<div class="cardBox">
						<fanpin></fanpin>
					</div>
				</Card>
			</Col>
		</Row>
	</div>
</template>

<script>
	import count from './application/count.vue';
	import areafx from './application/areafx.vue';
	import fanpin from './application/info.vue';
	import zhipin from './application/zhipin.vue';
	export default {
		components: {
			count,
			areafx,
			fanpin,
			zhipin
		},
		data() {
			return {
				msg: '高危人群预测',
			}
		},
		methods: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	@import './main.less';
	.forecastTop{
		height: 1.6rem;
	}
	.ivu-card-body{
		height: 100%;
	}
</style>