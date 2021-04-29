<!--
 * @Description: 
 * @Author: liyuanyuan
 * @Date: 2021-04-20 17:41:52
 * @LastEditTime: 2021-04-20 18:16:08
 * @LastEditors: liyuanyuan
 * @FilePath: \lyy-world\src\components\HelloWorld.vue
-->
<template>
  <div class="hello">
    <div class="m-intro">
      <p>Hello</p>
      <p>Welcome to lyy's world</p>
    </div>
    <div class="m-question">sdafsafjklasfj</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  box-sizing: border-box;
  height: 100%;

  // margin: 0 auto;
  padding: 100px 50px 100px 100px;

  background-color: rgb(189, 210, 228);

  display: flex;

  .m-intro {
    width: 30%;
    font-size: 40px;
  }

  .m-question {
    font-size: 20px;
    background-color: rgb(211, 225, 236);
    width: 70%;
    color: rgb(11, 148, 240);
    padding: 16px;
  }
}
</style>
