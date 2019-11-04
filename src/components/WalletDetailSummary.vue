<template>
  <div class="wallet-detail-summary">
    <div class="summary">
      <div class="col">
        <div></div>
        <div class="label">可用余额</div>
        <div class="value">120256.32</div>
      </div>
      <div class="col">
        <div></div>
        <div class="label">冻结</div>
        <div class="value">11222121.36</div>
      </div>
      <div class="col">
        <div></div>
        <div class="label">折合(CNY)</div>
        <div class="value">2332343</div>
      </div>
    </div>
    <div class="van-hairline--top"></div>
    <div class="op">
      <div>
        <!-- <div>
          <van-icon name="cash-back-record"/>
        </div>-->
        <div v-on:click="goto('/wallet/coin/btc/deposit')">充值</div>
      </div>
      <div>
        <!-- <div>
          <van-icon name="cash-back-record"/>
        </div>-->
        <div  v-on:click="goto('/wallet/coin/btc/withdraw')">提现</div>
      </div>
      <div>
        <!-- <div>
          <van-icon name="exchange"/>
        </div>-->
        <div>资金划转</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["symbol"],
  methods: {
    goto(path) {
      this.$router.push({ path });
    }
  }
};
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
</script>

<style>
.wallet-detail-summary .summary {
  display: flex;
  text-align: left;
  padding: 20px 16px 10px 16px;
  background: #fff;
  align-items: flex-end;
}
.wallet-detail-summary .summary .col {
  text-align: left;
  float: left;
  flex: 1;
  padding-right: 10px;
}
.wallet-detail-summary .summary .col:last-child {
  text-align: right;
  float: right;
}
.wallet-detail-summary .summary .label {
  margin-top: 10px;
  font-size: 12px;
}
.wallet-detail-summary .summary .value {
  font-size: 16px;
  line-height: 2em;
}

.wallet-detail-summary .op {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  padding: 10px 0 10px 0;
  height: 40px;
  color: #1989fa;
}
.wallet-detail-summary .op div {
  flex: 1;
}
.wallet-detail-summary .op div:nth-child(2) {
  border: 0px solid #ebedf0;
  border-left-width: 1px;
  border-right-width: 1px;
}
.wallet-detail-summary .op .van-icon {
  font-size: 28px;
  height: 28px;
}
</style>
