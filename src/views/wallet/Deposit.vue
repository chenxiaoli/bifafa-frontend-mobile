<template>
  <div class="wallet-deposit">
    <van-nav-bar
      title="BTC 充值"
      left-text
      right-text="充值历史"
      left-arrow
      @click-left="onGoBack"
      @click-right="onDepositList"
    />
    <div class="rule">
      <van-row>
        <van-col span="12">最小充值金额:0.01 ETH</van-col>
        <van-col span="12" class="view-hash-span">网络确认数:20</van-col>
      </van-row>
    </div>

    <div class="qr-box">
      <van-row>
        <van-col span="24">
          <qriously value="0x082d5d780d787d915562c3c7cbf2393400e03577" :size="200"/>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="24">保存二维码至相册</van-col>
      </van-row>
      <van-row>
        <van-col span="24" class="address">0x082d5d780d787d915562c3c7cbf2393400e03577</van-col>
      </van-row>
      <van-row>
        <van-col span="24">复制地址</van-col>
      </van-row>
    </div>
    <div class="desc">
    <van-row>
      <van-col span="24">请勿向上述地址充值非BTC资产,否则将不可找回.</van-col>
    </van-row>

    <van-row>
      <van-col span="24">使用BTC地址充值需要2个网络才能确认到账.最小充值金额:0.001BTC,充值低于0.001BTC将不会被记账.</van-col>
    </van-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: "btc"
    };
  },
  methods: {
    onGoBack() {
      this.$router.go(-1);
    },
    onDepositList() {
      this.$router.push({ name: "deposit-list", params: { id: this.id } });
    }
  }
};
import Vue from "vue";

import { NavBar } from "vant";
import { Row, Col } from "vant";
import VueQriously from "vue-qriously";
Vue.use(VueQriously);
Vue.use(Row).use(Col);
Vue.use(NavBar);
</script>
<style>
.wallet-deposit .rule {
  font-size: 14px;
  background-color: #fff;
  padding: 5px 0px 5px 0px;
}
.wallet-deposit .qr-box {
  padding-top: 20px;
  background-color: #fff;
}
.wallet-deposit .qr-box .van-row {
  padding: 0px 0px 5px 0px;
}
.wallet-deposit .qr-box .van-row:last-child{
  padding-bottom: 10px;
}

.wallet-deposit .qr-box .address {
  font-size: 14px;
}
.wallet-deposit .desc{
  padding:10px 10px 0 10px;
  font-size:12px;
  text-align: left;
  line-height: 1.5em;
}
.wallet-deposit .desc .van-row{
  margin-top:10px;
}
</style>

