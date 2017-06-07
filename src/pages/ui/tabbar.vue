<template>
  <div class="">
    <div class="radio uis">
      <goback></goback>
    </div>
    <!-- 按钮样式的tabBar -->
    <div class=''>
        <ai-tab-bar labelL='待办公文' labelM='已办公文' labelR='全部公文' isType='btn'>
        <!-- 左侧 -->
          <div class='tab-L' slot='tab-L'>
            <div class='tab-content'>
             <p>左侧-选项1的内容</p>
            </div>
            <div class='tab-content'>
              <p>左侧-选项2的内容</p>
            </div>
            <div class='tab-content'>
              <p>左侧-选项3的内容</p>
            </div>
          </div>
          <!-- 中间 -->
          <div class='tab-M' slot='tab-M'>
            <div class='tab-content'>
             <p>中间-选项1的内容</p>
            </div>
            <div class='tab-content'>
              <p>中间-选项2的内容</p>
            </div>
            <div class='tab-content'>
              <p>中间-选项3的内容</p>
            </div>
          </div>
          <!-- 右侧 -->
          <div class='tab-R' slot='tab-R'>
            <div class='tab-content'>
             <p>右侧-选项1的内容</p>
            </div>
            <div class='tab-content'>
              <p>右侧-选项2的内容</p>
            </div>
            <div class='tab-content'>
              <p>右侧-选项3的内容</p>
            </div>
          </div>
        </ai-tab-bar>
    </div>
    <!-- 文字样式的tabBar -->
      <div class="tab-container">
        <ai-tab-bar labelL='待办公文' labelM='已办公文' labelR='全部公文' isType='text'>
        <!-- 左侧 -->
          <div class='tab-L' slot='tab-L'>
            <div class='tab-content'>
             <p>左侧-选项1的内容</p>
            </div>
            <div class='tab-content'>
              <p>左侧-选项2的内容</p>
            </div>
            <div class='tab-content'>
              <p>左侧-选项3的内容</p>
            </div>
          </div>
          <!-- 中间 -->
          <div class='tab-M' slot='tab-M'>
            <div class='tab-content'>
             <p>中间-选项1的内容</p>
            </div>
            <div class='tab-content'>
              <p>中间-选项2的内容</p>
            </div>
            <div class='tab-content'>
              <p>中间-选项3的内容</p>
            </div>
          </div>
          <!-- 右侧 -->
          <div class='tab-R' slot='tab-R'>
            <div class='tab-content'>
             <p>右侧-选项1的内容</p>
            </div>
            <div class='tab-content'>
              <p>右侧-选项2的内容</p>
            </div>
            <div class='tab-content'>
              <p>右侧-选项3的内容</p>
            </div>
          </div>
        </ai-tab-bar>
    </div>
    <!-- 左侧样式的tabBar -->
    <div class="right-content-list">
        <ai-tab-bar isType='left'>
          
        </ai-tab-bar>
    </div>
  </div>
</template>
<script>
import goback from '../../components/goback'
import AiTabBar from '../../components/TabBar/AiTabBar'
export default {
  data() {
    return {
      list:new Array
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  components: {
    goback,
    AiTabBar
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/less/config';
.tab-content{
  .height(90);
  // .width(750);
  line-height: 90/75*1rem;
  .pl(45);
  background-color: white;
  border-bottom: solid 1px rgb(219, 219, 222);
  .fs(30);
  font-family: "Heiti SC";
  color: rgba(0, 0, 0, 0.871);
}
.tab-container{
  margin-bottom: 400px;
}
.right-content-list{
  .mb(320);
}
</style>
