<template>
  <div class="withdraw">
    <van-nav-bar
      title="BTC 提现"
      left-text
      right-text="提现历史"
      left-arrow
      @click-left="onGoBack"
      @click-right="onWithdrawList"
    />

    <div class="rule">
      <van-row>
        <van-col span="12" class="fee">手续费 0.0005 BTC</van-col>
        <van-col span="12" class="limit">每日限额 2.0000 BTC</van-col>
      </van-row>
    </div>




        <van-cell-group class="balance">
      <div class="label">余额 (BTC)</div>
      <van-field   value="0.00000003334" disabled />
    </van-cell-group>

    <van-cell-group class="address-input">
      <div class="label">地址</div>
     
      <van-field v-model="address" autosize type="textarea" rows="1" placeholder="输入或长按黏贴地址">
      
      <div class="op" slot="button"><div class="address-scan" v-on:click="onQrScan"><van-icon name="scan" /></div> <div class="address-select" v-on:click="onAddressBook"><van-icon name="location-o" /></div></div>
      </van-field>

    </van-cell-group>

    <van-cell-group class="quantity-input">
      <div class="label">数量</div>
      <van-field v-model="quantity" placeholder="输入提现数量" error-message="超出可提现数量" />
      <div class="quantity-tip">
        <div class="available">可提现数量:0.000044</div>
        <div class="withdraw-all">全部提现</div>
      </div>
    </van-cell-group>

<div class="tip">
      <van-row>
        <van-col span="24">最小提现金额 0.001 BTC</van-col>
      </van-row>
      <van-row>
        <van-col span="24">一旦您提交申请,我们将发送一封提现确认邮件,请你点击邮件中的确认链接.</van-col>
      </van-row>
</div>
    <div class="button">
      <van-button type="primary" size="large">提现</van-button>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Button } from "vant";
import { Row, Col } from "vant";
import { Field } from "vant";
import { Icon } from 'vant';

Vue.use(Icon);
Vue.use(Field);
Vue.use(Row).use(Col);
Vue.use(Button);
export default {

  data() {
    return {
        address:'',
        quantity:''
    };
  },
created: function () {

      const query=this.$route.query
      if(query.address){
          this.address=query.address
      }

},
  methods: {
    onGoBack() {
      this.$router.go(-1);
    },
    goto(path) {
      this.$router.push({ path });
    },
    coinSelect(){
        this.$router.push({path:"/coin-select"})
    },
    onAddressBook(){
        this.$router.push({path:"/wallet/coin/btc/address-book"})
    },
    onWithdrawList(){
         this.$router.push({name:"withdraw-list"})
    },
    onQrScan(){
         this.$router.push({name:"qr-scan"})
    }
  }
};
</script>
<style>
.withdraw .rule {
  font-size: 14px;
  text-align: left;
  display: block;
  padding:14px;
}
.withdraw .rule .fee {
  float: left;
}
.withdraw .rule .limit {
  float: right;
}

.withdraw .label{
  font-size: 14px;
  float: left;
  text-align: left;
  padding: 10px 0 0 14px;
}


.withdraw .address-input .op{
   font-size: 24px;
   height: 24px;
   width: 60px;
   display: flex;
}
.withdraw .address-input .op .address-scan{
 margin-right:10px;
}
.withdraw .address-input .op .address-select{
    float:right;
}

.withdraw .address-input .van-cell{
 padding: 10px  8px 10px 16px;;
}

.withdraw .quantity-input .quantity-tip{
padding: 5px 10px  5px 14px; 
height: 30px;
font-size: 14px;

}
.withdraw .quantity-input .available{
    float: left;
        
}
.withdraw .quantity-input .withdraw-all{
    float:right;
    text-align: right;
  
}
.withdraw .van-field__control{
    font-size: 16px;
}
.withdraw .van-cell{
    padding: 10px 16px;
}
.withdraw .button {
  padding: 0 10px 0 10px;
}
.withdraw .tip{
    text-align: left;
    float: left;
    font-size:12px;
    line-height: 1.5em;
    padding: 10px 14px 0 14px;
}
</style>
