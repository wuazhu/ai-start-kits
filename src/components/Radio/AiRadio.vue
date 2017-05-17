<template>
  <label class='radiobox' :class="{
    'is-disabled': isDisabled,
    'is-checked': model === label,
    'is-focus': focus
  }">
      <input class='radio-input'
        :value="label"
        type="radio"
        v-model="model"
        @focus="focus = true"
        @blur="focus = false"
        :name="name"
        :disabled="isDisabled"
        :class="{
          'right':isRight,
          'left':isLeft
          }"
        >
    <span class='span1'
          :class="{
            'is-disabled': isDisabled,
            'is-checked': model === label,
            'is-focus': focus
          }">
      <!-- model的值对应父组件的radio值 v-model绑定 -->
      <!-- <template v-if="!$slots.default">{{label}}</template> -->
    </span>
    <slot></slot>
  </label>
</template>

<script>
  export default {
    name: 'Radio',
    props: {
      value: {},
      label: {},
      disabled: Boolean,
      name: String,
      left: Boolean,
      right: Boolean
    },

    data() {
      return {
        focus: false
      };
    },

    computed: {
      isGroup() {
        let parent = this.$parent;
        while (parent) {
          if (parent.$options.componentName !== 'ElRadioGroup') {
            parent = parent.$parent;
          } else {
            this._radioGroup = parent;
            return true;
          }
        }
        return false;
      },

      model: {
        get() {
          return this.isGroup ? this._radioGroup.value : this.value;
        },

        set(val) {
          if (this.isGroup) {
            // this.dispatch('ElRadioGroup', 'input', [val]);
          } else {
            this.$emit('input', val);
          }
        }
      },
      _radioGroup() {
        let parent = this.$parent;
        while (parent) {
          if (parent.$options.componentName !== 'ElRadioGroup') {
            parent = parent.$parent;
          } else {
            return parent;
          }
        }
        return false;
      },
      activeStyle() {
        return {
          backgroundColor: this._radioGroup.fill || '',
          borderColor: this._radioGroup.fill || '',
          boxShadow: this._radioGroup.fill ? `-1px 0 0 0 ${this._radioGroup.fill}` : '',
          color: this._radioGroup.textColor || '',
        };
      },
      size() {
        return this._radioGroup.size;
      },
      isDisabled() {
        return this.isGroup
          ? this._radioGroup.disabled || this.disabled
          : this.disabled;
      },
      isLeft() {
        return this.left;
      },
      isRight(){
        return this.left;
      }
    }
  };
</script>
<style lang="less" scope>
@import  "../../assets/less/config";
  .radio-label{
    display: block;
    margin-bottom: 6px;
    line-height: 19px;
    font-weight: 400;
    .fs30;
    color: rgb( 32, 32, 32);
    text-align: left;
  }
  .span1{
    .mr(25);
  }
.radiobox input[type="radio"] {
      display: none;
  }
.radiobox input[type="radio"]+.span1{
      display: inline-block;
      width: 44px;
      height: 44px;
      vertical-align: middle;
      border-radius: 50%;
      border: 2px solid rgb(169, 169, 169);
      background-color: white;
  }
.radiobox input[type="radio"]:checked+.span1 {
      border: 2px solid rgb(65, 157, 245);
      background:url(../../assets/img/radio/radio_on.png) no-repeat;
      background-position: 9.5px 9.5px
  }

  //左对齐样式
  .left{
    .ml(32);
    .mr(32);
    .mt(16);
    .mb(16);
    background-color: white;
    border: solid 1px rgb(219, 219, 222);
    border-radius: 10px;
    & div{
      .ml(25);
      .mt(20);
      .pb(20);
      border-bottom: solid 1px rgb(219, 219, 222);
    }
  }
  //右对齐样式
  .right{
    .ml(32);
    .mr(32);
    .mt(16);
    .mb(16);
    background-color: white;
    border: solid 1px rgb(219, 219, 222);
    border-radius: 10px;
    & div{
      .ml(25);
      .mt(20);
      .pb(20);
      border-bottom: solid 1px rgb(219, 219, 222);
    }
  }
  //组件字体样式
  .radio{
    .fs30;
  }
</style>
