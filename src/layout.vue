<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <ai-nav></ai-nav>
  </div>
</template>
<style lang="less">


</style>
<script>
import AiNav from './components/navbar'
  export default {
    data() {
      return {}
    },
    components: {
      AiNav,
    }
  }
</script>