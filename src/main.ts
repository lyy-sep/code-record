/*
 * @Description:
 * @Author: liyuanyuan
 * @Date: 2021-04-20 17:41:52
 * @LastEditTime: 2021-08-09 11:44:53
 * @LastEditors: liyuanyuan
 * @FilePath: \lyy-world\src\main.ts
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ViewUI from "view-design";

// import style
import "view-design/dist/styles/iview.css";

Vue.use(ViewUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
