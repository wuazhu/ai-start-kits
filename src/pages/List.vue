<template>
  <div class="ai-list">
      <ai-panel :list="list" header="列表模式的单选框"></ai-panel>

      <ai-panel :list="notelist" header="右侧有注释列表"></ai-panel>

      <ai-panel :list="hreflist" header="包含链接的列表"></ai-panel>

      <ai-panel :list="cornerlist" header="右侧有角标"></ai-panel>

      <ai-panel :list="badgelist" header="包含图标的列表"></ai-panel>

      <ai-panel :list="textlist" type="textlist" header="这是文字列表"></ai-panel>

      <ai-panel :list="imglist" type="textlist" header="这是图片列表"></ai-panel>

      <ai-panel :list="imglist"  type="textlist" liststyle="insert" header="内嵌式"></ai-panel>

      <ai-panel :list="imgtextlist" type="textlist" header="内嵌式图片文字列表"></ai-panel>
      
      <ai-panel :list="cardlist1" liststyle="card" header="card"></ai-panel>
      
      <ai-panel :list="cardlist2" liststyle="card"></ai-panel>
      
      <ai-panel :list="cardlist3" liststyle="card" type="textlist"></ai-panel>
  </div>
</template>

<script>

import AiPanel from '../components/Panel/Panel';
export default {
  name: 'AlList',
  props:{

  },
  data() {
    return {
      list:[
        {
          item:"List Item 1",
        },
        {
          item:"List Item 2"
        }, 
      ],
      hreflist:[
         {
          item:"List Item 1",
          href:"/"
        },
        {
          item:"List Item 2",
          href:"/",
          time:"2016.03"
        }, 
      ],
      notelist:[
        {
          item:"List Item 1",
          note:"After"
        },
        {
          item:"List Item 2",
          note:"After"
        },
        {
          item:"List Item 3",
          note:"After"
        },
      ],
      cornerlist:[
        {
          item:"List Item 7",
          icon:"badge"
        },
        {
          item:"List Item 8",
          button:"switch"
        },
      ],
      badgelist:[
        {
          item:"List Item 1",
          lefticon:"lefticon",
          icon:"badge"
        },
        {
          item:"List Item 1",
          lefticon:"lefticon",
          href:"/",
          time:"2016.03"
        },
        {
          item:"List Item 1",
          lefticon:"lefticon",
          icon:"badge",
          href:"/"
        },
      ],
      textlist:[
        {
          title:"表单面板",
          subtitle:"发行公司：滚石唱片",
          text:"别问我风从哪里吹来别问我风明天是爱还是不爱一往情深也许最后带来是伤害别问我花猫是黑还是白别问我还欠下",
          time:"2016.03"
        },
        {
          title:"表单面板",
          subtitle:"发行公司：滚石唱片",
          text:"别问我风从哪里吹来别问我风明天是爱还是不爱一往情深也许最后带来是伤害别问我花猫是黑还是白别问我还欠下",
          time:"2016.03",
          icon:"righticon"
        },
        {
          title:"表单面板",
          subtitle:"发行公司：滚石唱片",
          text:"别问我风从哪里吹来别问我风明天是爱还是不爱一往情深也许最后带来是伤害别问我花猫是黑还是白别问我还欠下",
          time:"2016.03",
          icon:"righticon"
        },
      ],
      imglist:[
        {
          src:"img.png",
          title:"第一张精选",
          subtitle:"发行公司：滚石唱片",
          time:"2016-03"
        },
        {
          src:"img.png",
          title:"第一张精选",
          subtitle:"发行公司：滚石唱片",
          time:"2016-03",
          icon:"righticon"
        },
        
      ],
      imgtextlist:[
        {
          src:"img.png",
          title:"第一张精选",
          subtitle:"发行公司：滚石唱片",
          text:"别问我风从哪里吹来别问我风明天是爱还是不爱一往情深也许最后带来是伤害别问我",
          time:"2016-03",
          icon:"righticon"
        }
      ],
      cardlist1:[
        {
          item:"List Item 4",
          icon:"badge"
        },
        {
          item:"List Item 4",
        },
        {
          item:"List Item 4",
          note:"After"
        }
      ],
      cardlist2:[
        {
          item:"List Item 4",
          href:"/" 
        },
        {
          item:"List Item 4",
          href:"/"
        },
        {
          item:"List Item 4",
          note:"After",
          href:"/" 
        }
      ],
      cardlist3:[
        {
          src:"img.png",
          title:"第一张精选",
          subtitle:"发行公司：滚石唱片",
          time:"2016-03",
          icon:"righticon"
        },
        {
          src:"img.png",
          title:"第一张精选",
          subtitle:"发行公司：滚石唱片",
          time:"2016-03",
          icon:"righticon"
        },
        {
          src:"img.png",
          title:"第一张精选",
          subtitle:"发行公司：滚石唱片",
          time:"2016-03",
          icon:"righticon"
        },
      ],

    }
  },
  components:{ AiPanel }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .ai-list{

  }
</style>