<template>
  <div class="coin-balance-item">
    <div class="col">
      <div>{{symbol}}</div>
      <div class="label">可用余额</div>
      <div class="value">120256.32</div>
    </div>
    <div class="col">
      <div></div>
      <div class="label">冻结</div>
      <div  class="value">11222121.36</div>
    </div>
    <div class="col">
      <div>
        <van-icon name="arrow"/>
      </div>
      <div class="label">折合(CNY)</div>
      <div  class="value">2332343</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  props: ["symbol"]
};
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
</script>

<style>
.coin-balance-item {
  display: flex;
  text-align: left;
  padding: 20px 16px 20px 16px;
  background: #fff;
  align-items: flex-end;
}
.coin-balance-item .col {
  text-align: left;
  float: left;
  flex: 1;
  padding-right:10px; 
}
.coin-balance-item .col:last-child {
  text-align: right;
  float: right;
}
.coin-balance-item .label {
  margin-top: 10px;
  font-size: 12px;
}
.coin-balance-item .value {
  font-size: 16px;
  line-height: 2em;
}
</style>
