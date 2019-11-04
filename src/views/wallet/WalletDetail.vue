<template>
  <div class="wallet-detail">
    <van-nav-bar title="BTC 我的钱包" left-text right-text left-arrow @click-left="onGoBack"/>

    <wallet-detail-summary/>

    <div class="detail-title">财务明细</div>
    <div class="detail-list">
      <wallet-detail-item title="收入分配" symbol="BTC" value="0.03321" time="2019-12-10 12:12:13"/>
      <wallet-detail-item title="充值" symbol="BTC" value="1230.02321" time="2017-12-10 12:12:13"/>
      <wallet-detail-item title="提现" symbol="BTC" value="230.02233" time="2017-12-10 12:12:13"/>
    </div>
    <div>查看全部</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "my-wallet"
    };
  },
  methods: {
    onGoBack() {
      this.$router.go(-1);
    },
    goto(path) {
      this.$router.push({ path });
    }
  }
};
import Vue from "vue";
import { Tab, Tabs } from "vant";
import { NavBar } from "vant";

Vue.use(NavBar);
Vue.use(Tab).use(Tabs);
</script>
<style>
.wallet-detail .detail-title {
  margin: 20px 0 0 10px;
  text-align: left;
}
.wallet-detail .detail-list {
  margin: 5px 0 10px 0;
}
.wallet-detail .detail-list .wallet-detail-item {
  margin-top: 1px;
}
</style>

