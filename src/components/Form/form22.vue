<template>
  <div class="form">
    <div>
      <h2 class="form-title">表单</h2>
    </div>
    <div class="content">
      <div class='title' >
        <span>qq：</span><br>
        <span>手机号：</span><br>
        <span>qq：</span>
      </div>
      <div  class="content" >
        <input type="text" name="qq-num" value="" required  placeholder='请输入QQ号'/><br>
        <input type="text" name="mobile-num" value="" required placeholder='请输入手机号'/><button class="num button1normal">获取验证码</button><br>
        <input type="text" name="qq-num" value="" required  placeholder='请输入QQ号'/>
      </div>
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
body{
  background-color: #F6F6F6;
}

.form-title {
  text-align: left;
  font-size: 28px;
  font-family: "Heiti SC";
  color: rgba(0, 0, 0, 0.541);
  line-height: 0.464;
}
span{
  text-align: left;
  font-size: 30px;
  font-family: "黑体";
  padding-left: 2.2%
}
.content{
  line-height: 45px;
  text-align: left;
  background-color: #FFFFFF;
  overflow: hidden;
}
.title{
  width: 10%;
  float: left;
  span{
    width: 60%;
    // margin-top: 0 ;
    // padding-left: 6%;
    font-size: 30px;
    font-family: "Heiti SC";
    color: rgb(0, 0, 0);
    line-height: 1.8;
  }
}
input{
  line-height: 55px;
  margin-top: 0 ;
  font-size: 30px;
  border: none;
  outline: none;
  overflow: hidden;
}
.input-qq{
  float: left;
  margin: 0 auto;
  padding: 0px;
}
.input-border{
  float: left;
  padding-left: 1.5%;
  border-bottom: solid #B7B7B7 1px;
}
.num {
  font-size: 26px;
  font-family: "Heiti SC";
  color: rgb(65, 157, 245);
  line-height: 1.154;
  background-color: white;
  -moz-transform: matrix( 0.99982671518641,0,0,1.00015305177178,0,0);
  -webkit-transform: matrix( 0.99982671518641,0,0,1.00015305177178,0,0);
  -ms-transform: matrix( 0.99982671518641,0,0,1.00015305177178,0,0);
  /*position: absolute;*/
  left: 537.292px;
  top: 362.641px;
  z-index: 83;
}
.button1normal {
  border-style: solid;
  border-width: 1px;
  border-color: rgb(65, 157, 245);
  border-radius: 6px;
  /*position: absolute;*/
  // left: 518px;
  // top: 313px;
  // width: auto;
  /*height: 66px;*/
  // z-index: 82;
}
</style>
