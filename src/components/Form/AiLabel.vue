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

<style lang="less" scoped>
@import "../../assets/less/Label.less";
</style>
