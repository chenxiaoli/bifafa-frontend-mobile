<template>
  <div id="app">


    <router-view></router-view>
        <TabBar :show='show' />
  </div>
</template>

<script>
import Vue from 'vue';
import TabBar from "./layout/TabBar"

export default {
  name: "app",
  data(){
    
    return {
      show:true
    }
  },
created: function () {
      const path=this.$route.path

      if(path=="/trade" || path=="/" || path=="/my" || path=="/market"){
        this.show=true
      }else{
        this.show=false
      }
},

  components: {
TabBar
  },
  methods: {
    updateShowTabBar(){
      const path=this.$route.path
      console.log(path)
      if(path=="/trade" || path=="/" || path=="/my" || path=="/market"){
        this.show=true
      }else{
        this.show=false
      }
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'updateShowTabBar',

  }
};
</script>

<style>

* {
-webkit-touch-callout:none;
-webkit-user-select:none;
-khtml-user-select:none;
-moz-user-select:none;
-ms-user-select:none;
user-select:none;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #7d7e80;
background: #f8f8f8;

}



.market-box{
  line-height: 1.5em;

}
.market-row {
  background-color: white;
  padding: 10px 0 10px 0;
  height: 48px;
  color: #7d7e80;
  padding-left: 10px;
}
.market-header-row {
  background-color: white;
  height:40px;
  line-height:40px;
  font-weight: bold;
  padding-left: 10px;
}



</style>
