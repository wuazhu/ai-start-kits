<template>
  <div>
      <!-- 常规样式 btn、text -->
    <template v-if="isType==='btn'">
    <div class="tab-container" :class="{'tabBarType1':classType1,'tabBarType2':classType2,'tabBarType3':classType3}">
  <!-- <div  :class="[isType ? 'tabBarType1' : 'tabBarType2']"> -->
    <div name='normal'>
      <div class="groupList tab-title" >
        <a href="#" class="a-button blue left" :class="{'isActiveL':activeL}" @click='actL'>{{contentL}}</a>
        <a href="#" class="a-button blue middle" :class="{'isActiveM':activeM}" @click='actM'>{{contentM}}</a>
        <a href="#" class="a-button blue right" :class="{'isActiveR':activeR}" @click='actR'>{{contentR}}</a>
   </div><br>

      <!-- 左侧tab的内容 -->
    <slot name='tab-L'  v-if='activeL'>
    <div class="ai-tab-pane" type='btn'>
      <!-- 内容 -->
    </div>
    </slot>
    <!-- 中间tab的内容 -->
    <slot name='tab-M'  v-if='activeM'>
      <div class="ai-tab-pane" type='btn'>
        <!-- 内容 -->
      </div>
    </slot>  
    <!-- 右侧tab的内容 -->
    <slot name='tab-R'  v-if='activeR'>
      <div class="ai-tab-pane" type='btn'>
        <!-- 内容 -->
      </div>
    </slot> 
    </div>
  </div>
  </template>


    <!-- 文字样式tab -->
   <template v-if="isType==='text'">
    <div class="tab-container" :class="{'tabBarType1':classType1,'tabBarType2':classType2,'tabBarType3':classType3}">
  <!-- <div  :class="[isType ? 'tabBarType1' : 'tabBarType2']"> -->
    <div name='normal'>
      <div class="groupList tab-title" >
        <a href="#" class="a-button blue left" :class="{'isActiveL':activeL}" @click='actL'>{{contentL}}</a>
        <a href="#" class="a-button blue middle" :class="{'isActiveM':activeM}" @click='actM'>{{contentM}}</a>
        <a href="#" class="a-button blue right" :class="{'isActiveR':activeR}" @click='actR'>{{contentR}}</a>
   </div><br>

      <!-- 左侧tab的内容 -->
    <slot name='tab-L'  v-if='activeL'>
      <div class="ai-tab-pane" type='btn'>
        <!-- 内容 -->
      </div>
    </slot>
    <!-- 中间tab的内容 -->
    <slot name='tab-M'  v-if='activeM'>
      <div class="ai-tab-pane" type='btn'>
        <!-- 内容 -->
      </div>
    </slot>  
    <!-- 右侧tab的内容 -->
    <slot name='tab-R'  v-if='activeR'>
      <div class="ai-tab-pane" type='btn'>
        <!-- 内容 -->
      </div>
    </slot> 
    </div>
  </div>
  </template>
  <!-- 左侧tab样式 -->
  <template v-if="isType==='left'">
    <div class="tabBarType3">
      <div class="a-button-container">
        <!-- 默认左侧目录模板 -->
        <!-- <slot name='tab-left'> -->
           <div v-for="x in list" class='tab-catalog'>
               <a href="javascript:;" title="" class='a-button-l' @click='selectItem(x)' :class="{'isActive':!x.selected}">{{x.title}}</a>
               <label style='display:none' >{{x.id}}</label>
          <!--   <a href="#" title="" class='a-button-l'>选项2</a>
            <a href="#" title="" class='a-button-l'>选项3</a> -->
            </div>
        <!-- </slot> -->
        <!-- 右侧内容 -->
        <!-- <slot name='tab-left-content'> -->
          <!-- 内容 -->
          </div>
           <div v-for='x in list' v-if="selected==x.id" class='tab-left-content-container'>
                <div name='first' class="tab-left-content-container">
                  <div class='tab-left-title' >
                    <p>选项卡{{x.id}}</p>
                  </div>
                  <div class='tab-left-content'>
                    <ul >
                      <li>
                        <div class='tab-left-content-container'>
                          <div class='tab-left-content-title'>
                            <img src="../../assets/img/tabBar/img.png" alt="">
                          </div>
                          <div class='tab-left-content-content'>
                            <p>{{x.content}}</p><br>
                            <div class='tab-left-price'>
                              <img src="../../assets/img/tabBar/img_sm.png" alt="">
                              <p class='tab-left-price-p'>{{x.price}}</p>
                            </div>  
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
        <!-- </slot> -->
    
    </div>
  </template>

  </div>
</template>

<script>

export default {
   name: 'TabPane',
   props: {
     labelL: String,
     labelM: String,
     labelR: String,
     btn: String,
     isType: String
   },

   data() {
     return {
       index: null,
       num: '',
       activeL: true,
       activeM: false,
       activeR: false,
       activeThis: false,
       visibility:"1",//通过这个属性的值的变化来对数据进行筛选 默认选择第一个
       list:new Array,
       selected:"1"//选中的id
     };
   },
   methods:{
     actL(){
      console.log('左');
      this.activeL=true;
      this.activeM=false;
      this.activeR=false;
     },
     actM(){
      console.log('中');
      this.activeL=false;
      this.activeM=true;
      this.activeR=false;
     },
     actR(){
      console.log('右');
      console.log(this.selected)
      this.activeL=false;
      this.activeM=false;
      this.activeR=true;
     },
     selectItem(item){
      // 获取被点击的id
      this.selected=item.id;
      // 添加被点击样式
      item.selected=!item.selected;
      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].id!=item.id) {
        this.list[i].selected=true;
        }
      }
     }
   },
   computed: {
      contentL(){
      return this.labelL
     },
      contentM(){
      return this.labelM
     },
      contentR(){
      return this.labelR
     },
      classType1(){
        if(this.isType=='btn'){
          return true;
        }
      },
       classType2(){
        if(this.isType=='text'){
          return true;
        }
      },
      classType3(){
        if(this.isType=='left'){
          return true;
        }
      },
      // filteredList(){
      //   console.log(filter[this.visibility](this.list))
      //   return filter[this.visibility]?filter[this.visibility](this.list):this.list;
      // }

   },
   created(){
      this.$http.get('/api/getTabList')
     .then( (res) => {
       res=JSON.parse(res.bodyText)
       this.list=res
       console.log(this.list[0].title)
     }, (err) => {
       console.log(err)
     })
    },
   mounted() {
   },

   destroyed() {
   },

   watch: {
   }
 };
</script>

<style lang="less" scoped>
@import '../../assets/less/config';
@import '../../assets/less/TabBar';
</style>
