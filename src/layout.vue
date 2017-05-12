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
        if(to.path === '/'){
          this.transitionName = 'slide-right'
        }else{
          const toDepth = to.path.split('/').length
          // console.log('to:',to,toDepth)
          const fromDepth = from.path.split('/').length
          // console.log('from:',from,fromDepth)
          this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }

      }
    },
    created(){

    },
    components: {
      AiNav,
    }
  }
</script>