<template>
    <div class="ai-button-wrap">
      <goback></goback>
      <ul>
        <li><ai-button btnContent="主操作按钮" class="primary"></ai-button></li>
        <li><ai-button btnContent="主操作按钮加载中状态"  class="primary loading"></ai-button></li>
        <li><ai-button btnContent="主操作按钮禁用状态"  class="primary disable"></ai-button></li>
      </ul>
      <ul>
        <li><ai-button btnContent="次操作按钮" class="secondary"></ai-button></li>
        <li><ai-button btnContent="次操作按钮加载中状态"  class="secondary loading"></ai-button></li>
        <li><ai-button btnContent="次操作按钮禁用状态"  class="secondary disable"></ai-button></li>
      </ul>
      <ul>
        <li><ai-button btnContent="幽灵按钮" class="ghost"></ai-button></li>
      </ul>
    </div>
</template>
<style lang="less">
@import '../assets/less/config';
.ai-button-wrap{
  padding: 0.5rem;
  .pt(88);
  background: #f6f6f6;
  ul{
    padding-top:0.5rem;
    li{
      padding:0.2rem 0;
    }
  }

}
</style>
<script>
import goback from '../components/goback'
import AiButton from '../components/Button/Button.vue'
  export default {
    components:{
      AiButton,
      goback
    },
    data() {
      return {
        btnContent:''
      }
    }
  }
</script>