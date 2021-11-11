/*
 * @Description:
 * @Author: liyuanyuan
 * @Date: 2021-04-20 17:41:52
 * @LastEditTime: 2021-08-09 11:38:01
 * @LastEditors: liyuanyuan
 * @FilePath: \lyy-world\.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  plugins: ["prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": "error",
    // 要求导出函数和类的显式返回和参数类型
    "@typescript-eslint/explicit-module-boundary-types": "off"
  }
};
