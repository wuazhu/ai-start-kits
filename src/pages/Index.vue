<template>
    <div class="index">
      <img src="../assets/img/index/vue.jpg" class="index-banner" alt="">
      <div class="components">
        <a href="/buttons">
          <img src="../assets/img/index/button_icon@3x.png" alt="">
          <span>按钮</span>
        </a>
        <a href="/tilps">
          <img src="../assets/img/index/hint_icon@3x.png" alt="">
          <span>提示</span>
        </a>
        <a href="/dialog">
          <img src="../assets/img/index/pop_icon@3x.png" alt="">
          <span>弹窗</span>
        </a>
        <a href="/list">
          <img src="../assets/img/index/list_icon@3x.png" alt="">
          <span>列表</span>
        </a>
        <a href="/form">
          <img src="../assets/img/index/form_icon@3x.png" alt="">
          <span>表单</span>
        </a>
        <a href="/charts">
          <img src="../assets/img/index/chart_icon@3x.png" alt="">
          <span>图表</span>
        </a>
      </div>
      <div class="games">
        <a href="/game1">
          <img src="../assets/img/index/xspt@3x.png" alt="">
        </a>
        <a href="/game2">
          <img src="../assets/img/index/jfcj@3x.png" alt="">
        </a>
      </div>
      <div class="height"></div>
    </div>
</template>
<style lang="less">
// less配置文件
@import '../assets/less/config.less';
body{
  padding-bottom: 99px!important;
}
.height{
  height: 400px;
}
.index{
  .width(750);
  .fs(30);
  .index-banner{
    width: 100%;
    .height(400);
  }
  .games{
    background: #f6f6f6;
    padding: 15px 0 15px 15px;
    overflow: hidden;
    a{
      float: left;
      background: #fff;
      .width(350);
      .height(184);
      box-sizing: border-box;
      .lh(184);
      text-align: center;
      &:nth-of-type(2){
        margin-left: 15px;
      }
      img{
        width: 90%;
        vertical-align: middle;
      }
    }
  }
  .components{
    background: #fff;
    .height(500);
    a{
      float: left;
      .width(250);
      .pt(38);
      box-sizing: border-box;
      text-align: center;
      border-bottom:1px solid #e6e6e6;
        text-decoration: none;
      .height(250);
      &:nth-of-type(3n){
        border-left:1px solid #e6e6e6;
      }
      &:nth-of-type(3n-1){
        border-left:1px solid #e6e6e6;
      }
      span{
        display: block;
        .fs(24);
        text-decoration: none;
        color: #8e8e8e;
        .pt(32);
      }
      img{
        .width(120);
        .height(120);
      }
    }
  }
}

</style>
<script>
import AiNav from '../components/navbar'
  export default {
    components:{
      AiNav,
    },
    data() {
      return {

      }
    }
  }
</script>