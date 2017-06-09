<template>
  <div class='indexListContainer'>
  	<div class="index-list js">
		<goback></goback>
  	</div>
  	<div id="item-container">
  		<div class='searchList'>
  			<ai-index-list></ai-index-list>
  		</div>
  	</div>
  	
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/config';
.js{
  .pt(90);
}
#item-container {
	position: fixed;
	top: 80px;
	left: 0;
	right: 0;
	width: 100%;
	bottom: 0;
	overflow: auto;
	background: #f7f7f7;
}
#item-container li {
	padding: 10px 20px;
	border-bottom: 1px solid #ccc;
}
#item-container li:last-child {
	border-bottom: none;
}
</style>
<script>
import goback from '../../components/goback'
import AiIndexList from '../../components/IndexList/AiIndexList'
export default {
  components: {
    goback,
    AiIndexList
  }
}
</script>