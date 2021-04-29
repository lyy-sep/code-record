<!--
 * @Description: 
 * @Author: liyuanyuan
 * @Date: 2021-04-20 17:41:52
 * @LastEditTime: 2021-04-20 18:05:04
 * @LastEditors: liyuanyuan
 * @FilePath: \lyy-world\src\views\Home.vue
-->
<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
<style lang="less" scoped>
.home {
  height: 100%;
}
</style>
