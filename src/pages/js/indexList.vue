<template>
  <div class='indexListContainer'>
  	<div class="index-list js">
		<goback></goback>
  	</div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/config';
.js{
  .pt(90);
}
</style>
<script>
import goback from '../../components/goback'
import AiIndexList from '../../components/IndexList/AiIndexList'
export default {
  components: {
    goback,
    AiIndexList
  }
}
</script>