<template>
  <!-- <input :type="type" :name="name" :value="value" :placeholder='placeholder' > -->
  <div class="input-span">
    <label :class="cssTitle" v-if='label'>
      <slot>
        {{label}}
      </slot>
    </label>
    <input :type="type"
          :name="name"
          :value="defaultValue"
          :placeholder="c_placeholder"
          @blur='isfn'
          class='input'
          >
          <!-- {{template2} -->
    <span v-show="isinput">输入内容不能为空</span>
  </div>
</template>
<script>
export default {
  name:'input',
  props:["defaultValue","label",'edit','temp','placeholder'],//defaultValue为默认的初始值
  data(){
    return{
      type:'text',//默认text类型
      name:'',//设置name属性
      value:'',//设置value属性 defaultValue为默认初始值
      // placeholder:'请输入内容',//设置placeholder属性
      isinput:false,
      template:'',
      cssTitle:'title'//默认css样式
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
        },
      c_placeholder: function(){
        return this.placeholder;
      }
    }
}
</script>

<!-- <style lang="less" scope> -->

<!-- @fs: 32;
input{
  font-size: @fs/75* 1rem;
  border: none;
  outline: none;
  overflow: hidden;
}
.input-span{
  text-align: left;
  font-size: @fs/75 * 1rem;
  font-family: "Heiti SC";
} -->
<!-- </style> -->

<style lang='less' scoped>
  @import "../../assets/less/Input";
  @import "../../assets/less/Label.less";
</style>
