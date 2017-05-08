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
@f-size: 0.36rem;
/*label标签的样式*/
.title{
    font-size: @f-size;
    font-family: "Heiti SC";
    color: rgb(0, 0, 0);
    // line-height: 1.8;
}
</style>
