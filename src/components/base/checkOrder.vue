<template>
    <div>
      <this-dialog :is-show="isShowCheckDialog" @click="checkStatus" @on-close="checkStatus">
        请检查你的的支付状态！
        <div class="button" @click="checkStatus">
          支付成功
        </div>
        <div class="button" @click="checkStatus">
          支付失败
        </div>
      </this-dialog>
      <this-dialog :is-show="isShowSuccessDialog" @on-close="toOrderList">
        购买成功
      </this-dialog>
      <this-dialog :is-show="isShowFailDialog" @on-close="toOrderList">
        购买失败
      </this-dialog>
    </div>
</template>

<script>
  import Dialog from './dialog'
    export default {
      name: "checkOrder",
      components:{
          thisDialog:Dialog
      },
      props:{
        isShowCheckDialog:{
          type:Boolean,
          default:false
        },
        orderId:{
          type:[String,Number]
        }
      },
      data(){
        return {
          isShowSuccessDialog: false,
          isShowFailDialog:false
        }
      },
      methods:{
        checkStatus(){
          // 无论请求成功还是失败都将当前的orderId传送到数据库中
          this.$http.post('/api/checkOrder',{
            orderId:this.orderId
          })
            .then((res) => {
              this.isShowSuccessDialog = true
              this.$emit('on-close-check-dialog')
            }),(err)=>{
              this.isShowFailDialog = true
              this.$emit('on-close-check-dialog')
          }
        },
        toOrderList(){
          this.$router.push({
            path:'/orderList'
          })
        }
      }
    }
</script>

<style scoped>
  .button{
    display: inline-block;
    padding:5px 10px;
    background: #4fc08d;
    color: white;
    border-radius:2px;
    margin-left:5px;
    cursor:pointer;
  }
</style>
