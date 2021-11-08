<template>
  <h2>toRefs的使用</h2>
  <h3>name:{{state.name}}</h3>
  <h3>age:{{state.age}}</h3>

  <h3>name:{{name}}</h3>
  <h3>age:{{age}}</h3>


  <h3>name2:{{name2}}</h3>
  <h3>age2:{{age2}}</h3>
  <p></p>
</template>

<script lang="ts">
// defineComponent函数，目的是定义一个组件 , 内部可以传入一个配置对象
import { defineComponent,ref,reactive,toRefs} from 'vue';
// 暴露出去一个定义好的组件

function userFeatureX() {
  const state = reactive({
    name2:'乔峰',
    age2:50
  })
  return { //每一个属性都是一个ref对象
    ...toRefs(state)
  }
}
export default defineComponent({
  name: 'App',

  setup() {
    const state = reactive({
      name:'乔峰',
      age:50
    })
    // 如果没有经过toRefs转换，那通过...state返回的数据非响应
    // toRefs可以把一个响应式对象转换为普通对象，该普通对象的每个property都是一个 ref
    const state2 = toRefs(state)
    const {name2,age2} = userFeatureX()
    // 定时器更新数据。（数据变化，界面随之变化，肯定是响应式数据）
    setInterval(()=>{
      state2.name.value += '===='
    },1000)
    return{
      state,
      ...state2,
      name2,age2
    }
  },
  components: {
  }
});
</script>

<style>
</style>
