<template>
  <div class="testswitch">
    <input class="testswitch-checkbox" id="onoffswitch" type="checkbox">
      <label class="testswitch-label" for="onoffswitch">
        <span class="testswitch-inner" data-on="ON" data-off="OFF"></span>
        <span class="testswitch-switch"></span>
      </label>
  </div>
</template>

<script>
  export default {
    name: 'Switch'

  };
</script>
<style lang='less' scope>
@import "../../assets/less/Switch.less";
</style>
