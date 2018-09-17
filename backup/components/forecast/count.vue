<template>
	<Row :gutter="10" class="count">
		<Col :md="6">
			<Card  class="card" :bordered="false">
				排查人数：{{paicha}}
			</Card>
		</Col>
		<Col :md="6">
			<Card class="card" :bordered="false">
				高风险人数：{{fengxian}}
			</Card>
		</Col>
		<Col :md="6">
			<Card class="card" :bordered="false">
				目前确诊人数：{{quezhen}}
			</Card>
		</Col>
		<Col :md="6">
			<Card class="card" :bordered="false">
				目前排除人数：{{paichu}}
			</Card>
		</Col>
	</Row>
</template>

<script>
	import axios from 'axios';
	export default {
		name: 'count',
		data() {
			return {
				paicha: 0,
				fengxian: 0,
				quezhen: 0,
				paichu: 0
			}
		},
		mounted() {
			axios.get('/static/forecast.json').then(response => {
				this.$nextTick(() => {
					this.paicha = response.data.Aarea.paicha;
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
		methods: {
			
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	.count .card{
		color: #fff;
		height: 1.6rem;
	}
</style>