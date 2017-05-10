<template>
  <div class="cards">
    <goback></goback>
    <card>
    	<span slot="title">标题</span>
    	<h1 slot="strong">文本内容文本内容文本内容</h1>
    	<p>文本说明文本说明文本说明文本说明文本说明文本说明</p>
    	<span slot="subtitle">小标题 17-2-21</span>
      <router-link to="/" slot="more">更多</router-link>
    </card>
  </div>
</template>

<script>
import card from '../components/card/card'
import goback from '../components/goback'
export default {
  name: 'cards',
  components:{ card,goback }
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.cards{
		margin-top: 30/75*1rem;
	}
</style>