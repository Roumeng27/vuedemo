<template>
  <div class="hello">
    <!-- <div class="logo"></div> -->
    <el-row class="login_bg">
      <el-col :xs="{span: 20,offset: 2}" :sm="{span: 7,offset: 15}" :md="{span: 6,offset: 16}"
        :lg="{span: 5,offset: 17}">
        <el-row class="login-container">
          <el-col class="title">
            <h3>
              <i class="fa fa-arrow-circle-o-right fa-lg"></i>开易日志管理系统</h3>
          </el-col>
          <el-col class="login_form">
            <el-form :model="login_form" :rules="rules" ref="verify">
              <el-form-item prop="account" required>
                <el-input v-model="login_form.account" placeholder="请输入登录账户">
                  <template slot="prepend">
                    <i class="el-icon-user-solid"></i>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item prop="password" required>
                <el-input v-model="login_form.password" type="password" placeholder="请输入登录密码"
                  @keyup.enter.native="submit_login">
                  <template slot="prepend">
                    <i class="el-icon-lock"></i>
                  </template>
                </el-input>
              </el-form-item>
              <el-checkbox v-model="checked" checked>记住密码</el-checkbox>
              <el-form-item>
                <el-button type="primary" size="medium" style="width: 100%;" @click="submit_login">登录</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import sessionobj from '../assets/js/session.js'
import loginHttp from '../api/login/loginApi.js'
import Base64 from "../assets/js/base.js";
export default {
  name: "HelloWorld",
  data() {
    return {
      checked: true,
      dialogFormVisible: false,
      login_form: {
        account: "",
        password: ""
      },
      rules: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 20,
            message: "密码长度在 6 到 20 个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    open(type, msg) {
      this.$notify({
        title: "通知",
        message: msg,
        type: type
      });
    },
    // 判断是否需要记住账户密码，如果选择记住，则存储账户密码，否则清除以往的账户密码
    rememberPassword() {
      if (this.checked) {
        // 记住密码
        localStorage.setItem("account", this.login_form.account);
        localStorage.setItem("password", this.compileStr(this.login_form.password));
      } else {
        // 不记住密码
        localStorage.removeItem("account");
        localStorage.removeItem("password");
      }
    },
    //对字符串进行加密
    compileStr(code) {
      var base = new Base64();
      var encodeStr = base.encode(code);
      return encodeStr;
    },
    //字符串进行解密
    uncompileStr(code) {
      var base = new Base64();
      var decodeStr = base.decode(code);
      return decodeStr;
    },
    // 提交登录数据
    submit_login() {
      var params = {
        username:this.login_form.account,
        password:this.md5(this.login_form.password)
      }
      loginHttp.login(params).then(res =>{
        if(res.data.ret == 1){
          if(this.checked){
            this.rememberPassword()
          }
          sessionobj.setItem('admin',params);
          this.$router.push({
            name: "Home"
          });
          this.$message.success('欢迎来到开易科技日志管理平台')
        }
      })
      
    }
  },
  created() {
    if (window.localStorage.account) {
      this.login_form.account = window.localStorage.account;
      this.login_form.password = this.uncompileStr(
        window.localStorage.password
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.hello {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  background: url("../assets/images/login_bg.jpg") no-repeat center center;
  // background: #545c64;
  background-size: 100% 100%;
}
.login-container {
  margin: 80% auto;
  border-radius: 5px;
  background-color: #fff;
}

.title {
  background-color: #fdfdfd;
  padding-left: 10px;
  margin-bottom: 20px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  border-bottom: 1px solid #dddddd;
  i {
    margin-right: 5px;
  }
  h3 {
    margin: 10px 0;
  }
}

.login_form {
  padding-left: 15px;
  padding-right: 15px;
}
</style>
