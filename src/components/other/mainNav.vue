<template>
	<Menu mode="horizontal" :active-name="activeNav" @on-select="tolink">
		<template v-for="item in nav">
			<MenuItem :name="item.name" class="main-nav-item">
				<span>{{item.meta.title}}</span>
			</MenuItem>
		</template>
	</Menu>
</template>

<script>
	export default {
		name: 'mainNav',
		data(){
			return {
				hide: true
			}
		},
		props: {
			nav: {
				type: Array,
				default: false
			},
			activeNav: {
				type: String,
			}
		},
		computed: {

		},
		methods: {
			tolink: function(name) {
				this.$router.push({
					name: name
				});
				this.hide = true;
			},
			mainNav: function(){
				this.hide = !this.hide;
			}
		},
		mounted() {
			
		},
	    updated () {
			
	    }
	};
</script>

<style lang="less">
</style>