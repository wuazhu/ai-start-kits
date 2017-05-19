<template>
  <div class="toast js">
    <goback></goback>

    <div class="content"> 

      <!--已完成-->
      <button @click="show1=true">已完成</button>
      <ai-toast v-if="show1" type="finished"></ai-toast>
      
      <!--LOADING-->
      <button @click="show2=true">LOADING</button>
      <ai-toast v-if="show2" type="loading"></ai-toast>
      

      <!--自动消失提示框-->
      <button>自动消失提示框</button>
      
      
      <!--顶部提示-->
      <button>顶部提示</button>


    </div>
  </div>
</template>

<script>
import goback from '../../components/goback';
import AiButton from '../../components/Form/AiButton'
import AiToast from '../../components/toast/AiToast'
export default {
  name: 'toast',
  components:{ AiButton,goback,AiToast },
  data() {
    return {
       show1:false,
       show2:false
    }
   
  }



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../../assets/less/config.less';
.toast{
  overflow: hidden;
}
.content{
  width:100%;
  .pt(130);
  background-color: #f6f6f6;
  .pl(80);
  
}
button{
  .width(300);
  .height(100);
  .fs30;
  position: relative;
  float: left;
}

</style>