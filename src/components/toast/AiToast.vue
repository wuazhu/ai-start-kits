<template>
  <div class="ai-toast">
    <transition>
    	<div :class="['toast',position]">
    		<i :class="['toast-icon',icontype]"></i>
    		<p>{{iconcontent}}</p>
    	</div>
    </transition>	
  </div>
</template>

<script>
export default {
  name: 'AiToast',
  data() {
    return{
      content:''
    }
  },
  computed:{
  	icontype() {
  		return {
  			'finished':this.type === 'finished',
  			'loading':this.type === 'loading',
  			'text':this.type === 'text',
  			'warn':this.type === 'warn',
  			'success':this.type === 'success',
  			'failure':this.type === 'failure',
  			'wrongnet':this.type === 'wrongnet'
  		}
  	},
    iconcontent() {
      if(this.type === 'finished') return '已完成';
      else if(this.type === 'loading') return '数据加载中';
      else if(this.type === 'text') return '数据加载中';
      else if(this.type === 'warn') return '警示信息';
      else if(this.type === 'success') return '成功提醒';
      else if(this.type === 'failure') return '失败提醒';
      else if(this.type === 'wrongnet') return '网络无法连接';
      else return '';
    } 
  },
  props:{
  	type:{
  		type:String,
  		default:'',
  		required:true
  	},
  	position:{
  		type:String,
  		default:'default'
  	},
  	time:{
  		type:Number,
  		default:200
  	}
  },
  created() {

  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../../assets/less/toast.less';
</style>
