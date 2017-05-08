<template>
    <div class="index">
      <img src="../assets/logo.png" width="50px" alt="">
      <span>i am index page</span>
      <div class="form">
        <div>
          <h2 class="form-title">表单</h2>
        </div>
      </div>
      <div id="box">
        <form method="post"action="login.php" class="content">
          <fieldset>
            <div class="input-border">
              <ai-label>qq:</ai-label>
              <ai-input type="text"name="qq"placeholder="请输入qq号"required="required" />
            </div>
            <div class="input-border">
              <ai-label><nobr>手机号:</nobr></ai-label>
              <ai-input type="text"name="mobile"placeholder="请输入手机号"required="required" :default-value="temp" :temp="temp" v-on:receive='fn' v-model='temp' class='input-qq'/>
              <ai-button btn-content='获取验证码' class='num button1normal'></ai-button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
</template>
<style lang="less">
// less配置文件
@import '../assets/less/config.less';
#app{
  background-color: #F6F6F6;
}
.index{
  .fs(30);
}
.title{//input名称
  .height(90);
  .fs(32);
  .ml(32);
  .pt(32);
  font-family: "Heiti SC";
  color: rgb(0, 0, 0);
}
.input-content{//输入框
  .mt(0);
  .height(90);
}
/* ”表单”标题样式*/
.form-title {
  text-align: left;
  .pt(32);
  .pb(32);
  .pl(34);
  .fs(28);
  font-family: "Heiti SC";
  color: rgba(0, 0, 0, 0.541);
}
/*分割线*/
// .input-border{
//   border-bottom: solid #B7B7B7 0.014rem;
// }
// .button1normal{
//   // float: right;
//   // .mt(82);
// }
</style>
<script>
import AiForm from "../components/AiForm.vue";
import AiLabel from "../components/AiLabel.vue";
import AiInput from "../components/AiInput.vue";
import AiButton  from "../components/AiButton.vue";
  export default {
    data() {
      return {
        edit: '这是父组件的数据edit',
        temp: ''//测试值
      }
    },
    methods:{
      fn(val){
        console.log('触发父级一个方法'+'值为'+val);
        this.temp++//操作父级的数据
      }
    },
    components:{
      AiForm,
      AiLabel,
      AiInput,
      AiButton
    }
  }
</script>
