<template>
	<div class="application">
		<Row :gutter="10">
			<Col span="11">
				<Card class="card mb_10" :bordered="false">
					<p slot="title">高危贫困人口智能排查</p>
					<div class="appTopHeight">
						<appZhinengPaicha></appZhinengPaicha>
					</div>
				</Card>
				<Card class="card" :bordered="false">
					<Row>
						<Col span="12">
							<areaRiskPross></areaRiskPross>
						</Col>
						<Col span="12">
							<div class="appRiskHeight">
								<areaRisk></areaRisk>
							</div>
						</Col>
					</Row>
				</Card>
			</Col>
			<Col span="13">
				<Card class="card mb_10" :bordered="false">
					<p slot="title">因病致贫人口预测</p>
					<div class="appTopHeight">
						<forecast @userInfo="changeUser($event)"></forecast>
					</div>
				</Card>
				<Card class="card" :bordered="false">
					<forecastInfo :userId="userId"></forecastInfo>
				</Card>
			</Col>
		</Row>
	</div>
</template>

<script>
	import appZhinengPaicha from './application/appZhinengPaicha.vue';
	import areaRiskPross from './application/areaRiskPross.vue';
	import areaRisk from './application/areaRisk.vue';
	import forecast from './application/forecast.vue';
	import forecastInfo from './application/forecastInfo.vue';
	export default {
		components: {
			appZhinengPaicha,
			areaRisk,
			areaRiskPross,
			forecast,
			forecastInfo
		},
		data() {
			return {
				msg: '高危人群预测',
				userId: 0
			}
		},
		methods: {
			changeUser: function(id){
				this.userId = id;
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	.appTopHeight {
		height: 4.1rem;
	}
	
	.appRiskHeight {
		height: 5.4rem;
	}
	
	.appInfoHeight {
		height: 5.4rem;
	}
</style>