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
  		popover:true,
  		popbodyWidth:0,
  		popbodyHeight:0,
  		triangleWidth:0,
  		triangleHeight:0,
  		maxWidth:0
  	}
  },
  mounted () {	
  		//弹窗可见主体
  		const popbody = this.$refs.popbody;
  		this.popbodyWidth=popbody.offsetWidth;
  		this.popbodyHeight=popbody.offsetHeight;
  		//arrow可见主体
		const triangle = this.$refs.triangle;
		this.triangleWidth=triangle.offsetWidth;
		this.triangleHeight=triangle.offsetHeight;
		//屏幕可见宽度
		this.maxWidth = document.documentElement.clientWidth;

		this.popover=false;
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
  		//按钮主体
  		const trigger = this.$refs.trigger.children[0];
  		let triggerPos = trigger.getBoundingClientRect();

  		this.$nextTick(() => {
			//这里的triangle.offsetHeight/2是三角形高度的补偿
			switch (this.arrow){
				case 'down' :
					this.pos.top=parseInt(triggerPos.top-this.popbodyHeight-this.triangleHeight/2);
					this.pos.left=parseInt(triggerPos.left+(triggerPos.width-this.popbodyWidth)/2);
					this.arrowPos.left=parseInt(triggerPos.left+(trigger.offsetWidth-this.triangleWidth)/2);
					//这里的2是为了遮住弹窗主体的边框
					this.arrowPos.top=parseInt(triggerPos.top-this.triangleHeight+this.triangleHeight/2-2);
					break;
				case 'top' :
					this.arrowPos.left=parseInt(triggerPos.left+(trigger.offsetWidth-this.triangleWidth)/2);
					this.arrowPos.top=parseInt(triggerPos.top+trigger.offsetHeight-this.triangleHeight/2-2);
					this.pos.top=parseInt(triggerPos.top+this.triangleHeight);
					this.pos.left=parseInt(triggerPos.left+(triggerPos.width-this.popbodyWidth)/2);
					break;
				default:
	          		console.warn('Wrong arrow prop');	
			}
			//限制弹窗主体位置
			if((this.pos.left+this.popbodyWidth)>this.maxWidth){
				this.pos.left=this.maxWidth-this.pos.left-140;
			}
			else if(this.pos.left<0){
				this.pos.left=0;
			}
			//限制arrow相对弹窗主体位置
			if((this.arrowPos.left+this.triangleWidth)>(this.pos.left+this.popbodyWidth)){
				this.arrowPos.left=(this.pos.left+this.popbodyWidth)-this.triangleWidth;
			}
			this.posStyle = {
				top: this.pos.top+'px',
				left: this.pos.left+'px',
			}
			this.arrowStyle = {
				top: this.arrowPos.top+'px',
				left: this.arrowPos.left+'px'
			}
  		});
  		this.popover=true;
  		this.$emit("on-show");
  	},
  	close(){
  		this.popover=false;
  		this.$emit("on-hide");
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