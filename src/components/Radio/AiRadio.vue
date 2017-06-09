<template>
  <label class='radiobox' :class="{
    'is-disabled': isDisabled,
    'is-checked': model === label,
    'is-focus': focus,
    'is-right': right,
    'is-left': left,
    'is-list': list
  }">
      <input class='radio-input'
        :value="label"
        type="radio"
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
<style lang="less" scoped>
@import  "../../assets/less/Radio";
</style>
