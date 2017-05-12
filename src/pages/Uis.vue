<template>
  <div class="uis">
    <goback></goback>
    <router-link to="/uis/buttons" class="uislink"><i class="icon icon-button"></i>Button 按钮</router-link>
    <router-link to="/uis/form" class="uislink"><i class="icon icon-form"></i>Form 表单</router-link>
    <router-link to="/uis/list" class="uislink"><i class="icon icon-list"></i>List 列表</router-link>
    <router-link to="/uis/list" class="uislink"><i class="icon icon-search"></i>Search 搜索</router-link>
    <router-link to="/uis/radio" class="uislink"><i class="icon icon-radio"></i>Radio, Checkbox</router-link>
    <router-link to="/uis/badge" class="uislink"><i class="icon icon-badge"></i>Badge 角标</router-link>
    <router-link to="/uis/cards" class="uislink"><i class="icon icon-card"></i>Card 卡片</router-link>
    <router-link to="/uis/accordion" class="uislink"><i class="icon icon-accordion"></i>Accordion 折叠面板</router-link>
    <router-link to="/uis/progress" class="uislink"><i class="icon icon-progress"></i>Progress Bar 进度条</router-link>
    <router-link to="/uis/tabs" class="uislink"><i class="icon icon-tab"></i>Tab bar 选项卡</router-link>
    <router-link to="/uis/counter" class="uislink"><i class="icon icon-counter"></i>Counter 计数器</router-link>
    <router-link to="/uis/feedback" class="uislink"><i class="icon icon-feedback"></i>Feedback 操作反馈</router-link>
    <router-link to="/uis/stepbar" class="uislink"><i class="icon icon-step"></i>stepbar 步骤条</router-link>
    <router-link to="/uis/timeline" class="uislink"><i class="icon icon-timeline"></i>timeline 时间轴</router-link>
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
    .icon{
      float: left;
      background: #f3f3f3;
      .mt(10);
      .mr(15);
      .width(50);
      .height(50);
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