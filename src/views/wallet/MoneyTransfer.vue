<template>
  <div class="money-transfer">
    <van-nav-bar title="资金划转" left-text right-text left-arrow @click-left="onGoBack"/>

    <div class="form">
      <van-cell-group class="address-input">
        <div>从</div>
        <div>
          <van-dropdown-menu>
            <van-dropdown-item v-model="fromAaccount" :options="fromOption"/>
          </van-dropdown-menu>
        </div>
      </van-cell-group>

      <van-cell-group class="address-input">
        <div>从</div>
        <div>
          <van-dropdown-menu>
            <van-dropdown-item v-model="toAaccount" :options="toOption"/>
          </van-dropdown-menu>
        </div>
      </van-cell-group>

      <div class="button">
        <van-button type="primary" size="large">确定</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Button } from "vant";
import { Row, Col } from "vant";
import { Field } from "vant";
import { Icon } from "vant";

Vue.use(Icon);
Vue.use(Field);
Vue.use(Row).use(Col);
Vue.use(Button);
export default {
  data() {
    return {
      fromAaccount: "wallet",
      toAccount: "coin-coin",
      fromOption: [
        { value: "wallet", text: "我的钱包" },
        { value: "coin-coin", text: "币币交易账户" }
      ]
    };
  },
  methods: {
    onGoBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style>
.add-address .form {
  margin-top: 10px;
}
.add-address .label {
  font-size: 14px;
  float: left;
  text-align: left;
  padding: 10px 0 0 14px;
}

.add-address .address-input .op {
  font-size: 24px;
  height: 24px;
  display: flex;
}
.add-address .address-input .op .address-scan {
  margin-right: 4px;
}

.add-address .address-input .van-cell {
  padding: 10px 8px 10px 16px;
}

.add-address .van-field__control {
  font-size: 16px;
}
.add-address .van-cell {
  padding: 10px 16px;
}
.add-address .button {
  padding: 10px 10px 10px 10px;
}
</style>
