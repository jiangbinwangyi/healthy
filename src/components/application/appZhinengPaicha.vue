<template>
	<Row class="appZhineng">
		<Col span="12" v-for="(v,k,i) in zhinengData">
			<div class="appZhineng_icon"><img :src="require('../../assets/images/appZhi_icon'+(i+1)+'.png')" /></div>
			<div class="appZhineng_num">
				{{k}}
				<CountTo :endVal="v || 0" :mainStyle="mainStyle" :countStyle="countStyle">
					<span slot="rightText">&nbsp;人</span>
				</CountTo>
			</div>
		</Col>
	</Row>
</template>

<script>
	import axios from 'axios';
	import CountTo from '../other/CountTo.vue';
	export default {
		name: 'countNumber',
		components: {
	        CountTo
	    },
		data() {
			return {
				zhinengData: {},
				mainStyle: {
	                fontSize: '.219rem',
	                color: '#00fff6'
	            },
	            countStyle: {
	                fontSize: '.4381rem',
	                lineHeight: 1,
	                color: '#00fff6',
	                fontWeight: 'bold'
	            },
			}
		},
		props: {
			countData: Object
		},
		mounted() {
			axios.get('./static/count.json').then(response => {
				this.$nextTick(() => {
					this.zhinengData = response.data.zhineng;
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
	.appZhineng
	.appZhineng_icon,
	.appZhineng_num{
		display: inline-block;
		vertical-align: middle;
	}
	.appZhineng_icon{
		width: 1.189rem;
		img{width: 100%;}
	}
	.appZhineng .ivu-col{
		padding: .3rem 0;
	}
	.appZhineng_num{
		color: #fff;
		padding-left: .313rem;
	}
</style>