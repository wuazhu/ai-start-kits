<template>
  <div class="more">
    <goback></goback>
    <div class="pic">
      <img src="../assets/logo2.png" alt="">
      <p> AIUI组件库 </p>
    </div>
    <div class="more-box">
      <ul>
        <li>
          <span><a href="Mailto:wuqz@asiainfo.com">有何高见</a></span>
          <span>></span>
        </li>
        <li>
          <span>版本</span>
          <span>1.0.0</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped lang="less">
@import '../assets/less/config';

.more{
  .pt(90);
  .width(750);
  background: #f1f1f1;
  .pic{
    .width(750);
    .mt(30);
    .height(420);
    text-align: center;
    .fs34;
    img{
      .width(290);
      .mt(50);
    }
    p{
      padding:20px;
      color: #707070;
    }
  }
  .more-box{

    ul{
      overflow: hidden;
    }
    li{
      .lh(100);
      .fs32;
      .height(100);
      background: #fff;
      border-bottom:1px solid #ddd;
      padding: 0 20px;
      color:#000;
    }
    span{
      float: left;
      &:nth-of-type(2){
        float: right;
        color: @gray;
      }
    }
  }
}
</style>
<script>
import goback from '../components/goback'
export default {
  components: {
    goback
  }
}
</script>