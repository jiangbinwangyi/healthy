<template>
	<div class="count">
		<Row :gutter="10" class="mb_10">
			<Col span="8">
				<Card class="card" :bordered="false">
					<p slot="title">因病致贫/因病返贫历年人数对比（人数）</p>
					<div class="countHeight">
						<year-contrast></year-contrast>
					</div>
				</Card>
			</Col>
			<Col span="8">
				<Card class="card" :bordered="false">
					<p slot="title">健康帮扶资金使用情况</p>
					<Row :gutter="10">
						<Col span="10">
							<div class="countHeight">
								<help-Money></help-Money>
							</div>
						</Col>
						<Col span="14">
							<helpMoneyNumber></helpMoneyNumber>
						</Col>
					</Row>
					
				</Card>
			</Col>
			<Col span="8">
				<Card class="card" :bordered="false">
					<p slot="title">高危贫困人口智能排查</p>
					<div class="countHeight">
						<zhineng-paicha></zhineng-paicha>
					</div>
				</Card>
			</Col>
		</Row>
		<Row :gutter="10">
			<Col span="8">
				<Card class="card mb_10" :bordered="false">
					<p slot="title">各区域健康扶贫状况（人数）</p>
					<div class="countHeight">
						<help-person></help-person>
					</div>
				</Card>
				<Card class="card" :bordered="false">
					<p slot="title">贫困人口建档立卡情况（人数）</p>
					<div class="countHeight">
						<help-record></help-record>
					</div>
				</Card>
			</Col>
			<Col span="8">
				<Card class="card" :bordered="false">
					<p slot="title">区域扶贫工作总览</p>
					<div class="allNumberHeight">
						<all-number></all-number>
					</div>
				</Card>
			</Col>
			<Col span="8">
				<Card class="card mb_10" :bordered="false">
					<p slot="title">家庭医生及签约贫困人口情况</p>
					<div class="countHeight">
						<family-doctor></family-doctor>
					</div>
				</Card>
				<Card class="card" :bordered="false">
					<p slot="title">各区域医疗资源配置-{{resourceArea}}</p>
					<div class="countHeight">
						<resource @changeArea="changeArea($event)"></resource>
					</div>
				</Card>
			</Col>
		</Row>
	</div>
</template>

<script>
	import yearContrast from './count/yearContrast.vue'
	import zhinengPaicha from './count/zhinengPaicha.vue'
	import helpMoney from './count/helpMoney.vue'
	import helpMoneyNumber from './count/helpMoneyNumber.vue'
	import helpPerson from './count/helpPerson.vue'
	import allNumber from './count/allNumber.vue'
	import helpRecord from './count/helpRecord.vue'
	import familyDoctor from './count/familyDoctor.vue'
	import resource from './count/resource.vue'
	import axios from 'axios';
	export default {
		components: {
			yearContrast,
			resource,
			allNumber,
			helpMoney,
			helpMoneyNumber,
			helpPerson,
			helpRecord,
			familyDoctor,
			zhinengPaicha
		},
		data() {
			return {
				resourceArea: "A区"
			}
		},
		mounted() {
		},
		methods: {
			changeArea: function(e){
				this.resourceArea = e;
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	.countHeight{
		height: 2.59rem;
	}
	.allNumberHeight {
		height: 6.356rem;
	}
</style>