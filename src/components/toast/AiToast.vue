<template>
  <div class="ai-toast">
    <transition :name="name">
    	<div :class="['toast',position]" v-show="show">
    		<i :class="['toast-icon',icontype]"></i>
        <p><slot></slot></p>
    	</div>
    </transition>	
  </div>
</template>

<script>
export default {
  name: 'AiToast',
  props:{
    value: Boolean,
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
    },
    name:String
  },
  computed:{
    slot(){
      if(this.$slots){
        return true;
      }else{
        return false;
      }
    },
  	icontype() {
  		return {
  			'finished':this.type === 'finished',
  			'loading':this.type === 'loading',
  			'text':this.type === 'text',
  			'warning':this.type === 'warning',
  			'success':this.type === 'success',
  			'failure':this.type === 'failure',
  			'wrongnet':this.type === 'wrongnet'
  		}
  	}
  },
  data() {
    return{
      show:false
    }
  },
  created () {
    if (this.value) {
      this.show = true
    }
  },
  watch:{
    show (val) {
      if (val) {
        //this.$emit('input', true);
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.show = false;
          this.$emit('input', false);
        }, this.time)
      }
    },
    value (val) {
      this.show = val
      //console.log(val);
    }
  },
  methods:{

  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../../assets/less/toast.less';
</style>
