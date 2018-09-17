<template>
  <div id="main" class="app-main">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
        
    };
	},
	mounted () {
		
	},
	beforeDestroy () {
	
	},
	methods: {
		
	}
}
</script>

<style>
html,body{
    width: 100%;
    height: 100%;
    background: #f0f0f0;
    overflow: hidden;
    margin: 0;
}
.app-main{
    width: 100%;
    height: 100%;
}
</style>