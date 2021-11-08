<template>
    <div>
        {{user.name}}
        <br/>
        {{user.car}}
        <button @click="updateCar">更改车辆信息</button>
    </div>
</template>

<script lang="ts">
  //这里可以使用ts的代码
// defineComponent函数，目的是定义一个组件 , 内部可以传入一个配置对象
import { defineComponent,reactive } from 'vue';
// 引入一个子级组件
import HelloWorld from './components/HelloWorld.vue';

// 暴露出去一个定义好的组件
export default defineComponent({
  // 当前组件的名字是app
  name: 'App',
  // 注册组件
  components: {
    // 注册一个子级组件
    HelloWorld
  },
  setup() {
      // 把数据变成响应式的数据
      // reactive将目标对象转为代理对象
      // 返回的是一个代理对象
      // user对象现在的类型是proxy
      const user = reactive({
        name:'lee',
        car:['benci','bwm']
      })
      // 直接使用目标对象中的值来更新其成员的值是不可取的，只能使用过代理对象的方式来更新数据（响应式数据）
      function updateCar() {
        user.car.push('new Car')
      }
      return {
          user,updateCar
      }
  }
});
</script>

<style>

</style>
