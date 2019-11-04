<template>
  <div class="login-box">
    <div>
      <div class="title">用户登录</div>
      <van-row>
        <van-col span="24">
          <van-cell-group>
            <van-field v-model="email" required clearable label="Email" placeholder="请输入Email"/>
</van-cell-group>
<van-cell-group>
            <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required/>
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="24">
          <van-button size="large" type="info">登录</van-button>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="12" style="text-align:left"><router-link to="/forgot">忘记密码</router-link></van-col>
        <van-col span="12" style="text-align:right">
          <router-link to="/register">注册</router-link>
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      password: "",
      email: ""
    };
  }
};
import Vue from "vue";
import { Field } from "vant";
import { Row, Col } from "vant";

Vue.use(Row).use(Col);
Vue.use(Field);
</script>

<style>
.login-box {
  display: flex;

  height: 80vh;
  align-items: center;
  justify-content: center;
}
.login-box .title {
  font-size: 20px;
  line-height: 2em;
}
.login-box .van-row {
  margin: 10px;
}
</style>