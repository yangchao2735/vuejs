<template>
    <ul>
      <li class="counter-btn" @click="minus">-</li>
      <li>
        <input type="text" v-model="num">
      </li>
      <li class="counter-btn" @click="plus">+</li>
    </ul>
</template>

<script>
    export default {
        name: "counter",
        props:{
          min:{
            type:Number,
            default:0
          },
          max:{
            type:Number,
            default:5
          }
        },
        data(){
          return {
            num:this.min,
            price:20,
            totalNumber:0
          }
        },
        methods:{
          minus(){
            if(this.num <= this.min){
              return
            }
            this.num --
          },
          plus(){
            if(this.num >= this.max){
              return
            }
            this.num ++
          }
        },
        computed:{

        },
      watch:{
          num(){
            this.$emit('on-change',this.num)
          }
      }
    }
</script>

<style lang="scss" scoped>
  ul{
    li:nth-of-type(2){
      display: inline-block;
    }
    li:nth-of-type(2)>input{
      display: inline-block;
      border:none;
      border-top: 1px solid #e3e3e3;
      border-bottom: 1px solid #e3e3e3;
      height: 23px;
      line-height: 23px;
      width: 30px;
      outline: none;
      margin-left:-4px;
      margin-right:-4px;
      text-align: center;
    }
    .counter-btn{
      border: 1px solid #e3e3e3;
      display: inline-block;
      height: 25px;
      line-height: 25px;
      width: 25px;
      text-align: center;
      cursor: pointer;
    }
    .counter-btn:hover{
      background:#4fc08d;
    }
  }
</style>
