<template>
  <div id="app">
    <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <van-popup v-model="show">内容</van-popup>
    <van-popup v-model="show" position="top" :style="{ height: '30%' }" closeable/> -->
    <Footer></Footer>
    <router-view></router-view>
  </div>
</template>
<script>
// 导入底部导航组件
import Footer from '@/components/Navigation/Footer'
// 导入uri地址模块
// import uri from '@/config/uri'

// 导入 vant 组件(用完即删)
// import Vue from 'vue';
// import { Popup, Cell } from 'vant';

// Vue.use(Popup);
// Vue.use(Cell);
export default {
  // 注册组件
  components: {
    Footer
  },
  // // vant 测试代码(用完即删)
  // data() {
  //   return {
  //     show: false,
  //   };
  // },

  // methods: {
  //   showPopup() {
  //     this.show = true;
  //   },
  // },
  created() {
    // 测试网络请求是否可用
    // this.$http.get(uri.getCities).then((ret) => console.log(ret))
  }
}
</script>
<style lang="scss">
</style>
