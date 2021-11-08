<template>
    <div>
        {{count}}
        <button @click="updateCount"></button>
    </div>
</template>

<script lang="ts">
  //这里可以使用ts的代码
// defineComponent函数，目的是定义一个组件 , 内部可以传入一个配置对象
import { defineComponent,ref } from 'vue';
// 引入一个子级组件
import HelloWorld from './components/HelloWorld.vue';

// 暴露出去一个定义好的组件
export default defineComponent({
  // 当前组件的名字是app
  name: 'App',
  setup() {
    const count = ref(0)
    function updateCount() {
        count.value++
    }
    return {
        count,updateCount
    }
  },
  // 注册组件
  components: {
    // 注册一个子级组件
    HelloWorld
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
