<template>
	<Table border :columns="evolveHead" :data="recordData" class="evolveRecordTable"></Table>
</template>

<script>
	import axios from 'axios';
	export default {
		name: 'evolveRecord',
		data() {
			return {
				evolveHead:[
					{
						title: '区域',
						key: 'area',
						width: 40,
					},{
						title: '已建档人数',
						key: 'recorded'
					},{
						title: '未建档人数',
						key: 'record'
					},{
						title: '完成率',
						key: 'percent',
						width: 50
					}
				],
				recordData: []
			}
		},
		methods: {
		},
		mounted() {
			axios.get('./static/count.json').then(response => {
				this.$nextTick(() => {
					let data = response.data;
					
					for(let i=0;i<data.area.length;i++){
						let obj = {}
						obj.area = data.area[i];
						obj.record = data.helpRecord.record[i]/10000+"万";
						obj.recorded = data.helpRecord.recorded[i]/10000+"万";
						obj.percent = parseInt(data.helpRecord.recorded[i]/(data.helpRecord.recorded[i]+data.helpRecord.record[i])*100)+"%";
						this.recordData.push(obj);
					}
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