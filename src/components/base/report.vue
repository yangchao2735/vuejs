<template>
    <div class="reports">
      <h2>名称：vue PC端</h2>
      <div class="baseReport">
        <h3>文件信息</h3>
        <p>|- build   //配置webpack的基本配置，开发环境，生产环境配置</p>
        <p>|- db.json  //存放组件需要的数据</p>
        <p>|- src  //放置组件和文件的入口</p>
        <p>|---   assets  //存放图片</p>
        <p>|---   components   //页面供应的各类组件</p>
        <p>|---   pages   //添加页面</p>
        <p>|---   main.js  //初始化vue实例，并使用需要的插件</p>
      </div>
      <div class="baseReport">
        <h3>插件信息</h3>
        <p>slideShow 用于展示幻灯片 ，接受参数slides,速度slideSpeed</p>
        <p>dialog: 用于设置弹窗的基本样式，接受参数isShow</p>
        <p>counter: 用于数据加减，接受参数max,min，其中用watch监听number的改变</p>
        <p>selection: 单选框，接受参数selections</p>
        <p>multiplyChooser: 多选框</p>
      </div>
      <div class="baseReport">
        <h3>主要组件信息</h3>
        <p>layout.vue：注册根实例、页面分头部，内容，底部三大部分</p>
        <ul class="component-list">
          <li>头部信息</li>
          <li>1.头部由左侧logo(可跳转主页面)和右侧的登录注册等组成</li>
          <li>2.登录注册通过判定是否显示用户名/退出/注册等信息</li>
        </ul>
        <ul class="component-list">
          <li>中间内容部分：index.vue</li>
          <li>1.内容通过路由设置来自的index.vue组件组成，分左右两大模块</li>
          <li>2.index.vue组件组成：左侧由产品分类组成，可跳转到相应页面</li>
          <li>3.index.vue右侧分上下两部分，上部分由插件轮播图组成，添加相应路由进行跳转，下部分有产品详情组成</li>
        </ul>
        <ul class="component-list">
          <li>底部信息</li>
          <li>仿写时间等等</li>
        </ul>
        <ul class="component-list">
          <li>detail：通过轮播图跳转后的路由组件</li>
          <li>analysis,count,forecast,publish子组件</li>
          <li>1.左侧产品详情，跳转子路由；右侧通过路由跳转到相应组件页面。采用公共样式。</li>
          <li>2.使用了choose(单选)，multiplyChooser(复选)，counter(数量+/-)，date(日期)，dialog(弹出框)，selection(下拉框)的基础公共组件/插件等</li>
          <li>3.组件之间的属性，方法调用，传值等。</li>
        </ul>
        <ul class="component-list">
          <li>orderList:购买后的产品列表组件</li>
          <li>日期选择（基础用法），关键字搜索（暂未实现）</li>
        </ul>
      </div>
      <div class="baseReport">
        <h3>css</h3>
        <p>css：使用了scss编译方式，混合嵌套，样式继承，简洁高效等。</p>
      </div>
      <div class="baseReport">
        <h3>数据</h3>
        <p>数据交互:axios,express，bodyParser</p>
        <p>数据存储：vuex（暂未使用？！）</p>
      </div>


    </div>
</template>

<script>
    export default {
        name: "report"
    }
</script>

<style lang="scss" scoped>
  .reports{
    h2{
      margin:10px 0;
      color: red;
    }
    .baseReport{
      margin-top:10px;
      h3{
        margin-top:10px;
        color:blue;
      }
      .component-list{
        margin-top:10px;
        li:first-child{
          color: blue;
        }
      }
    }
  }

</style>
