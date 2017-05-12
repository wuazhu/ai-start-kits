<template>
  <div class="accordions">
      <goback></goback>

      <h3>Default默认</h3>
      <accordion :list="list"></accordion>

      <h3>Insert(内嵌式)</h3>
      <accordion styles="insert" :list="list"></accordion>

      <h3>InCard(卡片式)</h3>
      <accordion styles="card" :list="list"></accordion>
  </div>
</template>

<script>
import accordion from '../components/Collapse/accordion';
import goback from '../components/goback';
export default {
  name: 'Accordions',
  components:{ goback,accordion},
  data() {
    return {
      list:new Array
    }
  },
  created(){
    this.$http.get('/api/getAccordions')
      .then( (res) => {
        //res.bodyText=JSON.parse(res.bodyText);
        let text=JSON.parse(res.bodyText);
        this.list=text;
        //console.log(text);
      }, (err) => {
        console.log(err)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
   @import '../assets/less/config.less';
   *{
    overflow: hidden;
   }
   .accordions{
    margin-top: 70/75*1rem;
   }
   h3{
    .fs30;
    .ml(32);
    .mt(32);
    line-height: 75/75*1rem;
   }
</style>