<template >
  <!-- <label :class="cssTitle">
    <slot>
    </slot>
  </label> -->
</template>

<script>
// Vue.component()
export default {
  name:"label",
  data(){
    return{
      cssTitle:'title'
    }
  }
}
</script>

<style lang="less" scope>
@import "../../assets/less/Label.less";
</style>
