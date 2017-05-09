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
.worning{
  color: white;
  text-align: center;
  margin: 0 auto;
  padding-top:4%;
  width: 750/75 * 1rem;
  height: 74/75 * 1rem;
  background-image: url(../../assets/img/form/worning.png);
}
</style>
