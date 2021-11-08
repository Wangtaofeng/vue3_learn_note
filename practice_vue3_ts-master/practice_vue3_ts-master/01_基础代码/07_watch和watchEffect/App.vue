<template>
  <h2>计算属性和监视</h2>
  <fieldset>
    <legend>姓名操作</legend>
    姓氏：<input type="text" placeholder="请输入姓氏" v-model="user.firstName">
    名字：<input type="text" placeholder="请输入名字" v-model="user.lastName">
  </fieldset>
  <fieldset>
    <legend>计算属性和监视的演示</legend>
    姓名：<input type="text" placeholder="显示姓名" v-model="fullName1">
    姓名：<input type="text" placeholder="显示姓名" v-model="fullName2">
    姓名：<input type="text" placeholder="显示姓名" v-model="fullName3">
  </fieldset>
</template>

<script lang="ts">
// defineComponent函数，目的是定义一个组件 , 内部可以传入一个配置对象
import { defineComponent,reactive,ref,computed,watch,watchEffect} from 'vue';
// 暴露出去一个定义好的组件
export default defineComponent({
  name: 'App',
  setup() {
    // 定义一个响应式的对象
    const user = reactive({
      firstName:'山东',
      lastName:'馒头'
    })
    // 通过计算属性的方式，实现第一个姓名的显示
    // vue3的计算属性
    // 计算属性的函数中如果只传入一个回调函数，表示的是get
    // 返回的是一个ref类型的对象
    const fullName1 = computed(()=>{
      return user.firstName+'_'+user.lastName
    })

    // 传入一个对象表示的是get和set操作
    const fullName2 = computed({
      get() {
        return user.firstName+'_'+user.lastName
      },
      set(val:string) {
        console.log(val)
        const names = val.split('_')
        user.firstName = names[0]
        user.lastName = names[1]
      }
    })
    // 监视，监视指定的数据
    // 通过{immediate:true}开启立即监听
    // deep:true深度监视

    const fullName3 = ref('')
    watch(user,({firstName,lastName})=> {
      fullName3.value = firstName +'_' +lastName
    },{immediate:true,deep:true})

    // 不需配置immediate 本身默认会进行监视，默认执行一次
    // watchEffect(()=>{
    //   fullName3.value = user.firstName + user.lastName
    // })
    watchEffect(()=>{
      const names = fullName3.value.split('_')
      user.firstName = names[0]
      user.lastName = names[1]
    })
    // watch可以监视多个数据
    // watch([user.firstName,user.lastName,fullName3],()=>{
    //   // 这里的代码没有执行的原因是只有fullName3是响应式数据，前两个并不是响应式
    //   console.log("===")
    // })
    // 当使用watch监视非响应式的数据时
    watch([()=>user.firstName,()=>user.lastName,fullName3],()=>{
      // 这里的代码没有执行的原因是只有fullName3是响应式数据，前两个并不是响应式
      console.log("===")
    })
    return{
      user,
      fullName1,fullName2,fullName3
    }
  },
  components: {

  }
});
</script>

<style>
</style>
