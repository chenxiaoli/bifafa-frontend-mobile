


<template>
  <div class="register-box">
    <div>
      <div class="title">用户注册</div>

      <van-row>
        <van-col span="24">
          <van-cell-group>
            <van-field v-model="email"   clearable label="Email" placeholder="请输入Email"></van-field>
          </van-cell-group>

          <van-cell-group>
            <van-field   clearable label="验证码" placeholder="请输入验证码">
              <van-button slot="button" size="small" type="primary">发送验证码</van-button>
            </van-field>
          </van-cell-group>


          <van-cell-group>
            <van-field v-model="email"  clearable label="密码" placeholder="请输入密码"></van-field>
          </van-cell-group>
          <van-cell-group>
            <van-field v-model="email"  clearable label="重复密码" placeholder="请重复输入密码"></van-field>
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="24">
          <van-button size="large" type="info">下一步</van-button>
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
body {
  background: #f8f8f8;
}
.register-box {
  display: flex;
  height: 80vh;
  align-items: center;
  justify-content: center;
}
.register-box .title {
  font-size: 20px;
  line-height: 2em;
}
.register-box .van-row {
  margin: 10px;
}
</style>