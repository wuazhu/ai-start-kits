<template>
  <div class="ai-list">
      <ai-panel :list="list" header="这是普通列表"></ai-panel>
      <ai-panel :list="textlist" type="textlist" header="这是文字列表"></ai-panel>
      <ai-panel  type="imglist" header="这是图片列表"></ai-panel>
  </div>
</template>

<script>

import AiPanel from '../Panel/Panel';
export default {
  name: 'AlList',
  props:{

  },
  data() {
    return {
      list:[
        {
          item:"List Item 1",href:"/",lefticon:"lefticon",righticon:"righticon"
        },
        {
          item:"List Item 2",lefticon:"lefticon",note:"After"
        },
        {
          item:"List Item 3",lefticon:"lefticon",note:"After"
        },
        
      ],
      textlist:[
        {
          title:"表单面板",publish:"发行公司：滚石唱片",text:"别问我风从哪里吹来别问我风明天是爱还是不爱一往情深也许最后带来是伤害别问我花猫是黑还是白别问我还欠下",time:"2016.03",icon:"righticon"
        },
        {
          title:"表单面板",publish:"发行公司：滚石唱片",text:"别问我风从哪里吹来别问我风明天是爱还是不爱一往情深也许最后带来是伤害别问我花猫是黑还是白别问我还欠下",time:"2016.03",icon:"righticon"
        },
      ],
      imglist:[

      ]
    }
  },
  components:{ AiPanel }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  
</style>