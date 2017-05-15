<template>
  <div class="accordions">
      <goback></goback>

      <h3>Default默认</h3>
      <accordion :accordion="accordion">
        <div v-for="x in list">
          <collapse :name="x.name">
            {{x.title}}
            <p slot="content">{{x.content}}</p>
          </collapse>
        </div>
      </accordion>

      <h3>Insert(内嵌式)</h3>
      <accordion :accordion="accordion" styles="insert">
        <div v-for="x in list">
          <collapse :name="x.name">
            {{x.title}}
            <p slot="content">{{x.content}}</p>
          </collapse>
        </div>
      </accordion>

      <h3>InCard(卡片式)</h3>
      <accordion :accordion="accordion" styles="card">
        <div v-for="x in list">
          <collapse :name="x.name">
            {{x.title}}
            <p slot="content">{{x.content}}</p>
          </collapse>
        </div>
      </accordion>
  </div>
</template>

<script>
import accordion from '../../components/Collapse/accordion';
import collapse from '../../components/Collapse/collapse';
import goback from '../../components/goback';
export default {
  name: 'Accordions',
  components:{ goback,accordion,collapse},
  data() {
    return {
      list:new Array,
      accordion:true,
      name:""
    }
  },
  created(){
    this.$http.get('/api/getAccordions')
      .then( (res) => {
        //res.bodyText=JSON.parse(res.bodyText);
        var text=JSON.parse(res.bodyText);
        this.list=text;
        //console.log(this.list[0]);
      }, (err) => {
        console.log(err)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
   @import '../../assets/less/config.less';
   .accordions{
    overflow: hidden;
    margin-top: 90/75*1rem;
   }
   h3{
    .fs30;
    .ml(32);
    .mt(32);
   }
</style>