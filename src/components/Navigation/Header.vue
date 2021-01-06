<template>
  <div>
    <van-tabs @click="onClick" v-model="active" line-width='60px' line-height='2px' title-active-color='#ff6f2e'>
      <van-tab title="正在热映"></van-tab>
      <van-tab title="即将上映"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant';
import VueRouter from "vue-router";

Vue.use(Tab);
Vue.use(Tabs);
export default {
  data() {
    return {
      active: 0,
      urls: ['/films/NowPlaying', '/films/ComingSoon']
    }
  },
  created() {
    this.active = this.urls.indexOf(this.$route.path)
  },
  methods: {
    onClick(index) {
      this.$router.push(this.urls[index])
      const originalPush = VueRouter.prototype.push;
      VueRouter.prototype.push = function push(location) {
          return originalPush.call(this, location).catch((err) => err);
      };
    },
  },
}
</script>
<style lang="scss">
.van-tabs__line {
  background-color: #ff6f2e;
}
</style>