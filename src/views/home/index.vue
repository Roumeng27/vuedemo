<template>
  <div id="home">
    <el-container style="height:100%;">
      <el-header>
        <myhead></myhead>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <navmenu></navmenu>
        </el-aside>
        <el-main class="home_main">
          <!-- <transition name="el-fade-in-linear"> -->
            <el-scrollbar style="height:100%;" :native="false" wrapStyle="" wrapClass="" viewClass="" viewStyle=""
      :noresize="false" tag="div">
          <router-view />
          </el-scrollbar>
          <!-- </transition> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import navmenu from "./compontent/nav.vue";
import myhead from "./compontent/header.vue";
export default {
  components: {
    navmenu,
    myhead
  },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
    
  },
  mounted() {
    var he = document.body.clientHeight;
    console.log(he)
    $('.home_main').css('height',he-60);
  }
};
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
#home /deep/ {
  width: 100%;
  height: 100%;
  .el-header {
    background-color: #545c64;
    color: #606266;
    line-height: 60px;
  }

  .el-aside {
    height: 100%;
    background-color: #545c64;
    color: #606266;
    .el-submenu__title,
    .el-menu-item {
      width: 200px;
      background: #545c64;
    }
    .el-submenu .el-menu-item {
      padding-left: 45px !important;
    }
    .el-menu-item.is-active {
      // max-width: 190px !important;
      color: #ffd04b !important;
      background-color: #434a50 !important;
      // border-right: 2px solid #4d7cfe;
    }
    /* 选中二级导航 一级导航的样式 */
    .el-submenu.is-active .el-submenu__title {
      // background-color: #909399 !important;
      /* border-right: 2px solid #456FE2; */
    }
    /* 二级导航鼠标经过样式 */
    .el-menu-item:hover {
      /* color: #6B91F9 !important; */
      color: #ffd04b !important;
      background-color: #434a50 !important;
    }
    .el-menu {
      border-right: 1px solid #545c64;
    }
    .el-scrollbar__wrap {
      overflow-x: hidden;
      margin-bottom: 0px !important;
    }
  }

  .el-main {
    padding: 10px !important;
    background-color: #F2F6FC;
    color: #333;
    .el-scrollbar__wrap{
      overflow-x:hidden; 
    }
  }
}
</style>