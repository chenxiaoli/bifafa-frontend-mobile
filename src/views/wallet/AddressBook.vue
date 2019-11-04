<template>
  <div class="address-book">
    <van-nav-bar
      title="BTC 提现地址"
      left-text
      right-text
      left-arrow
      @click-left="onGoBack"
      @click-right="onGoBack"
    />

    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="item in list" :key="item" :title="item"/>
    </van-list>
    <div class="button">
      <van-button type="primary" size="large"  v-on:click="goto('/wallet/coin/btc/address-book-new')">添加提现地址</van-button>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Sticky } from "vant";

import { Button } from "vant";
import { Row, Col } from "vant";
import { List } from "vant";

Vue.use(List);
Vue.use(Row).use(Col);
Vue.use(Button);
export default {
  data() {
    return {
      address: "",
      quantity: "",
      list:[],
      finished:true,
      loading:true
    };
  },
  methods: {
    onGoBack() {
      this.$router.go(-1);
    },
    goto(path) {
      this.$router.push({ path });
    },
    onLoad() {}
  }
};
</script>
<style>
.address-book .van-field__control {
  font-size: 16px;
}
.address-book .van-cell {
  padding: 10px 16px;
}
.address-book .button {
  position: absolute;
  bottom: 10px;
  display: block;
  width: calc(100vw - 20px);
  padding: 5px 10px 5px 10px;
  margin: 0;
}

.address-book .tip {
  text-align: left;
  float: left;
  font-size: 12px;
  line-height: 1.5em;
  padding: 10px 14px 0 14px;
}
</style>
