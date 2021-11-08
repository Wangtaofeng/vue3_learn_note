<template>
  <div>
    开始正式学习Vue3啦！
    <h1>{{number}}</h1>
  </div>
</template>

<script lang="ts">
  //这里可以使用ts的代码
// defineComponent函数，目的是定义一个组件 , 内部可以传入一个配置对象
import { defineComponent } from 'vue';

// 暴露出去一个定义好的组件
export default defineComponent({
  // 当前组件的名字是app
  name: 'App',
  // setup是组合Api中第一个要使用的函数
  setup() {
    const number = 10
    return {
      number
    }
  }
});
</script>

<style>
</style>
