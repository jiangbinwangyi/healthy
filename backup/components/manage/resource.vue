<template>
	<Carousel v-model="value1" dots="none">
        <CarouselItem>
           <resource-child class="resourceChart" area="Aarea"></resource-child>
        </CarouselItem>
        <CarouselItem>
           <resource-child class="resourceChart" area="Barea"></resource-child>
        </CarouselItem>
        <CarouselItem>
           <resource-child class="resourceChart" area="Carea"></resource-child>
        </CarouselItem>
        <CarouselItem>
           <resource-child class="resourceChart" area="Darea"></resource-child>
        </CarouselItem>
    </Carousel>
</template>

<script>
	import resourceChild from './resourceChild.vue'
	export default {
		name: 'resource',
		components: {
			resourceChild
		},
		data() {
			return {
				value1: 0,
			}
		},
		mounted() {
			
		},
		created() {},
		updated() {},
		methods: {}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	.resourceChart{
		width: 100%;
		height: 3.8rem;
	}
</style>