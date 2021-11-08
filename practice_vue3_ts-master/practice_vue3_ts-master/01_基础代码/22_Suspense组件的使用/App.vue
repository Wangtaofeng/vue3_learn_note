<template>
  <h2>父级组件：Suspense组件的使用</h2>
  <hr>
  <Suspense>
    <template #default>
      <!--异步组件-->
<!--      <AsyncComponent></AsyncComponent>-->
      <AsyncAddress></AsyncAddress>
    </template>
    <template v-slot:fallback>
      <!--准备的内容-->
      <h2>Loading</h2>
    </template>
  </Suspense>

</template>

<script lang="ts">
import {defineComponent,ref,reactive,defineAsyncComponent} from 'vue';
//引入组件，动态引入和静态引入

//vue2中动态 vue3中不让用了
//const AsyncComponent = ()=>import('./AsyncComponent.vue')
//vue3中动态引入
// const AsyncComponent = defineAsyncComponent(()=>import('./AsyncComponent.vue'))
import AsyncComponent from './AsyncComponent.vue'
import AsyncAddress from "@/AsyncAddress.vue";
export default defineComponent({
  name: 'App',
  setup() {
    return{

    }
  },
  components: {
    AsyncComponent,AsyncAddress
  }
});
</script>

<style>
</style>
