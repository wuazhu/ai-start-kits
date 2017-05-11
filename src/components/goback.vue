<template>
  <div class="goback"><span @click="goback"><i class="iconfot icon-prev-page"></i>← 返 回</span></div>
</template>
<style scope lang="less">
@import '../assets/less/config.less';
  .goback{
    .height(88);
    .lh(88);
    color: @green;
    .fs30;
    border-bottom:1px solid @gray!important;
    background: #fff!important;
    padding: 0 20px!important;
    position: fixed;
    top: 0;left: 0;right: 0;
    z-index: 3;
  }
</style>
<script>
import route from '../router'
export default {
  data(){
    return {

    }
  },
  methods: {
    goback(){
      route.go(-1)
    }
  }
}
</script>