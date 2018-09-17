<template>
	<div class="manage">
		<Row :gutter="10">
			<Col span="10">
				<Card class="card mb_10" :bordered="false">
		            <p slot="title">各病种历年投入扶贫资金额（万元）</p>
		            <div class="manageHeight">
		            	<year-money></year-money>
		            </div>
		        </Card>
		        <Card class="card" :bordered="false">
		            <p slot="title">健康扶贫额资金使用名录（万元）</p>
		            <div class="manageHeight">
		            	<money-list></money-list>
		            </div>
		        </Card>
			</Col>
			<Col span="14">
				<Card class="card" :bordered="false">
		            <p slot="title">健康扶贫资金额流向图</p>
		            <div class="flowHeight">
		            	<money-flow></money-flow>
		            </div>
		        </Card>
			</Col>
		</Row>
	</div>
</template>

<script>
	import yearMoney from './manage/yearMoney.vue';
	import moneyList from './manage/moneyList.vue';
	import moneyFlow from './manage/moneyFlow.vue';
	export default {
		components: {
			yearMoney,
			moneyList,
			moneyFlow,
		},
		data() {
			return {
			}
		},
		methods: {
		},
		mounted(){
		},
		created(){
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	.manageHeight{
		height: 4.46rem;
	}
	.flowHeight{
		height: 10.08rem;
	}
</style>