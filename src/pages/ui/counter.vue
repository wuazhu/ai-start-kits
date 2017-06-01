<template>
  <div class="counter uis">
    <goback></goback>
    <div class="counter-wrap">
      counter 计数器
      <ai-counter></ai-counter>
    </div>
  </div>
</template>
<style lang="less">
@import '../../assets/less/config';
.counter-wrap{
  padding:30px;
}
</style>
<script>
import goback from '../../components/goback'
import AiCounter from '../../components/Counter/AiCounter'
export default {
  components: {
    goback,
    AiCounter
  }
}
</script>