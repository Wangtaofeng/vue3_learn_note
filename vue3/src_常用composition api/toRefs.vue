<template>
  <!-- <h2>{{ obj.name }}</h2>
  <h2>{{ obj.age }}</h2> -->
  <hr />
  <h2>{{ name }}</h2>
  <h2>{{ age }}</h2>
  <h2>{{ obj }}</h2>
  <h2>{{ obj2 }}</h2>
  <button @click="fun">点击</button>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  setup() {
    /*
      使用reactive对对象进行代理, 但是对象中的每个属性并不是响应式的
      下面的操作是通过对象来改变其属性, 而对象是响应式的, 进而通过对象.属性就可以拿到响应式的属性
      但是直接...obj返回的属性并不是响应式的, 即使改变了也不会响应
    */
    const obj = reactive({
      name: 'wtf',
      age: '18',
    })
    // 经过toRefs将每个属性变成响应式后, 操作原对象, 处理后的对象同样也会随着改变
    setInterval(() => {
      obj.age += '++'
      obj.name += '++'
    }, 500)
    /*
      将代理对象经过toRefs处理后, 里面的每个属性都是响应式,但是不能直接操作toRefs处理后的对象, ***因为每个属性都变成了ref对象
      如果操作处理后的属性, 需要属性.value, 这里的值一旦改变, 原对象的数据也会跟着改变
      同样的, 修改原对象的数据, toRefs处理过的响应式属性也会跟着改变
      只是使用的时候, 原对象是响应式的, 但是属性并不是响应式的, 直接解构赋值拿属性放到页面上的话, 属性改变并不会响应
      而经过toRefs处理后, 返回了一个普通对象, 但是其属性都是ref对象, 即响应式的, 可以直接将某个属性return到页面上
    */
    const obj2 = toRefs(obj)
    // 修改处理后的对象的属性值需要,value, 而且属性是响应式的, 可以直接放到页面上
    const fun = () => {
      obj2.name.value += '---------------'
      console.log(obj)
      console.log(obj2)
    }
    return {
      obj2,
      obj,
      fun,
      // ...obj, //展开reactive对象, 其中的属性并不是响应式
      ...obj2, //经过toRefs处理后的代理对象, 属性都变成了响应式
    }
  },
})
</script>
<style scoped></style>
