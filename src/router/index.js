import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 导入需要的组件
// import Films from "@/views/Films/Index";
// import NowPlaying from "@/views/Films/NowPlaying";
// import ComingSoon from "@/views/Films/ComingSoon";
// import Detail from "@/views/Films/Detail";
// import Cinemas from "@/views/Cinemas/Index";
// import Center from "@/views/Center/Index";


// 导入经过模块化的路由
import filmRouter from './routes/film'
import cinemaRouter from './routes/cinema'
import centerRouter from './routes/center'

const routes = [
  {
    path: "/",
    redirect: "/films/nowPlaying",
  },

  // 模块化
  // 电影模块
  //    电影模块父        /films
  //      正在热映          /films/nowPlaying
  //      即将上映          /films/comingSoon
  ...filmRouter, // 需要展开, 导出的是一个数组, 但是人家要的是一个对象
  // 影院模块             /cinemas
  ...cinemaRouter,
  // 我的模块             /center
  ...centerRouter,
  // {
  //   path: "/films",
  //   component: Films,
  //   children: [
  //     { path: "nowPlaying", component: NowPlaying },
  //     { path: "comingSoon", component: ComingSoon },
  //   ],
  // },

  // //     电影详情             /film/:filmId
  // {
  //   path: "/film/:filmId",
  //   component: Detail,
  // },

  // {
  //   path: "/cinemas",
  //   component: Cinemas,
  // },
  // {
  //   path: "/center",
  //   component: Center,
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
