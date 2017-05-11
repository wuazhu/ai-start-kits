<template>
  <div class="progress-page">
    <goback></goback>
    这里是 progress 页面
  </div>
</template>
<script>
import goback from '../components/goback'
import AiProgress from '../components/AiProgress'

export default {
  components: {
    goback,
    AiProgress
  },
  data() {
    return {
      percent : 50
    }
  }
}
</script>