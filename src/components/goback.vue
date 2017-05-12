<template>
  <div class="goback"><span class="title-bar-left" @click="goback"><i class="iconfot icon-prev-page"></i>← 返 回</span><span class="title-bar-center">{{$route.name}}</span></div>
</template>
<style scope lang="less">
@import '../assets/less/config.less';
  .goback{
    .height(88);
    .lh(88);
    color: @blue;
    .fs30;
    border-bottom:1px solid @gray!important;
    background: #fff!important;
    padding: 0 20px!important;
    position: fixed;
    top: 0;left: 0;right: 0;
    z-index: 3;
    .title-bar-left{
      float: left;
      width: 30%;
    }
    .title-bar-right{
      float: right;
      width: 30%;
    }
    .title-bar-center{
      float: left;
      width: 40%;
      text-align: center;
    }
  }
</style>
<script>
import route from '../router'
export default {
  created(){
    console.log('my url: ', this.$route.fullPath)
  },
  methods: {
    goback(){
      route.go(-1)
    }
  }
}
</script>