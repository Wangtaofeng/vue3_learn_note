<template>
  <h2>

  </h2>
  <h3>state:{{state}}</h3>
  <button @click="update">更新数据</button>
</template>

<script lang="ts">
// defineComponent函数，目的是定义一个组件 , 内部可以传入一个配置对象
import {shallowReadonly, readonly,defineComponent,ref,reactive,toRefs,onMounted,shallowReactive,shallowRef} from 'vue';

export default defineComponent({
  name: 'App',
  // 需求：页面加载完毕，页面中的文本框可以直接获取焦点
  setup() {
    const state = reactive({
      name:'赵云',
      age:22,
      skill:{
        name:'枪出如龙',
        powerful:'strong'
      }
    })
    const state2 = readonly(state)
    const state3 = shallowReadonly(state)
    const update = ()=>{
      // 只读属性不能修改
      // readonly是深度只读
      // state2.name = 'aa'

      // shallowReadnly是 浅只读
      state3.skill.name += '='
    }
    return{
      state,update
    }
  },
  components: {
  }
});
</script>

<style>
</style>
