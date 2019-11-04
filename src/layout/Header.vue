<template>
<van-nav-bar
  title="标题"
  left-text="返回"
  right-text="按钮"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
</template>

<script>
export default {
  methods: {
    onClickLeft() {

    },
    onClickRight() {

    }
  }
}

import Vue from 'vue';
import { NavBar } from 'vant';

Vue.use(NavBar);
</script>
