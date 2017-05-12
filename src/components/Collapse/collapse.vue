<template>
  <div :class="['collapse',{active:isActive}]" >
	<div class="header" @click="toggle()">
		<h3>{{title}}</h3>
		<i class="icon icontop"></i>
	</div>

    <div class="content" v-if="show">
    	<slot></slot>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'Collapse',
  props:{
  	title:String,
  	accordion: Boolean,
  },
  data(){
  	return {
  		show:false,
  		isActive:false
  	}
  },
  methods:{
  	toggle(el){
  		this.show=!this.show;
  		this.isActive=!this.isActive;
  		console.log(this.$parent.$el.querySelector(".active"));
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../../assets/less/collapse.less";

</style>