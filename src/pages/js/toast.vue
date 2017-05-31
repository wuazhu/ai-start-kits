<template>
  <div class="toast js">
    <goback></goback>

    <div class="content"> 

      <!--已完成-->
      <button @click="toggle()">已完成</button>
      <ai-toast 
      v-model="show1" 
      type="finished" 
      :time="1000" 
      position="top"
      name="slide-fade"
      >已完成</ai-toast>
      
      <!--LOADING-->
      <button @click="show2=true">LOADING</button>
      <ai-toast 
      v-model="show2" 
      type="loading" 
      :time="1000"
      name="fade"
      >数据加载中</ai-toast>
      
      <!--自动消失提示框-->
      <button @click="show3=true">自动消失提示框</button>
      <ai-toast 
      v-model="show3" 
      type="text" 
      :time="1000"
      name="slide-fade"
      >欢迎来到AIUI</ai-toast>
      
      <!--顶部提示-->
      <button @click="show4=true">顶部提示</button>
      <ai-toast 
      v-model="show4" 
      type="text" 
      position="toptoast" 
      :time="5000"
      @click.native="close"
      >
      5秒后自动消失，点我也可以消失</ai-toast>
      
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
       show2:false,
       show3:false,
       show4:false
    }
  },
  methods:{
    toggle(){
      this.show1=true;
    },
    close(){
      this.show4=false;
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