<template>
	<div class="helpMoneyNumber">
		<Row :gutter="10">
			<Col :md="12" class="mb_10" v-for="item in areaMoney">
				{{item.area}}健康扶贫拨款
				<CountTo :endVal="item.money || 0" :mainStyle="mainStyle" :countStyle="countStyle">
					<span slot="rightText">万元</span>
				</CountTo>
			</Col>
		</Row>
		<Row :gutter="10" class="helpMoneyNumberBox2">
			<Col :md="12" v-for="item in typeMoney">
				{{item.type}}金额
				<CountTo :endVal="item.money || 0" :mainStyle="mainStyle" :countStyle="countStyle">
					<span slot="rightText">万元</span>
				</CountTo>
			</Col>
		</Row>
	</div>
</template>

<script>
	import axios from 'axios';
	import CountTo from '../other/CountTo.vue';
	export default {
		name: 'helpMoneyNumber',
		components: {
	        CountTo
	    },
		data() {
			return {
				areaMoney: [
					{area:'A区',money:0},
					{area:'B区',money:0},
					{area:'C区',money:0},
					{area:'D区',money:0},
				],
				typeMoney: [
					{type:'医保保险',money:0},
					{type:'健康体检',money:0},
					{type:'设备帮扶',money:0},
					{type:'疾病筛查',money:0},
				],
				mainStyle: {
	                fontSize: '.2rem',
	                color: '#fff',
	            },
	            countStyle: {
	                fontSize: '.4rem',
	                color: '#fff'
	            },
			}
		},
		props: {},
		mounted() {
			axios.get('./static/count.json').then(response => {
				this.$nextTick(() => {
					let data = response.data.helpMoney;
					
					//区域帮扶资金
					this.areaMoney.map((v,i)=>{
						this.$set(this.areaMoney[i],'money',data.areaMoney[i])
					})
					
					/*
					//帮扶资金用途
					this.typeMoney.map((v,i)=>{
						this.$set(this.typeMoney[i],'money',data.typeMoney[i])
					})*/
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
	.helpMoneyNumber{
		color: #02a6ed;
		font-size: .1877rem;
		&Box2{
			border-bottom: solid 1px #385275;
			padding-top: .1rem;
			margin-top: .1rem;
			color:#00b5ff;
			display: none; 
			/*暂时隐藏*/
		}
	}
</style>