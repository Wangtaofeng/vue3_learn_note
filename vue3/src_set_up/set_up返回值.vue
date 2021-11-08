<template>
  <h2>{{ data }}</h2>
  <h2>{{ setUp }}</h2>
  <Child :data="data" :setUp="setUp" @fun="fun" />
</template>
<script lang='ts'>
import Child from './Child.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      data: '我是data中的数据',
    }
  },
  methods: {
    fun2() {
      // console.log('我是methods中的函数')
    },
  },
  setup() {
    /**
    在setup中返回的对象中, 数据则与data中的数据合并, 函数则与methods合并
    若有重复的, setup都优先
    这也就解释了为什么在这里即使不使用reactive也能有数据的响应了
    再强调一点, vue3中的data和method都是经过proxy代理对象代理的
    data和methods以及setup返回的都在该代理对象中
  
    ==================
    注意: 在setup中无法直接访问到data和methods中的数据, 但是methods可以访问到setup中的属性和方法
    并且setup不能被async修饰, 因为此时返回的是一个promise而不再是一个对象
     */
    let setUp = '我是setup中的数据'
    let fun = (val: string) => {
      // console.log('我是setup中的函数')
      console.log(val)
    }
    return {
      setUp,
      fun,
    }
  },
  mounted() {
    // console.log(this)
  },
  components: {
    Child,
  },
})
</script>
<style scoped>
</style>
