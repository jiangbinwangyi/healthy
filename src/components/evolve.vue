<template>
	<div class="evolve">
		<Row :gutter="10">
	        <Col span="10">
	        	<Card class="card mb_10" :bordered="false">
					<p slot="title">贫困人口建档立卡情况</p>
					<Row>
						<Col span="13">
							<div class="evolveHeight">
								<evolve-record></evolve-record>
							</div>
						</Col>
						<Col span="11">
							<evolveRecordTable></evolveRecordTable>
						</Col>
					</Row>
				</Card>
				<Card class="card mb_10" :bordered="false">
					<p slot="title">贫困人口医保救助情况</p>
					<div class="evolveHeight">
						<help-insurance></help-insurance>
					</div>
				</Card>
				<Card class="card" :bordered="false">
					<p slot="title">家庭医生签约情况</p>
					<div class="evolveHeight">
						<familyDoctorTable></familyDoctorTable>
					</div>
				</Card>
	        </Col>
	        <Col span="14">
	        	<Card class="card mb_10" :bordered="false">
					<p slot="title">2018年度健康扶贫工作任务和项目进展</p>
					<evolvemain></evolvemain>
				</Card>
				<Card class="card" :bordered="false">
					<p slot="title">设备投放及使用情况</p>
					<Row>
						<Col span="13">
							<evolveDeviceTable></evolveDeviceTable>
						</Col>
						<Col span="11">
							<div class="deviceHeight">
								<evolveDevice></evolveDevice>
							</div>
						</Col>
					</Row>
				</Card>
	        </Col>
	    </Row>
	</div>
</template>

<script>
	import evolveRecord from "./count/helpRecord.vue";
	import evolveRecordTable from "./evolve/evolveRecordTable.vue";
	import helpInsurance from "./evolve/helpInsurance.vue";
	import familyDoctorTable from './evolve/familyDoctorTable.vue'
	import evolveDevice from './evolve/evolveDevice.vue'
	import evolveDeviceTable from './evolve/evolveDeviceTable.vue'
	import evolvemain from './evolve/evolvemain.vue'
	export default {
		components:{
			evolveRecord,
			evolveRecordTable,
			helpInsurance,
			familyDoctorTable,
			evolveDevice,
			evolveDeviceTable,
			evolvemain
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
	.evolveHeight{
		height: 2.6rem;
	}
	.helpEvolveHeight{
		height: 5.35rem;
	}
	.deviceHeight{
		height: 3.59rem;
	}
</style>