<template>
    <div>
      <div class="app-head">
        <div class="app-head-inner">
          <router-link :to="{path:'/'}">
            <img src="../assets/logo.png" alt="">
          </router-link>
          <ul class="app-head-list">
            <li>{{username}}</li>
            <li v-if="username === ''" @click="logClick">登录</li>
            <li>|</li>
            <li v-if="username !== ''">退出</li>
            <li v-if="username === ''">注册</li>
            <li>|</li>
            <li @click="aboutClick">关于</li>
          </ul>
        </div>
      </div>
      <div class="app-content">
        <!-- 根据路由路径显示主页面，在main.js中有设置路由来自index.vue页面 -->
        <router-view></router-view>
      </div>
      <div class="app-foot">
        <p>&copy;2018年10月25日</p>
      </div>
      <!--关于弹窗-->
      <my-dialog v-bind:isShow="isShowAboutDialog" @on-close="closeDiglog('isShowAboutDialog')">
        <p>关于此次vue仿写小总结</p>
        <about-report></about-report>
        <div class="experience">
        <p>初次Git代码学习，遇到的问题很多，环境以及服务器的搭建，基础功能的实现等。受益颇多。</p>
        <p>基础指令：v-model,v-if,v-show,v-on,v-bind,{{}},v-html,v-for等等</p>
        <p>vue-router：路由调整，重定向等方法使用</p>
        <p>axios:前后端数据交互</p>
        <p>express,body-parser:简单模拟后端服务器</p>
        </div>
      </my-dialog>
    </div>
</template>

<script>
  import Dialog from './base/dialog'
  import AboutReport from './base/report'
  export default {
    name: "layout",
    components:{
      MyDialog:Dialog,
      AboutReport
    },
    data(){
      return {
        isShowAboutDialog:false,
        username:''
      }
    },
    methods:{
      aboutClick(){
        this.isShowAboutDialog = true;
      },
      closeDiglog(attr){
        this[attr] = false
      },
      logClick(){

      }
    }
  }
</script>

<style lang="scss">
  /*global style*/
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  body {
    background: #f0f2f5;
    font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
    font-size: 14px;
    color: #444;
  }

  .app-head{
    width:100%;
    height:90px;
    line-height:90px;
    background:#363636;
    color:#b2b2b2;
    .app-head-inner{
      width:1200px;
      margin:0 auto;
      overflow: hidden;
      img{
        width:50px;
        margin-top:20px;
      }
      .app-head-list{
        float:right;
        li{
          float:left;
          padding:0 10px;
          cursor:pointer;
        }
      }
    }
  }
.app-foot{
  width:100%;
  height:80px;
  line-height:80px;
  background:rgb(227,228,232);
  text-align: center;
  color:black;
}
  .experience{
    margin-top:30px;
  }
</style>
