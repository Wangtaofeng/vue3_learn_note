<template>
  <h2>toRef的使用及特点</h2>
  <h3>state:{{state}}</h3>
  <h3>age:{{ age}}</h3>
  <h3>name:{{ name}}</h3>

  <button @click="update">更新数据</button>

  <hr>
  <Child :age = "age"></Child>
</template>

<script lang="ts">
// defineComponent函数，目的是定义一个组件 , 内部可以传入一个配置对象
import {toRef,defineComponent,ref,reactive,toRefs,onMounted,shallowReactive,shallowRef} from 'vue';
import Child from './components/Child.vue'
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
    // 把响应式数据state对象中的某个属性age变成了ref对象了
    const age = toRef(state,'age')
    // 把响应式对象中的某个属性使用ref进行包装，变成了一个ref对象
    const name = ref(state.name)
    const update = ()=>{
      // 只有通过toRef转换的数据才是互通的
      // state.age+=2
      age.value+=2
      // 不会影响state中的数据
      name.value +='=='
    }
    return{
      state,age,name,update
    }
  },
  components: {
    Child
  }
});
</script>

<style>
</style>
