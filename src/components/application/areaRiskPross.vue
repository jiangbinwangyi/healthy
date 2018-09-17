<template>
	<div class="prossBox">
		<div class="prossItem" v-for="item in myData">
			<div class="prossTitle">{{item.area}}高风险人数</div>
			<Progress :percent="item.percent">{{item.risk}}人</Progress>
			<div class="prossInfo">
				已确诊人数：{{item.cfmd}}<br>
				已帮扶人数：{{item.helped}}
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		name: 'areafx',
		data() {
			return {
				myData: [],
			}
		},
		mounted() {
			axios.get('./static/application.json').then(response => {
				this.$nextTick(() => {
					//数据筛选逻辑可以交给后端
					let area = response.data.area;
					let data = response.data.risk;
					area.forEach((v,i)=>{
						this.myData.push({
							area: v,
							cfmd: data[i].cfmd,
							helped: data[i].helped,
							percent: parseInt(data[i].helped/data[i].risk*100),
							risk: data[i].risk
						})
					})
				})
			})
			axios.interceptors.request.use(config =>{
				return config
			})
			axios.interceptors.response.use(response =>{
				return response
			})
		},
		created() {},
		updated() {
		},
		watch: {
		},
		methods: {
			
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	.prossBox{
		.prossItem{
			margin-bottom: .14rem;
			.prossTitle{
				color:#00b4ff;
				padding-left: .1rem;
			}
			.prossInfo{
				font-size: 12px;
				color: #fff;
				padding-left: .1rem;
			}
			.ivu-progress{
				.ivu-progress-inner{
					background: #0b57a3;
					.ivu-progress-bg{
						background: #1762fb;
					}
				}
				.ivu-progress-text{
					color: #fff;
				}
			}
		}
	}
	
	/*暂时不用*/
	.prossMain{
		height: .3rem;
		border-radius: .3rem;
		position: relative;
		overflow: hidden;
	}
	.prossMain:before{
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		width: 60%;
		height: 100%;
		background: #1762fa;
		display: block;
	}
	.prossMain:after{
		content: "6300";
		position: absolute;
		right: 5%;
		height: 100%;
		top: 0;
		display: block;
		line-height: .3rem;
		color: #fff;
	}
</style>