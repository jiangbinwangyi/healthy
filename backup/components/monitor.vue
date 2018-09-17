<template>
	<div class="main">
		<h1>{{ msg }}</h1>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: '医疗数据监控',
			}
		},
		methods: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	@import './main.less';
</style>