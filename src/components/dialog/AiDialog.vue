<template>
	<div class="ai-dialog" v-show="visible">
		<!--默认样式-->
		<template v-if="type==='dialog'">
			<div class="v-modal"></div>
			<transition name="slide-fade">	
			    <div class="dialog-wrap">
			    	<div class="dialog-header">
			    		<slot name="header"></slot>
				    </div>
				    <div class="dialog-content">
				    	<slot></slot>
				    </div>
				    <div class="dialog-footer">
				    	<div class="cancel" v-if="$slots.cancel">
				    		<slot name="cancel" class="cancel"></slot>
				    	</div>
				    	<div :class="['confirm',{autowidth:!$slots.cancel}]" v-if="$slots.confirm">
				    		<slot name="confirm"></slot>
				    	</div>
					</div>	
				</div>
			</transition>	
		</template>
		<!--弹出窗口-->
		<template v-if="type==='dialogWindow'">
			<div class="dialog-window">
				<div class="dialog-title">
					<h1>{{title}}</h1>
					<i class="del" @click="close()"></i>
				</div>
				<div class="dialog-content">
					<p>
						<slot></slot>
					</p>
				</div>
			</div>
		</template>
		<!--弹窗样式-->
		<template v-if="type==='dialogPop'">
			<div class="v-modal"></div>
			<transition name="slide-fade">	
			    <div class="dialog-wrap">
			    	<div class="dialog-header">
			    		<slot name="header"></slot>
				    </div>
				    <div class="dialog-content addmt">
				    	<slot></slot>
				    </div>
				    <i class="del popdel" @click="close()"></i>
				</div>
			</transition>
			
		</template>
	</div>
</template>
<script>
export default {
  name: 'ai-dialog',

  props:{
  	visible:{
  		type:Boolean,
  		default:false
  	},
  	type:{
  		type:String,
  		default:"dialog"
  	},
  	title:{
  		type:String,
  		default:"title"
  	}
  },
  methods:{
  	close() {
  		this.$emit('close');
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../../assets/less/dialog.less';
</style>