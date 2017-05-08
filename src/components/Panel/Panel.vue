<template>
  <div class="Panel">
      <div class="list-hd">
		    <p class="hd">{{header}}</p>
      </div> 
      <!--带有超链接-->
      <template v-if="type==='list'">
        <a href="" v-for="x in hreflist">
          <div class="list-bd">
            <i :class="[x.lefticon]"></i>
            <p class="list-item">{{x.item}}</p>
            <div class="right">
              <i class="righticon"></i>
              <p>2016.03</p>
            </div>
          </div>
        </a>
      </template>
      <!--不带有超链接-->
      <template v-if="type==='list'">
        <div class="list-bd" v-for="x in itemlist">
          <i :class="[x.lefticon]"></i>
          <p class="list-item">{{x.item}}</p>
          <div class="right">
            <div class="note">
              <p>{{x.note}}</p>
            </div>    
            <div class="corner" v-if="showbadge">
              <i class="badge"></i>
              <img src="../../assets/switch.png" class="switch" alt="" v-if="!showbadge">
            </div> 
          </div>
        </div>
      </template>
      <!--文字列表-->
      <template v-if="type==='textlist'" v-for="x in list">
        <div class="text-list-bd" >
          <div class="text-list-hd">
            <h3 class="text-title">{{x.title}}</h3>
            <div class="right">
              <i class="righticon"></i>
              <p>{{x.time}}</p>
            </div>
          </div>
          <div class="text-list-content">
            <h4>{{x.publish}}</h4>
            <p>{{x.text}}</p>
          </div>        
        </div>
      </template>
      
      <!--图文列表-->
      <template v-if="type==='imglist'">
        <div class="img-list-bd" >
          <img src="../../assets/img.png" alt="">
          <div class="img-list-content">
            <h3>第一张精选</h3>
            <h4>发行公司：滚石唱片</h4>
          </div>  
          <div class="right">
            <i class="righticon"></i>
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
      showbadge:false
    }
  },

  props:{
  	type:{
  		type: String,
      default:"list",
  	},
    list: Array,
    header:{
      type:String,
      default:"列表头部",
    }
  },
  computed:{
    hreflist() {
      return this.list.filter(function(item){
        return typeof(item.href)=="string";
      });
    },
    itemlist() {
      return this.list.filter((item)=>{
        return typeof(item.href)=="undefined";
      });
    }
  },
  methods:{
 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../assets/less/Panel";
  
</style>