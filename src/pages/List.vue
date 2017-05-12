<template>
  <div class="ai-list">
      <goback></goback>
      <h3>列表模式的单选框</h3>
      <ai-panel :list="list"></ai-panel>
      
      <h3>右侧有注释列表</h3>
      <ai-panel :list="notelist"></ai-panel>
      
      <h3>包含链接的列表</h3>
      <ai-panel :list="hreflist"></ai-panel>
      
      <h3>右侧有角标</h3>
      <ai-panel :list="cornerlist"></ai-panel>
      
      <h3>包含图标的列表</h3>
      <ai-panel :list="badgelist"></ai-panel>
      
      <h3>这是文字列表</h3>
      <ai-panel :list="textlist" type="textlist"></ai-panel>
      
      <h3>这是图片列表</h3>
      <ai-panel :list="imglist" type="textlist"></ai-panel>
      
      <h3>内嵌式</h3>
      <ai-panel :list="imglist"  type="textlist" liststyle="insert"></ai-panel>
      
      <h3>内嵌式图片文字列表</h3>
      <ai-panel :list="imgtextlist" type="textlist"></ai-panel>
      
      <h3>card</h3>
      <ai-panel :list="cardlist1" liststyle="card"></ai-panel>
      
      <ai-panel :list="cardlist2" liststyle="card"></ai-panel>
      
      <ai-panel :list="cardlist3" liststyle="card" type="textlist"></ai-panel>
  </div>
</template>

<script>

import AiPanel from '../components/Panel/Panel';
import goback from '../components/goback';
export default {
  name: 'AlList',

  props:{

  },
  data() {
    return {
      list:new Array,
      hreflist:new Array,
      notelist:new Array,
      cornerlist:new Array,
      badgelist:new Array,
      textlist:new Array,
      imglist:new Array,
      imgtextlist:new Array,
      cardlist1:new Array,
      cardlist2:new Array,
      cardlist3:new Array
    }
  },
  components:{ AiPanel,goback },
  created(){
    this.$http.get('/api/getAllLists')
      .then( (res) => {
        //res.bodyText=JSON.parse(res.bodyText);
        let text=JSON.parse(res.bodyText);
        this.list=[].concat(text.list);
        this.hreflist=text.hreflists;
        this.notelist=text.notelist;
        this.cornerlist=text.cornerlist;
        this.badgelist=text.badgelist;
        this.textlist=text.textlist;
        this.imglist=text.imglist;
        this.imgtextlist=text.imgtextlist;
        this.cardlist1=text.cardlist1;
        this.cardlist2=text.cardlist2;
        this.cardlist3=text.cardlist3;
        //console.log(this.list);
      }, (err) => {
        console.log(err)
      })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../assets/less/list.less";
.ai-list{
  margin-top: 95/75*1rem;
}
</style>