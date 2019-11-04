<template>
  <div class="money-transfer">
    <van-nav-bar title="资金划转" left-text right-text left-arrow @click-left="onGoBack"/>

    <div class="form">
    
    <van-row>



  <van-col span="18">
      <van-cell-group >
        <div class="label">从</div>
        <div class="value">
          <van-dropdown-menu>
            <van-dropdown-item v-model="fromAaccount" :options="fromOption"/>
          </van-dropdown-menu>
        </div>
      </van-cell-group>

      <van-cell-group >
        <div class="label">到</div>
        <div class="value">
          <van-dropdown-menu>
            <van-dropdown-item v-model="toAccount" :options="toOption"/>
          </van-dropdown-menu>
        </div>
      </van-cell-group>
</van-col>
  <van-col span="6" class="transfer"><div class="img"><img  src="@/assets/transfer.svg" /></div></van-col>
</van-row>

      <van-cell-group class="coin">
 <div class="label">币种</div>
         <div class="value"><div class="symbol">BTC</div></div><div class="arrow"><van-icon name="arrow" /></div>
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
      ],
       toOption: [
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
.money-transfer .form {
  margin-top: 10px;
}
.money-transfer .form  .label {
  font-size: 14px;
  float: left;
  text-align: left;
  display: block;
  height: 50px;
  line-height: 50px;
  padding: 0px 0 0 14px;
}
.money-transfer .form  .value{
  
    flex: 1;
   margin-left:10px; 
    padding-left:40px; 
    height: 50px;
    width: 150px;
    line-height: 50px;
    text-align: left
}
.money-transfer .form .value .symbol{
  margin-left: 10px;
}
.money-transfer .form .arrow{
  width: 40px;
  float: right;
}
.money-transfer .form .van-dropdown-menu__item{
  justify-content: flex-start;
}

.money-transfer .form .transfer{
    display: flex;
    background:#fff; 
    justify-content:space-around;
    align-items: center;
    border-left:1px; 
    border-left-color:#ebedf0;
    border-left-style: solid;
        border-bottom:1px; 
    border-bottom-color:#ebedf0;
    border-bottom-style: solid;
}

.money-transfer .form .transfer .img{

display: flex;
height: 99px;
justify-content:space-between;
align-items:center;

}
.money-transfer .form .transfer img{
height: 40px;
}
.money-transfer .form .coin{
   height: 50px;
    line-height: 50px;
}
.money-transfer .form .coin .value{
   
  text-align: left;
  float: left;
      padding-left:0px; 
}
.money-transfer .button {
  padding: 10px 10px 10px 10px;
}
</style>
