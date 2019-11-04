<template>
<van-tabbar v-model="active" v-show="show">
  <van-tabbar-item name="home" icon="wap-home-o" v-on:click="goto('/')"><b>首页</b></van-tabbar-item>
    <van-tabbar-item name="eye" icon="chart-trending-o"  v-on:click="goto('/market')"><b>行情</b></van-tabbar-item>
  <van-tabbar-item name="exchange" icon="exchange" v-on:click="goto('/trade')"><b>币币交易</b></van-tabbar-item>

  <van-tabbar-item name="user" icon="user-o"  v-on:click="goto('/my')"><b>我的</b></van-tabbar-item>
</van-tabbar>
</template>
<script>
export default {
  data() {
    return {
      active: 'home',
    }
  },
  props:["show"],
  methods:{
      goto(path){
          this.$router.push({path})
      }
  },
    watch: {
 

  },
}
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';
 

Vue.use(Tabbar).use(TabbarItem);

</script>

