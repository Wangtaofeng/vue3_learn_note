<template>
  <div></div>
</template>
<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUpdated,
  onUnmounted,
} from 'vue'
export default defineComponent({
  /*
    vue3在setup外部还是正常使用生命周期钩子的
    只是beforeDestory 和 destroied改成了beforeUnmount和unmounted
  */
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('unmounted')
  },
  setup() {
    /*
      setup中可以借助组合api来使用生命周期函数
      setup本身就在beforecreate之前执行, 就替代了beforecreate和created
      接着就是其他生命周期api, 这里都是函数， 直接调用，里面传入回调函数
      onBeforeMount
      onMounted
      onBeforeUpdate
      onUpdated
      onBeforeUnmount
      onUnmounted
      ...后面的不常用, 用到了再说
    */
    console.log('setup api')
    onBeforeMount(() => {
      console.log('onBeforeMount')
    })
    onMounted(() => {
      console.log('onMounted')
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })
    onUpdated(() => {
      console.log('onUpdated')
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
    })
    onUnmounted(() => {
      console.log('onUnmounted')
    })
  },
})
</script>
<style scoped></style>
