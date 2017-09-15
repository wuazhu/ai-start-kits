<template>
  <div class="step-bar">
    <div class="steps">
      <div class="step-head">
        <div class="line"><span class="line-inner"></span></div>
        <span class="step-icon"><span>{{ index + 1 }}</span></span>
      </div>
      <div class="step-text"><slot name="steptext">{{title}}</slot></div>
      <div class="description"><slot name="description" class="description">{{description}}</slot></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Stepbar',
  props: {
    title: {
      type: String,
      default: '步骤'
    },
    description: String,
  },

  data() {
    return {
      index: 1
    }
  },
  methods:{
  },
  computed: {

  },
  beforeCreate() {
    this.$parent.steps.push(this);
  },
  created(){
  },
  mounted() {
  },

  destroyed() {
  },

  watch: {
  }
}
</script>
<style lang="less">
@import '../../assets/less/config';

.step-bar{
  text-align: center;
  display: inline-block;
  // .minheight(130);
  vertical-align: top;
  .steps{
    display: inline-block;
    .width(130);
    text-align: center;
  }
  .description{
    color: #9c9c9c;
    .fs(22);
  }
  .step-head{
    .width(40);
    .height(40);
    .lh(40);
    position: relative;
    border-radius: 50%;
    background: #fff;
    text-align: center;
    color: #888;
    font-weight: 700;
    margin: 0;
    z-index: 3;
    display: inline-block;
    .line,.line-inner{
      position: absolute;
      height: 8px;
      .width(140);
      display: block;
      background: #fff;
      top: 50%;
      .left(-50);
      margin-top: -4px;
      z-index: 1;
      .line-inner{
        background: @blue;
        left: 0;
        z-index: 2;
      }
    }
    .step-icon{
      display: block;
      .width(40);
      .height(40);
      .lh(40);
      background: #fff;
      z-index: 2;
      position: relative;
      border-radius: 50%;
    }
  }
  .step-text{
    .pt(14);
    .pb(14);
    .fs28;
  }
}
</style>

