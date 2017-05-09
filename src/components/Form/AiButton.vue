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
  <nobr>{{btnContent}}</nobr>

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
@import "../../assets/less/Button.less";
</style>
