<template>
	<div class="forecastInfo">
		<Card class="card">
			<p slot="title">个人信息</p>
			<div class="forecastInfoHeight">
				<forecastInfoChild :userInfo="userInfo"></forecastInfoChild>
			</div>
		</Card>
		<Card class="card">
			<p slot="title">个人画像</p>
			<Row>
				<Col span="12">
					<div class="forecastDarwHeight">
						<forecastInfoDraw :userDraw="userDraw"></forecastInfoDraw>
					</div>
				</Col>
				<Col span="12">
					<div class="forecastDarwHeight">
						<forecastInfoChart :userChart="userChart"></forecastInfoChart>
					</div>
				</Col>
			</Row>
		</Card>
	</div>
</template>

<script>
	import axios from 'axios';
	import echarts from 'echarts';
	import forecastInfoChild from './forecastInfoChild.vue';
	import forecastInfoDraw from './forecastInfoDraw.vue';
	import forecastInfoChart from './forecastInfoChart.vue';
	export default {
		components: {
			forecastInfoChild,
			forecastInfoDraw,
			forecastInfoChart
		},
		name: 'forecastInfo',
		data() {
			return {
				userInfo: {},
				userDraw: {},
				userChart: []
			}
		},
		props: {
			userId: {
				type: Number,
				default: 0
			}
		},
		mounted() {
			this.requestInfo(this.userId);
		},
		created() {},
		updated() {},
		methods: {
			requestInfo: function(id){
				axios.get('./static/application.json').then(response => {
					this.$nextTick(() => {
						let data = response.data.forecast[id];
						
						this.userInfo = data.info;
						
						this.userChart = data.chart;
						
						this.userDraw = data.draw
						this.userDraw.name= data.info['姓名']
					})
				})
			}
		},
		watch: {
			userId: function(){
				this.requestInfo(this.userId);
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	.forecastInfo .card.ivu-card{
		border: none;
		box-shadow: none;
		padding: 0;
	}
	.forecastInfoHeight{
		height: 1.08rem;
	}
	.forecastDarwHeight{
		height: 3.28rem;
	}
</style>