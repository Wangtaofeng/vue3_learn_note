<template>
  <h3>父级组件</h3>

  <button @click="isShow =!isShow">切换显示</button>
  <hr>
  <Child v-if="isShow"></Child>
</template>

<script lang="ts">
// defineComponent函数，目的是定义一个组件 , 内部可以传入一个配置对象
import { defineComponent,reactive,ref,computed,watch,watchEffect} from 'vue';
import Child from './components/Child.vue'
// 暴露出去一个定义好的组件
export default defineComponent({
  name: 'App',

  setup() {
    let isShow = ref(true)
    return{
      isShow
    }
  },
  components: {
    Child
  }
});
</script>

<style>
</style>
