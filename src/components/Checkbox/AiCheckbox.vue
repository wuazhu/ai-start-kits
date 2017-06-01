<template>
  <label class='checkbox' :class="{
    'is-disabled': isDisabled,
    'is-checked': model === label,
    'is-focus': focus,
    'is-right': right,
    'is-left': left,
    'is-list': list
  }">
      <input class='check-input'
        :value="label"
        type="checkbox"
        v-model="model"
        @focus="focus = true"
        @blur="focus = false"
        :name="name"
        :disabled="isDisabled"
        >
    <span class='span1'
          :class="{
            'is-disabled': isDisabled,
            'is-checked': model === label,
            'is-focus': focus,
            /*'span1': list,*/
            'span2': list
          }">
      <!-- model的值对应父组件的radio值 v-model绑定 -->
      <!-- <template v-if="!$slots.default">{{isLeft}}</template> -->
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
      right: Boolean,
      list: Boolean,
      span1: Boolean,
      span2: Boolean
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
      // isLeft() {
      //   return this.left;
      // },
      // isRight(){
      //   return this.right;
      // },
      // isList(){
      //   return this.list;
      // }
    }
  };
</script>
<style lang="less">
@import  "../../assets/less/config";
  .check-label{
    display: block;
    .mb(6);
    .ml(80);
    line-height: 19px;
    font-weight: 400;
    .fs30;
    color: rgb( 32, 32, 32);
    // text-align: left;
  }
  .span1{
    .mr(25);
  }
.checkbox input[type="checkbox"] {
      display: none;
  }
.checkbox input[type="checkbox"]+.span1{
      display: inline-block;
      width: 44px;
      height: 44px;
      vertical-align: middle;
      border-radius: 50%;
      border: 2px solid rgb(169, 169, 169);
      background-color: white;
  }
.checkbox input[type="checkbox"]:checked+.span1 {
      border: 2px solid rgb(65, 157, 245);
      background:url(../../assets/img/radio/radio_on.png) no-repeat;
      background-position: 9.5px 9.5px
  }
//列表选中样式 显示对勾
.checkbox input[type="checkbox"]+.span2{
      display: inline-block;
      width: 44px;
      height: 44px;
      vertical-align: middle;
      border-radius: 50%;
      border: 0;
      // border: 2px solid rgb(169, 169, 169);
      background-color: white;
  }
.checkbox input[type="checkbox"]:checked+.span2 {
      // border: 2px solid rgb(65, 157, 245);
      border: 0;
      background:url(../../assets/img/radio/selected.png) no-repeat;
      background-position: 9.5px 9.5px
  }
//  左对齐样式
.is-left .span1{

}
//右对齐样式
.is-right .span1{
  .ml(565);
  .mr(-625);
}
//列表样式
.is-list .span2{
  .ml(565);
  .mr(-625);
}

</style>
