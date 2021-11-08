<template>
  <h2>{{ obj }}</h2>
  <h2>{{ name1 }}</h2>
  <h2>{{ name2 }}</h2>
  <button @click="fun">点击</button>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRef } from 'vue'
export default defineComponent({
  /*
    toRefs, toRef, ref
    toRefs传入一个对象, 将对象的所有属性处理为ref响应式, 并返回处理后的对象, 该对象所有属性都是ref对象, 即响应式的
    toRef传入对象和一个'属性', 返回该属性的ref对象, 该属性是响应式的
    上面两个是都是将对象的属性变成响应式, 操作时, 原对象和处理过后的ref对象是同步的, 操作的是用一个数据值
    只是原对象的属性并不是响应式的, 经过toRefs或者toRef处理后的属性变成了ref响应式对象
    注意操作处理后的对象或者属性时, 由于变成了ref响应式对象, 因此操作时需要.vlaue
    --------------------------------------------------------------------------------------------------
    ref接收一个值, 返回一个ref响应式对象, 如果接收到是对象的属性, 也会将该属性处理为ref对象, 但是和toref或者toRefs不同的是
    返回的是一个新的数据, 操作该ref对象原数据并不会同步
  */
  setup() {
    const obj = reactive({
      name: '11',
      age: 18,
    })
    // 将响应式对象的name属性也变成响应式并返回到页面
    const name1 = toRef(obj, 'name')
    // 生成一个值为obj.name的新的ref响应式对象
    const name2 = ref(obj.name)
    const fun = () => {
      // 操作该数据, 原对象也会改变
      name1.value += '===='
      // 原对象不会改变
      name2.value += '---------'
    }
    return {
      obj,
      name1,
      name2,
      fun,
    }
  },
})
</script>
<style scoped></style>
