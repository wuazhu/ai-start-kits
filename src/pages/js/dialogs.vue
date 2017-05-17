<template>
  <div class="dialogs">
    <goback></goback>

    <div class="content"> 

      <!--警告消息框-->
      <button @click="dialogVisible1 = true">警告消息框</button>
      <ai-dialog :visible="dialogVisible1" @close="doClose()">
        <div slot="header">AIUI</div>
        <div>欢迎使用AIUI</div>
        <div slot="confirm" @click="close()">确定</div>
      </ai-dialog>
      
      <!--确认消息框-->
      <button @click="dialogVisible2 = true">确认消息框</button>
      <ai-dialog :visible="dialogVisible2" @close="doClose()">
        <div slot="header">AIUI</div>
        <div>欢迎使用AIUI</div>
        <div slot="cancel"  @click="close()">取消</div>
        <div slot="confirm" @click="close()">确定</div>
      </ai-dialog>
      

      <!--单行消息框-->
      <button @click="dialogVisible3 = true">单行输入框</button>
      <ai-dialog :visible="dialogVisible3" @close="doClose()">
        <div slot="header">AIUI</div>
        <div>请输入你对AIUI的评语：</div>
        <div class="input-box">
          <ai-input placeholder="性能好"></ai-input>
        </div>
        <div slot="cancel"  @click="close()">取消</div>
        <div slot="confirm" @click="close()">确定</div>
      </ai-dialog>
      
      <!--多个输入框-->
      <button @click="dialogVisible4 = true">多个输入框</button>
      <ai-dialog :visible="dialogVisible4" @close="doClose()">
        <div slot="header">Login</div>
        <div class="input-box">
          <ai-input placeholder=" 用户名："></ai-input>
          <ai-input placeholder=" 密   码："></ai-input>
        </div>
        <div slot="cancel"  @click="close()">取消</div>
        <div slot="confirm" @click="close()">确定</div>
      </ai-dialog>

      <!--弹出窗口-->
      <button @click="dialogVisible5 = true">弹出窗口</button>
      <ai-dialog  
      :visible="dialogVisible5"
       @close="doClose()"
       type="dialogWindow"
       :title="title"
       >
       <ul>
          <li v-for="x in text">{{x.msg}}</li>
       </ul>
      </ai-dialog>
      
      <!--弹窗样式-->
      <button @click="dialogVisible6 = true">弹窗样式</button>
      <ai-dialog 
      type="dialogPop" 
      :visible="dialogVisible6"
       @close="doClose()"
      >
        <div slot="header">AIUI</div>
        <div>欢迎使用AIUI：</div>
      </ai-dialog>

    </div>
  </div>
</template>

<script>
import goback from '../../components/goback';
import AiDialog from '../../components/dialog/AiDialog'
import AiButton from '../../components/Form/AiButton'
import AiInput from '../../components/Form/AiInput'
export default {
  name: 'dialogs',
  data () {
    return {
      dialogVisible1:false,
      dialogVisible2:false,
      dialogVisible3:false,
      dialogVisible4:false,
      dialogVisible5:false,
      dialogVisible6:false,
      title:"放开你的头脑",
      text:[
        {msg:'我走路大摇大摆 跨步向前迈'},
        {msg:'那放纵个性不改 挡我的人别过来'},
        {msg:'我轻轻把手拍拍 猎物上门来'},
        {msg:'你爱上我的感情 还是我的美丽'},
        {msg:'你站著三七步说 为什么爱你'},
        {msg:'So! 放开你的头脑 不必在乎什么'},
        {msg:'放开你的头脑 Funky Fun Funky'},
        {msg:'放开你的头脑 不必在乎什么'},
        {msg:'放开你的头脑 Funky Fun Funky'},
        {msg:'你说寂寞的人 太过多不好受'},
        {msg:'做做朋友无所谓 It\'s all right'},
        {msg:'想多不如做 错再说再重头'},
        {msg:'你饥饿如干柴 我热情如烈火'}
      ]
    }
  },
  components:{ AiDialog,AiButton,goback,AiInput },
  methods:{
    close(){
      this.dialogVisible1 =false;
      this.dialogVisible2 =false;
      this.dialogVisible3 =false;
      this.dialogVisible4 =false;
    },
    doClose(){
      this.dialogVisible5 =false;
      this.dialogVisible6=false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import '../../assets/less/config.less';
.content{
  width:100%;
  .pt(130);
  background-color: #f6f6f6;
  text-align: center;
}
button{
  .width(300);
  .height(100);
  .fs30;
}
.ai-dialog{
    .dialog-window{
    .mt(190);
  }
}
.input-box{
  .mt(20);
  .input-span{
    margin:0;
  }
  input{
    .width(473);
    .height(62);
  }
}

</style>