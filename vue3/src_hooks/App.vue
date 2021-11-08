<template>
  <h2>{{ x }}, {{ y }}</h2>
  <h2 v-if="res">{{ res }}</h2>
  <h2 v-if="loading">{{ loading }}</h2>
  <h2 v-if="error">{{ error }}</h2>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
// 引入定义的mouse_hook, 该hook是一个函数, 可以直接调用
import mouse from './hooks/mouse'
import myAxios from './hooks/myAxios'
// 定义接口, 限制返回值类型的接口, 即myAxios中限制res的泛型, 在外部定义
interface Idata {
  id: number
  name: string
}
export default defineComponent({
  setup() {
    // 返回的两个值是在hook中已经ref处理过的响应式数据
    const { x, y } = mouse()
    // 调用自定义的ajax
    const { res, loading, error } = myAxios<Idata>('/data/data.json')
    return {
      x,
      y,
      res,
      loading,
      error,
    }
  },
})
</script>
<style scoped>
</style>
