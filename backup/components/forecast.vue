<template>
	<div class="forecast">
		<Row :gutter="10" style="margin-bottom: 0.189rem;">
			<Col :md="24">
				<count></count>
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
				<Card class="card" :bordered="false" style="height: 4.2rem;">
					<p slot="title">因病返贫人口预测</p>
					<div class="cardBox1">
						<zhipin></zhipin>
					</div>
				</Card>
			</Col>
		</Row>
	</div>
</template>

<script>
	import count from './forecast/count.vue';
	import areafx from './forecast/areafx.vue';
	import fanpin from './forecast/fanpin.vue';
	import zhipin from './forecast/zhipin.vue';
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