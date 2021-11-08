<template>
  <div class="todo-main">
    <ul class="todo-list">
      <Item
        v-for="(todo, index) in todos"
        :key="todo.id"
        :todo="todo"
        :index="index"
        :deleteTodo="deleteTodo"
        :update="update"
      />
    </ul>
  </div>
</template>
<script lang="ts">
import Item from './Item.vue'
import { defineComponent } from 'vue'
import Todo from '../Types/Todo'
export default defineComponent({
  props: {
    todos: {
      /* 
      这里的断言需要一个表达式, 一般的断言是<todo[]>变量或者 变量 as todo[]
       但是这里是在todos的option中, 并没有变量来进行约束, 断言的正确形式在这里是 类型(大类型) as ()=> 限制类型
      一般用于断言对数组或者对象内部有限制的, 如果是普通数组或者对象直接就Array了, 但是还需要限制其中的内容, 那就需要as并且返回一个具体类型
      */
      type: Array as () => Todo[],
      required: true,
    },
    deleteTodo: Function,
    update: Function,
  },
  components: {
    Item,
  },
})
</script>
<style scoped>
.todo-list {
  width: 100%;
}
</style>
