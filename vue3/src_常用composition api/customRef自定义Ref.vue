<template>
  <h2>{{ val }}</h2>
  <h2>{{ obj }}</h2>
  <button @click="fun">点击</button>
  <button @click="fun2">点击</button>
</template>
<script lang="ts">
import { defineComponent, customRef } from 'vue'
/*
  一般不直接使用对象object作为类型约束, 可以使用接口来定义具体的对象类型
*/
interface myObj {
  name: string
}
function myRef<T>(value: T) {
  /*
    customRef用于创建一个自定义的ref代理对象, 接收一个函数作为参数, 不能单独调用使用, 是作为一个函数的返回值
    参数是一个回调函数, 函数的参数第一个是追踪数据变化的track, 另一个是通知页面更新的trgger
    只能在setup中调用
    只要能返回一个customRef就行, 前面的value并不是绝对的
    比如上面value接收一个url, 返回一个对象也是可以的
    也是能返回对象的
    但是好像不能直接将一个对象通过该api处理为响应式, 数据改变了但是页面并未响应
  */
  return customRef((track, trgger) => {
    // 工厂函数需要return一个对象, 该对象中需要有get和set属性
    return {
      get() {
        // 需要调用track用于追踪数据
        track()
        return value
      },
      set(val: T) {
        value = val
        // 调用trgger通知页面更新
        trgger()
      },
    }
  })
}
export default defineComponent({
  setup() {
    const obj = myRef<myObj>({ name: '123' })
    const fun = () => {
      obj.value.name = '456'
      console.log(obj)
    }
    const val = myRef<number>(123)
    const fun2 = () => {
      val.value = 456
      console.log(val)
    }
    return {
      val,
      obj,
      fun,
      fun2,
    }
  },
})
</script>
<style scoped></style>
