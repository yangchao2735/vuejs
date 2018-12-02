<template>
    <div class="selection-component" @mouseleave="hide">
      <div class="selection-show" @click="toggleDrop">
        <span>{{selections[nowIndex].label}}</span>
        <div class="arrow"></div>
      </div>
      <div class="selection-list" v-if="isDrop">
        <ul>
          <li v-for="(item,index) in selections" @click="chooseSelection(index)">{{item.label}}</li>
        </ul>
      </div>
    </div>
</template>

<script>
  export default {
    name: "selection",
    props:{
      selections:{
        type:Array,
        default:[{
          label:'',
          value:0
        }]
      }
    },
    data(){
      return {
        isDrop:false,
        nowIndex:0
      }
    },
    methods:{
      toggleDrop(){
        this.isDrop = !this.isDrop
      },
      chooseSelection(index){
        this.nowIndex = index
        this.isDrop = false
        this.$emit('on-change',this.selections[this.nowIndex])
      },
      hide(){//父加mouseout事件
        this.isDrop = false
      }
    }
  }
</script>

<style lang="scss" scoped>
.selection-component{
  position: relative;
  display: inline-block;/*保证selection-list和li同宽*/
  .selection-show{
    /* 只设置padding,宽度由文字决定 */
    display: inline-block;
    height:25px;
    line-height:25px;
    border:1px solid #ddd;
    border-radius:3px;
    position: relative;
    padding:0 20px 0 10px;
    cursor:pointer;
    .arrow {
      position: absolute;
      border-top: 5px solid black;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      right:8px;
      top:10px;
      vertical-align: middle;
    }
  }
  .selection-list{
    position: absolute;
    display: inline-block;
    left:0;
    top:25px;
    width:100%;
    background:#fff;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    z-index: 5;
    li{
      padding: 2px 15px 0 10px;
      border-left: 1px solid #e3e3e3;
      border-right: 1px solid #e3e3e3;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor:pointer;
      background:#fff;
    }
    li:hover{
        background: #e3e3e3;
    }
  }
}
</style>
