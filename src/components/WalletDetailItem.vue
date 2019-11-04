<template>
  <div class="wallet-detail-item">
    <div class="row">
      <div class="title">{{title}}</div>
    </div>
    <div class="row label">
      <div class="left">数量</div>
      <div class="right">时间</div>
    </div>
    <div class="row value">
      <div class="left">{{value}} {{symbol}}</div>
      <div  class="right">{{time}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  props: ["title","symbol","value","time"]
};
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
</script>

<style>
.wallet-detail-item{
  display: flex;
   flex-direction: column;
  text-align: left;
  padding: 10px 16px 10px 16px;
  background: #fff;

}
.wallet-detail-item .row {
text-align: left;

}

.wallet-detail-item .title{
  font-size: 14px;
}

.wallet-detail-item .label {
  float: left;
  margin-top: 10px;
  font-size: 12px;
}
.wallet-detail-item .row .left{
float:left
}
.wallet-detail-item .row .right{
float:right;
}

.wallet-detail-item  .value {
  float: right;
  font-size: 16px;
  line-height: 2em;
}
</style>
