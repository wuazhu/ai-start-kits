<template>
  <div class="panel">
      
      <!--带有超链接-->
      <!-- <template v-if="type==='list'">
        <a href="#" v-for="x in hreflist">
          <div :class="['list-bd',liststyle]">
            <i :class="[x.lefticon]"></i>
            <p class="list-item">{{x.item}}</p>
            <div class="right">
              <i class="righticon"></i>
              <p>{{x.time}}</p>
            </div>
          </div>
        </a>
      </template> -->
      
      <template v-if="type==='list'">
        <div :class="['list-bd',liststyle]" v-for="x in list" @click="goHref(x.href)">
          <i :class="[x.lefticon]" v-if="x.lefticon"></i>
          <p class="list-item">{{x.item}}</p>
          <div class="right">  
            <i class="righticon" v-if="x.href"></i>
            <p v-if="x.note">{{x.note}}</p>
            <p v-if="x.time">{{x.time}}</p>
            <i :class="[x.icon]" v-if="x.icon"></i>
            <img src="../../assets/img/list/switch.png" class="switch" alt="" v-if="x.button">
          </div>
        </div>
      </template>
      <!--文字列表####图文列表####内嵌式####card-->
      <template v-if="type==='textlist'" v-for="x in list">
        <div :class="['text-list-bd',liststyle]" @click="goHref(x.href)">
          <img 
            :src="getSrc(x.src)" v-if="x.src" 
            :class="[x.text?'list-img':'']" 
            alt="" >
          <div class="right" v-if="x.icon || x.time">
            <i class="righticon" v-if="x.href"></i>
            <i :class="[x.icon]"></i>
            <p v-if="x.time">{{x.time}}</p>
          </div>
          <div class="text-list-content">
            <h3>{{x.title}}</h3>
            <h4>{{x.subtitle}}</h4>
            <p 
            v-if="x.text"
            :class="[x.src?'text':'']" 
            >{{x.text}}</p>
          </div>     
        </div>
      </template>
      

  </div>
</template>

<script>
export default {
  name: 'Panel',
  data() {
    return {
      showbadge:false,
      baseUrl:"/static/img/"
    }
  },

  props:{
  	type:{
  		type: String,
      default:"list",
  	},
    header:{
      type:String,
      default:"",
    },
    list: Array,
    liststyle:{
      type:String,
      default:""
    }
  },
  computed:{
    //过滤链接
    hreflist() {
      return this.list.filter((item)=>{
        return typeof(item.href)=="string";
      });
    },
    itemlist() {
      return this.list.filter((item)=>{
        return typeof(item.href)=="undefined";
      });
    },
  },
  methods:{
   getSrc(img) {
      return require(`../../assets/img/list/${img}.png`);
    },
    goHref(href,$router){
      if(href){
        this.$router.push(href);
      }
      else{
        return false;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../assets/less/Panel";
</style>