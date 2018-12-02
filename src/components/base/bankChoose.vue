<template>
    <ul>
      <li
        v-for="(item,index) in banks"
        :title="item.label"
        :class="[item.name,{active:index === nowIndex}]"
        @click="checkBanks(index)"
      ></li>
    </ul>
</template>

<script>
    export default {
      name: "bankChoose",
      data(){
          return {
            nowIndex:0,
            banks:[{
              id:201,
              label:'招商银行',
              name:'merchants'
            },{
              id:301,
              label:'中国建设银行',
              name:'construction'
            },{
              id:601,
              label:'浦发银行',
              name:'pufa'
            },{
              id:1101,
              label:'交通银行',
              name:'communications'
            },{
              id:101,
              label:'中国工商银行',
              name:'industrial'
            },{
              id:401,
              label:'中国农业银行',
              name:'agricultural'
            },{
              id:1201,
              label:'中国银行',
              name:'chainbank'
            },{
              id:501,
              label:'中信银行',
              name:'citic'
            }]
          }
      },
      methods:{
        checkBanks(index){
          this.nowIndex = index,
          this.$emit('on-change',this.banks[index])
          console.log(index)
        }
      }
    }
</script>

<style scoped>
  ul li{
    background:url(../../assets/banks/banks.png) no-repeat;
    display: inline-block;
    width:120px;
    height:32px;
    margin:5px;
    border:1px solid #e3e3d3;
    cursor:pointer;
  }
  ul li.active{
    border:1px solid #4fc08d;
  }
  .merchants{
    background-position:-2160px 0;
  }
  .construction{
    background-position:-720px 0;
  }
  .pufa{
    background-position:-1800px 0;
  }
  .communications{
    background-position:-3120px 0;
  }
  .industrial{
    background-position: -2640px 0;
  }
  .agricultural{
    background-position:-1680px 0;
  }
  .chainbank{
    background-position:-2520px 0;
  }
  .citic{
    background-position:-480px 0;
  }
</style>
