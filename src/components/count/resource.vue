<template>
	<Carousel v-model="value1" dots="none" @on-change="changeArea">
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
			this.changeArea(3);
		},
		created() {},
		updated() {},
		methods: {
			changeArea: function(e){
				let newArea;
				switch(e){
					case 3 : 
						newArea="A区";
						break;
					case 0 : 
						newArea="B区";
						break;
					case 1 : 
						newArea="C区";
						break;
					case 2 : 
						newArea="D区";
						break;	
				}
				this.$emit('changeArea',newArea)
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	.resourceChart{
		width: 100%;
		height: 2.4rem;
	}
</style>