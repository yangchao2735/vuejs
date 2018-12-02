<template>
  <div class="chooser">
    <ul class="chooser-list">
      <li
        v-for="(item,index) in selections"
        :title="item.label"
        :class="{active:checkActive(index)}"
        @click="toggleActive(index)"
      >{{item.label}}</li>
    </ul>
  </div>
</template>

<script>
  import _ from 'lodash'
    export default {
        name: "multiplyChooser",
        props:{
          selections:{
            type:Array,
            default: () =>[{
              label:'',
              value:0
            }]
          }
        },
        data(){
          return {
            nowIndexes:[0]
          }
        },
        methods:{
          toggleActive(index){
            if(this.nowIndexes.indexOf(index) ===-1){
              this.nowIndexes.push(index)
            }
            else{
              //从nowIndexes中删除已存在的index元素

              //lodash方法
              this.nowIndexes = _.remove(this.nowIndexes, (idx) =>{
                // console.log(idx)
                return idx !== index
              })
              console.log(index)

              //es6
              // this.nowIndexes.splice(this.nowIndexes.findIndex((idx) =>{
              //   return idx == index
              // }),1)
            }
            let nowObjArray = _.map(this.nowIndexes,(idx) =>{
              return this.selections[idx]
            })
            console.log(nowObjArray)
            this.$emit('on-change',nowObjArray)
          },
          checkActive(index){
            return this.nowIndexes.indexOf(index) !== -1
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
