<template>
  <div class="qr-scan">
          <van-nav-bar
      title=""
      left-text
      right-text="相册"
      left-arrow
      @click-left="onGoBack"
      @click-right="onWithdrawList"
    />
    <!-- 内容部分 -->
<qrcode-stream  @decode="onDecode"  @init="onInit"></qrcode-stream>
    <video id="qr-vedio" class="v" autoplay=""></video>
    <canvas id="qr-canvas" ></canvas>
    <p v-show="result != ''">{{result}}</p>
    <p v-show="errorMes != ''">{{errorMes}}</p>
  </div>
</template>
 
<script>
import Vue from "vue";
import QrcodeStream from "vue-qrcode-reader";

Vue.use(QrcodeStream);
  export default {
    props: {
      //
    },
    data () {
      return {
        vedio: '',
        canvas: '',
        context: '',
        stopScan: null,
        errorMes: '',
        result: ''
      }
    },
  
    methods: {
      onGoBack() {
      this.$router.go(-1);
    },
       onDecode (decodedString) {
        this.$router.replace({name:"withdraw",params:{id:"btc"},query:{address:decodedString}})
  },
  async onInit (promise) {
    // show loading indicator

    try {
      await promise

      // successfully initialized
    } catch (error) {
      if (error.name === 'NotAllowedError') {
        // user denied camera access permisson
      } else if (error.name === 'NotFoundError') {
        // no suitable camera device installed
      } else if (error.name === 'NotSupportedError') {
        // page is not served over HTTPS (or localhost)
      } else if (error.name === 'NotReadableError') {
        // maybe camera is already in use
      } else if (error.name === 'OverconstrainedError') {
        // did you requested the front camera although there is none?
      } else if (error.name === 'StreamApiNotSupportedError') {
        // browser seems to be lacking features
      }
    } finally {
      // hide loading indicator
    }
  }
    }
  }
</script>
 
<style >
.qr-scan .van-nav-bar{
    background: none;
    background-color:rgba(0,0,0,0)
}
.qr-scan .van-hairline--bottom{
        background-color:rgba(0,0,0,0);
            background: none;
}
.qr-scan .van-hairline--bottom::after{
    border-bottom: 0;
}

  .v {
    width: 320px;
    height: 240px;
  }
 
  #qr-canvas {
    width: 320px;
    height: 240px;
  }
</style>