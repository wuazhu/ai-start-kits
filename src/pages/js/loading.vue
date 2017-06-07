<template>
	<div class='loadingDiv'>
		<div class="loading js">
    		<goback></goback>
  		</div>
  		<div class='loadList'>
  			<!-- 下拉刷新 -->
  			<div class="">
  				<ai-loading></ai-loading>
  			</div>
  			<ul>
  				<li>第一个选项卡</li>
  				<li>第二个选项卡</li>
  				<li>第三个选项卡</li>
  				<li>第四个选项卡</li>
  				<li>第五个选项卡</li>
  				<li>第六个选项卡</li>
  				<li>第七个选项卡</li>
  				<li>第八个选项卡</li>
  				<li>第九个选项卡</li>
  				<li>第十个选项卡</li>
  				<li>第十一个选项卡</li>
  				<li>第十二个选项卡</li>
  				<li>第十三个选项卡</li>
  				<li>第十四个选项卡</li>
  			</ul>
  			<!-- 向下加载 -->
  			<div class="">
  				<ai-loading loadingType=''></ai-loading>
  			</div>
         <div class='loadingButton'>
       <div class="">
          <ai-loading loadingType='button' label='发布'></ai-loading>
        </div>
      </div>
  		</div>
     
	</div>
</template>
<style lang="less" scoped>
@import '../../assets/less/config';
.js{
  .pt(90);
}
// 列表的样式
.loadList{
	.width(750);
	.mb(120);
	& ul{
		& li{
			.height(90);
			line-height:90/75*1rem;
			.fs30;
			.pl(30);
			background-color: white;
			border-bottom: solid 1px rgb(228, 228, 228)
		}
	}
}
// 按钮加载的样式
// .loadingButton{
//   & div{
//     & input{
//         .fs30;
//     }
//   }
// }
</style>
<script>
import goback from '../../components/goback'
import AiLoading from '../../components/Loading/AiLoading'
export default {
  components: {
    goback,
    AiLoading
  }
}
</script>