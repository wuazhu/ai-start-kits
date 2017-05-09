<template>
  <nav class="footer">
    <router-link class="nav" v-for="(item, index) in navItem" :to="item.path" key="index" active-class="active">
      <i class="icon" :class="item.icon"></i>
      <span class="nav-text">{{ item.text }}</span>
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
      font-size: 22px;
      width: 100%;
      .icon{
        display: block;
        width: 40px;
        height: 40px;
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
        .icon-home{
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
      navItem: [
        {
          path: '/',
          text: '首页',
          icon: 'icon-home'
        },
        {
          path: '/uis',
          text: 'UI组件',
          icon: 'icon-uis'
        },
        {
          path: '/js',
          text: 'JS组件',
          icon: 'icon-js'
        },
        {
          path: '/more',
          text: '更多',
          icon: 'icon-more'
        },
      ]
    }
  }
}
</script>