<template>
  <nav class="footer">
    <router-link exact class="nav" active-class="active" to="/">
      <i class="icon icon-index"></i>
      <span class="nav-text">首页</span>
    </router-link>
    <router-link class="nav" active-class="active"  to="/uis">
      <i class="icon icon-uis"></i>
      <span class="nav-text">UI组件</span>
    </router-link>
    <router-link class="nav" active-class="active" to="/js">
      <i class="icon icon-js"></i>
      <span class="nav-text">JS组件</span>
    </router-link>
    <router-link class="nav" active-class="active" to="/more">
      <i class="icon icon-more"></i>
      <span class="nav-text">更多</span>
    </router-link>
  </nav>
</template>
<style lang="less">
@import '../assets/less/config.less';
  body{
    background: #f6f6f6;
  }
  .footer{
    position: fixed;
    .width(750);
    margin: 0 auto;
    bottom: 0;
    left: 0;
    right: 0;
    background-image:-webkit-linear-gradient(top, #fff, #f4f4f4);
    .height(98);
    .pt(12);
    border-top:1px solid #e7e7e7;
    display: flex;
    .nav{
      text-decoration: none;
      color: #838383;
      display: block;
      text-align: center;
      .fs(22);
      width: 100%;
      .icon{
        display: block;
        .width(40);
        .height(40);
        margin: 0 auto;
        &.icon-home{
          background: url('../assets/img/index/home@3x.png') center;
          background-size: 100% auto;
        }
        &.icon-uis{
          background: url('../assets/img/index/uis@3x.png') center;
          background-size: 100% auto;
        }
        &.icon-js{
          background: url('../assets/img/index/js@3x.png') center;
          background-size: 100% auto;
        }
        &.icon-more{
          background: url('../assets/img/index/more@3x.png') center;
          background-size: 100% auto;
        }
      }
      &.active{
        color: #419df5;
        .icon-index{
          background: url('../assets/img/index/home_active@3x.png') center;
          background-size: 100% auto;
        }
        .icon-uis{
          background: url('../assets/img/index/uis_active@3x.png') center;
          background-size: 100% auto;
        }
        .icon-js{
          background: url('../assets/img/index/js_active@3x.png') center;
          background-size: 100% auto;
        }
        .icon-more{
          background: url('../assets/img/index/more_active@3x.png') center;
          background-size: 100% auto;
        }
      }
    }
    .nav-text{
      display: block;
      margin: 0 auto;
      .pt(14);
    }
  }

</style>
<script>
export default {
  data() {
    return {
      isActive: false
    }
  }
}
</script>