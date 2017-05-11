<template>
  <div class="accordions">
      <goback></goback>

      <h3>Default默认</h3>
      <accordion :list="list"></accordion>

      <h3>Insert(内嵌式)</h3>
      <accordion styles="insert" :list="list"></accordion>

      <h3>InCard(卡片式)</h3>
      <accordion styles="card" :list="list"></accordion>
  </div>
</template>

<script>
import accordion from '../components/Collapse/accordion';
import goback from '../components/goback';
export default {
  name: 'Accordions',
  components:{ goback,accordion},
  data() {
    return {
      list:[
        {
          title:"文字面板",
          content:"别问我风从哪里吹来别问我风明天是爱还是不爱一往情深也许最后带来是伤害别问我花猫是黑还是白别问我还欠下多少情债爱就爱吧如果不爱就离开胡同有些转弯人生有些转弯我们走啊走啊 总会遇到情关小河有些转弯"
        },
        {
          title:"图片面板",
          content:"别问我风从哪里吹来别问我风明天是爱还是不爱一往情深也许最后带来是伤害别问我花猫是黑还是白别问我还欠下多少情债爱就爱吧如果不爱就离开胡同有些转弯人生有些转弯我们走啊走啊 总会遇到情关小河有些转弯"
        },
        {
          title:"文字面板",
          content:"别问我风从哪里吹来别问我风明天是爱还是不爱一往情深也许最后带来是伤害别问我花猫是黑还是白别问我还欠下多少情债爱就爱吧如果不爱就离开胡同有些转弯人生有些转弯我们走啊走啊 总会遇到情关小河有些转弯"
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
   @import '../assets/less/config.less';
   *{
    overflow: hidden;
   }
   h3{
    .fs30;
    .ml(32);
    .mt(32);
    line-height: 75/75*1rem;
   }
</style>