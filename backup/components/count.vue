<template>
	<div class="count">
		<Row :gutter="10" style="margin-bottom: 0.189rem;">
			<Col span="12">
				<RadioGroup v-model="button1" type="button" @on-change="changeArea">
					<Radio label="all">全市</Radio>
					<Radio label="Aarea">A区</Radio>
					<Radio label="Barea">B区</Radio>
					<Radio label="Carea">C区</Radio>
					<Radio label="Darea">D区</Radio>
				</RadioGroup>
			</Col>
			<Col span="12">
				<Card class="card" :bordered="false" style="height: 7.2rem;">
					<p slot="title">2018年{{area}}扶贫工作进展</p>
					<div style="height: 100%;">
						<evolve :evolveData="evolveData"></evolve>
					</div>
				</Card>
			</Col>
		</Row>
		<Row :gutter="10">
			<Col span="24">
				<count-number :countData="childData"></count-number>
			</Col>
		</Row>
	</div>
</template>

<script>
	import evolve from './count/evolve.vue'
	import countNumber from './count/countNumber.vue'
	import axios from 'axios';
	export default {
		components: {
			evolve,
			countNumber
		},
		data() {
			return {
				area: '全市',
				button1: 'all',
				myData: {},
				evolveData: [],
				childData: {}
			}
		},
		mounted() {
			axios.get('/static/count.json').then(response => {
				this.$nextTick(() => {
					this.myData = response.data;
					this.changeArea('all');
				})
			})
		},
		methods: {
			changeArea: function(area,e) {
				if(event.srcElement.labels){
					this.area = event.srcElement.labels[0].innerText;
				}
				let data = this.myData;
				this.evolveData = []; //清空
				if(area == "all") {
					let countObj = {
						'2015': 0,
						'2016': 0,
						'2017': 0,
						'2018': 0
					};
					for(let i in data) {
						for(let a in data[i]) {
							if(!this.childData[a]){ //如果还未定义就先定义为0
								this.$set(this.childData,a,0)
							}
							this.childData[a] += data[i][a]
						}
						for(let b in data[i].evolve){ //计算总和
							countObj[b]+=data[i].evolve[b];
						}
					}
					for(let c in countObj){ //遍历
						this.evolveData.push(countObj[c]);
					}
				} else {
					for(let a in data[area]) {
						this.$set(this.childData,a,data[area][a])
					}
					for(let b in data[area].evolve){
						this.evolveData.push(data[area].evolve[b]);
					}
				}
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	@import './main.less';
	.ivu-card-body {
		height: 100%;
	}
</style>