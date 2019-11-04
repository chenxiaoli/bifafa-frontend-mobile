<template>
    <div class="my-home">
        <div class="profile">
       <div class="icon"><van-icon name="contact" /></div>
       <div class="content">
        <div>39856623@163.com</div>
        <div class="nickname">nickname</div>
        </div>
        </div>
        <div class="my-wallet">
            <div class="detail" v-on:click="goto('/wallet')">
            <span>我的钱包</span>
            <span class="value">0.0323434BTC</span>
           </div>
            <div class="button-group">
                <van-button plain type="info" v-on:click="goto('/coin-select?biz=deposit')">充值</van-button>
                <van-button plain type="info" v-on:click="goto('/coin-select?biz=withdraw')">提现</van-button>
                  </div>
        </div>

        <div class="coin-coin">
         
   
            <div class="label">币币账户</div>
            <div class="value">0.0323434BTC</div>


        </div>

 <div class="menu-list">
        <van-cell title="我的推广码" is-link />

         <van-cell title="财务明细" is-link />
          <van-cell title="订单管理" is-link />
            <van-cell title="安全中心" is-link />
    </div>

        </div>
</template>

<script>
export default {
    data(){
        return {}
    },
  methods:{
      goto(path){
          this.$router.push({path})
      }
  }
}
import Vue from 'vue';
import { Button } from 'vant';

Vue.use(Button);
</script>

<style>

.my-home .profile{
    display: flex;
     
    margin: 10px 10px 10px 10px;
}

.my-home .profile .icon{
    font-size: 32px;
    margin-left:10px; 
    margin-top:10px; 
}
.my-home .profile .content{
    text-align: left;
    font-size:18px;

    margin-left:10px;
    display: flex;
    flex-direction:column;
      justify-content: center;
}
.my-home .profile .nickname{

    font-size:14px;
}
.my-wallet{
    display: flex;
    justify-content: space-around;
    background: #fff;
    margin: 0 10px 0px 10px;

}
.my-wallet .detail{
    text-align: left;
    margin: 0 0 0 10px;
    line-height: 1.5em;
    display: flex;
    flex-direction:column;
    justify-content: center;


}
.my-wallet .detail .value{
    font-size: 18px;
}

.my-wallet .van-button:first{
    margin-right:20px; 
}
.my-wallet div{
    flex: 1;
}
.my-wallet div:first{
    text-align: left;
}


.my-wallet .button-group .van-button{
    margin : 20px 10px 20px 10px;
}

.coin-coin {
        display: flex;
    justify-content: flex-start;
    background: #fff;
        margin: 2px 10px 0px 10px;
        padding: 24px 0 24px 0;
}
.coin-coin .label{
    float: left;
    text-align: left;
    flex: 1;
    margin-left: 10px;
}
.coin-coin .value{
    flex: 1;
    text-align: right;
    margin-right:10px; 
}

.my-home .menu-list{
    margin-top:20px;
}

.my-home .van-cell {
text-align: left;
padding-left:20px;
}

</style>
