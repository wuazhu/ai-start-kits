<template>
  <div class="ai-counter"
    :class="{ disdecrement: decrementDisable, disincrement: incrementDisable}"
  >
    <button
      class="btn btn-counter btn-decrement"
      @click="decrement"
    >-</button>
    <input type="text" class="form-control" v-model="currentValue" @keyup="fixValue">
    <button
      class="btn btn-counter btn-increment"
      @click="increment"
    >+</button>
  </div>
</template>
<style lang="less">
@import '../../assets/less/config';

  .ai-counter{
    display: inline-block;
    .height(72);
    *{
      box-sizing: border-box;
      color: #6b6b6b;
    }
    .btn{
      .width(72);
      .height(70);
      .lh(60);
      float: left;
      background: #fff;
      border:1px solid #ccc;
      font-size: 36px;
    }
    .form-control{
      .pd(10,10,10,20);
      .width(170);
      .height(70);
      border:1px solid #ccc;
      float: left;
      margin-left: -1px;
      margin-right: -1px;
      .lh(48);
      font-size: 32px;
    }
    &.disdecrement{
      .btn-decrement{
        background: #f8f8f8;
        color: #9a9a9a;
      }
    }
    &.disincrement{
      .btn-increment{
        background: #f8f8f8;
        color: #9a9a9a;
      }
    }
  }
</style>
<script>
  export default {
    props:{
      min: {
        type: Number,
        default: 1
      },
      max: {
        type: Number,
        default: 999
      }
    },
    methods: {
      fixValue(){
        let fix
        if( typeof this.currentValue === 'string'){
          fix = Number(this.currentValue.replace(/\D/g, ''))
        }else{
          fix = this.currentValue
        }
        if( fix>this.max ){
          fix = this.max
          this.incrementDisable = true
          this.decrementDisable = false
        }else if( fix<this.min ){
          fix = this.min
          this.incrementDisable = false
          this.decrementDisable = true
        }else{
          this.incrementDisable = false
          this.decrementDisable = false
        }
        this.currentValue = fix
      },
      increment(){
        console.log(this.currentValue)
        this.currentValue ++
        if( this.currentValue >= this.max ){
          this.incrementDisable = true
          this.currentValue = this.max
        }else{
          this.incrementDisable = false
          this.decrementDisable = false
          return
        }
      },
      decrement() {

        this.currentValue --
        if( this.currentValue <= this.min ){
          this.decrementDisable = true
          this.currentValue = this.min
        }else{
          this.decrementDisable = false
          this.incrementDisable = false
        }
      }
    },
    data(){
      return{
        currentValue: 1,
        decrementDisable: true,
        incrementDisable: false
      }
    },
    computed(){

    }
  }
</script>