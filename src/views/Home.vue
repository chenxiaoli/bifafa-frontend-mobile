<template>
<div class="home-box">
<van-swipe :autoplay="3000" indicator-color="white" >
  <van-swipe-item>撮合引擎 10万/TPS</van-swipe-item>
  <van-swipe-item>联盟链记账</van-swipe-item>
  <van-swipe-item>资产地址公开</van-swipe-item>
  <van-swipe-item>可审计</van-swipe-item>
</van-swipe>

</div> 

</template>
<script>

export default {

}

import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe).use(SwipeItem);

</script>




<style>

.van-swipe-item{
background-color: rgb(102, 198, 242);
color: rgb(255, 255, 255);
cursor: pointer;
float: left;
font-family: "PingFang SC", Helvetica, "STHeiti STXihei", "Microsoft YaHei", Tohoma, Arial, sans-serif;
font-size: 20px;
height: 150px;
line-height: 150px;
text-align: center;
transform: matrix(1, 0, 0, 1, 0, 0);
width: 360px;
}
</style>