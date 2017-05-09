<template>
  <div class='worning'
        v-show="show"
    >
    <h2>格式不对{{show}}</h2>
  </div>
</template>

<script>
export default {
  name:'alert',
  props:{
    temp:{
      type:Boolean,
      default:true //先默认显示 方便开发
    }
  },
  data(){
    return{
      show:this.temp//用父组件数据的值初始化子组件的数据
    }
  },
  methods:{
    isShow(){

    }
  }
}
</script>

<style lang="less" scope>
@import "../../assets/less/Alert.less";
</style>
