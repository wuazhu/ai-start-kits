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
      <div class="container-left">
        <div class='div1'><ai-radio class="radio" v-model='radio1' label='1' :left='true'>radio</ai-radio><br/></div>
        <div class='div1'><ai-radio class="radio" v-model='radio1' label='2'>radio</ai-radio><br/></div>
        <div><ai-radio class="radio" v-model='radio1' label='3' disabled>radio</ai-radio></div>
      </div>
    </div>
<!-- 右对齐样式 -->
    <div class="radio-right">
      <div class="head-title">
        <p>图标右对齐</p>
      </div>
      <div class="container-right">
        <div class='div1'><ai-radio class="radio" v-model='radio2' label='4' :right='true'>radio</ai-radio><br/></div>
        <div class='div1'><ai-radio class="radio" v-model='radio2' label='5' :right='true'>radio</ai-radio><br/></div>
        <div><ai-radio class="radio" v-model='radio2' label='6' disabled :right='true'>radio</ai-radio></div>
      </div>
    </div>
    <!-- 列表样式 -->
    <div class="radio-list">
      <div class="head-title">
        <p>列表模式的单选框</p>
      </div>
      <div class="container-right">
        <div class='div1'><ai-radio class="radio" v-model='radio3' label='4' :right='true' :list='true'>radio</ai-radio><br/></div>
        <div class='div1'><ai-radio class="radio" v-model='radio3' label='5' :right='true' :list='true'>radio</ai-radio><br/></div>
        <div><ai-radio class="radio" v-model='radio3' label='6' disabled :right='true' :list='true'>radio</ai-radio></div>
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
.container-left{
  .ml(32);
  .mr(32);
  .mt(20);
  .mb(20);
  .pl(32);
  background-color: white;
  border: solid 1px rgb(219, 219, 222);
  border-radius: 10px;
  & div{
    .mt(20);
    .mb(20);
  }
  & .div1{
    .pb(20);
    border-bottom: solid 1px rgb(219, 219, 222);
  }
}
//右对齐样式
.container-right{
  .ml(28);
  .mr(28);
  .mt(20);
  .mb(20);
  .pl(32);
  background-color: white;
  border: solid 1px rgb(219, 219, 222);
  border-radius: 10px;
  & div{
    .mt(20);
    .mb(20);
  }
  & .div1{
    .pb(20);
    border-bottom: solid 1px rgb(219, 219, 222);
  }
}
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
      radio1:'1',
      radio2:'1',
      radio3:'1',
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
