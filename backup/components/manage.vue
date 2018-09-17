<template>
	<div class="manage">
		<Row :gutter="10" style="margin-bottom: 0.189rem;">
			<Col :xs="24" :sm="12" :md="10">
				<Card class="card" :bordered="false">
		            <p slot="title">各区域医疗机构分布情况</p>
		            <div class="cardBox">
		            	<number></number>
		            </div>
		        </Card>
			</Col>
			<Col :xs="24" :sm="12" :md="14">
				<Card class="card" :bordered="false">
		            <p slot="title">设备投放及使用情况</p>
		            <div class="cardBox">
		            	<equip></equip>
		            </div>
		        </Card>
			</Col>
		</Row>
		<Row :gutter="10">
			<Col :xs="24" :sm="12" :md="12">
				<Card class="card" :bordered="false">
		            <p slot="title">全市帮扶资金使用情况</p>
		            <div class="cardBox">
		            	<money></money>
		            </div>
		        </Card>
			</Col>
			<Col :xs="24" :sm="12" :md="12">
				<Card class="card" :bordered="false">
		            <p slot="title">各区域医疗资源配置-A区</p>
		            <div class="cardBox">
		            	<resource></resource>
		            </div>
		        </Card>
			</Col>
		</Row>
	</div>
</template>

<script>
	import number from './manage/number.vue';
	import equip from './manage/equip.vue';
	import money from './manage/money.vue';
	import resource from './manage/resource.vue';
	export default {
		components: {
			number,
			equip,
			money,
			resource
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
	@import './main.less';
</style>