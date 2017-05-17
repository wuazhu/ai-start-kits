<template>
  <div class="Radio">
    <div class="radio uis">
      <goback></goback>
    </div>
    <!-- 默认左对齐 -->
    <div class="radio-left">
      <div class="head-title">
        <p>图标左对齐</p>
      </div>
      <div class="left">
        <div><ai-radio class="radio" v-model='radio' label='1' :left='true'>radio</ai-radio><br/></div>
        <div><ai-radio class="radio" v-model='radio' label='2'>radio</ai-radio><br/></div>
        <div><ai-radio class="radio" v-model='radio' label='3' disabled>radio</ai-radio></div>
      </div>
    </div>
<!-- 右对齐样式 -->
    <div class="radio-right">
      <div class="head-title">
        <p>图标右对齐</p>
      </div>
      <div class="right">
        <div><ai-radio class="radio" v-model='radio' label='4' :left='false'>radio</ai-radio><br/></div>
        <div><ai-radio class="radio" v-model='radio' label='5'>radio</ai-radio><br/></div>
        <div><ai-radio class="radio" v-model='radio' label='6' disabled>radio</ai-radio></div>
      </div>
    </div>
  </div>
</template>
<style lang="less">
@import '../../assets/less/config';
//标题样式
.head-title{
  .fs26;
  .ml(16);
  font-family: "MicrosoftYaHei";
  color: rgb(156, 156, 156);
  line-height: 0.5;
}
//左对齐样式
// .left{
//   .ml(32);
//   .mr(32);
//   .mt(16);
//   .mb(16);
//   background-color: white;
//   border: solid 1px rgb(219, 219, 222);
//   border-radius: 10px;
//   & div{
//     .ml(25);
//     .mt(20);
//     .pb(20);
//     border-bottom: solid 1px rgb(219, 219, 222);
//   }
// }
//右对齐样式
// .right{
//   .ml(32);
//   .mr(32);
//   .mt(16);
//   .mb(16);
//   background-color: white;
//   border: solid 1px rgb(219, 219, 222);
//   border-radius: 10px;
//   & div{
//     .ml(25);
//     .mt(20);
//     .pb(20);
//     border-bottom: solid 1px rgb(219, 219, 222);
//   }
// }
//组件字体样式
.radio{
  .fs30;
}
</style>
<script>
import goback from '../../components/goback'
import AiRadio from '../../components/Radio/AiRadio'
// import AiCheck from '../../components/Check/AiCheck'
export default {
  data(){
    return{
      radio:'1',
      true:true,
      false:false
    }
  },
  components: {
    goback,
    AiRadio
  }
}
</script>
