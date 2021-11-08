<template>
  <input type="text" ref="inputRef" />
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  setup() {
    /*
    setup中,使用ref获取组件标签和vue2的option中有些不同
    首先, ref不再是在组件中声明然后在$refs中获取了
    而是在setup中声明, 声明为ref对象, 类型为HTMLElement | null (初始值为null)
    然后将这个ref返回出去, 页面中再使用这个ref标识
    组件标签在ref对象的value中存放
     */
    const inputRef = ref<HTMLElement | null>(null)
    onMounted(() => {
      console.log(inputRef.value)
    })
    return {
      inputRef,
    }
  },
})
</script>
<style scoped></style>
