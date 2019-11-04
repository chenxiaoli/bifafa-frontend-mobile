<template>
  <div class="add-address">
    <van-nav-bar
      title="BTC 添加提现地址"
      left-text
      right-text=""
      left-arrow
      @click-left="onGoBack"

    />


<div class="form">
    <van-cell-group class="address-input">
      <div class="label">地址</div>
     
      <van-field v-model="address" autosize type="textarea" rows="1" placeholder="输入或长按黏贴地址">
      
      <div class="op" slot="button"><div class="address-scan"><van-icon name="scan" /></div> </div>
      </van-field>
    </van-cell-group>

    <van-cell-group class="comment-input">
      <div class="label">备注</div>
      <van-field v-model="comment" placeholder="输入备注" />
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
import { Icon } from 'vant';

Vue.use(Icon);
Vue.use(Field);
Vue.use(Row).use(Col);
Vue.use(Button);
export default {

  data() {
    return {
        address:'',
        comment:'',
        code:''
    };
  },
  methods: {
    onGoBack() {
      this.$router.go(-1);
    },
 
  }
};
</script>
<style>

.add-address .form{
    margin-top:10px;
}
.add-address .label{
  font-size: 14px;
  float: left;
  text-align: left;
  padding: 10px 0 0 14px;
}


.add-address .address-input .op{
   font-size: 24px;
   height: 24px;
   display: flex;
}
.add-address .address-input .op .address-scan{
 margin-right:4px;
}

.add-address .address-input .van-cell{
 padding: 10px  8px 10px 16px;;
}


.add-address .van-field__control{
    font-size: 16px;
}
.add-address .van-cell{
    padding: 10px 16px;
}
.add-address .button {
  padding: 10px 10px 10px 10px;
}

</style>
