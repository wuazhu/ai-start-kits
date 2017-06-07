<template>
  <div class="title-container">
    <!-- <textarea name="name" placeholder="这里输入内容" class='textarea-title'></textarea> -->
    <ai-button btn-content='发布' class='submitBtn' @click.native="openBottom" v-show='show'></ai-button>
    <div class="windowModal" v-if="alert" @click="close"></div>
    <!-- 中间弹窗 -->
    <transition name='alert'>
      <div class='windowMid' v-show='showMid'>
        <div class='alertTitle'>
          <p>确认要取消发布吗？</p>
        </div>
        <div class='cancelBtn'>
          <input type="button" name="" value='取消' @click="cancelMid">
        </div>
        <div class='confirmBtn'>
          <input type="button" name="" value='确定' @click="confirmMid">
        </div>
    </div>
    </transition>
    <!-- 底部弹窗 -->
    <transition name='alert'>
      <div class='windowBottom' v-show='showBottom'>
        <div class='alertMessage'>
          <!-- 提示信息 -->
          <div class='alertMessageDiv'>
            <p>确认取消发布吗？</p>
          </div>
          <!-- 点击取消 -->
          <div class='alertBtnY'>
            <input type="button" name="" value='确认取消' @click="canceled">
          </div>
        </div>
        <!-- 点击继续 -->
        <div class='alertBtnN'>
          <input type="button" name="" value='继续发布' @click="continued">
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
import AiButton from "../Form/AiButton";
export default {
  data() {
    return{
      showMid: true,//中间弹窗默认显示
      showBottom: false,//底部弹窗默认隐藏
      show:true, //发布按钮显示
      alert:true//模态效果
    }
  },
  components: {
    AiButton
  },
  methods: {
    openMid(){
      console.log('中部');
      this.alert=true;//开启模态
      this.showMid=!this.showMid;
    },
    openBottom(){
      console.log('底部');
      this.showBottom=!this.showBottom;
      this.alert=true;//开启模态
      this.show=!this.showBottom
    },
    canceled(){
      console.log('取消发布');
      this.show=true;
      this.alert=false;//释放模态
      this.showBottom=false;
    },
    continued(){
      console.log('继续发布');
      this.show=true;
      this.alert=false;//释放模态
      this.showBottom=false;
    },
    confirmMid(){
      console.log('中间弹窗的确认')
      this.showMid=false;
      this.alert=false;//释放模态
    },
    cancelMid(){
      console.log("中间弹窗的取消")
      this.showMid=false;
      this.alert=false;//释放模态
    },
    close(){
      // this.alert=false;
    }
  },
  computed: {
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/less/Actionsheet.less";
</style>

