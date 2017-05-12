<template>
  <div class="index-list js">
    <goback></goback>
    i am index-list page
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