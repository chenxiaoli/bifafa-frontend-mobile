<template>
  <div class="forgot-box">
    <div>
      <div class="title">忘记密码</div>
      <van-row>
        <van-col span="24">
          <van-cell-group>
            <van-field v-model="email" required clearable label="Email" placeholder="请输入Email"/>
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
.forgot-box {
  display: flex;

  height: 80vh;
  align-items: center;
  justify-content: center;
}
.forgot-box .title {
  font-size: 20px;
  line-height: 2em;
}
.forgot-box .van-row {
  margin: 10px;
}
</style>