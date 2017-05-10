<template>
    <button class="ai-button">{{btnContent}}</button>
</template>

<script>
export default {
  //name: '',
  props: ['btnContent']

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
// less配置文件
@import '../../assets/less/button.less';
</style>