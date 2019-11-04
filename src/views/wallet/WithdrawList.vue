<template>
  <div class="withdraw-list">
    <van-nav-bar title="BTC 提现历史" left-text right-text left-arrow @click-left="onGoBack"/>

    <div class="list">

       <CoinWithdrawItem />


    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Search } from "vant";
import { Row, Col } from "vant";
import CoinWithdrawItem from "@/components/CoinWithdrawItem"

Vue.use(Row).use(Col);
Vue.use(Search);

export default {
    components: {
CoinWithdrawItem
  },
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

    onGoBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style>
.coin-select .list {
  text-align: left;
}
</style>

