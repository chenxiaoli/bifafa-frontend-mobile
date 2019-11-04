<template>
<div class="coin-withdraw-item">
     <van-row>
  <van-col span="12">2018-12-12 02:12:04</van-col>
  <van-col span="12" class="view-hash-span">查看hash</van-col>
</van-row>

        <van-row>
  <van-col span="12">数量</van-col>
  <van-col span="12">状态</van-col>
</van-row>
        <van-row>
  <van-col span="12">10.000000</van-col>
  <van-col span="12">已到账</van-col>
</van-row>

 <van-row>
  <van-col span="24">地址</van-col>

</van-row>
        <van-row>
  <van-col span="24">12ddsdf dfs34324l23jdlfjslj3l2j4l2j430</van-col>

</van-row>
</div>
</template>
<script>
import Vue from "vue";
import { Search } from "vant";
import { Row, Col } from "vant";

Vue.use(Row).use(Col);
Vue.use(Search);

export default {
  data() {
    return {
      value: "",

    };
  },
  created(){

  },
  watch: {

  },
  methods: {


  }
};
</script>
<style>
.coin-withdraw-item {
  text-align: left;
  font-size:14px; 
  background-color: #fff;
  padding: 5px 5px 5px 5px;
}
.coin-withdraw-item .van-row{
    margin: 5px 0px 5px 0px;
}
.coin-withdraw-item .view-hash-span{
    text-align: right;
}


</style>

