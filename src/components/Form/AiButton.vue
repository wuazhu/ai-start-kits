<template>
  <button :disabled="disabled" class="ai-button"
    @click="submit(btnContent)"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'ai-button--' + type : '',
      size ? 'ai-button--' + size : '',
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-plain': plain
      }
    ]"
  >
  {{btnContent}}

  </button>
</template>
<script>
  export default {
    name: 'AiButton',
    data(){
      return{

      }
    },
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: String,
      icon: {
        type: String,
        default: ''
      },
      nativeType: {
        type: String,
        default: 'button'
      },
      loading: Boolean,
      disabled: Boolean,
      plain: Boolean,
      autofocus: Boolean,
      btnContent:{
        type: String,
        default: '按钮'
      },
    },

    methods: {
      handleClick(evt) {
        // this.$emit('click', evt);
        console.log('被点击了');

      },
      submit(data){
        if (data!=1) {
          console.log('数据不能为空');
        }
      }
    }
  };
</script>
<style lang="less" scope>
.fs(@px){
    font-size: round(@px / 1.8) * 1px;
    [data-dpr="2"] & {
        font-size: @px * 1px;
    }
    // for mx3
    [data-dpr="2.5"] & {
        font-size: round(@px * 2.5 / 2) * 1px;
    }
    // for 小米note
    [data-dpr="2.75"] & {
        font-size: round(@px * 2.75 / 2) * 1px;
    }
    [data-dpr="3"] & {
        font-size: round(@px / 2 * 3) * 1px;
    }
    // for 三星note4
    [data-dpr="4"] & {
        font-size: @px * 2px;
    }
}
.num {
  .fs(28);
  font-family: "Heiti SC";
  color: rgb(65, 157, 245);
  background-color: white;
  -moz-transform: matrix( 0.99982671518641,0,0,1.00015305177178,0,0);
  -webkit-transform: matrix( 0.99982671518641,0,0,1.00015305177178,0,0);
  -ms-transform: matrix( 0.99982671518641,0,0,1.00015305177178,0,0);
}
.button1normal {
  // margin-top:32/72 *1rem;
  border-style: solid;
  border-width: 0.014rem;
  border-color: rgb(65, 157, 245);
  border-radius: 0.083rem;
  &:hover{
    cursor: pointer;
  }
  &:active{
    color: rgb(160, 206, 250);
    background-color: white;
    border-color: rgb(166, 206, 244);
  }
}

</style>
