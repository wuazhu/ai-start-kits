<template>
	<div class='AiSearch'>
		<div class="search uis">
    		<goback></goback>
  		</div>
  		<div class=''>
  			<ai-search label='搜索' v-bind:optionsdata="single.originOptions" v-bind:selecteddata="single.selected" v-on:selected="singleCallback"></ai-search>
  		</div>
	</div>
</template>
<style lang="less">
@import '../../assets/less/config';
</style>
<script>
import goback from '../../components/goback'
import AiSearch from "../../components/Form/AiSearch";
  export default {
    data() {
      return {
        edit: '这是父组件的数据edit',
        temp1: 1,
        temp: false,//测试值
        single: {
            originOptions: [],
            selected: {}
        },
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

        }
    },
    components:{
      goback,
      AiSearch,
    },
    created(){
      this.$http.get('/api/getInputs')
     .then( (res) => {
       res.bodyText=JSON.parse(res.bodyText)
       this.qq=res.bodyText.qq;
       this.mobile=res.bodyText.mobile;
       this.code=res.bodyText.code;
       this.bank=res.bodyText.bank;
     }, (err) => {
       console.log(err)
     })
    }
  }
</script>