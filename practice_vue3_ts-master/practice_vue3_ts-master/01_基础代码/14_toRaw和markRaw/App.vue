<template>
  <h2>toRaw和markRaw</h2>
  <h3>state:{{state}}</h3>
  <button @click="testToRaw">更新数据</button>
  <button @click="testMarkRaw">更新数据</button>
</template>

<script lang="ts">
// defineComponent函数，目的是定义一个组件 , 内部可以传入一个配置对象
import {toRaw, markRaw,defineComponent,ref,reactive,toRefs,onMounted,shallowReactive,shallowRef} from 'vue';
interface UserInfo {
  name:string,
  age:number,
  skill:{},
  likes?:string[]
}
export default defineComponent({
  name: 'App',
  // 需求：页面加载完毕，页面中的文本框可以直接获取焦点
  setup() {
    const state = reactive<UserInfo>({
      name:'赵云',
      age:22,
      skill:{
        name:'枪出如龙',
        powerful:'strong'
      }
    })
    const testToRaw = ()=>{
      //toRaw 把代理对象变成普通对象，数据变化界面不会变化
      const user = toRaw(state)
      user.name = 'aaa'

    }
    const testMarkRaw = ()=>{
      //markRaw标记的对象数据，从此以后都不能再成为代理对象
      state.likes = markRaw(['吃'])
      setInterval(()=>{
        if(state.likes) {
          state.likes[0] += '==='
        }
      },1000)

    }
    return{
      state,testToRaw,testMarkRaw
    }
  },
  components: {
  }
});
</script>

<style>
</style>
