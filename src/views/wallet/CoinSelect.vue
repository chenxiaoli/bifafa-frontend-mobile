<template>
  <div class="coin-select">
    <van-nav-bar title="币种选择" left-text right-text left-arrow @click-left="onGoBack"/>
    <van-search placeholder="请输入搜索关键词" v-model="value"/>
    <div class="list">
      <van-cell value="BTC" v-on:click="onSelect('btc')"/>
      <van-cell value="ETH"  v-on:click="onSelect('eth')"/>
      <van-cell value="BCH"  v-on:click="onSelect('bch')"/>
    </div>
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
      biz:""
    };
  },
  created(){
      var biz = this.$route.query.biz;

      this.biz = biz;
  },
  watch: {

  },
  methods: {

    onGoBack() {
      this.$router.go(-1);
    },
    onSelect(id) {
        console.log(id);
        if(this.biz==='deposit'){
                this.$router.push(  { name:'deposit',params:{id} });
        }else if(this.biz=="withdraw"){
                this.$router.push(  { name:'withdraw',params:{id} });
        }
    }
  }
};
</script>
<style>
.coin-select .list {
  text-align: left;
}
</style>

