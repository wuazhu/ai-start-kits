<template>
  <div :class="['accordion',styles]">
      <slot></slot>
  </div>
</template>

<script>
import collapse from './collapse';
export default {
  name: 'Accordion',
  components:{ collapse },
  props:{
    styles:{
      type:String,
      default:""
    },
    accordion:{
      type:Boolean,
      default:false
    },
    value:{
      type: [Array, String]
    }
  },
  data() {
    return {
      currentValue: this.value
    }
  },
  methods:{
    setActive(){
      let active=this.getActive();
      //遍历子组件变更active状态
      let accordion=this.accordion
      this.$children.forEach((child,index)=>{
        const name=child.name || index.toString();
        let isActive=false;
        if(accordion){
          isActive = active == name;
        }else {
          //active此时是一个数组
          isActive = active.indexOf(name) > -1;
        }
        child.isActive=isActive;
        //child.index = index;
      })
    },
    getActive(){
      let activeKey = this.currentValue || [];
      return activeKey;
    },
    toggle(data) {
      //const name=String(data.name);
      const name=data.name.toString();
      //存储当前点击的元素
      let newActive=new Array;

      //手风琴模式
      if(this.accordion){
        //新触发的元素
        if(!data.isActive){
          newActive.push(name);
        }
      }else{
        let active=this.getActive();
        let nameIndex=active.indexOf(name);

        if(data.isActive){
          //元素存在，删除此元素
          if(nameIndex>-1){
            active.splice(nameIndex, 1);
          }
        }else{
          //元素不存在，加入数组
          if(nameIndex<0){
            active.push(name);
          }
        }
        newActive=active;
      }

      //新点击元素即为当前活动元素
      this.currentValue=newActive;
    },
  },
  watch:{
    //active元素发生变更
    currentValue(){
      this.setActive();
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../../assets/less/accordion.less";

</style>