<template>
    <div class="index">
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
              <ai-input type="text"name="mobile"placeholder="请输入手机号"required="required" :default-value="null" :temp="temp1" v-on:receive='fn' v-model='temp1' />
              <ai-button btn-content='获取验证码' class='num-btn'></ai-button>
            </div>
            <div class="input-border">
              <ai-label><nobr>手机号:</nobr></ai-label>
              <ai-input type="text"name="mobile"placeholder="请输入手机号"required="required" :default-value="null" :temp="temp1" v-on:receive='fn' v-model='temp1' />
              <ai-button btn-content='45s' class='num-btn' disabled></ai-button>
            </div>
          </fieldset>
          <fieldset>
            <div class="input-border">
              <label class="title">qq:</label>
              <input type="text"name="qq"placeholder="请输入qq号"required="required" />
            </div>
            <div class="input-border">
              <label class="title"><nobr>验证码:</nobr></label>
              <input type="text"name="mobile"placeholder="请输入验证码"required="required" />
              <img src="../../src/assets/img/form/num_img.png" alt="验证码" class="num_img">
            </div>
            <div class="input-border">
              <label class="title"><nobr>银行卡:</nobr></label>
              <input type="text"name="card" placeholder="请输入银行卡号"required="required" />
            </div>
          </fieldset>
        </form>
        <div>
          <p class="bottom-words">底部说明文字底部说明文字</p>
        </div>
        <div>
          <input type="submit" value="确定" name="ok" class="button-ok button-ok-font" />
        </div>
      </div>
      <div>
        <div>
          <h2 class="form-title">表单输入</h2>
        </div>
        <div id="box2">
          <form method="post"action="login.php" class="content">
            <fieldset>
              <div class="input-border">
                <label class="title">qq:</label>
                <input type="text"name="qq"placeholder="请输入qq号"required="required" />
                <!-- <img src="../../assets/img/form/shutdown.png" alt="关闭" class="shutdown"> -->
              <!--   <img src="../../assets/shut.png" alt="叉子" class="shut"> -->
            </div>
              <div class="input-border">
                <label class="title"><nobr>验证码:</nobr></label>
                <input type="text"name="mobile"placeholder="请输入验证码"required="required"/>
                <img src="../../src/assets/img/form/num_img.png" alt="验证码" class="num_img">
              </div>
              <div class="input-border">
                <label class="title"><nobr>银行卡:</nobr></label>
                <input type="text"name="card" placeholder="请输入银行卡号"required="required" />
              </div>
              <div class="input-border">
                <label class="title"><nobr>设置:</nobr></label>
                <ai-switch class='switch' ></ai-switch>
              </div>
            </fieldset>
          </form>
          <div>
            <p class="bottom-words">底部说明文字底部说明文字</p>
          </div>
          <div class='bottom-div'>
            <input type="submit" value="确定" name="ok" class="button-ok button-ok-font" />
          </div>
        </div>
      </div>
      <div class="">
        <ai-alert :temp='temp'></ai-alert>
      </div>
    </div>
</template>
<style lang="less">
// less配置文件
@import '../assets/less/config.less';
body{
  background-color: #F6F6F6;
}
form label{
  display:inline-block;
  .width(75);
  text-align:left;
}
form fieldset{
  border:0;
  align:left;
  padding: 0;
  p{
    .mb(0);
    .mt(0);
    text-align: left;
  }
}
#app{
  background-color: #F6F6F6;
}
.index{
  .fs(30);
}
.title{//input名称
  .width(28);
  // .height(90);
  .fs(32);
  .ml(32);
  .pt(24);
  .pb(24);
  font-family: "Heiti SC";
  color: rgb(0, 0, 0);
  display:inline-block;
}
.input-content{//输入框
  .height(90);
}
/*获取验证码--按钮*/
.num-btn{
  .ml(64);
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
.input-border{
  .height(90);
  border-bottom: solid #B7B7B7 0.014rem;
}
/*验证码图片*/
.num_img {
  position: absolute;
  right: 0px;
  .width(219);
  .height(90);
}
/*表单form的样式*/
.content{
  line-height: 0.625rem;
  text-align: left;
  background-color: #FFFFFF;
  overflow: hidden;
}
/*底部说明文字*/
.bottom-words {
 .pl(32);
 .pt(16);
 .pb(16);
 .fs(28);
 font-family: "Heiti SC";
 color: rgb(113, 113, 113);
}
/*确定按钮*/
.button-ok{
  .ml(32);
  .mr(32);
  .mt(16);
  .mb(16);
  .pt(16);
  .pb(16);
  text-align: center;
  border-radius: 6px;
  background-color: rgb(65, 157, 245);
  .width(684);
  .height(81);
}
.button-ok-font{
  font-size: 0.472rem;
  font-family: "Heiti SC";
  color: rgb(255, 255, 255);
  line-height: 0.882;
}
/*解决nav 遮挡最后按钮的问题*/
.bottom-div{
  .mb(106);
}
/*swith组件样式*/
.switch{
  top:30px;
}
/*警告框样式*/
// .worning{
//   .width(750);
//   .height(74);
//   background-image: url(../src/assets/img/form/worning.png);
// }
</style>
<script>
import AiLabel from "../components/Form/AiLabel.vue";
import AiInput from "../components/Form/AiInput.vue";
import AiButton  from "../components/Form/AiButton.vue";
import AiAlert from "../components/Form/AiAlert";
import AiSwitch from "../components/Form/AiSwitch";
  export default {
    data() {
      return {
        edit: '这是父组件的数据edit',
        temp1: 1,
        temp: false//测试值
      }
    },
    methods:{
      fn(val){
        console.log('触发父级一个方法'+'值为'+val);
        this.temp1++//操作父级的数据
      }
    },
    components:{
      AiLabel,
      AiInput,
      AiButton,
      AiAlert,
      AiSwitch
    }
  }
</script>
