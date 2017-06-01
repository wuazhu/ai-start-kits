<template>
  <div class="popover js">
    <goback></goback>
	
	<!--点击按钮-->
	<ai-popover arrow="down" name='fade'>
		<ai-panel :list="list" slot="content"></ai-panel>
		<button>打开弹出菜单</button>
	</ai-popover>
	
	<!--右侧底部-->
	<ai-popover arrow="down" name='fade'>
		<ai-panel :list="list" slot="content"></ai-panel>
		<span class="bottom-menue">菜单</span>
	</ai-popover>
	
	<!--右侧顶部-->
	<ai-popover arrow="top" name='fade'>
		<ai-panel :list="list" slot="content"></ai-panel>
		<span class="top-menue">菜单</span>
	</ai-popover>

  </div>
</template>
<style scoped lang="less">
@import '../../assets/less/config.less';
.js{
  .pt(90);
}
.popover{
	text-align: center;
}
button{
	position: fixed;
	left: 14%;
	top: 70%;
	.width(560);
  .height(85);
}

.bottom-menue{
	display: block;
	.width(68);
	.height(36);
    font-size: 30px;
    font-family: "MicrosoftYaHeiLight";
    color: rgb( 0, 0, 0 );
    line-height: 1;
    position: fixed;
    right: 8%;
    bottom: 10%;
}
.top-menue{
	display: block;
	.width(68);
	.height(36);
    font-size: 30px;
    font-family: "MicrosoftYaHeiLight";
    color: rgb( 0, 0, 0 );
    line-height: 1;
    position: fixed;
   	top:7%;
   	right: 5%;
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