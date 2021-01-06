<template>
  <div>
    <van-tabbar
      v-model="active"
      active-color="#ee0a24"
      inactive-color="#000"
      @change="changeItem"
    >
      <van-tabbar-item
        ><van-icon
          class-prefix="iconfont icon-dianying"
          slot="icon"
          size="1.2rem"
        /><span>电影</span></van-tabbar-item
      >
      <van-tabbar-item
        ><van-icon
          class-prefix="iconfont icon-yingyuan"
          slot="icon"
          size="1.2rem"
        /><span>影院</span></van-tabbar-item
      >
      <van-tabbar-item
        ><van-icon
          class-prefix="iconfont icon-wode-01-01"
          slot="icon"
          size="1.2rem"
        /><span>我的</span></van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>
<script>
// 导入需要使用的字体图标
import "@/assets/font/iconfont.css";
// 导入vant组件
import Vue from "vue";
import { Tabbar, TabbarItem, Icon } from "vant";

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
export default {
  data() {
    return {
      active: 0,
      urls: ["films/nowPlaying", "/cinemas", "/center"],
    };
  },
  created() {
    // 纠正书信之后索引归零的问题
    // 获取路由信息: this.$route
    this.active =
      this.urls.indexOf(this.$route.path) > -1
        ? this.urls.indexOf(this.$route.path)
        : 0;
  },
  methods: {
    changeItem(index) {
      // index 为菜单的索引
      this.$router.push(this.urls[index]);
    },
  },
};
</script>