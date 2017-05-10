<template>
  <div class="search-div">
    <i class='icon-search'></i>
    <input type="text" name="" value="" class='search' placeholder='搜索'>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scope>
@import '../../../src/assets/less/config.less';
@wd:712;
@ht:58;
.search-div{
  background-color: #F6F6F6;
}
.search{
  border-radius: 10px;
  .width(@wd);
  .height(@ht);
  .ml(19);
  .mt(16);
  .mb(16);
  .mr(16);
}
</style>
