<template></template>
<script lang="ts">
import {
  defineComponent,
  ref,
  shallowReactive,
  shallowRef,
  reactive,
  shallowReadonly,
  readonly,
  isRef,
  isProxy,
  isReactive,
  isReadonly,
} from 'vue'
export default defineComponent({
  /*
    响应式数据的判断
    isRef, 判断是否是ref响应式对象(并不是代理)
    isReactive, 判断是否是reactive创建的响应式代理
    isReadonly, 判断是否是readonly创建的只读代理
    isProxy, 判断是否是reactive或readonly创建的代理

    结论: 
      1. 经过ref处理, 无论基本数据还是对象, 或者ref还是shallowRef, 结果返回的都是ref对象
      2. 无论是reactive还是shallowReactive,  结果返回的都是reactive代理对象
      3. 无论是readonly还是shallowReadonly, 结果返回的都是readonly只读代理对象
      4. reactive, shallowReactive, readonly, shallowReadonly返回的都是Proxy代理对象, ref, shallowRef返回的是ref对象
  */
  setup() {
    const ref1 = ref(1)
    const ref2 = ref({ name: 1 })
    const ref3 = shallowRef(1)
    const ref4 = shallowRef({ name: 1 })
    const reactive1 = reactive({ name: 1 })
    const reactive2 = shallowReactive({ name: 1, temp: { name2: 1 } })
    const readonly1 = readonly({ name: 1 })
    const readonly2 = shallowReadonly({ name: 1, temp: { name2: 1 } })
    console.log(isRef(ref1), isRef(ref2), isRef(ref3), isRef(ref4))
    console.log('-----------isReactive---------------------------------')
    console.log(
      isReactive(ref1),
      isReactive(ref2),
      isReactive(ref3),
      isReactive(ref4),
    )
    console.log(isReactive(reactive1), isReactive(reactive2))
    console.log('-----------isReadonly------------------------------')
    console.log(isReadonly(readonly1), isReadonly(readonly2))
    console.log('-----------isProxy-------------------------')
    console.log(isProxy(ref1), isProxy(ref2), isProxy(ref3), isProxy(ref4))
    console.log(isProxy(reactive1), isProxy(reactive2))
    console.log(isProxy(readonly1), isProxy(readonly2))
  },
})
</script>
<style scoped></style>
