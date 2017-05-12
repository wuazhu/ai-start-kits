<template>
  <div class="card uis">
    <goback></goback>
    <card>
    	<span slot="title">{{title}}</span>
    	<h1 slot="strong">{{strong}}</h1>
    	<p>{{normal}}</p>
    	<span slot="subtitle">{{subtitle}}</span>
      <router-link to="/" slot="more">{{more}}</router-link>
    </card>
  </div>
</template>
<style lang="less">
@import '../../assets/less/config';
.card{
	margin-top: 30/75*1rem;
}
</style>
<script>
import card from '../../components/card/card'
import goback from '../../components/goback'
export default {
  name: 'cards',
  components:{ card,goback },
  data() {
    return {
      title:new String,
      strong:new String,
      normal:new String,
      subtitle:new String,
      more:new String
    }
  },
  created(){
    this.$http.get('/api/getCards')
      .then( (res) => {
        //res.bodyText=JSON.parse(res.bodyText);
        let text=JSON.parse(res.bodyText);
        this.title=text.title;
        this.strong=text.strong;
        this.normal=text.normal;
        this.subtitle=text.subtitle;
        this.more=text.more;
        //console.log(text);
      }, (err) => {
        console.log(err)
      })
  }


}
</script>