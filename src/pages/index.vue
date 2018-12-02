<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        <div v-for="product in productList">
          <h3>{{product.title}}</h3>
          <ul>
            <li v-for="item in product.list">
              <a :href="item.url">{{item.name}}</a>
              <span v-if='item.hot' class="hot-tag">Hot</span>
            </li>
          </ul>
          <div v-if='!product.last' class="hr"></div>
        </div>
      </div>
      <div class="index-left-block last-list">
        <h2>最新消息</h2>
        <ul>
          <li v-for="item in newList"><a :href="item.url" class="item-list">{{item.name}}</a></li>
        </ul>
      </div>
    </div>
    <div class="index-right">
      <!--carousel-->
      <slide-show :slides="slides" :inv="slideSpeed" @onchange=""></slide-show>

      <div class="index-board-block">
        <div class="board-item"  v-for="(item,index) in boardList" :class="[{'li-board':index %2 !== 0},'index-board-'+item.id]">
          <ul class="board-item-inner">
            <li>开放产品</li>
            <li>开放产品是一款面向大众的产品</li>
            <li>
              <a href="">立即购买</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import slideShow from '../components/slideShow'
  export default {
    name: "index",
    components:{
      slideShow
    },
    created(){
      this.$http.get('api/getNewList')
        .then((res) => {
          this.newList = res.data
        },(err) => {
          console.log(err)
        })
    },
    data(){
      return {
        slideSpeed:3000,
        slides:[
          // script中的src需要使用require通过weboack解析地址
          {
            src: require('../assets/slideShow/pic1.jpg'),
            title: 'xxx1',
            href: 'detail/count'
          },
          {
            src: require('../assets/slideShow/pic2.jpg'),
            title: 'xxx2',
            href: 'detail/forecast'
          },
          {
            src: require('../assets/slideShow/pic3.jpg'),
            title: 'xxx3',
            href: 'detail/analysis'
          },
          {
            src: require('../assets/slideShow/pic4.jpg'),
            title: 'xxx4',
            href: 'detail/publish'
          }],
        boardList: [
          {
            title: '开放产品',
            description: '开放产品是一款开放产品',
            id: 'car',
            toKey: 'analysis',
            saleout: false
          },
          {
            title: '品牌营销',
            description: '品牌营销帮助你的产品更好地找到定位',
            id: 'earth',
            toKey: 'count',
            saleout: false
          },
          {
            title: '使命必达',
            description: '使命必达快速迭代永远保持最前端的速度',
            id: 'loud',
            toKey: 'forecast',
            saleout: true
          },
          {
            title: '勇攀高峰',
            description: '帮你勇闯高峰，到达事业的顶峰',
            id: 'hill',
            toKey: 'publish',
            saleout: false
          }
        ],
        newList:[],
        productList:{
          pc:{
            title:'PC产品',
            list:[
              {
                name: '数据统计',
                url: 'http://starcraft.com'
              },
              {
                name: '数据预测',
                url: 'http://warcraft.com'
              },
              {
                name: '流量分析',
                url: 'http://overwatch.com',
                hot: true
              },
              {
                name: '广告发布',
                url: 'http://hearstone.com'
              }
            ]
          },
          app:{
            title:'手机应用类',
            last:true,
            list:[
              {
                name: '91助手',
                url: 'http://weixin.com'
              },
              {
                name: '产品助手',
                url: 'http://twitter.com',
                hot: true
              },
              {
                name: '智能地图',
                url: 'http://maps.com'
              },
              {
                name: '团队语音',
                url: 'http://phone.com'
              }
            ]
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.index-wrap{
  width:1200px;
  margin:0 auto;
  overflow:hidden;
  .index-left{
    width:300px;
    text-align:left;
    float:left;
    .index-left-block{
      margin:15px;
      background:#fff;
      box-shadow:0 0 1px #ddd;
      h2{
        padding:10px 15px;
        background:#4fc08d;
        color:white;
        margin-bottom: 20px;
      }
      h3{
        padding:0 15px 5px 15px;
        font:bold 14px/15px Microsoft YaHei;
      }
      ul{
        padding:10px 15px;
        font-size:14px;
        li{
          padding:5px;
          .hot-tag{
            margin-left:15px;
            color:red;
          }
        }
      }
      hr{
        margin-bottom:20px;
      }
    }
    .last-list{
      min-height:525px;
      .item-list{
        display: inline-block;
        width:230px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
    }
  }
  .index-right{
    width:900px;
    float:left;
    .index-board-block{
      width:900px;
      overflow: hidden;
      .board-item{
        width:400px;
        background-color: white;
        box-shadow:0 0 1px #ddd;
        margin-bottom:20px;
        margin-right:20px;
        padding:20px;
        float: left;
        ul{
          min-height:125px;
          padding-left:120px;
          li:nth-of-type(1){
            font:bold 18px simhei;
            margin-bottom:20px;
          }
          li:nth-of-type(2){
            margin-top:15px;
          }
          li:nth-of-type(3){
            margin-top:20px;
            width:80px;
            height:30px;
            line-height:30px;
            background-color:#4fc08d;
            color:white;
            text-align: center;
          }
        }
      }
      .index-board-car ul{
        background: url(../assets/images/1.png) 0 0 no-repeat;
      }
      .index-board-loud ul{
        background: url(../assets/images/2.png) no-repeat;
      }
      .index-board-earth ul{
        background: url(../assets/images/3.png) no-repeat;
      }
      .index-board-hill ul{
        background: url(../assets/images/4.png) no-repeat;
      }
      .li-board{
        margin-right:0;
      }
    }
  }
}
</style>
