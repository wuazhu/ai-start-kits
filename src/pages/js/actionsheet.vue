<template>
  <div class="">
    <div class="actionsheet js">
      <goback></goback>
    </div>
    <div class="sheet-container">
      <div class="sheet-title">
        <textarea name="name" placeholder="标题：亲，请输入商品名称或想说的话" class='textarea-title'></textarea>
      </div>
      <div class='sheet-content'>
        <textarea name="name" placeholder="正文：亲，商品口味如何，服务满意吗？" class='textarea-title'></textarea>
        <div class='sheet-content-tip'><span>加油！还差15字</span></div>
      </div>
      <div class='sheet-img'>
        <!-- <input type="file" name="" value="上传图片" class='submitImg'> -->
        <div class="imgbox1">
          <div class="imgnum">
              <input type="file" class="filepath1" />
              <img src="../../assets/img/actionsheet/btn.png" class="img11" />
          </div>

        </div>
        <div class='submitTxT'>
          <span>上传图片</span>
        </div>
      </div>
      <div class='sheet-checkbox'>
        <input type="checkbox" name="" class='checkBtn'><span class='checkTXT'>我已阅读《海益宝关于在线发送话题的免责声明》</span>
      </div>
      <div class=''>
        <ai-actionsheet></ai-actionsheet>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/config';
.js{
  .pt(90);
}
.sheet-container{
  // .mb(80);
  background-color: rgb(244, 244, 244);
}
// 标题和内容样式
.title-container{
  .width(750);
}
.textarea-title{
  .width(680);
  .height(165);
  .fs28;
  font-family: "MicrosoftYaHei";
  padding: 10px 30px;
  .mt(20);
  // color: rgb(173, 173, 173);
  resize: none;
  outline: none;
  border: 0;
}
// 剩余字数提示
.sheet-content-tip{
  .width(750);
  .height(30);
  font-size: 24px;
  font-family: "MicrosoftYaHei";
  color: rgb(214, 214, 214); 
  background-color: white;
  text-align: right;
  .mt(-7);
  & span{
  .pr(10);
  }
}
// 上传图片样式
.sheet-img{
  .height(225);
  .width(750);
  .mt(20);
  background-color: white;
}
.submitImg{
  font-size: 36px;
  font-family: "MicrosoftYaHei";
  color: rgb(102, 102, 102);
}
 .imgbox,.imgbox1
        {
          float: left;
          .mr(20);
          .mt(30);
          .ml(30);
          .height(165);
          .width(165);
          overflow: hidden;
        }
        .imgnum input,.imgnum1 input {
            position: absolute;
            .width(170);
            .height(170);
            opacity: 0;
        }
        .imgnum img,.imgnum1 img {
            padding: 35px;
            .width(80);
            .height(80);
        }
        .close,
        .close1 {
          color: red;
          display: none;
        }
 /*input上传图片的背景*/       
 .imgnum{
  background-color: rgb(226, 226, 226);
  .width(170);
  .height(170);
 } 
 /*上传图片文字样式*/
 .submitTxT{
  font-size: 36px;
  font-family: "MicrosoftYaHei";
  color: rgb(102, 102, 102);
  & span{
    display: inline-block;
    .ml(28);
    .mt(82);
  }
 }
 /*checkbox区域div样式*/
 .sheet-checkbox{
  .ml(20);
  .mt(30);
  .pt(10);
 }
 /*checkbox 免责声明 文字样式*/
 .checkTXT{
  display: inline-block;
  font-size: 24px;
  font-family: "MicrosoftYaHei";
  color: rgb(173, 173, 173);
  .ml(20);
  .pt(15);
 }
 /*checkbox 按钮样式*/
 .checkBtn{
  .width(42);
  .height(42);

 }
</style>
<script>
import goback from '../../components/goback'
import AiActionsheet from '../../components/Actionsheet/Actionsheet'
export default {
  components: {
    goback,
    AiActionsheet
  }
}
</script>
