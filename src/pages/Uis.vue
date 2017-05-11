<template>
  <div class="uis">
    <goback></goback>
    <router-link to="/uis/buttons" class="uislink">Button 按钮</router-link>
    <router-link to="buttons" class="uislink">Form 表单</router-link>
    <router-link to="buttons" class="uislink">List 列表</router-link>
    <router-link to="buttons" class="uislink">Search 搜索</router-link>
    <router-link to="buttons" class="uislink">Radio, Checkbox</router-link>
    <router-link to="buttons" class="uislink">Badge 角标</router-link>
    <router-link to="buttons" class="uislink">Card 卡片</router-link>
    <router-link to="buttons" class="uislink">Accordion 折叠面板</router-link>
    <router-link to="buttons" class="uislink">Progress Bar 进度条</router-link>
    <router-link to="buttons" class="uislink">Tab bar 选项卡</router-link>
    <router-link to="buttons" class="uislink">Counter 计数器</router-link>
    <router-link to="buttons" class="uislink">Feedback 操作反馈</router-link>
    <router-link to="buttons" class="uislink">stepbar 步骤条</router-link>
    <router-link to="buttons" class="uislink">timeline 时间轴</router-link>
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