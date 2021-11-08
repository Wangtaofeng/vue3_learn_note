<template>
  <h2>provide 与 inject</h2>
  <h3>当前的颜色:{{color}}</h3>
  <button @click="color='red'">红色</button>
  <button @click="color='yellow'">黄色</button>
  <button @click="color='green'">绿色</button>
  <hr>
  <Son></Son>
</template>

<script lang="ts">
// defineComponent函数，目的是定义一个组件 , 内部可以传入一个配置对象
import {provide,defineComponent,ref,reactive,toRefs,onMounted,shallowReactive,shallowRef} from 'vue';
import Son from './components/Son.vue'
export default defineComponent({
  name: 'App',
  // 需求：页面加载完毕，页面中的文本框可以直接获取焦点
  setup() {
    const color = ref('red')
    provide('color',color)
    const update = ()=>{

    }
    return{
     color,
     update
    }
  },
  components: {
    Son
  }
});
</script>

<style>
</style>
