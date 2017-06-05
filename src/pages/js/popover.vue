<template>
  <div class="popovers js">
    <goback></goback>
	
    <div class="pop-content">
      <!--点击按钮-->
      <ai-popover arrow="down" name='fade'>
        <ai-panel :list="list" slot="content"></ai-panel>
        <button class="middle-menue" v-cloak>打开弹出菜单</button>
      </ai-popover>
      
      <!--右侧底部-->
      <ai-popover arrow="down" name='fade'>
        <ai-panel :list="list" slot="content"></ai-panel>
        <button class="bottom-menue" v-cloak>菜单</button>
      </ai-popover>
      
      <!--右侧顶部-->
      <ai-popover arrow="top" name='fade'>
        <ai-panel :list="list" slot="content"></ai-panel>
        <button class="top-menue" v-cloak>菜单</button>
      </ai-popover>
    </div>
	

  </div>
</template>
<style scoped lang="less">
@import '../../assets/less/config.less';
.js{
  .pt(90);
}


[v-cloak] {
  display: none;
}
.middle-menue{
  .width(188);
  .height(36);
  font-size: 30px;
  font-family: "MicrosoftYaHeiLight";
  color: #000;
  position: relative;
  top: 800px;
  left: 300px;
  z-index: 4;
}

.bottom-menue{
  .width(68);
  .height(36);
  font-size: 30px;
  font-family: "MicrosoftYaHeiLight";
  color: rgb( 0, 0, 0 );
  line-height: 1;
  position: relative;
  top: 1000px;
  left: 600px;
  z-index: 4;
} 
.top-menue{
	.width(68);
	.height(36);
  font-size: 30px;
  font-family: "MicrosoftYaHeiLight";
  color: #fff;
  line-height: 1;
  position: relative;
  top: -130px;
  left: 630px;
  z-index: 4;
}

</style>
<script>
import goback from '../../components/goback';
import AiPopover from '../../components/popover/AiPopover';
import AiPanel from '../../components/Panel/Panel';
export default {
  name:"popover",
  components: {
    goback,
    AiPopover,
    AiPanel
  },
  data(){
  	return {
  		list:[
  			{item:"Item1"},
  			{item:"Item2"},
  			{item:"Item3"},
  			{item:"Item4"},
  			{item:"Item5"},
  			{item:"Item6"},
  			{item:"Item7"},
  			{item:"Item8"}
  		],
  	}
  },
  methods:{
  
  }
}
</script>