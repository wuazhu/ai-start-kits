<template>
  <div class="ai-selection">
    <div class="select-box">
      <span class="ai-select-value">请选择</span>
      <i class="icon-arrow-right">></i>
    </div>
    <div class="select-items">
      <ul>
        <li class="select-item" v-for="item in items">{{item.title}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'item list 1'
        },
        {
          title: 'item list 2'
        },
        {
          title: 'item list 3'
        },
        {
          title: 'item list 4'
        },
        {
          title: 'item list 5'
        },
        {
          title: 'item list 6'
        },
        {
          title: 'item list 7'
        },
        {
          title: 'item list 8'
        },
        {
          title: 'item list 9'
        },
        {
          title: 'item list 10'
        }
      ]
    }

  }
}
</script>