<template>
  <div class="progress uis">
    <goback></goback>
    i am progress page
  </div>
</template>
<style lang="less">
@import '../../assets/less/config';
</style>
<script>
import goback from '../../components/goback'

export default {
  components: {
    goback
  },
  data() {
    return {
      percent : 50
    }
  }
}
</script>