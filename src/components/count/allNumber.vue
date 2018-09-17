<template>
	<div style="width:100%;height:100%;" id="allNumber"></div>
</template>

<script>
	import axios from 'axios';
	import echarts from 'echarts';
	/*是否开启3D
	import 'echarts-gl'; */
	import ecTheme from '@/assets/ecTheme.js';
	echarts.registerTheme('ecTheme', ecTheme);
	export default {
		name: 'yearContrast',
		data() {
			return {}
		},
		props: {},
		mounted() {
			axios.get('./static/count.json').then(response => {
				this.$nextTick(() => {
					let allNumber = echarts.init(document.getElementById('allNumber'), 'ecTheme');
					let cityJson = require('./echartsgeojson/621100.json');
					echarts.registerMap('newMap', cityJson);
					
					let data = response.data;
					let geoCoordMap = {  //坐标
					    'A区': [104.62,35.54],
					    'B区': [105.08,35.11],
					    'C区': [104.12,35.04],
					    'D区': [104.48,34.65]
					};
					var convertData = function (data) {
			            var res = [];
					    for (var i = 0; i < data.length; i++) {
					        var geoCoord = geoCoordMap[data[i].name];
					        if (geoCoord) {
					            res.push({
					                name: data[i].name,
					                value: geoCoord.concat(data[i].value),
					                itemStyle: {
						                color: data[i].color,
						            },
					            });
					        }
					    }
					    return res;
			        };
					//配置机构数量图表
					const option = {
						geo: {
							map: 'newMap',
							left: 0, top: 0, right: 0, bottom: 0,
							itemStyle: {
								areaColor: '#6d91dd',
								borderColor: '#89adf9',
								borderWidth: 1,
								color: '#000',
							},
							label: {
								normal: {
									show: true,
									color: '#0b317c',
									position: 'inside'
								},
							},
							silent: true,
						},
						grid: {
							top: 0,
							bottom: 0,
							left: 0,
							right: 0
						},
						tooltip: {  //鼠标浮上tip弹框
							trigger: 'item',
							formatter: function (params) {
								let tStyle = "color:#00b3ff;font-size:14px;border-bottom:solid 1px #999;margin-bottom:5px;padding-bottom:5px;text-align:center;";
					            return '<div style="'+tStyle+'">'+params.name+'</div>' + 
					            ' 贫困人口总数 ' + params.value[2].person + "万" + 
					            ' <br>因病致贫人口 ' + params.value[2].ybzp + "万" + 
					            ' <br>建档立卡人数 ' + params.value[2].record + "万" + 
					            ' <br>已帮扶人口数 ' + params.value[2].helped + "万";
					            
					        },
					        textStyle: {
					        	fontSize: 12,
					        },
					        // 按照设计稿配置，不能鼠标跟随
//					        backgroundColor: 'rgba(0,0,0,0)',
//					        borderColor: '#16509a',
//					        borderWidth: 1,
					        padding: [5,5,10,5]
						},
						series: [{
							type: 'effectScatter',
               				coordinateSystem: 'geo',
				            showEffectOn: 'render',
				            rippleEffect: {
				                brushType: 'stroke'
				            },
				            hoverAnimation: true,
				            label: {
				                normal: {
				                    formatter: '{b}',
				                    position: 'bottom',
				                    show: false,
				                    fontSize: 16,
				                    color: '#fff'
				                }
				            },
				            itemStyle: {
				                normal: {
				                    color: '#f9c04f',
				                    shadowBlur: 5,
				                    shadowColor: '#333'
				                }
				            },
				            //symbol: 'pin',  //可设置为图片
				            symbolSize: 30,
							data: convertData(data.allNumber),
						}]
					};

					allNumber.setOption(option);
					window.addEventListener('resize', function () {
						allNumber.resize();
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