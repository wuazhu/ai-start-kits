<template>
  <div class="goback"><span @click="goback"><i class="iconfot icon-prev-page"></i>返 回</span></div>
</template>
<style scope>
  .goback{
    height:80px;
    line-height: 80px;
    color: #42b983;
  }
</style>
<script>
import route from '../router'
export default {
  data(){
    return {

    }
  },
  methods: {
    goback(){
      route.go(-1)
    }
  }
}
</script>