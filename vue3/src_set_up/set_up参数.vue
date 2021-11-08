<template>
  <h2>{{ setUp }}</h2>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  props: { data: String, setUp: String },
  setup(props, context) {
    /*
    setup两个参数, 第一个参数是上面经过props声明过后的父组件传递过来的数据(需要经过props声明)
    第二个参数context包含三个常用的属性
    1. attr, 该属性里保存的是父组件传递过来但props中未声明的数据
    2. emit, 即this.$emit, 可以触发父组件传递的函数
    3. solt, 和插槽有关的, 后续再议
    */
    // 其实对于第二个参数, 更多的时候直接解构赋值, 直接就{attr, emit, ...}
    console.log(props)
    console.log(context)
    context.emit('fun', 'emit')
  },
})
</script>
<style scoped>
</style>
