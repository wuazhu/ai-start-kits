<template>
  <div class="js">
    <goback></goback>
    <router-link to="/js/dialog" class="jslink"><i class="icon icon-dialog"></i>Dialog 消息框</router-link>
    <router-link to="/js/toast" class="jslink"><i class="icon icon-toast"></i>Toast(气泡提示)</router-link>
    <router-link to="/js/actionsheet" class="jslink"><i class="icon icon-actionsheet"></i>操作列表</router-link>
    <router-link to="/js/picker" class="jslink"><i class="icon icon-picker"></i>Picker（选择器）</router-link>
    <router-link to="/js/slider" class="jslink"><i class="icon icon-slider"></i>slider (图片轮播)</router-link>
    <router-link to="/js/popover" class="jslink"><i class="icon icon-popover"></i>Popover(弹出菜单)</router-link>
    <router-link to="/js/indexlist" class="jslink"><i class="icon icon-index-list"></i>Indexed list(索引列表)</router-link>
    <router-link to="/js/loading" class="jslink"><i class="icon icon-loading"></i>Loading (加载)</router-link>
    <router-link to="/js/chart" class="jslink"><i class="icon icon-chart"></i>Chart(图表)</router-link>
  </div>
</template>
<style lang="less">
@import '../assets/less/config.less';
  .js{
    .pt(88);
    .width(750);
    .jslink{
      display: block;
      .lh(90);
      .height(100);
      box-sizing: border-box;
      color: @dark-gray;
      .fs28;
      text-decoration: none;
      padding: 5px 20px;
      border-bottom:1px solid #ddd;
      background: #fff;
      &:nth-of-type(1){
        margin-top: 20px;
        border-top:1px solid #ddd;
      }
    }
    .icon{
      float: left;
      // background: #f3f3f3;
      .mt(20);
      .mr(15);
      .width(50);
      .height(50);
    }
  }
  .icon-dialog{
    background: url('../assets/img/icons/dialog@3x.png') no-repeat center;
    background-size: 80% auto;
  }
  .icon-actionsheet{
    background: url('../assets/img/icons/actionsheet@3x.png') no-repeat center;
    background-size: 80% auto;
  }
  .icon-toast{
    background: url('../assets/img/icons/toast@3x.png') no-repeat center;
    background-size: 80% auto;
  }
  .icon-picker{
    background: url('../assets/img/icons/picker@3x.png') no-repeat center;
    background-size: 80% auto;
  }
  .icon-popover{
    background: url('../assets/img/icons/popover@3x.png') no-repeat center;
    background-size: 80% auto;
  }
  .icon-slider{
    background: url('../assets/img/icons/slider@3x.png') no-repeat center;
    background-size: 80% auto;
  }
  .icon-index-list{
    background: url('../assets/img/icons/index-list@3x.png') no-repeat center;
    background-size: 80% auto;
  }
  .icon-loading{
    background: url('../assets/img/icons/loading@3x.png') no-repeat center;
    background-size: 80% auto;
  }
  .icon-chart{
    background: url('../assets/img/icons/chart@3x.png') no-repeat center;
    background-size: 80% auto;
  }
</style>
<script>
import goback from '../components/goback'
export default{
  components:{
    goback
  },
  data() {
    return {

    }
  }
}
</script>