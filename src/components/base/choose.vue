<template>
    <div class="chooser">
      <ul class="chooser-list">
        <li
          v-for="(item,index) in selections"
          @click="chooseSelection(index)"
          :class="{active:index===nowIndex}"
        >{{item.label}}</li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: "choose",
    props:{
      selections:{
        type:Array,
        default:[{
          label:'',
          value:2
        }]
      }
    },
    data(){
      return {
        nowIndex:0
      }
    },
    methods:{
      chooseSelection(index){
        this.nowIndex = index
        this.$emit('on-change',this.selections[index])
      }
    }
  }
</script>

<style lang="scss" scoped>
  .chooser{
    position:relative;
    display: inline-block;
    .chooser-list li{
      display: inline-block;
      border: 1px solid #e3e3e3;
      height: 25px;
      line-height: 25px;
      padding: 0 8px;
      margin-right: 5px;
      border-radius: 3px;
      text-align: center;
      cursor: pointer;
    }
    .chooser-list li.active{
      border-color: #4fc08d;
      background: #4fc08d;
      color: #fff;
    }
  }
</style>
