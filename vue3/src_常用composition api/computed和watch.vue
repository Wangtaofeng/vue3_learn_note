<template>
  <input type="text" v-model="user.first" /> <br />
  <input type="text" v-model="user.last" /> <br />
  <input type="text" v-model="full1" /> <br />
  <hr />
  <input type="text" v-model="full2" /> <br />
  <hr />
  <input type="text" v-model="full3" /> <br />
  <hr />
  <input type="text" v-model="full4" /> <br />
</template>
<script lang="ts">
import {
  defineComponent,
  computed,
  reactive,
  watch,
  ref,
  watchEffect,
} from 'vue'
export default defineComponent({
  setup() {
    let user = reactive({
      first: '王',
      last: '桃峰',
    })
    /*
      computed和vue2中的options中的computed用法类似
      这里是一个组合api函数, 调用后返回一个计算属性
      参数只传一个函数, 即getter
      参数传一个对象, 对象里有set和get, 返回一个可读可写的计算属性
      对比vue2:
      vue2中computed是一个属性, 值是一个对象- computed: {}
      对象里面放监视属性, 如果只有getter, 那么该属性就是对象的一个方法, 直接 name () {}
      如果有getter和setter, 那么该属性就是一个对象, name: { get(){}, set(){} }
     
     */
    let full1 = computed(() => {
      return user.first + '_' + user.last
    })
    let full2 = computed({
      get() {
        return user.first + '_' + user.last
      },
      set(val: string) {
        let names = val.split('_')
        // 这里操作的数据就已经是响应式数据了, 可以代替操作data里面的数据才能完成页面的更新'
        // 上面的数据已经经过代理, 实际上操作的是代理对象
        user.first = names[0]
        user.last = names[1]
      },
    })
    // watch
    /**
     * watch是用来监视某个属性的变化, 不同于computed是可以让属性之间进行计算
     * 比如要完成某个属性1的值等于其他属性2计算而来, 只能通过监视属性2的变化然后给1赋值, 并且最初就立即执行
     * 深度监视的话需要deep: true
     * 这里也是一个组合api函数, 有三个参数: 监视的属性, 操作函数(函数的参数为变化后的值), 配置(立即执行, 深度监视, ...)
     * 实现一个属性的双向绑定, 如果使用watch的话, 需要两次监视, 见下方注释
     */
    let full3 = ref('')
    // 该函数用于监视user给full3赋值
    watch(
      user,
      (val) => {
        full3.value = val.first + '_' + val.last
      },
      {
        // 立即执行, 即最开始就监视一次, 即初始值也会视为变化
        immediate: true,
        // 深度监视
        deep: true,
      },
    )
    // 该函数用于监视full3变化给user赋值
    watch(full3, (val) => {
      let names = val.split('_')
      user.first = names[0]
      user.last = names[1]
    })
    // 也可以一个watch函数监视多个数据
    // 如果数据是ref对象, 就直接在数组中添加, 如果是proxy对象, 即reactive返回的, 需要使用函数的形式
    // 第二个参数的函数的参数也是一个数组, 按照数组的顺序, 变化后的值也在参数中
    watch([() => user, full3], (vals) => {
      console.log(vals)
    })
    let full4 = ref('')
    /**
     * watchEffect会自动监视回调函数中所有出现的属性
     *
     */
    watchEffect(() => {
      full4.value = user.first + '_' + user.last
    })
    return {
      user,
      full1,
      full2,
      full3,
      full4,
    }
  },
})
</script>
<style scoped></style>
