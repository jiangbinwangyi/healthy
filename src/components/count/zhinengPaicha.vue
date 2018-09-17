<template>
	<Row :gutter="10" class="countNumber">
		<Col span="12" v-for="(v,k) in zhinengData">
			{{k}}
			<CountTo :endVal="v || 0" :mainStyle="mainStyle" :countStyle="countStyle">
				<span slot="rightText">&nbsp;人</span>
			</CountTo>
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
				zhinengData: "",
				mainStyle: {
	                fontSize: '.2rem',
	                color: '#00b4ff'
	            },
	            countStyle: {
	                fontSize: '.5rem',
	                color: '#00b4ff'
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
	.countNumber{
		color: #fff;
		font-size: .22rem;
	}
</style>