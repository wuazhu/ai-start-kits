<template>
  <div class="ai-list">
      <goback></goback>
      <h3>列表模式的单选框</h3>
      <ai-panel :list="list"></ai-panel>
      
      <h3>右侧有注释列表</h3>
      <ai-panel :list="notelist"></ai-panel>
      
      <h3>包含链接的列表</h3>
      <ai-panel :list="hreflist"></ai-panel>
      
      <h3>右侧有角标</h3>
      <ai-panel :list="cornerlist"></ai-panel>
      
      <h3>包含图标的列表</h3>
      <ai-panel :list="badgelist"></ai-panel>
      
      <h3>这是文字列表</h3>
      <ai-panel :list="textlist" type="textlist"></ai-panel>
      
      <h3>这是图片列表</h3>
      <ai-panel :list="imglist" type="textlist"></ai-panel>
      
      <h3>内嵌式</h3>
      <ai-panel :list="imglist"  type="textlist" liststyle="insert"></ai-panel>
      
      <h3>内嵌式图片文字列表</h3>
      <ai-panel :list="imgtextlist" type="textlist"></ai-panel>
      
      <h3>card</h3>
      <ai-panel :list="cardlist1" liststyle="card"></ai-panel>
      
      <ai-panel :list="cardlist2" liststyle="card"></ai-panel>
      
      <ai-panel :list="cardlist3" liststyle="card" type="textlist"></ai-panel>
  </div>
</template>

<script>

import AiPanel from '../components/Panel/Panel';
import goback from '../components/goback';
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
          href:"/",
        },
        {
          item:"List Item 1",
          href:"/",
          time:"2016.03"
        },
        {
          item:"List Item 1",
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
          href:"/"
        },
        {
          title:"表单面板",
          subtitle:"发行公司：滚石唱片",
          text:"别问我风从哪里吹来别问我风明天是爱还是不爱一往情深也许最后带来是伤害别问我花猫是黑还是白别问我还欠下",
          time:"2016.03",
          href:"/"
        },
      ],
      imglist:[
        {
          src:"img",
          title:"第一张精选",
          subtitle:"发行公司：滚石唱片",
          time:"2016-03"
        },
        {
          src:"img",
          title:"第一张精选",
          subtitle:"发行公司：滚石唱片",
          time:"2016-03",
          href:"/"
        },
        
      ],
      imgtextlist:[
        {
          src:"img",
          title:"第一张精选",
          subtitle:"发行公司：滚石唱片",
          text:"别问我风从哪里吹来别问我风明天是爱还是不爱一往情深也许最后带来是伤害别问我",
          time:"2016-03",
          href:"/"
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
          src:"img",
          title:"第一张精选",
          subtitle:"发行公司：滚石唱片",
          time:"2016-03",
          href:"/"
        },
        {
          src:"img",
          title:"第一张精选",
          subtitle:"发行公司：滚石唱片",
          time:"2016-03",
          href:"/"
        },
        {
          src:"img",
          title:"第一张精选",
          subtitle:"发行公司：滚石唱片",
          time:"2016-03",
          href:"/"
        },
      ],

    }
  },
  components:{ AiPanel,goback }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../assets/less/list.less";

</style>