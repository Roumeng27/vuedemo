<template>
  <div class="myscroll" style="height:100%;">
    <el-scrollbar style="height:100%;" :native="false" wrapStyle="" wrapClass="" viewClass="" viewStyle=""
      :noresize="false" tag="div">
      <div style="height:100%;">
        <el-menu :default-active="activeUrl" :unique-opened="true" :router="true"
          class="el-menu-vertical-demo"
          background-color="#545c64" text-color="#ffffff" active-text-color="#ffd04b">
          <template v-for="(item,index) in routerList">
            <el-submenu :index="item.path" v-if="item.children" :key="index">
              <template slot="title">
                <i style="width: 18px;text-align: center;color:#fff;" :class="item.icon"></i>
                <span slot="title" style="font-weight:800;">{{item.name}}</span>
              </template>
              <el-menu-item v-for="(child,index) in item.children" :index="child.path" :key="index">
                {{child.name}}
              </el-menu-item>
            </el-submenu>
            <el-menu-item v-else :index="item.path" :key="index">
              <i :class="item.icon" style="width: 18px;text-align: center;"></i>
              <span style="font-weight:800;">{{item.name}}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      collapse: false,
      routerList: [
        {
          name: "日志表盘",
          path: "/home/home_page",
          icon: "el-icon-s-order",
        },
        {
          name: "日志管理",
          path: "/log",
          icon: "el-icon-s-order",
          children: [
            { name: "nginx日志", path: "/log/nginxlog", icon: "" },
            {
              name: "808日志",
              path: "/log/808log",
              icon: ""
            }
          ]
        },
        {
          name: "信息管理",
          path: "/home/authority",
          icon: "el-icon-s-custom",
          children: [
            { name: "账号管理", path: "/userInfo/account", icon: "" },
            {
              name: "权限管理",
              path: "/userInfo/authority",
              icon: "el-icon-s-custom"
            }
          ]
        }
      ],
      activeUrl: "/home/nginxlog"
    };
  },
  watch: {},
  computed: {},
  methods: {
    handleClose() {},
    handleOpen() {}
  },
  created() {
    this.activeUrl = this.$route.path;
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.wrapper {
}
</style>