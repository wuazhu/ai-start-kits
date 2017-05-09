<template>
  <div id="app">
    <keep-alive>
      <transition :name="transitionName">
        <router-view class="app-view"></router-view>
      </transition>
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
      return {
        transitionName: 'slide-left'
      }
    },
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length
        // console.log('to:',to,toDepth)
        const fromDepth = from.path.split('/').length
        // console.log('from:',from,fromDepth)
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    },
    components: {
      AiNav,
    }
  }
</script>