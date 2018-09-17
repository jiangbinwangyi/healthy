<template>
	<Row :gutter="10" class="count">
		<Col :md="6">
			<Card  class="card" :bordered="false">
				贫困人口总数<strong v-text="countData.count"></strong>
			</Card>
		</Col>
		<Col :md="6">
			<Card class="card" :bordered="false">
				计划脱贫人口<strong v-text="countData.plan"></strong>
			</Card>
		</Col>
		<Col :md="6">
			<Card class="card" :bordered="false">
				<p>健康扶贫人口<strong v-text="countData.healthy"></strong></p>
				<p>已帮扶人口<strong v-text="countData.helped"></strong></p>
			</Card>
		</Col>
		<Col :md="6">
			<Card class="card" :bordered="false">
				<p>医疗机构总数<strong v-text="countData.hospital"></strong></p>
				<p>医疗人员总数<strong v-text="countData.doctor"></strong></p>
			</Card>
		</Col>
	</Row>
</template>

<script>
	export default {
		name: 'count',
		data() {
			return {
			}
		},
		props: {
			countData: Object
		},
		mounted() {},
		created() {},
		updated() {},
		methods: {}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	.count .card{
		color: #fff;
		height: 3rem;
		font-size: .3rem;
		strong{
			display: block;
			font-size: 1rem;
			text-align: center;
		}
		p strong{
			font-size: .6rem;
		}
	}
</style>