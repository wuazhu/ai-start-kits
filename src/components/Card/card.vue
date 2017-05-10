<template>
  <div class="card">
  	<div class="card-hd">
  		<slot name="title"></slot>	
  	</div>
  	<div class="card-bd">
  		<!--字体加强-->
  		<div class="strong">
  			<slot name="strong"></slot>
  		</div>
  		<!--普通文本-->
  		<div class="content">
  			<slot></slot>
  		</div>
  		<!--小标题-->
  		<div class="subtitle">
  			<slot name="subtitle"></slot>
  		</div>
  		<!--更多href-->
  		<div class="more">
  			<slot name="more"></slot>
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'card',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	@import '../../assets/less/card.less';
</style>