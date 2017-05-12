<template>
  <div class="slider js">
    <goback></goback>
    i am slider page
  </div>
</template>
<style lang="less">
@import '../../assets/less/config';
.js{
  .pt(90);
}
</style>
<script>
import goback from '../../components/goback'
export default {
  components: {
    goback
  }
}
</script>