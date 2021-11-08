<template>
  <h2>ref的另一个作用可以获取页面中的元素</h2>
  <input type="text" ref="inputRef">
</template>

<script lang="ts">
// defineComponent函数，目的是定义一个组件 , 内部可以传入一个配置对象
import { defineComponent,ref,reactive,toRefs,onMounted} from 'vue';

export default defineComponent({
  name: 'App',
  // 需求：页面加载完毕，页面中的文本框可以直接获取焦点
  setup() {
    // 默认是空的，页面加载完毕，说明该组件已经存在了，获取文本框元素
    const inputRef = ref<HTMLElement | null>(null)
    onMounted(()=>{
      // 自动获取焦点
      inputRef.value && inputRef.value.focus()
    })
    return{
      inputRef
    }
  },
  components: {
  }
});
</script>

<style>
</style>
