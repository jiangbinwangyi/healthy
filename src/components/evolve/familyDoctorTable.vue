<template>
	<Table border :columns="doctorTitle" :data="doctorData" class="evolveDoctorTable"></Table>
</template>

<script>
	import axios from 'axios';
	export default {
		name: 'familyDoctorTable',
		data() {
			return {
				doctorTitle: [
					{
						title: '区域',
						key: 'area',
						width: 50
					},
					{
						title: '家庭医生人数',
						key: 'doctor'
					},
					{
						title: '已签约贫困人口数',
						key: 'person'
					},
					{
						title: '问诊量（人次）',
						key: 'number'
					},
					{
						title: '工作饱和度',
						key: 'work'
					}
				],
				doctorData: []
			}
		},
		mounted() {
			axios.get('./static/evolve.json').then(response => {
				this.$nextTick(() => {

					//数据筛选逻辑可以交给后端
					let data = response.data;
					this.doctorData = data.doctorData;
					
				})
			})
			axios.interceptors.request.use(config => {
				return config
			})
			axios.interceptors.response.use(response => {
				return response
			})
		},
		created() {},
		updated() {},
		methods: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	.evolveDoctorTable .ivu-table td{
		height: .5476rem;
	}
</style>