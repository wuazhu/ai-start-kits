<template>
  <div class="functional-select-wrapper" >
      <div class="options-container">
          <div class="search-container">
            <section class="search-box " :class="{'placeholderCss':!showText}">
              <label class="icon-q" for="q" :class="{'icon-q-mid':!showIcon}" >搜索</label>
              <input type="text" id="q" class="text" :class="{'selectedCss':!showText}" name="search-input" :placeholder='label'  v-model="search" v-on:keyup="singleSearch" v-on:click.stop v-on:blur='blur' v-on:click='singleFocus'/>
               <!-- <label class="icon-d" :class="{'icon-q-mid':!showIcon}" >删除</label> -->
            </section>
          </div>
          <ul class="options-ul-list" v-show='isSelected'>
            <!-- <li v-show="!result">没有查询到数据</li> -->
            <li v-for="item in displayOptions" v-on:click.stop.prevent="singleSelect(item.id)" v-bind:class=" (item.id == selected.id)? selected:''" >{{ item.name }}</li>
          </ul>
     </div>
  </div>
</template>

<script>
export default {
  props: ['optionsdata','selecteddata','label'],
	data: function() {
		var data = {
            originOptions: [],
            displayOptions: [],
            show: false,
            showIcon: false,
            showText: true,
            search: '',
            selected: {
                id: "",
                name: ""
            },
            isSelected: false
		}
		return data
	},
	computed:{

	},
	// ready: function(){
	// 	window.addEventListener('click',this.blur)
	// 	//console.log(JSON.stringify(this.data))
	// },
    watch: {
        optionsdata: function (val, oldVal) {
            // console.log('option old: ' + JSON.stringify(oldVal))
            // console.log('option new: ' + JSON.stringify(val))
            this.originOptions = val;
            this.show = false;
            this.showText=false;
            this.showIcon=false;
            // 默认值
            if (this.selected.id == ''){
                this.selected = this.originOptions[0];
            }

        },
        selecteddata: function(val, oldVal){
            // console.log('selected old: ' + JSON.stringify(oldVal))
            // console.log('selectednew: ' + JSON.stringify(val))
            this.selected = val
        }

    },
	methods:{
        singleFocus: function(){
            if (!this.show){
                document.body.click();
                console.log('single show')
                this.show = true;
                this.showText=true;
                this.showIcon=true;
                this.isSelected=true;
                this.singleSearch();
                this.searchInputFocus();
            }
            else{
                this.blur();
            }
        },
        searchInputFocus: function(){
            var searchInput = this.$el.getElementsByClassName('search-input')[0];

            this.$nextTick(function(){
                // searchInput.focus();
            })

        },
        singleSelect: function(id){
            var mySelf = this;
            // var originOptions = mySelf.single.originOptions;
            var displayOptions = mySelf.displayOptions;
            for (var i=0; i<displayOptions.length;i++){
                var item = displayOptions[i]
                //在展示数组里找 找到后1.添加到selected
                if (item.id == id){
                    var selected = mySelf.selected;
                    selected.id = item.id
                    selected.name = item.name
                }
            }
            mySelf.show = false;
            mySelf.isSelected=false;
            this.search = this.selected.name;
            //传递给父级组件
            // console.log('派发！！')
            this.$emit('selected', this.selected)
            // console.log('选中的是' + JSON.stringify(this.selected))
            console.log(this.selected.name);
            // this.show=true
            this.showIcon=true
            this.showText=true
        },
        singleSearch: function(){
            var mySelf = this;
            var search = mySelf.search;
            var REG_RULE = new RegExp(search,"i") //根据用户输入值做正则
            var originOptions = mySelf.originOptions;
            //将展示列表置空 然后用正则去原始列表中匹配
            mySelf.displayOptions = [];

            //console.log('搜索的内容是' + search)
            for (var i=0;i<originOptions.length;i++){
                var item = originOptions[i]
                // console.log('当前校验的是' + item.name)
                // console.log('校验的结果是' + REG_RULE.test(item.name))
                if (REG_RULE.test(item.name)){
                    mySelf.displayOptions.push(item)
                }
            }
            // this.isSelected=true
            this.show=true;
            this.showText=true;
            this.showIcon=true;
            // this.isSelected=true;
            console.log('正在匹配')
        },
        blur: function(){
            console.log('hide single！！')
            this.show = false;
            if(this.search==''){
              this.showText= false;
              this.showIcon= false;
              // this.isSelected=false;
            }
            else{
              this.showText =true;
              this.showIcon =true;
            }
            // this.search = '';
        },
        delete: function(){
          console.log('清空搜索框');
          this.search='';
        }
	},
  computed:{

  }

}
</script>

<style lang="less" scoped>
@import '../../../src/assets/less/config.less';
@wd:712;
@ht:58;
.search-containner{
  background-color: #F6F6F6;
}
.search{
  border-radius: 10px;
  outline: none;
  border:0;
  .width(@wd);
  .height(@ht);
  .ml(16);
  .mt(16);
  .mb(16);
  .mr(16);
  .fs30;
}
.options-ul-list{
  .ml(16);
  & li{
    .fs30;
  }
}

.functional-select-wrapper .options-container .options-ul-list{
	max-height: 160px;
	list-style-type: none;
	overflow-x: visible;
	overflow-y: auto;
	cursor: pointer;
}

.functional-select-wrapper .options-container .options-ul-list li{
	.height(48);
  .width(@wd);
	line-height: 48px;
	// box-sizing: border-box;
	text-indent: 5px;
	padding: 6px;
}

.functional-select-wrapper .options-container .options-ul-list li:hover{
	background-color: #5897fb;
	color: #FFF;
	transition: all 0.3s ease;
}

.functional-select-wrapper .options-container .options-ul-list .selected{
	background-color: #DDD;
}
.icon-q{
  .width(56);
  .height(60);
  // .mb(0);
  background:url(../../assets/img/form/icon-query.png) no-repeat center center;display:inline-block;overflow:hidden;position:absolute;;text-indent:-999em;
  background-color: white;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.text{
  .width(656);
  .height(56);
  .ml(54);
  line-height:56/75*1rem;
  background:#fff;
  border:0;
  // border-radius:10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  outline: none;
  .fs28;
  // display:block;
}
.search-box{
  .width(712);
  .height(56);
  .ml(16);

}
// placeholder居中样式 
.placeholderCss{
  input::-ms-input-placeholder{text-align: center;} 
  input::-webkit-input-placeholder{text-align: center;}
}
//搜索icon 居中样式
.icon-q-mid{
    .ml(275); 
}
//搜索框被选中时的样式
.selectedCss{
  .width(712);
  .height(56);
  .ml(0);
  border-bottom-left-radius:10px;
  border-top-left-radius: 10px;
  text-indent: 10px; 
}
</style>
