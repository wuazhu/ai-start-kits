<template>
	<div class='loadingContainer'  :class="{'loadingContainerCss':loadingType}">
		<!-- 下拉上划 加载 -->
		<div class='loading' v-show="loadingType!='button'" >
			<div v-show='show'>
				<img src="../../assets/img/loading/loading.gif" alt="">
				<span>{{tips}}</span>
			</div>
		</div>
		<!-- 按钮点击 -->
		<div  v-show="loadingType=='button'" class='loadingBtnDiv'>
			<div :class="{'loadingBtn':loadingType}" v-show="show">
			<div v-show="loadingType=='button'">
				<img src="../../assets/img/loading/loading.gif" alt="">
			</div>
			</div>
			<input type="button" name="" :value="buttonVal" class='loadingButton'>
		</div>
	</div>
</template>
<style lang="less" scoped>
@import '../../assets/less/Loading.less';
</style>
<script>
// import goback from '../../components/goback'
export default {
	props:{
		loadingType:{
			loadingType:String
		},
		label:{
			type:String,
			default:'按钮'
		}
	},
	data(){
		return{
			show: false,
			tips: "正在加载",
		}
	},
	created(){
		if(this.type!='button'){
			this.touch();
		}
		if(this.type='button'){
			this.click();
		}
	},
	methods:{
		touch(){
			this.show=true
			const me=this;
			this.touchStartCall= function(){
				console.log('touch开始');
				this.tips='正在加载'
			}
			this.touchEndCall= function(){
				console.log('touch结束');
				console.log('滑动');
				var fn=function(){
					me.show=false;
					me.tips="正在加载"
				}
				setTimeout(fn,1000)
			}
			this.touchMoveCall= function(){
				// console.log('滑动');
				// // me.show=false;向下滑动后隐藏
				// var fn=function(){
				// 	me.show=false;
				// }
				// setTimeout(fn(),3000)
				me.tips="释放刷新"
			}
			window.addEventListener('touchstart',this.touch)
			window.addEventListener('touchend',this.touchEndCall)
			window.addEventListener('touchmove',this.touchMoveCall)
		},
		click(){
			const me=this
			this.clicked= function(){
				console.log('点击按钮')
				me.show=true

			}
			window.addEventListener('click',this.clicked)
			window.removeEventListener('click',this.clicked)
		}
	},
	computed:{
		buttonVal(){
			return this.label;
		}
	}
}

</script>