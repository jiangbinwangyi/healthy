<template>
	<div style="width:100%;height:100%;" id="familyDoctor"></div>
</template>

<script>
	import axios from 'axios';
	import echarts from 'echarts';
	import ecTheme from '@/assets/ecTheme.js';
	echarts.registerTheme('ecTheme', ecTheme);
	export default {
		name: 'familyDoctor',
		data() {
			return {}
		},
		props: {},
		mounted() {
			axios.get('./static/count.json').then(response => {
				this.$nextTick(() => {
					let familyDoctor = echarts.init(document.getElementById('familyDoctor'), 'ecTheme');

					let data = response.data;
					//配置机构数量图表
					const option = {
						grid: {
							top: '3%',
							bottom: '15%',
						},
						yAxis: [{
							type: 'value',
							max: 1600,
				            min: 0,
						}, {
							type: 'value',
							max: 16000,
           					min: 0,
						}],
						xAxis: [{
							type: 'category',
							data: data.area,
						}],
						tooltip:{
							formatter: "{a}\n{c}人"
						},
						series: [{
							name: "家庭医生人数",
							type: 'bar',
							yAxisIndex: 0,
							label: {
								normal: {
									show: true,
									position: 'top',
									color: "#fff"
								}
							},
							barWidth: '40%',
							data: data.familyDoctor.doctor,
						}, {
							name: "签约贫困人数",
							type: 'line',
							 yAxisIndex: 1,
							label: {
								normal: {
									show: true,
									position: 'right',
									color: "#fff"
								}
							},
							data: data.familyDoctor.person,
						}]
					};

					familyDoctor.setOption(option);
					window.addEventListener('resize', function() {
						familyDoctor.resize();
					})
				})
			})
		},
		created() {},
		updated() {},
		watch: {},
		methods: {}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

</style>