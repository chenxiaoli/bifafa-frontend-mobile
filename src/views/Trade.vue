<template>
  <div class="trade-box">
    <div class="coin-header">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1"/>
      </van-dropdown-menu>
    </div>
    <div class="trade-body">
      <div class="trade-op">
        <van-tabs v-model="opDirect" type="card">
          <van-tab title="买入">
            <div class="buy-strategy">
              <van-dropdown-menu>
                <van-dropdown-item v-model="buyStrategy" :options="buyStrategyOptions"/>
              </van-dropdown-menu>
              <div class="price-input">
                <van-cell-group>
                  <van-field v-model="value" placeholder="输入价格"/>
                </van-cell-group>
              </div>
              <div class="translate-price">估计$332.22</div>
              <div class="amount-input">
                <van-cell-group>
                  <van-field v-model="value" placeholder="输入数量"/>
                </van-cell-group>
              </div>
              <van-button type="primary" class="loginButton" v-on:click="goto('/login')">登录注册</van-button>
            </div>
          </van-tab>
          <van-tab title="卖出">
            <div>
              <van-dropdown-menu>
                <van-dropdown-item v-model="sellStrategy" :options="sellStrategyOptions"/>
              </van-dropdown-menu>
              <div class="price-input">
                <van-cell-group>
                  <van-field v-model="value" placeholder="输入价格"/>
                </van-cell-group>
              </div>
              <div class="translate-price">估计$332.22</div>
              <div class="amount-input">
                <van-cell-group>
                  <van-field v-model="value" placeholder="输入数量"/>
                </van-cell-group>
              </div>
              <div class="percent-button">
                <div>25%</div>
                <div>50%</div>
                <div>75%</div>
                <div>100%</div>
              </div>

              <van-button type="primary" class="loginButton" v-on:click="goto('/login')">登录注册</van-button>
            </div>
          </van-tab>
        </van-tabs>
      </div>

      <div class="deep" id="deep">
        <div>
          <van-dropdown-menu class="precision-dropdown-menu">
            <van-dropdown-item v-model="deepPrecision" :options="deepPrecisionOptions"/>
          </van-dropdown-menu>
        </div>
        <div class="van-hairline--top"></div>
        <div class="deep-row header">
          <span>价格(usdt)</span>
          <span>数量(btc)</span>
        </div>

        <div class="deep-row">
          <span>1233.22</span>
          <span>34.2224</span>
        </div>
        <div class="deep-row">
          <span>1233.22</span>
          <span>34.2224</span>
        </div>
        <div class="deep-row">
          <span>1233.22</span>
          <span>34.2224</span>
        </div>
        <div class="deep-row">
          <span>1233.22</span>
          <span>34.2224</span>
        </div>
        <div class="deep-row">
          <span>1233.22</span>
          <span>34.2224</span>
        </div>
        <van-divider/>

        <div class="deep-row">
          <span>1233.22</span>
          <span>34.2224</span>
        </div>
        <div class="deep-row">
          <span>1233.22</span>
          <span>34.2224</span>
        </div>
        <div class="deep-row">
          <span>1233.22</span>
          <span>34.2224</span>
        </div>
        <div class="deep-row">
          <span>1233.22</span>
          <span>34.2224</span>
        </div>
        <div class="deep-row">
          <span>1233.22</span>
          <span>34.2224</span>
        </div>
      </div>
    </div>

    <div class="order">
      <div class="order-header">
        <span class="title">当前委托</span>
        <span class="op">
          <van-icon name="orders-o"/>全部委托
        </span>
      </div>
      <div class="van-hairline--top"></div>
      <div class="order-body">
        <div>本币对暂无委托</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: "BTC/USDT",
      option1: [
        { text: "BTC/USDT", value: "BTC/USDT" },
        { text: "ETH/USDT", value: "ETH/USDT" }
      ],
      opDirect: 1,
      buyStrategy: "1",
      buyStrategyOptions: [
        { text: "限价买入", value: "1" },
        { text: "市价买入", value: "2" }
      ],
      sellStrategy: "1",
      sellStrategyOptions: [
        { text: "限价卖出", value: "1" },
        { text: "市价卖出", value: "2" }
      ],
      buyPrice: 0,
      deepPrecision: 2,
      deepPrecisionOptions: [
        { text: "2位小数", value: 2 },
        { text: "1位小数", value: 1 },
        { text: "0位小数", value: 0 }
      ],
      value: ""
    };
  },
  methods: {
    goto(path) {
      console.log("dd");
      this.$router.push({ path });
    }
  }
};

import Vue from "vue";
import { Cell, CellGroup } from "vant";

import { DropdownMenu, DropdownItem } from "vant";
import { Tab, Tabs } from "vant";
import { Field } from "vant";
import { Divider } from "vant";
import { Button } from "vant";
import { Panel } from "vant";
import { Icon } from "vant";

Vue.use(Icon);
Vue.use(Panel);
Vue.use(Divider);

Vue.use(Field);

Vue.use(Cell).use(CellGroup);
Vue.use(Button);

Vue.use(Tab).use(Tabs);

Vue.use(DropdownMenu).use(DropdownItem);
</script>

<style>
.trade-box {
  background: #f0f3f6;
}
.trade-box .trade-body {
  background-color: white;
  display: flex;
}
.trade-box .trade-op {
  flex: 1;
  padding: 10px;
}
.trade-op .van-dropdown-menu__item {
  justify-content: flex-start;
}

.trade-op .van-dropdown-menu__title {
  padding: 0 8px 0 0;
  color: #7d7e80;
}

.trade-box .trade-op .buy-strategy {
  float: left;
}
.trade-box .trade-op .translate-price {
  line-height: 2em;
  text-align: left;
  font-size: 14px;
}

.trade-box .precision-dropdown-menu {
  border-width: 0;
  height: 32px;
}
.trade-body .van-hairline--top-bottom {
  border-width: 0px;
  border: 0px;
}
.trade-body .van-hairline--top-bottom::after {
  border-width: 0px;
  border: 0px;
}

.deep .van-dropdown-menu__item {
  justify-content: flex-start;
}

.deep .van-dropdown-menu__title {
  padding: 0 8px 0 0;
  font-size: 14px;
  color: #7d7e80;
}

.deep .van-hairline--top {
  margin-top: -4px;
  margin-bottom: 4px;
}

.trade-box .price-input {
  width: 100%;
  padding: 0 4px 0 4px;
  box-sizing: border-box;
  border: 1px solid #99968b;
  line-height: 32px;
}
.trade-box .price-input input {
  width: 100%;
  box-sizing: border-box;
  border: 0px;
}

.trade-box .amount-input {
  width: 100%;
  padding: 0 4px 0 4px;
  box-sizing: border-box;
  border: 1px solid #99968b;
  line-height: 32px;
}
.trade-box .van-field {
  padding: 5px;
}

.trade-box .percent-button {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
.trade-box .percent-button > div {
  background: #ebeff8;
  padding: 5px;
  margin: 6px;
}
.trade-box .percent-button > div:last-child {
  margin-right: 0px;
}
.trade-box .percent-button > div:first-child {
  margin-left: 0px;
}

.trade-box .loginButton {
  width: 100%;
  margin-top: 16px;
}
.trade-box .deep {
  flex: 1;
  padding: 10px;
  line-height: 1.3em;
}

.deep .deep-row {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}

.deep .deep-row.header {
  margin-top: 8px;
}
.order {
  margin-top: 8px;
  padding: 10px;

  background: white;
}
.order .order-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}
.order .order-header .op {
  font-size: 14px;
  vertical-align: bottom;
}
.order .order-body {
  min-height: 100px;
  padding-top: 10px;
  display: flex;
  justify-content: center;
}
</style>
