<template>
  <section class="search-box">
    <label class="icon-q" for="q">搜索</label>
    <input type="text" id="q" class="text" name="search-input" placeholder="请输入商品内容"  v-model="search" v-on:keyup="singleSearch()" v-on:click.stop/>
    <!-- <span class="btn-del" name="btn-del">删除</span> -->
  </section>
</template>

<script>
export default {
}
</script>

<style lang="less">
@import '../../../src/assets/less/config.less';
// .search-box{
//   .width(712);
//   .height(56);
//   .ml(16);
// }
// .search-box .text{
//   .width(656);
//   .height(56);
//   .ml(54);
//   line-height:56/75*1rem;
//   background:#fff;
//   border:0;
//   // border-radius:10px;
//   border-top-right-radius: 10px;
//   border-bottom-right-radius: 10px;
//   outline: none;
//   .fs28;
//   // display:block;
// }
// .search-box .icon-q{
//   .width(56);
//   // .height(58);
//   .mb(0);
//   background:url(../../assets/img/form/icon-query.png) no-repeat center center;display:inline-block;overflow:hidden;position:absolute;;text-indent:-999em;
//   background-color: white;
//   border-top-left-radius: 10px;
//   border-bottom-left-radius: 10px;
// }
// .search-box .btn-cancel{
//   width:5rem;
//   line-height:3.3rem;
//   background:transparent;
//   cursor:pointer;
//   display:none;
//   font-size:1.4rem;
//   position:absolute;
//   right:-5rem;
//   top:0;
//   text-align:center;
// }
// .search-box .btn-del{
//   .width(28);
//   .height(28);
//   background:url(../../assets/img/form/icon-delete.png) no-repeat center center;background-size:1.5rem 1.5rem;cursor:pointer;display:none;overflow:hidden;position:absolute;top:0;right:0;text-indent:-999em;
// }
</style>
