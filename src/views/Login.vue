<template>
  <div class="page-login">
    <h2>请您登录</h2>
    <el-form label-width="80px" :model="userInfo" :rules="rules" ref="login">
      <el-form-item label="用户名" prop="username">
        <el-input placeholder="请输入密码" v-model="userInfo.loginname"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input type="password" v-model="userInfo.pwd"></el-input>
      </el-form-item>
      <el-button type="success" class="btn" @click="login">登录</el-button>
    </el-form>
  </div>
</template>
<script>
import { api_login } from "../request/api";
import { username, pwd } from "../assets/js/validator";
export default {
  data() {
    return {
      userInfo: {
        loginname: "",
        pwd: "",
      },
      rules: {
        username: [{ trigger: "change", validator: username }],
        pwd: [{ trigger: "change", validator: pwd }],
      },
    };
  },
  methods: {
    login() {
      sessionStorage.setItem("isLogin", true);
      this.$router.push('/home/sjfx');
      // api_login(this.userInfo).then((res) => {
      //   console.log(res)
      //   if (res.data.code == 200) {
      //     sessionStorage.setItem("isLogin", true);
      //     this.$router.push('/home/sjfx"')
      //   }
      // });
    },
  },
};
</script>

<style lang="scss" scoped>
.page-login {
  border-radius: 20px;
  background-color: #fff;
  // height: 50%;
  width: 40%;
  position: absolute;
  top: 20%;
  left: 30%;
  padding: 30px 50px 30px 30px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(51, 48, 68, 0.164);
  h2 {
    font-weight: normal;
    color: #999;
    font-size: 18px;
    padding-bottom: 20px;
    border-bottom: 1px solid #ececec;
    margin-bottom: 30px;
  }
  .btn,
  h2 {
    margin-left: 20px;
  }
  .btn {
    width: 50%;
    margin-top: 10px;
  }
}
</style>