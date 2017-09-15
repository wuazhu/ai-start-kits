<template>
  <div class="stepbar uis">
    <goback></goback>
    <div class="stepbar-wrap" :active="active">
      <ai-stepbar steptext="buzhou1" description="哈哈哈哈哈哈哈哈哈哈哈哈哈哈">
        <slot steptext="buzhou1"></slot>
      </ai-stepbar>
      <ai-stepbar></ai-stepbar>
    </div>
  </div>
</template>

<script>
import goback from '../../components/goback'
import AiStepbar from '../../components/Stepbar/AiStepbar'
export default {
  components: {
    goback,
    AiStepbar
  },
  data(){
    return {
      active: 0,
      steps: [],
    }
  },
  watch: {
    steps(steps) {
      steps.forEach((child, index) => {
        child.index = index;
      });
    }
  }
}
</script>
<style lang="less">
@import '../../assets/less/config';
.stepbar-wrap{
  padding: 20px;
  text-align: center;
  overflow: hidden;
}
.stepbar.uis{
  background: #efeff4;
}
</style>