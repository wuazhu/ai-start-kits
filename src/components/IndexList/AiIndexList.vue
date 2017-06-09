<template>
  <div class='indexList'>
  	<div class='searchList'>
      <ai-search label="搜索" v-bind:optionsdata="single.originOptions" v-bind:selecteddata="single.selected" v-on:selected="singleCallback"></ai-search>
    </div>
    <div class='ListBtn'>
      <button @click='showBtn'>{{action}}</button>
    </div>
    <div class='ListContent'>
          <ul v-for='items in list' class='ListContentUl'>
            <p class='ListContentP' :data=items.Tag>{{items.Tag}}</p>
            <li v-for='city in items.cityName'><ai-checkbox v-show='show'></ai-checkbox>{{city}}</li>
          </ul>
    </div>
    <div class='taglist'>
      <ul class='item-container'>
        <li v-for='item in TagList' @click='move(item)'>{{item}}</li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/IndexList';

</style>
<script>
import AiSearch from "../../components/Form/AiSearch";
import AiCheckbox from "../../components/CheckBox/AiCheckBox";
export default {
    name: 'indexList',
    data() {
      return {
        edit: '这是父组件的数据edit',
        temp1: 1,
        temp: false,//测试值
        single: {
            originOptions: [],
            selected: {}
        },
        list: new Array,
        show: false, //选择按钮默认隐藏
        TagList :new Array,
        action: '编辑'
      }
    },
    mounted: function() {
    this.queryData();
    },
    methods:{
      queryData: function(){
            var mySelf = this
            //do ajax here

            // 单选
            mySelf.single.originOptions = [{"id":"1","name":"lemon"},{"id":"2","name":"mike"},{"id":"3","name":"lara"},{"id":"4","name":"zoe"},{"id":"5","name":"steve"},{"id":"6","name":"nolan"}];
            mySelf.single.selected = {"id":"6","name":"nolan"}

            this.$nextTick(function(){

            })
        },
        singleCallback: function(data){
            this.single.selected = data;
            console.log('父级元素调用singleCallback 选中的是' + JSON.stringify(data))

        },
        initTagList: function(){
            for (var i = 65; i <=90; i++) {
              // console.log(String.fromCharCode(i))
              this.TagList[i]=String.fromCharCode(i)
            }
        },
        showBtn: function(){
          this.show=!this.show;
          if(this.show==true){
            this.action='完成';
          }
          else{
            this.action='编辑'
          }
        },
        move: function(item){
          console.log('点击的是'+item);
          // var elItemList = document.querySelector('.item-container')
          // var el=document.querySelector('.ListContentUl')
          // 滚动至特定索引字符处
          var target = document.querySelectorAll('.ListContentP')
          for(var i=0;i<target.length;i++){
            // console.log(target[i].innerHTML)
               if (target[i].innerHTML==item) {
                target[i].scrollIntoView(true)
              }
          }
        }
    },
    computed:{

    },
    components:{
      AiSearch,
      AiCheckbox
    },
    created(){
      this.$http.get('/api/getIndexListData')
     .then( (res) => {
        res=JSON.parse(res.bodyText);
        this.list=res;
        // console.log(this.list[2].Tag)
     }, (err) => {
       console.log(err)
     }),
     this.initTagList()//初始化索引列表
    }
  }
</script>




