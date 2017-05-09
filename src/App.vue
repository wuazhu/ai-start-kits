<template>
  <div id="app">
    <ai-label class="'title'">qq:</ai-label>
    <ai-input :default-value="temp" :temp="temp" v-on:receive='fn' v-model='temp'></ai-input>
    <ai-button  btn-content="获取验证码"></ai-button>
    <!-- <FormComponent> </FormComponent> -->
  </div>
</template>

<script>
import AiForm from "./component/Form.vue";
import AiLabel from "./component/Label.vue";
import AiInput from "./component/Input.vue";
import AiButton  from "./component/Button.vue";

export default {
  name: 'app',
  data () {
    return {
      edit: '这是父组件的数据edit',
      temp: 1//测试值
    }
  },
  methods:{
    fn(val){
      console.log('触发父级一个方法'+'值为'+val);
      this.temp++//操作父级的数据
    }
  },
  components:{
    AiForm,
    AiLabel,
    AiInput,
    AiButton
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0.83rem;
}

</style>
