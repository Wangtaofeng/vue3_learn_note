<template>
  <h2>shallowReactive 和 shallowRef</h2>
  <h3>m1:{{m1}}</h3>
  <h3>m2:{{m2}}</h3>
  <h3>m3:{{m3}}</h3>
  <h3>m4:{{m4}}</h3>
  <hr>
  <button @click="update">更新数据</button>
</template>

<script lang="ts">
// defineComponent函数，目的是定义一个组件 , 内部可以传入一个配置对象
import { defineComponent,ref,reactive,toRefs,onMounted,shallowReactive,shallowRef} from 'vue';

export default defineComponent({
  name: 'App',
  // 需求：页面加载完毕，页面中的文本框可以直接获取焦点
  setup() {
    const m1 = reactive({
      name:'诸葛亮',
      age:21,
      skills:{
        name:'夜观星象',
        power:'great'
      }
    })
    const m2 = shallowReactive({
      name:'诸葛亮',
      age:21,
      skills:{
        name:'夜观星象',
        power:'great'
      }
    })

    const m3 = ref({
      name:'诸葛亮',
      age:21,
      skills:{
        name:'夜观星象',
        power:'great'
      }
    })
    const m4 = shallowRef({
      name:'诸葛亮',
      age:21,
      skills:{
        name:'夜观星象',
        power:'great'
      }
    })
    function update() {
      //m1  reactive (深度劫持，深监视) 深度响应式
      // m1.skills.name += '='

      //m2  shallowReactive   浅响应式（浅劫持）只处理了对象内最外层属性的响应式
      // m2.skills.name += '='
      m2.name+='='
      //m3  ref  (深度劫持，深监视) 深度响应式 做了reactive的处理
      // m3.value.skills.name += '='

      //m4  shallowRef 浅响应式（浅劫持）只处理了value的响应式，不进行对象的reactive处理
      m4.value.skills.name += '='
      m4.value.name +='='

      // 使用情况
      // 如果有一个对象数据，结构比较深，但变化时只是外层属性变化 ===> shalloReactive
      // 如果有一个对象数据，后面会产生新的对象来替换 ===> shallowRef
    }
    return{
      m1,
      m2,m3,m4,update
    }
  },
  components: {
  }
});
</script>

<style>
</style>
