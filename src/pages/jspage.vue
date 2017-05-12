<template>
  <div class="uis">
    <goback></goback>
    <router-link to="/uis/buttons" class="uislink"><i class="icon icon-button"></i>Dialog 消息框</router-link>
    <router-link to="/uis/form" class="uislink"><i class="icon icon-form"></i>Toast(气泡提示)</router-link>
    <router-link to="/uis/list" class="uislink"><i class="icon icon-list"></i>操作列表</router-link>
    <router-link to="/uis/list" class="uislink"><i class="icon icon-search"></i>Picker（选择器）</router-link>
    <router-link to="/uis/radio" class="uislink"><i class="icon icon-radio"></i>slider (图片轮播)</router-link>
    <router-link to="/uis/radio" class="uislink"><i class="icon icon-radio"></i>Popover(弹出菜单)</router-link>
    <router-link to="/uis/radio" class="uislink"><i class="icon icon-radio"></i>Indexed list(索引列表)</router-link>
    <router-link to="/uis/radio" class="uislink"><i class="icon icon-radio"></i>Loading (加载)</router-link>
    <router-link to="/uis/radio" class="uislink"><i class="icon icon-radio"></i>Chart(图表)</router-link>
  </div>
</template>
<style lang="less">
@import '../assets/less/config.less';
  .uis{
    .pt(88);
    .width(750);
    .uislink{
      display: block;
      .lh(70);
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