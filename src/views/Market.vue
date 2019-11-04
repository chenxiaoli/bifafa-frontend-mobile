<template>
<div class="market-box">
<van-row class="market-header-row">
  <van-col span="12" :style="{display:'inline-block',textAlign:'left',verticalAlign:'middle'}">交易额</van-col>
  <van-col span="6" class="price">价格</van-col>
  <van-col span="6">涨跌幅</van-col>
</van-row>
<div class="van-hairline--top"></div>

<van-row class="market-row">
  <van-col span="12" :style="{ textAlign: 'left' }">
      <div>BTC/usdt</div>
    <div>交易额 20303.34 USDT</div>
  </van-col>
  <van-col span="6">
      <div :style="{textAlign:'left'}">
      <div>9122.4</div>
      <div>$66645.34</div>
      </div>
  </van-col>
  <van-col span="6"  :style="{lineHeight:'48px'}"  >56%</van-col>
</van-row>
<div class="van-hairline--top"></div>
<van-row class="market-row">
  <van-col span="12" :style="{ textAlign: 'left' }">
      <div>ETH/usdt</div>
    <div>交易额 303.34 USDT</div>
  </van-col>
  <van-col span="6">
      <div :style="{textAlign:'left'}">
      <div >912.4</div>
      <div>$666.34</div>
      </div>
  </van-col>
  <van-col span="6"  :style="{lineHeight:'48px'}"  >6%</van-col>
</van-row>

</div>
</template>
<script>

export default {

}

import Vue from 'vue';
import { Row, Col } from 'vant';

Vue.use(Row).use(Col);

</script>
<style>
.market-box .market-header-row .price{
  text-align: left;
  padding-left:10px; 
}
</style>
