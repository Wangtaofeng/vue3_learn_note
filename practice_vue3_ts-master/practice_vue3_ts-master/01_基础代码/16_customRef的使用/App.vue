<template>
  <h2>CustomRef的使用</h2>
  <input v-model="keyword" >
  <h3>keyword:{{keyword}}</h3>
  <button @click="update">更新数据</button>

  <hr>
</template>

<script lang="ts">
// defineComponent函数，目的是定义一个组件 , 内部可以传入一个配置对象
import {customRef,defineComponent,ref,reactive,toRefs,onMounted,shallowReactive,shallowRef} from 'vue';
//自定义hook防抖函数
//value传入的数据，将来的数据类型不确定，故使用泛型，delay防抖的间隔时间
function useDebounceRef<T>(value:T,delay=200) {
  //准备一个存储定时器id的变量
  let timer:number
  return customRef((track,trigger)=>{
    return {
      // 返回数据
      get() {
        //告诉vue追踪数据
        track()
        return value
      },
      // 设置数据
      set(newValue:T) {
        // 清理定时器
        clearTimeout(timer)
        //开启定时器
        timer = setTimeout(()=>{
          value = newValue
          //告诉vue更新页面
          trigger()
        },delay)
      }
    }
  })
}
export default defineComponent({
  name: 'App',
  // 需求：页面加载完毕，页面中的文本框可以直接获取焦点
  setup() {

    // const keyword = ref('abc')
    const keyword = useDebounceRef('abc',500)
    const update = ()=>{

    }
    return{
     update,keyword
    }
  },
  components: {
  }
});
</script>

<style>
</style>
