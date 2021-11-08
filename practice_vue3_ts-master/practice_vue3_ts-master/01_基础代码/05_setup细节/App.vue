<template>
  <h2>App父级组件</h2>
  <h3>msg:{{msg}}</h3>
  <button @click="updateMsg">更新数据</button>
  <Child :msg="msg" msg2="学习舒服" @testClick = 'testClick'></Child>
</template>

<script lang="ts">
// defineComponent函数，目的是定义一个组件 , 内部可以传入一个配置对象
import { defineComponent,reactive,ref} from 'vue';
// 引入子级组件
import Child from './components/Child.vue'
// 暴露出去一个定义好的组件
export default defineComponent({
  // 当前组件的名字是app
  name: 'App',
  beforeCreate(): void {
    // console.log("beforeCreate")
  },
  // setup在beforeCreate生命周期回调之前执行，而且就执行一次
  // setup在执行时，组件还没创建出来，也就是说组件实例this无法使用
  // setup中一般是返回一个对象，对象中的属性和方法都可以在html模板中直接使用
  // this是undefined 说明不能通过this再去调用data/computed/methods/props中的相关内容
  // 其实所有的 composition API 相关回调函数中也都不可以

  //setup 的返回值
  /**
   *  一般都返回一个对象: 为模板提供数据, 也就是模板中可以直接使用此对象中的所有属性/方法
      返回对象中的属性会与 data 函数返回对象的属性合并成为组件对象的属性
      返回对象中的方法会与 methods 中的方法合并成功组件对象的方法
      如果有重名, setup 优先
      注意:
      一般不要混合使用: methods 中可以访问 setup 提供的属性和方法, 但在 setup 方法中不能访问 data 和 methods
      setup 不能是一个 async 函数: 因为返回值不再是 return 的对象, 而是 promise, 模板看不到 return 对象中的属性数据
   */
  setup() {
    // console.log("setup")
    const msg = ref("I m hungry")
    function updateMsg() {
      msg.value += "==="
    }
    function testClick(str:string) {
      msg.value += str
    }
    return {
      msg,
      updateMsg,testClick
    }
  },
  components: {
    Child
  }
});
</script>

<style>
</style>
