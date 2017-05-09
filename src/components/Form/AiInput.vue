<template>
  <!-- <input :type="type" :name="name" :value="value" :placeholder='placeholder' > -->
  <span class="">
    <input :type="type"
          :name="name"
          :value="defaultValue"
          :placeholder="placeholder"
          @blur='isfn'
          >
          <!-- {{template2} -->
    <span v-show="isinput">输入内容不能为空</span>
  </span>
</template>

<script>
export default {
  name:'input',
  props:["defaultValue",'edit','temp'],//defaultValue为默认的初始值
  data(){
    return{
      type:'text',//默认text类型
      name:'',//设置name属性
      value:'',//设置value属性 defaultValue为默认初始值
      placeholder:'请输入内容',//设置placeholder属性
      isinput:false,
      template:''
    }
  },
  methods:{
    // is(value11){
    //   console.log(value11);
    //   // if(this.value==""){
    //   //   this.isinput=!this.isinput;
    //   // }
    // }
    isfn(){
      console.log("失去焦点"+'值为'+this.template2)
      this.template++
      this.$emit('receive',this.template2)
    }
  },
  computed: {
      // 仅读取，值只须为函数
      template2: function () {
          return this.temp
        }
    }
}
</script>

<style lang="less" scope>
input{
  // height: 0.7rem;
  // font-size: 0.36rem;
  margin-top: 0;
  border: none;
  outline: none;
  overflow: hidden;
}
// .input-border{
//   border-bottom: solid #B7B7B7 0.014rem;
// }
</style>
