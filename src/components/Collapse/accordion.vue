<template>
  <div :class="['accordion',styles]">
      <div v-for="x in list">
        <collapse :title="x.title">
          <p>{{x.content}}</p>
        </collapse>
      </div>
  </div>
</template>

<script>
import collapse from './collapse';
export default {
  name: 'Accordion',
  components:{ collapse },
  props:{
    styles:{
      type:String,
      default:""
    },
    list:Array
  },
  data() {
    return {
      isActive:false
    }
  },
  methods:{
    
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../../assets/less/accordion.less";

</style>