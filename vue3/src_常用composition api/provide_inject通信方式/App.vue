<template><Childf /></template>
<script lang="ts">
import { defineComponent, provide } from 'vue'
import Childf from './Child/childf.vue'
export default defineComponent({
  /*
    provide/inject用于祖孙之间的通信,父 => 子组件间传递数据可以使用props, 但是隔了几层之后就不方便
    因此使用provide声明一个依赖名称(str), 第二个参数传递数据
    后代组件inject('名称')并且使用变量接收即可拿到祖先元素传递来的数据
   */
  setup() {
    provide('color', 1111)
    provide('color2', 2222)
  },
  components: { Childf },
})
</script>
<style scoped></style>
