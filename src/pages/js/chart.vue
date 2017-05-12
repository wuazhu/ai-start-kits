<template>
  <div class="chart js">
    <goback></goback>
    i am chart page
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