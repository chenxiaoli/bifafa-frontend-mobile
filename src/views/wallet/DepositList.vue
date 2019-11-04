<template>
  <div class="deposit-list">
    <van-nav-bar title="title" left-text right-text left-arrow @click-left="onGoBack"/>

    <div class="list">

       <CoinDepositItem />


    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Search } from "vant";
import { Row, Col } from "vant";
import CoinDepositItem from "@/components/CoinDepositItem"

Vue.use(Row).use(Col);
Vue.use(Search);

export default {
    components: {
CoinDepositItem
  },
  data() {
    return {
      value: "",
      title:""

    };
  },
  created(){
    this.title="BTC 充值历史"

  },
  watch: {

  },
  methods: {

    onGoBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style>

</style>

