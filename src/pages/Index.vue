<template>
    <div class="index">
      <img src="../assets/img/index/2.jpg" class="index-banner" alt="">
      <div class="components">
        <router-link to="/uis/buttons">
          <img src="../assets/img/index/button_icon@3x.png" alt="">
          <span>按钮</span>
        </router-link>
        <router-link to="/js/tilps">
          <img src="../assets/img/index/hint_icon@3x.png" alt="">
          <span>提示</span>
        </router-link>
        <router-link to="/js/dialog">
          <img src="../assets/img/index/pop_icon@3x.png" alt="">
          <span>弹窗</span>
        </router-link>
        <router-link to="/uis/list">
          <img src="../assets/img/index/list_icon@3x.png" alt="">
          <span>列表</span>
        </router-link>
        <router-link to="/uis/form">
          <img src="../assets/img/index/form_icon@3x.png" alt="">
          <span>表单</span>
        </router-link>
        <router-link to="/uis/charts">
          <img src="../assets/img/index/chart_icon@3x.png" alt="">
          <span>图表</span>
        </router-link>
      </div>
      <div class="games">
        <router-link to="/game1">
          <img src="../assets/img/index/xspt@3x.png" alt="">
        </router-link>
        <router-link to="/game2">
          <img src="../assets/img/index/jfcj@3x.png" alt="">
        </router-link>
      </div>
      <!-- <div class="height"></div> -->
    </div>
</template>
<style lang="less">
// less配置文件
@import '../assets/less/config.less';
body{
  .pb(99)!important;

}
.app-view {
  // background: orange;
  position: absolute;
  transition: all .7s cubic-bezier(.55,0,.6,1.1);
}

.slide-left-enter, .slide-right-leave-active {
  opacity: 1;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 1;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}
.height{
  height: 400px;
}
.index{
  .width(750);
  margin: 0 auto;
  .fs(30);
  .index-banner{
    width: 100%;
    .height(400);
  }
  .games{
    background: #f6f6f6;
    .pd(15,15, 15,15);
    overflow: hidden;
    a{
      float: left;
      background: #fff;
      .mr(20);
      .width(350);
      box-sizing: border-box;
      .lh(184);
      text-align: center;
      &:nth-of-type(2){
        margin-right: 0;
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
        transitionName: 'slide-left'
      }
    },
    watch: {
      '$route' (to, from) {
        // console.log(to.path)
        const toDepth = to.path.split('/').length
        console.log('to:',to)
        const fromDepth = from.path.split('/').length
        console.log('from:',from)
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    }
  }
</script>