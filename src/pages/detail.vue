<template>
    <div class="detail-wrap">
      <div class="wrap-left">
        <img :src="productIcon" alt="">
        <ul>
          <router-link v-for="item in products" :key="item.id" :to="{path:item.path}" tag="li" class="wrap-list" active-class="active">{{item.name}}</router-link>
        </ul>
      </div>
      <div class="wrap-right">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
</template>

<script>
  export default {
    name: "detail",
    data () {
      return {
        products: [
          {
            id:1,
            name: '数据统计',
            path: 'count',
            icon: require('../assets/images/1.png'),
            active: false
          },
          {
            id:2,
            name: '数据预测',
            path: 'forecast',
            active: false
          },
          {
            id:3,
            name: '流量分析',
            path: 'analysis',
            active: false
          },
          {
            id:4,
            name: '广告发布',
            path: 'publish',
            active: false
          }
        ],
        // 数据设置路由对应图片地址
        imgMap: {
          '/detail/count': require("../assets/images/1.png"),
          '/detail/forecast': require("../assets/images/2.png"),
          '/detail/analysis': require("../assets/images/3.png"),
          '/detail/publish': require("../assets/images/4.png")
        }
      }
    },
    computed:{
      productIcon(){
        return this.imgMap[this.$route.path]
      }
    }
  }
</script>

<style lang="scss">
  .detail-wrap{
    width:1200px;
    margin:0 auto;
    height: auto;
    overflow: hidden;
    .wrap-left{
      width:200px;
      min-height:300px;
      background:white;
      float: left;
      margin-top:20px;
      img{
        margin:20px auto;
        display: block;
      }
      ul li{
        padding:5px 0 5px 10px;
        cursor:pointer;
      }
      .active{
        background-color:#4fc08d;
        color:#fff;
      }
    }
    .wrap-right{
      width:980px;
      margin-left:20px;
      margin-top:20px;
      float:left;
      .sales-board{ /*子页面公共样式*/
        background: white;
        .sales-board-intro h2{
          font:500 18px simhei;
          padding:20px;
        }
        .sales-board-intro p{
          background:rgb(247,255,252);
          color:rgb(153,153,153);
          padding:10px 20px;
          line-height:1.8;
        }
        .sales-board-form{
          padding: 30px 20px;
          font-size:14px;
          .sales-board-line{
            padding-bottom:20px;
            .sales-board-line-left{
              display: inline-block;
              width:100px;
            }
            .sales-board-line-right{
              display: inline-block;
              width:75%;
              height:30px;
              line-height:30px;
              color: black;
              border-radius:2px;
              background:#fff;
              .button{
                background:#4fc08d;
                width:72px;
                height:30px;
                line-height:30px;
                border-radius:3px;
                color:white;
                text-align: center;
                cursor: pointer;
                margin-top:10px;
              }
            }
          }

        }
        .sales-board-des{
          border-top: 20px solid #f0f2f5;
          padding: 15px 20px;
          h2{
             font-size: 20px;
             padding-bottom: 15px;
          }
          p{
            line-height: 1.6;
          }
          table{
            width:100%;
            margin-top: 20px;
            tr td{
              padding: 15px;
              border: 1px solid #f0f2f5;
              text-align: center;
            }
          }
        }
      }
    }
  }


</style>
