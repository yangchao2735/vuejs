<template>
    <div class="sales-board">
      <div class="sales-board-intro">
        <h2>流量分析</h2>
        <p>是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的</p>
      </div>
      <div class="sales-board-form">
        <div class="sales-board-line">
            <div class="sales-board-line-left">购买数量：</div>
            <div class="sales-board-line-right">
                <v-counter :min="1" @on-change="onParamChange('buyNum',$event)"></v-counter>
            </div>
          </div>
        <div class="sales-board-line">
          <div class="sales-board-line-left">产品类型：</div>
          <div class="sales-board-line-right">
            <v-selection :selections="buyTypes" @on-change="onParamChange('buyType',$event)"></v-selection>
          </div>
        </div>
        <div class="sales-board-line">
          <div class="sales-board-line-left">
            有效时间：
          </div>
          <div class="sales-board-line-right">
            <v-chooser :selections="periodList" @on-change="onParamChange('period',$event)"></v-chooser>
          </div>
        </div>
        <div class="sales-board-line">
          <div class="sales-board-line-left">
            产品版本：
          </div>
          <div class="sales-board-line-right">
            <v-multiply :selections="versionList" @on-change="onParamChange('versions',$event)"></v-multiply>
          </div>
        </div>
        <div class="sales-board-line">
          <div class="sales-board-line-left">
            总价：
          </div>
          <div class="sales-board-line-right">
            {{price}}
          </div>
        </div>
        <div class="sales-board-line">
          <div class="sales-board-line-left">
            &nbsp;
          </div>
          <div class="sales-board-line-right">
            <div class="button" @click="showPayDialog">立即购买</div>
          </div>
        </div>
      </div>
      <div class="sales-board-des">
        <h2>产品说明</h2>
        <p>广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。</p>
        <table class="sales-board-table">
          <tbody>
          <tr class="ui-table-row">
            <td class="col-first">
              <div class="intro-pic">
                <label>安全安保</label>
              </div>
            </td>
            <td>
              <div class="intro-pic">
                <label>办公文教</label>
              </div>
            </td>
            <td>
              <div class="intro-pic">
                <label>彩票</label>
              </div>
            </td>
            <td>
              <div class="intro-pic">
                <label>车辆物流</label>
              </div>
            </td>
            <td>
              <div class="intro-pic">
                <label>成人用品</label>
              </div>
            </td>
            <td>
              <div class="intro-pic">
                <label>出版传媒</label>
              </div>
            </td>
            <td>
              <div class="intro-pic">
                <label>电脑硬件</label>
              </div>
            </td>
          </tr>
          <tr class="ui-table-row">
            <td class="col-first">
              <div class="intro-pic">
                <label>电子电工</label>
              </div>
            </td>
            <td>
              <div class="intro-pic">
                <label>房地产建筑装修</label>
              </div>
            </td>
            <td>
              <div class="intro-pic">
                <label>分类平台</label>
              </div>
            </td>
            <td>
              <div class="intro-pic">
                <label>服装鞋帽</label>
              </div>
            </td>
            <td>
              <div class="intro-pic">
                <label>箱包饰品</label>
              </div>
            </td>
            <td>
              <div class="intro-pic">
                <label>化工原料制品</label>
              </div>
            </td>
            <td>
              <div class="intro-pic">
                <label>机械设备</label>
              </div>
            </td>
          </tr>
          <tr class="ui-table-row">
            <td class="col-first">
              <div class="intro-pic">
                <label>家庭日用品</label>
              </div>
            </td>
            <td>
              <div class="intro-pic">
                <label>家用电器</label>
              </div>
            </td>
            <td>
              <div class="intro-pic">
                <label>教育培训</label>
              </div>
            </td>
            <td>
              <div class="intro-pic">
                <label>节能环保</label>
              </div>
            </td>
            <td>
              <div class="intro-pic">
                <label>金融服务</label>
              </div>
            </td>
            <td>
              <div class="intro-pic">
                <label>礼品</label>
              </div>
            </td>
            <td>
              <div class="intro-pic">
                <label>旅游住宿</label>
              </div>
            </td>
          </tr>
          <tr class="ui-table-row">
            <td class="col-first">
              <div class="intro-pic">
                <label>美容化妆</label>
              </div>
            </td>
            <td>
              <div class="intro-pic">
                <label>母婴护理</label>
              </div>
            </td>
            <td>
              <div class="intro-pic">
                <label>农林牧渔</label>
              </div>
            </td>
            <td>
              <div class="intro-pic">
                <label>软件</label>
              </div>
            </td>
            <td>
              <div class="intro-pic">
                <label>商务服务</label>
              </div>
            </td>
            <td>
              <div class="intro-pic">
                <label>生活服务</label>
              </div>
            </td>
            <td>
              <div class="intro-pic">
                <label>食品保健品</label>
              </div>
            </td>
          </tr>
          <tr class="ui-table-row">
            <td class="col-first">
              <div class="intro-pic">
                <label>手机数码</label>
              </div>
            </td>
            <td>
              <div class="intro-pic">
                <label>通讯服务设备</label>
              </div>
            </td>
            <td>
              <div class="intro-pic">
                <label>网络服务</label>
              </div>
            </td>
            <td>
              <div class="intro-pic">
                <label>医疗服务</label>
              </div>
            </td>
            <td>
              <div class="intro-pic">
                <label>游戏</label>
              </div>
            </td>
            <td>
              <div class="intro-pic">
                <label>运动休闲娱乐</label>
              </div>
            </td>
            <td>
              <div class="intro-pic">
                <label>招商加盟</label>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <my-dialog :is-show="isShowPayDialog" @on-close="hidePayDialog">
        <table class="buy-dialog-table">
          <tr>
            <th>购买数量</th>
            <th>产品类型</th>
            <th>产品版本</th>
            <th>有效时间</th>
            <th>总价</th>
          </tr>
          <tr>
            <td>{{buyNum}}</td>
            <td>{{buyType.label}}</td>
            <td>
              <span v-for="item in versions">{{item.label}}</span>
            </td>
            <td>{{period.label}}</td>
            <td>{{price}}</td>
          </tr>
        </table>
        <div class="select-bank">
          <h2>请选择银行</h2>
          <bank-choose @on-change="changeBanks"></bank-choose>
          <div class="button" @click="confirmBuy">确认购买</div>
        </div>
      </my-dialog>
      <my-dialog :is-show="isShowErrDialog" @on-close="hideErrDialog"></my-dialog>
      <check-order :isShowCheckDialog="isShowCheckOrder" @on-close-check-dialog="hideCheckOrder"></check-order>
    </div>

</template>

<script>
  import VCounter from '../../components/base/counter'
  import VSelection from '../../components/base/selection'
  import VChooser from '../../components/base/choose'
  import VMultiply from '../../components/base/multiplyChooser'
  import Dialog from '../../components/base/dialog'
  import BankChoose from '../../components/base/bankChoose'
  import CheckOrder from '../../components/base/checkOrder'
  import _ from 'lodash'
  export default {
    name: "analysis",
    components:{
      VCounter,
      VSelection,
      VChooser,
      VMultiply,
      MyDialog:Dialog,
      BankChoose,
      CheckOrder
    },
    data(){
      return {
        buyNum:1,
        buyType:{},
        versions:[],
        period:{},
        price:0,
        buyTypes:[
          {
            label: '入门版',
            value: 0
          },
          {
            label: '中级版',
            value: 1
          },
          {
            label: '高级版',
            value: 2
          }],
        periodList: [
          {
            label: '半年',
            value: 0
          },
          {
            label: '一年',
            value: 1
          },
          {
            label: '三年',
            value: 2
          }
        ],
        versionList: [
          {
            label: '客户版',
            value: 0
          },
          {
            label: '代理商版',
            value: 1
          },
          {
            label: '专家版',
            value: 2
          }
        ],
        isShowPayDialog:false,
        bankId:null,
        orderId:null,
        isShowCheckOrder:false,
        isShowErrDialog:false
      }
    },
    methods:{
      showPayDialog(){
        this.isShowPayDialog = true
      },
      hidePayDialog(){
        this.isShowPayDialog = false
      },
      onParamChange(attr,val){
        this[attr] = val
        // console.log(val)
        // console.log(this[attr])
        this.getPrice()
      },
      getPrice(){
        let buyVersionsArray = _.map(this.versions,(item) =>{
          // console.log(item.value)
          return item.value
        })
        let reqParams = {
          buyNumber: this.buyNum,
          buyType:this.buyType.label,
          version:buyVersionsArray.join(','),
          period:this.period.label,
          bankId:this.bankId
        }
        // console.log(reqParams.version)
        this.$http.post('/api/getPrice',reqParams)
          .then((res) => {
            console.log(res.data)
            this.price = res.data.amount
          })
      },
      changeBanks(ojbk){
        this.bankId = ojbk.id
        console.log(ojbk.id)
      },
      confirmBuy(){
        let buyVersionArray = _.map(this.versions,(item) =>{
          return this.item
        })
        let reqParams = {
          buyNumber: this.buyNum,
          buyType:this.buyType.label,
          version:buyVersionArray.join(','),
          period:this.period.label,
          bankId:this.bankId
        }
        //根据ID检查确认购买支付状态
        this.$http.post('/api/createOrder',reqParams)
          .then( (res) =>{
            // 请求成功则显示支付状态确认页面，并且关闭前面的选择银行订单页面
            this.orderId = res.data.orderId,
            this.isShowPayDialog = false
            this.isShowCheckOrder = true
          }),(err) =>{
          // 请求失败调用弹窗
          this.isShowErrDialog = true
          this.isShowPayDialog = false
        }
      },
      hideCheckOrder(){
        this.isShowCheckOrder = false
      },
      hideErrDialog(){
        this.isShowErrDialog = true
      }
    },
    mounted(){
      this.buyNum = 1,
      this.buyType = this.buyTypes[0] ,
      this.versions = [this.versionList[0]],
      this.period = this.periodList[0],
      this.getPrice()
    }
  }

</script>

<style lang="scss" scoped>
  table.buy-dialog-table{
    width:100%;
    margin-bottom:20px;
    text-align: center;
    th,td{
      border: 1px solid #e3e3e3;
      padding:5px 0;
    }
    th{
      background:#4fc08d;
      color:white;
      border-top:1px solid #4fc08d;
      border-bottom:1px solid #4fc08d;
    }
    th:first-child{
      border-left:1px solid #4fc08d;
    }
    th:last-of-type{
      border-right:1px solid #4fc08d;
    }
  }
  .select-bank{
    display: inline-block;
  }
  .select-bank h2{
    font-weight:bold;
    font-size:18px;
  }
  .select-bank .button{
    background-color:#4fc08d;
    color: white;
    border-radius:2px;
    width:75px;
    text-align: center;
    height:30px;
    line-height:30px;
    margin-left:5px;
    cursor:pointer;
  }
</style>
