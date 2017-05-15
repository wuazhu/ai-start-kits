<template>
  <div :class="['collapse',activeClass]" >
  	<h1 class="header" @click="toggle">
  		<slot></slot>
  		<i :class="['icon',iconClass]"></i>
  	</h1>
    <div class="content" v-show="isActive">
    	<slot name="content"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Collapse',
  props:{
    name:{
        type: String
      }
  },
  data(){
  	return {
  		isActive:false 
  	}
  },
  computed:{
    activeClass() {
      return {
        'activeClass':this.isActive
      }
    },
    iconClass() {
      return {
        'icontop':!this.isActive,
        'icondown':this.isActive,
      }
    }
  },
  methods:{
  	toggle(){
      this.$parent.toggle({
        name: this.name,
        isActive: this.isActive
      });  		
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../../assets/less/collapse.less";

</style>