<template>
  <div class="header-wrap">
    <input
      type="text"
      placeholder="输入待完成任务，按回车键添加"
      v-model="content"
      @keydown.enter="add"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  props: {
    addTodo: {
      type: Function,
      // 这里声明required后, 下面才能调用, 否则可能没有传递是undefined
      required: true,
    },
  },
  setup(props) {
    /*
      下面这种方式不能使用, vue不推荐, 在props中传递的值, 如果是响应式的, 那么传递后还是响应式的
      但是如果重新赋值, 或者解构赋值, 就会失去响应式
    */
    // const {addTodo} = props
    const content = ref('')
    const add = () => {
      if (!content.value) return
      props.addTodo({ id: Date.now(), content: content.value, isCheck: false })
      content.value = ''
    }
    return {
      content,
      add,
    }
  },
})
</script>
<style scoped>
.header-wrap input {
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  outline: none;
  border: 1px solid lightblue;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
}
</style>
