<template>
  <div class="wallet">
            
    <van-tabs v-model="activeName" sticky>
<div class="nav" v-on:click="onGoBack">
        <van-icon name="arrow-left"/>
      </div>
      <van-tab title="我的钱包" name="my-wallet">
        <wallet-summary   quantity="0.032000000400034" symbol="BTC" value="1.2"  currency="CNY" />
        <div>
          <div v-on:click="goto('/wallet/coin/btc')">
            <coin-balance-item symbol="BTC"/>
          </div>
        </div>
      </van-tab>
      <van-tab title="币币账户" name="b">内容 2</van-tab>
    </van-tabs>
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
    goto(path) {
      this.$router.push({ path });
    },
      onGoBack(){
          this.$router.go(-1)
      }
  }
};
import Vue from "vue";
import { Tab, Tabs } from "vant";
Vue.use(Tab).use(Tabs);
</script>
<style>
.wallet .nav {
  position: absolute;
display: block;
  font-size: 16px;
      color: #1989fa;
      text-align: center;
top: 0;
left:16px;
line-height: 46px;
    
}

.wallet .nav .van-icon{
    display: inline-block;
    vertical-align: middle;
}

.wallet .van-tabs__nav {
  background: none;
  padding-left: 30px;
  
}

.wallet .van-hairline--top-bottom {
  border: none;
}
.wallet .van-hairline--top-bottom::after,
.wallet .van-hairline-unset--top-bottom::after {
  border: none;
}

.wallet-summary {
  margin: 10px 10px 0px 10px;
}
.coin-balance-item {
  margin-top: 10px;
}
</style>

