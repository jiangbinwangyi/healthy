<template>
	<Table border :columns="deviceHead" :data="deviceData"></Table>
</template>

<script>
	import axios from 'axios';
	export default {
		name: 'evolveRecord',
		data() {
			return {
				deviceHead:[
					{
						title: '区域',
						key: 'area',
						width: 40,
					},{
						title: '机构',
						key: 'hospital',
						width: 50
					},{
						title: '设备名称',
						key: 'name'
					},{
						title: '投入时间',
						key: 'date',
					},{
						title: '数量',
						key: 'number',
						width: 40
					},{
						title: '使用频次',
						key: 'times',
					},{
						title: '损坏/故障',
						key: 'bad',
					}
				],
				deviceData: []
			}
		},
		methods: {
		},
		mounted() {
			axios.get('./static/evolve.json').then(response => {
				this.$nextTick(() => {
					let data = response.data;

					this.deviceData = data.device;
				})
			})
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	.evolveRecordTable .ivu-table td{
		height: .4381rem;
	}
</style>