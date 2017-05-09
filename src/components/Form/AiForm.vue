<template>
  <div class="form">
    <div>
      <h2 class="form-title">表单</h2>
    </div>
    <div id="box">
    <form method="post"action="login.php" class="content">
    <fieldset>
      <p class="input-border">
        <label class="title">qq:</label>
        <input type="text"name="qq"placeholder="请输入qq号"required="required" />
      </p>
      <p class="input-border">
        <label class="title"><nobr>手机号:</nobr></label>
        <input type="text"name="mobile"placeholder="请输入手机号"required="required"/>
        <button type="button" name="button" class="num button1normal">获取验证码</button>
      </p>

    </fieldset>
    <fieldset>
      <p class="input-border">
        <label class="title">qq:</label>
        <input type="text"name="qq"placeholder="请输入qq号"required="required" />
      </p>
      <p class="input-border">
        <label class="title"><nobr>验证码:</nobr></label>
        <input type="text"name="mobile"placeholder="请输入验证码"required="required"/>
        <button type="button" name="button" class="seconds button1normal_disabled">45s</button>
      </p>
    </fieldset>
    <fieldset>
      <p class="input-border">
        <label class="title">qq:</label>
        <input type="text"name="qq"placeholder="请输入qq号"required="required" />
      </p>
      <p class="input-border">
        <label class="title"><nobr>验证码:</nobr></label>
        <input type="text"name="mobile"placeholder="请输入验证码"required="required"/>
        <img src="../../assets/num_img.png" alt="验证码" class="num_img">
      </p>
      <p class="input-border">
        <label class="title"><nobr>银行卡:</nobr></label>
        <input type="text"name="card" placeholder="请输入银行卡号"required="required" />
      </p>
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
    <h2 class="form-title">表单输入</h2>
  </div>
  <div id="box2">
    <form method="post"action="login.php" class="content">
      <fieldset>
        <p class="input-border">
          <label class="title">qq:</label>
          <input type="text"name="qq"placeholder="请输入qq号"required="required" />
          <!-- <img src="../../assets/shutdown.png" alt="关闭" class="shutdown">
          <img src="../../assets/shut.png" alt="叉子" class="shut"> -->
        </p>
        <p class="input-border">
          <label class="title"><nobr>验证码:</nobr></label>
          <input type="text"name="mobile"placeholder="请输入验证码"required="required"/>
          <!-- <img src="../../assets/num_img.png" alt="验证码" class="num_img"> -->
        </p>
        <p class="input-border">
          <label class="title"><nobr>银行卡:</nobr></label>
          <input type="text"name="card" placeholder="请输入银行卡号"required="required" />
        </p>
      </fieldset>
    </form>
  </div>
  </div>
</template>

<script>
export default {
  name:"form",
  data(){
    return{
      qq:'',
      mobile:''
    }
  }
}
</script>

<style lang="less" scope>
@f-size:0.36rem;
body{
  background-color: #F6F6F6;
}
form label{
  display:inline-block;
  width:1rem;
  text-align:left;
  // margin-top: 1.25%;
}
form fieldset{
  border:0;
  align:left;
  padding: 0;
  p{
    // width: auto;
    // height: 1.25rem;
    margin-bottom:0;
    margin-top: 0;
    text-align: left;
  }
}
/* ”表单”标题样式*/
.form-title {
  text-align: left;
  padding-left: 0.1rem;
  font-size: 0.36rem;
  font-family: "Heiti SC";
  color: rgba(0, 0, 0, 0.541);
  // line-height: 0.464;
}
span{
  text-align: left;
  font-size: 0.36rem;
  font-family: "黑体";
  padding-left: 2.2%
}
.content{
  line-height: 0.625rem;
  text-align: left;
  background-color: #FFFFFF;
  overflow: hidden;
}
.title{
    width: 1.5rem;
    font-size: @f-size;
    font-family: "Heiti SC";
    color: rgb(0, 0, 0);
    // line-height: 1.8;
}
input{
  // height: 4%;
  line-height: 55/72 * 1rem;
  margin-top: 0.31rem ;
  font-size: @f-size;
  border: none;
  outline: none;
  overflow: hidden;
}
// .input-qq{
//   float: left;
//   margin: 0 auto;
//   padding: 0px;
// }
.input-border{
  padding-left: 0.3rem;
  border-bottom: solid #B7B7B7 1px;
}
.num {

  font-size: @f-size;
  font-family: "Heiti SC";
  color: rgb(65, 157, 245);
  line-height: 0.75rem;
  background-color: white;
  -moz-transform: matrix( 0.99982671518641,0,0,1.00015305177178,0,0);
  -webkit-transform: matrix( 0.99982671518641,0,0,1.00015305177178,0,0);
  -ms-transform: matrix( 0.99982671518641,0,0,1.00015305177178,0,0);
}
// .button1normal {
//   border-style: solid;
//   border-width: 0.014rem;
//   border-color: rgb(65, 157, 245);
//   border-radius: 0.083rem;
//   position: absolute;
//   right: 0.208rem;
//   top: 190/72 *1rem;
//   width: 2.347rem;
//   height: 0.916rem;
//   &:hover{
//     cursor: pointer;
//   }
//   &:active{
//     color: rgb(160, 206, 250);
//     background-color: white;
//     border-color: rgb(166, 206, 244);
//   }
// }
/*等待验证码倒计时*/
.seconds {
  font-size: 0.36rem;
  font-family: "Heiti SC";
  color: rgb(160, 206, 250);
  // line-height: 1.154;
  background-color: white;
  -moz-transform: matrix( 0.99982671518641,0,0,1.00015305177178,0,0);
  -webkit-transform: matrix( 0.99982671518641,0,0,1.00015305177178,0,0);
  -ms-transform: matrix( 0.99982671518641,0,0,1.00015305177178,0,0);
  /*position: absolute;*/
/*  left: 582.897px;
  top: 504.5px;
  z-index: 91;*/
}
/*已经发送验证码，按钮无法点击状态 */
.button1normal_disabled {
  border-style: solid;
  border-width: 1px;
  border-color: rgb(166, 206, 244);
  border-radius: 6px;
  position: absolute;
  right: 0.208rem;
  top: 5.177rem;
  width: 2.347rem;
  height: 0.916rem;
}
/*验证码图片*/
.num_img {
  position: absolute;
  right: 0px;
  width: 2.917rem;
  height: 1.25rem;
}
 /*底部说明文字*/
 .bottom-words {
  margin: 0.2rem 0 0.1rem 0;
  text-align: left;
  padding-left: 0.2rem;
  font-size: 0.36rem;
  font-family: "Heiti SC";
  color: rgb(113, 113, 113);
  // line-height: 0.464;
}
/*确定按钮*/
.button-ok{
  margin: 0.1rem 0 0.2rem 0;
  text-align: center;
  border-radius: 6px;
  background-color: rgb(65, 157, 245);
  width: 9.287rem;
  height: 1.25rem;
}
.button-ok-font{
  font-size: 0.472rem;
  font-family: "Heiti SC";
  color: rgb(255, 255, 255);
  line-height: 0.882;
}
/*关闭按钮*/
.shutdown{
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  position: absolute;
  right: 40px;
  top: 975px;
  width: 40px;
  height: 40px;
  z-index: 52;
}
/*叉子*/
.shut{
  background-color: rgb(255, 255, 255);
  position: absolute;
  right: 40px;
  top: 975px;
  width: 40px;
  height: 40px;
  z-index: 51;
}
</style>
