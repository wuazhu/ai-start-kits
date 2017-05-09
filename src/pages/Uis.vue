<template>
  <div class="uis">
    <goback></goback>
    i am  uis
  </div>
</template>
<style lang="less">
@import '../assets/less/config.less';
  .uis{
    height: 600px;
    .width(750);
    background: orange;
  }
</style>
<script>
import goback from '../components/goback'
export default{
  components:{
    goback
  },
  data() {
    return {

    }
  }
}
</script>