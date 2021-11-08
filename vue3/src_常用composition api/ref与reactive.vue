<template>
  <!-- vue3组件中可以没有根标签 -->
  <h2>{{ test }}</h2>
  <button @click="testfun">点击更改</button>
  <h2>{{ count }}</h2>
  <hr />
  <h2>age: {{ obj.age }}</h2>
  <h2>other: {{ obj.other.age }}</h2>
  <h2>arr: {{ arr }}</h2>
</template>
<script lang="ts">
// 使用defineComponent定义组件对象
import { defineComponent, reactive, ref } from 'vue'
export default defineComponent({
  // setup函数会在组件最开始的时候执行一次, 并且只执行一次, 在beforecreate钩子之前执行
  // 此时组件对象还未创建, this = undefined
  // 该函数中返回的数据和函数在模板中可以直接使用, 但数据并不是响应式的数据
  setup() {
    // 在return外部定义好数据和函数
    // 函数和数据经过return之后都能直接被模板使用
    // 但是直接定义的数据并不是响应式的, 只能初始化展示, 后续的操作并不会生效
    let test = '这不是响应的数据'
    // ---------------
    // 想要数据变成响应式, 需要使用ref和reactive
    // ref和reactive是vue3中实现的包装响应式数据的方法, 属于组合api部分,  composition API
    // ref用于定义基本类型的响应式数据, 返回的是ref对象, 其实也能传入对象, 当是对象时, 实际还是去调用了reactive
    // ref操作基本数据类型即给.value使用setter和getter进行数据劫持
    // 操作ref对象中的数据变化时, 需要操作ref对象.value; count.value++
    // 但是模板上不是使用ref对象.value, 模板上直接使用ref对象, 会自动携解析.value
    let count = ref(0)
    // reactive用于定义一个复杂类型的响应式数据, 比如对象, 数组
    // 并且是深层次的监视, 数组也不需要使用vue重写的方法才能实现响应式, 直接操作下标等任意操作都会响应
    // ---遗留问题: 不使用reactive也是响应式 ---下一篇文章解决了
    let obj = reactive({
      name: '111',
      age: 18,
      other: {
        age: 16,
      },
    })
    let arr: [number, number, number[]] = [1, 2, [1, 2]]
    // --------------操作的函数
    function testfun() {
      test = '更改了并未生效'
      console.log('更改数据')
      count.value++
      obj.age++
      obj.other.age++
      arr[2][0]++
    }
    return {
      test,
      testfun,
      count,
      obj,
      arr,
    }
  },
})
</script>
<style scoped></style>
