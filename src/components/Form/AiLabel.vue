<template >
  <label :class="cssTitle">
    <slot>
    </slot>
  </label>
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
/*自定义css样式*/
@fs: 0.36rem;
@width:1.5rem;
/*label标签的样式*/
.title{
    width: @width;
    font-size: @fs;
    font-family: "Heiti SC";
    color: rgb(0, 0, 0);
}
</style>
