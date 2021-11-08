/*
  hook相当于vue2中的mixin混入, 这里可以使用setup中的语法定义函数, 可以在组件的setup中引入后直接调用
  可以使用组合api, 使用了之后也就限制了其只能在setup中使用, 在hook中可以正常使用组合api
  之所以是用hook, 是由于vue2中通过mixin混合复用代码时, 是直接在组件中maxin: xxx, 隐式使用, 会造成来源混乱
  而hook可以在setup中显示调用, 具体可以看下面代码
*/
// 自定义一个hook, 实现将当前鼠标位置输出到页面上的功能
import {ref, onMounted, onUnmounted} from 'vue'
export default function mouse() {
  // 暴露出去的部分是在setup中使用的
  /*
  小tip: 当使用ref或者reactive声明响应式数据时, 返回的响应式数据对象更改的话只会更改它的value值
  而本身的值不会被重新分配, 即说明这个值不会再更改, 那么使用const会比let合适一些, 这个也在eslint中作为了一项规则使用
   */
  const x = ref(-1)
  const y = ref(-1)
  // 更新鼠标位置的方法, 注意需要写事件对象的类型
  const updateMouse = (e: MouseEvent) => {
    x.value = e.pageX
    y.value = e.pageY
  }
  onMounted(() => {
    window.addEventListener('click', updateMouse)
  })
  onUnmounted(() => {
    window.removeEventListener('click', updateMouse)
  })
  // 返回值作为函数调用的结果
  return {
    x,
    y
  }
}
