<!--
 * @Description: 
 * @Author: liyuanyuan
 * @Date: 2021-04-20 17:41:52
 * @LastEditTime: 2021-08-09 14:26:18
 * @LastEditors: liyuanyuan
 * @FilePath: \lyy-world\src\views\Home.vue
-->
<template>
  <div class="home">
    <Main />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Main from "@/components/Main";

export default {
  name: "Home",
  components: {
    Main,
  },
};
</script>
<style lang="less" scoped>
.home {
  height: 100%;
}
</style>
