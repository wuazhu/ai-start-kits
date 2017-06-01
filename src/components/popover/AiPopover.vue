<template>
	<div class="ai-popover">
		<div class="mask" v-if="popover" @click="close"></div>
		<span ref="trigger" @click="open">
			<slot></slot>
		</span>
		<transition :name="name">
			<div class="popover" v-show="popover" :style="posStyle" ref="popbody">
				<div class="content">
					<slot name="content"></slot>
				</div>
				<div :class="['triangle',arrowClass]" :style="arrowStyle" ref="triangle"></div>
			</div>
		</transition>	
    </div>
</template>
<script>
export default {
  name: 'AiPopover',
  data() {
  	return {
  		pos:{
  			top:0,
  			left:0
  		},
  		arrowPos:{
  			top:0,
  			left:0
  		},
  		posStyle:{},
  		arrowStyle:{},
  		popover:true
  	}
  },
  mounted () {
  	this.$nextTick(() => {
  		//弹窗主体
  		const popbody = this.$refs.popbody;
  		//按钮主体
		const trigger = this.$refs.trigger.children[0];
		//arrow主体
		const triangle = this.$refs.triangle;
		//获取节点盒子
		let triggerPos = trigger.getBoundingClientRect();
		let trianglePos = triangle.getBoundingClientRect();
		let maxWidth = document.documentElement.clientWidth;
		//这里的triangle.offsetHeight/2是三角形高度的补偿
		switch (this.arrow){
			case 'down' :
				this.pos.top=parseInt(triggerPos.top-popbody.offsetHeight-triangle.offsetHeight/2);
				this.pos.left=parseInt(triggerPos.left+(triggerPos.width-popbody.offsetWidth)/2);
				this.arrowPos.left=parseInt(triggerPos.left+(trigger.offsetWidth-triangle.offsetWidth)/2);
				//这里的2是为了遮住弹窗主体的边框
				this.arrowPos.top=parseInt(triggerPos.top-triangle.offsetHeight+triangle.offsetHeight/2-2);
				break;
			case 'top' :
				this.arrowPos.left=parseInt(triggerPos.left+(trigger.offsetWidth-triangle.offsetWidth)/2);
				this.arrowPos.top=parseInt(triggerPos.top+trigger.offsetHeight-triangle.offsetHeight/2-2);
				this.pos.top=parseInt(triggerPos.top+triangle.offsetHeight);
				this.pos.left=parseInt(triggerPos.left+(triggerPos.width-popbody.offsetWidth)/2);
				break;
			default:
          		console.warn('Wrong arrow prop');	
		}
		//限制弹窗主体位置
		if((this.pos.left+popbody.offsetWidth)>maxWidth){
			this.pos.left=maxWidth-this.pos.left-140;
		}
		else if(this.pos.left<0){
			this.pos.left=0;
		}
		//限制arrow相对弹窗主体位置
		if((this.arrowPos.left+triangle.offsetWidth)>(this.pos.left+popbody.offsetWidth)){
			this.arrowPos.left=(this.pos.left+popbody.offsetWidth)-triangle.offsetWidth;
		}
		//this.popover默认为true时，获取offset可见宽高
		this.popover=false;
		this.posStyle = {
			top: this.pos.top+'px',
			left: this.pos.left+'px',
		}
		
		this.arrowStyle = {
			top: this.arrowPos.top+'px',
			left: this.arrowPos.left+'px'
		}
  	});
  },
  props:{
  	arrow:{
  		type:String,
  		required: true
  	},
  	name:{
  		type:String,
  		default:''
  	}
  },
  computed:{
 	arrowClass() {
 		return {
 			//只实现了top和down
 			'arrow-top':this.arrow === 'top',
 			'arrow-down':this.arrow === 'down',
 			'arrow-left':this.arrow === 'left',
 			'arrow-right':this.arrow === 'right'
 		}
 	}
  },
  methods:{
  	open(){
  		this.popover=true;
  		this.$emit("on-show");
  	},
  	close(){
  		this.popover=false;
  		this.$emit("on-show");
  	},

  },
  watch:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../../assets/less/popover.less';
</style>