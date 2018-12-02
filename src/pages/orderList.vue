<template>
    <div class="pro-list">
      <h2>您的产品</h2>
      <div class="pro-list-choose">
          <div class="list-choose-option">
            选择产品：<select-order :selections="products"></select-order>
          </div>
        <div class="list-choose-option">
          开始日期：<my-date-picker ref="start" :value="startTime" @change="changeStartTime"></my-date-picker>
        </div>
        <div class="list-choose-option">
          结束日期：<my-date-picker ref="end" :value="endTime" @change="changeEndTime"></my-date-picker>
        </div>
        <div class="list-choose-option">
          关键词：<input type="text" v-model.lazy="query">
          <!-- lazy，光标不在输入框内时绑定，即改变全部结束调用 -->
        </div>
      </div>
      <div class="order-list-table">
        <table>
          <tr>
            <th v-for="head in tableHeads" @click="changeOrder(head)">{{head.label}}</th>
          </tr>
          <tr v-for="item in tableData">
            <td v-for="prox in item">{{prox}}</td>
          </tr>
        </table>
      </div>
    </div>
</template>

<script>
  import SelectOrder from '../components/base/selection'
  import MyDatePicker from '../components/base/date'
  import _ from 'lodash'
  import moment from 'moment'
    export default {
        name: "orderList",
        components:{
          SelectOrder,
          MyDatePicker
        },
      data(){
          return {
            query:'',
            tableData:[],
            startTime:'',
            endTime:'',
            products: [
              {
                label: '数据统计',
                value: 0
              },
              {
                label: '数据预测',
                value: 1
              },
              {
                label: '流量分析',
                value: 2
              },
              {
                label: '广告发布',
                value: 3
              }
            ],
            tableHeads: [
              {
                label: '订单号',
                key: 'orderId'
              },
              {
                label: '购买产品',
                key: 'product'
              },
              {
                label: '版本类型',
                key: 'version'
              },
              {
                label: '有效时间',
                key: 'period'
              },
              {
                label: '数量',
                key: 'buyNum'
              },
              {
                label: '购买日期',
                key: 'date'
              },
              {
                label: '总价',
                key: 'amount'
              }
            ]
          }
      },
      methods:{
          getTableData(){
            let reqParams = {
              startTime:this.startTime,
              endTime:this.endTime
            }
            this.$http.post('/api/getOrderList',reqParams)
              .then((res) =>{
                this.tableData = res.data.list
                // console.log(res.data.list)
              }, (err) =>{
                  console.log(err)
              })
          },
        changeStartTime(date){
         this.startTime = date
          console.log(date)
          // console.log(this.$refs.start.value)//为何打印出来的时间不一致。处于递增状态
        },
        changeEndTime(date){
          this.endTime = date
        },
        changeOrder(headItem){
            this.tableData = _.orderBy(this.tableData,headItem)
        }

      },
      mounted(){
          this.getTableData()
      },
      watch:{
          query(){
            this.getTableData()
          }
      }
    }
</script>

<style lang="scss" scoped>
  .pro-list{
    width:1200px;
    margin:20px auto;
    min-height:800px;
    /*background:rgb(240,242,245);*/
    h2{
      font:bold 20px/1 simhei;
      padding:15px 0;
    }
    .pro-list-choose {
      .list-choose-option{
        display: inline-block;
        padding-left:15px;
        font-size:16px;
        /*background: white;*/
      }
      .list-choose-option:first-child{
        padding-left: 0;
      }
      input{
        height: 25px;
        line-height: 25px;
        border: 1px solid #e3e3e3;
        outline: none;
        text-indent: 10px;
      }
    }
    .order-list-table{
      margin-top: 20px;
      table{
        width: 100%;
        background: #fff;
        td,th{
          border: 1px solid #e3e3e3;
          text-align: center;
          padding: 10px 0;
        }
        th{
          background: #4fc08d;
          color: #fff;
          cursor: pointer;
        }
        th.active{
          background: #35495e;
        }
      }
    }
  }
</style>
