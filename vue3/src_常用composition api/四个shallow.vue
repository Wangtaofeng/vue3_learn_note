<template>
  <h2>{{ shallow_Reactive }}</h2>
  <h2>{{ shallow_Ref }}</h2>
  <h2>{{ shallow_Ref2 }}</h2>
  <button @click="first">点击</button>
  <hr />
  <h2>{{ read_only }}</h2>
  <h2>{{ shallow_read }}</h2>
  <button @click="read_fun">点击</button>
</template>
<script lang="ts">
import {
  defineComponent,
  readonly,
  shallowReactive,
  shallowReadonly,
  shallowRef,
} from 'vue'
export default defineComponent({
  setup() {
    /*
    shallowReactive和shallowRef
    reactive是深层监视的, 有时不需要对很复杂的数据深层监视, 可以使用shallowReactive浅监视
    而shallowRef面对对象时, 不会再内部实现reactive, 不会对对象进行reactive递归监视, 只是使用set, get浅监视
    适用于对象的替换响应, 因为只有当value改变时才会响应, 如果是对象, 改变value只能是对象整个被替换
    */
    const shallow_Reactive = shallowReactive({
      name: 'wtf',
      gril: {
        name: 'hanhan',
        age: 18,
      },
    })
    const shallow_Ref = shallowRef({
      name: 'wtf',
      gril: {
        name: 'tongtong',
        test: {
          temp: '222',
        },
      },
    })
    const shallow_Ref2 = shallowRef('111')
    const first = () => {
      shallow_Reactive.name += '--------------'
      // shallowReactive无法监视深层次的变化
      shallow_Reactive.gril.name = 'tongtontg'
      // shallowRef只会监视.value一层, 内部使用set, get, 不会再调用reacive递归监视
      // 不知为何, shallowRef和其他有响应式的内容同时改变时, 本身也会递归响应, 不知道是不是bug
      // 意思就是, 使用shallowRef时, 不能同时再调用其他可以响应的api，比如shallowReactive改变浅层会响应或者其他让页面响应的
      shallow_Ref.value.name += '---------'
      shallow_Ref.value.gril.test.temp += '--------------'
      shallow_Ref2.value += '111111111111111'
    }
    /*
    ---------------------------------------------------------------------------
    readonly与shallowReadonly
    这俩的参数只能是对象
    readonly处理过的是只读的, 并且是递归处理
    而shallowReadonly处理过的只是浅层, 深层的依旧可写
    深层虽然可读写, 但是页面视图并不会更新, 值是已经改变了
    可写包括增删改查
    */
    const read_only = readonly({
      temp: '11111111111',
      temp2: {
        temp3: '11111111',
      },
    })
    const shallow_read = shallowReadonly({
      temp: '11111111111',
      temp2: {
        temp3: '11111111',
      },
    })
    const read_fun = () => {
      // read_only.temp += '111' // 直接报错了, 编译不通过
      // read_only.temp2.temp3 += '111' // 同上, 直接报错
      // shallow_read.temp += '111' // 浅只读浅层也是直接报错
      shallow_read.temp2.temp3 += '222' // 没有报错, 编译通过
      console.log(shallow_read.temp2.temp3) // 值已经改变了, 但是页面视图并不会改变
    }
    return {
      shallow_Reactive,
      shallow_Ref,
      shallow_Ref2,
      read_only,
      shallow_read,
      read_fun,
      first,
    }
  },
})
</script>
<style scoped>
.body {
  background-image: -moz-radial-gradient();
}
</style>
