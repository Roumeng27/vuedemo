<template>
  <div class="my_header">
    <div class="myLogo">
      <div class="navlogo">
        <img src="../../../../static/images/logokai.png" alt>
      </div>
      <div class="myLogo_title">开易日志管理平台</div>
    </div>
    <div class="rightDiv">
      <!-- 导航右侧下拉菜单 -->
      <el-dropdown @command="handleCommand" style="margin-left:10px;">
        <span class="el-dropdown-link"
          style="color:#fff;cursor:pointer;border:0px;outline:none;display:block;text-align: center;banckground:pink;">
          <img src="../../../../static/images/user.png" alt @mouseover="Groupmeridseover()">
          <span class="spanName">{{admin}}</span>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="b">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import sessionObj from '../../../assets/js/session.js'
import outLogin from '../../../api/login/loginApi.js'
export default {
  components: {},
  props: {},
  data() {
    return {
      admin: "ddddd"
    };
  },
  watch: {},
  computed: {},
  methods: {
    handleCommand(command) {
      if (command == "b") {
        var params = {}
        outLogin.outLogin(params).then(res =>{
          if(res.data.ret == 1){
            sessionObj.deleteItem("admin");
            this.$router.push({
              name: "Login"
            });
          }else{
            this.$message.error('退出失败')
          }
        })
        
      }
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.my_header /deep/ {
  .rightDiv {
    float: right;
    img {
      width: 40px;
      height: 40px;
      vertical-align: middle;
    }
  }
  .myLogo {
    height: 60px;
    float: left;
    .navlogo {
      height: 60px;
      width: 180px;
      text-align: center;
      display: inline-block;
      align-items: center;
      img {
        vertical-align: middle;
      }
    }
    .myLogo_title {
      color: #fff;
      display: inline-block;
      font-size: 20px;
      font-weight: 800;
    }
  }
}
</style>