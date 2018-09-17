<template>
	<div class="forecastInfoDraw">
		<div class="flowCircle flowCenter">
			<div class="flowCircle flowCenterCircle1">
				<div class="flowCircle flowCenterCircle2">
					<div class="flowCircle flowCenterRing2" style="z-index: 0;"></div>
				</div>
			</div>
		</div>
		<div style="width:100%;height:100%;" id="forecastDraw"></div>
	</div>
</template>

<script>
	import axios from 'axios';
	import echarts from 'echarts';
	import ecTheme from '@/assets/ecTheme.js';
	echarts.registerTheme('ecTheme', ecTheme);
	export default {
		name: 'forecastDraw',
		data() {
			return {
				riskModa: false
			}
		},
		props: {
			userDraw: {
				type: Object,
			}
		},
		mounted() {
			
		},
		created() {},
		updated() {},
		watch: {
			userDraw: function(){
				this.newChart(this.userDraw)
			}
		},
		methods: {
			newChart: function(val){
				let forecastDraw = echarts.init(document.getElementById('forecastDraw'));
				
				const targetCoord = [1, 1.5]
				const curveness = 0.2
				const linesData = []

				const item = {  //坐标位置
					name: val.name+"\n因病致贫",
					value: targetCoord,
					symbolSize: 50,
					itemStyle: {
						color: "rgba(0,0,0,0)"
					}
				}

				const items = [{
					name: "住房 "+val.house,
					value: [0, 1]
				}, {
					name: "收入 "+val.money,
					value: [1, 0]
				}, {
					name: "家庭 "+val.family,
					value: [2, 1]
				}, {
					name: "劳动力 "+val.work,
					value: [0, 3]
				}, {
					name: "社保 "+val.shebao,
					value: [2, 3]
				}]

				const mydata = items.concat([item])
				
				items.forEach(function(el) {
					linesData.push([{
						coord: el.value
					}, {
						coord: targetCoord
					}])
				})

				const links = items.map((el) => {
					return {
						source: el.name,
						target: item.name,
						lineStyle: {
							normal: {
								curveness: curveness,
							}
						},
					}
				})

				//配置机构数量图表
				const option = {
					grid: {
						top: '12%',
						bottom: '8%',
						left: '20%',
						right: '20%',
					},
					xAxis: {
						show: false,
						type: 'value'
					},
					yAxis: {
						show: false,
						type: 'value'
					},
					silent: true,
					"series": [{
						type: 'graph',
						layout: 'none',
						coordinateSystem: 'cartesian2d',
						label: {
							normal: {
								show: true,
								textStyle: {
									fontSize: 12,
								},
								formatter: function(a,b,c,d){
									return a.name;
								}
							}
						},
						lineStyle: {
							normal: {
								width: 1,
								shadowColor: 'none',
								color: '#2264ae'
							},
						},
						itemStyle: {
							color: 'rgba(33,76,121,.7)',
						},
						symbolSize: [80, 30],
						symbol: 'rect',
						"data": mydata,
						links: links
					}, {
						type: 'lines',
						coordinateSystem: 'cartesian2d',
						z: 1,
						lineStyle: {
							normal: {
								curveness: curveness,
								opacity: 0
							}
						},
						data: linesData
					}]
				};

				forecastDraw.setOption(option);
				window.addEventListener('resize', function() {
					forecastDraw.resize();
				})
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	.forecastInfoDraw{
		width: 100%;
		height: 100%;
		.flowCircle.flowCenter{
			width: 1.4rem;
			height: 1.4rem;
		}
		#forecastDraw{
			position: absolute;
			left: 0;
			top: 0;
		}
	}
</style>