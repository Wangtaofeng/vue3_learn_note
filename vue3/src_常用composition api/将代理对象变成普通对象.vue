<template>
  <h2>{{ obj1 }}</h2>
  <h2>{{ obj2 }}</h2>
  <button @click="fun">点击</button>
  <hr />
  <h2>{{ obj3 }}</h2>
  <button @click="fun2">点击</button>
</template>
<script lang="ts">
import { defineComponent, markRaw, reactive, ref, toRaw } from 'vue'
export default defineComponent({
  /*
    toRew将一个由reactive或者shallowRef处理的响应式对象临时变成一个普通对象
    ref或者shallowRef并不会受影响
    调用该方法, 返回一个普通对象, 改变该对象的值, 并不会引发页面的更新, 而原对象的值也会改变, 但不会引起页面更新
    但是和其他引起页面更新的同时调用, 同样页面会更新, bug吗
    markraw将一个对象标记，使其不会再成为一个响应式对象，只是一个普通对象
  
  */
  setup() {
    // toRew-------------------------
    const obj1 = reactive({
      name: '111',
    })
    const obj2 = ref({
      name: '111',
    })
    const fun = () => {
      const obj11 = toRaw(obj1)
      obj11.name += '111'
      // toRaw对Ref或者shallowRef代理对象不起作用
      // const obj22 = toRaw(obj2)
      // obj22.value.name += '111'
      console.log(obj1, obj11)
      console.log('-----------------------')
      // console.log(obj2, obj22)
    }
    // markRaw标记一个对象或者一个代理对象, 返回普通对象
    const obj3 = markRaw({
      name: '111',
    })
    const fun2 = () => {
      obj3.name += '11111111'
      console.log(obj3)
    }
    return {
      obj1,
      obj2,
      obj3,
      fun,
      fun2,
    }
  },
})
</script>
<style scoped></style>
