<template>
  <h2>Fragment组件的介绍</h2>
  <h3>在vue3中组件可以没有根标签，内部会将多个标签包含在一个fragment虚拟元素中，好处是可以减少标签层级，减少内存占用</h3>
</template>

<script lang="ts">
import {defineComponent,ref,reactive} from 'vue';
export default defineComponent({
  name: 'App',
  setup() {

    return{

    }
  },
  components: {
  }
});
</script>

<style>
</style>
