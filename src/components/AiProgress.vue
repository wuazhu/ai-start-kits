<template>
  <div class="progress">
    <div class="progress-wrap">
      <span class="bg"></span>
      <span class="percent"></span>
    </div>
    <div class="progress-percent">{{percent}}%</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      percent : 50
    }
  }
}
</script>