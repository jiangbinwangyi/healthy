<template>
	<div class="moneyFlow">
		<div class="flowCircle flowCenter">
			<div class="flowCircle flowCenterCircle1">
				<i-circle :percent="80" style="width: 100%;" stroke-color="#1f87e0" trail-color="#092e49">
				</i-circle>
				<div class="flowCircle flowCenterCircle2">
					<div class="flowCircle flowCenterRing2">
						<div class="flowCircle flowCenterText">
							总金额
							<p><strong>8,550</strong>万</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="flowText">
			<div v-for="(v,k,i) in flowData.flowIn" :class='"flowBox flowInBox flowInBox"+i' >
				{{k}}
				<p><strong>{{v}}</strong>万</p>
			</div>
			
			<div v-for="(item,i) in flowData.flowOut" :class='"flowBox flowOutBox flowOutBox"+i' >
				{{item.area}}
				<p><strong>{{item.count}}</strong>万</p>
				<ul>
					<li v-for="(v,k) in item.list">{{k}} {{v}}</li>
				</ul>
			</div>
		</div>
		
		<div class="flowAnima">
			<div style="width:100%;height:100%;" id="moneyFlow"></div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import echarts from 'echarts';
	export default {
		name: 'moneyFlow',
		data() {
			return {
				flowData: "",
			}
		},
		mounted() {
			axios.get('./static/manage.json').then(response => {
				this.$nextTick(() => {
					//数据筛选逻辑可以交给后端
					this.flowData = response.data;

					let moneyFlow = echarts.init(document.getElementById('moneyFlow'));
					//配置机构数量图表
					const targetCoord = [2, 2]
					const curveness = 0.2
					const linesData = []
					const linesData2 = []

					const item = {  //坐标位置
						name: "总金额",
						value: targetCoord,
						symbolSize: 100,
					}

					const items = [{
						name: "捐赠",
						value: [0, 3]
					}, {
						name: "其他",
						value: [1, 4]
					}, {
						name: "捐赠1",
						value: [4, 3]
					}, {
						name: "其他1",
						value: [3, 4]
					}]
					
					const items2 = [{
						name: "拨款1",
						value: [3, 0],
					}, {
						name: "募集1",
						value: [4,1]
					},{  //坐标位置
						name: "拨款",
						value: [1, 0]
					}, {
						name: "募集",
						value: [0,1]
					}, ]

					const mydata = items.concat([item])
					const mydata2 = items2.concat([item])
					
					items.forEach(function(el) {
						linesData.push([{
							coord: el.value
						}, {
							coord: targetCoord
						}])
					})
					
					items2.forEach(function(el) {
						linesData2.push([{
							coord: targetCoord
						}, {
							coord: el.value
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
					
					const links2 = items2.map((el) => {
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

					let option = {
						xAxis: {
							show: false,
							type: 'value'
						},
						yAxis: {
							show: false,
							type: 'value'
						},
						itemStyle: {
							color: 'rgba(33,76,121,0)',  
						},
						silent: true,
						series: [{
							type: 'graph',
							layout: 'none',
							coordinateSystem: 'cartesian2d',
							symbolSize: [100,30],
							z: 3,
							lineStyle: {
								normal: {
									width: 1,
									shadowColor: 'none',
									color: '#2264ae'
								},
							},
							edgeSymbol: ['none', 'arrow'],
							edgeSymbolSize: 8,
							data: mydata,
							links: links,
						}, {
							type: 'lines',
							coordinateSystem: 'cartesian2d',
							z: 1,
							effect: {
								show: true,
								smooth: false,
								trailLength: 0,
								symbol: "arrow",
								color: '#2264ae',
								symbolSize: 12
							},
							lineStyle: {
								normal: {
									curveness: curveness,
									opacity: 0
								}
							},
							data: linesData
						},{
							type: 'graph',
							layout: 'none',
							coordinateSystem: 'cartesian2d',
							symbolSize: 60,
							z: 3,
							lineStyle: {
								normal: {
									width: 1,
									shadowColor: 'none',
									color: '#00fef4'
								},
							},
							edgeSymbol: ['arrow', 'none'],
							edgeSymbolSize: 8,
							data: mydata2,
							links: links2,
						}, {
							type: 'lines',
							coordinateSystem: 'cartesian2d',
							z: 1,
							effect: {
								show: true,
								smooth: false,
								trailLength: 0,
								symbol: "arrow",
								color: '#00fef4',
								symbolSize: 12
							},
							lineStyle: {
								normal: {
									curveness: -curveness,
									opacity: 0
								}
							},
							data: linesData2
						}]
					}

					moneyFlow.setOption(option);
					window.addEventListener('resize', function() {
						moneyFlow.resize();
					})
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
	.flowAnima {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		margin: auto;
		width: 7.5rem;
		height: 7.5rem;
	}
	
	.flowAnima canvas {
		width: 100%;
		height: 100%;
	}
	
	.flowCircle {
		position: absolute;
		margin: auto;
		right: 0;
		left: 0;
		top: 0;
		bottom: 0;
		border-radius: 50%;
	}
	
	.flowCenter {
		width: 4.0678rem;
		height: 4.0678rem;
		background: rgba(9, 46, 73, .2);
		box-shadow: 0 0 15px 0 rgba(58, 212, 240, .3) inset;
	}
	
	.flowCenterCircle1 {
		width: 72%;
		height: 72%;
		background: rgb(9, 46, 73);
	}
	
	.flowCenterCircle2 {
		width: 68%;
		height: 68%;
		background: #073a4f;
	}
	
	.flowCenterRing2 {
		width: 82%;
		height: 82%;
		background: -webkit-linear-gradient(#37b3f5, #1577d2);
		z-index: 8;
	}
	
	.flowCenterText {
		width: 82%;
		height: 82%;
		background: #073a4f;
		text-align: center;
		color: #fff;
		font-size: .18rem;
		padding-top: 12%;
		p {
			font-size: .3129rem;
			color: #00b4ff;
			strong {
				font-size: .3755rem;
			}
		}
	}
	
	.flowText {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 2;
		width: 100%;
	}
	
	.flowBox {
		position: absolute;
		left: 0;
		top: 0;
		padding: .1564rem .4694rem;
		display: inline-block;
		line-height: 1;
		p {
			font-size: .3129rem;
			color: #fff;
			padding-top: .1rem;
			strong {
				font-size: .3755rem;
			}
		}
	}
	
	.flowInBox{
		color: #00b4ff;
		background: #2264ae;
	}
	
	.flowInBox0 {
		left: 16%;
		top: 3.163rem;
	}
	
	.flowInBox1 {
		left: 28%;
		top: 1.7rem;
	}
	
	.flowInBox2 {
		left: 6.62rem;
		top: 1.86rem;
	}
	
	.flowInBox3 {
		left: 8.82rem;
		top: 3.26rem;
	}
	
	.flowOutBox{
		color: #00fff6;
		background: #1d4370;
	}
	
	.flowOutBox0{
		left: .7rem;
		top: 6.6rem;
	}
	.flowOutBox1{
		left: 3.3rem;
		top: 7.8rem;
	}
	.flowOutBox2{
		left: 6rem;
		top: 8rem;
	}
	.flowOutBox3{
		left: 8.6rem;
		top:7rem;
	}
	
	.flowOutBox ul{
		color: #fff;
		font-size: 12px;
		margin: 10px 0 0 0;
		padding-left: 15px;
	}
	.flowOutBox ul li{
		white-space:nowrap;
		line-height: 1.6;
	}
</style>