<template>
  <div class="todo-wrap">
    <h2>todoList</h2>
    <Header :addTodo="addTodo" />
    <List :todos="todos" :deleteTodo="deleteTodo" :update="update" />
    <Footer :todos="todos" :markAll="markAll" :deleteAll="deleteAll" />
  </div>
</template>
<script lang="ts">
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'
import Todo from './Types/Todo'
import { getTodos, setTodos } from './utils/Source'
import { defineComponent, reactive, toRefs, watch } from 'vue'
export default defineComponent({
  setup() {
    // 这里一个状态中可以包含很多个对象和属性, 都放在一个状态里方便管理
    // 下面的类型约束就好比是一个接口, 该接口限制了是一个对象, 并且属性书todos, 且为todo数组
    const todos = getTodos()
    const state = reactive<{ todos: Todo[] }>({
      todos,
    })
    const addTodo = (todo: Todo) => {
      state.todos.unshift(todo)
    }
    const deleteTodo = (index: number) => {
      state.todos.splice(index, 1)
    }
    const update = (index: number, flag: boolean) => {
      state.todos[index].isCheck = flag
    }
    const markAll = (flag: boolean) => {
      state.todos.forEach((item) => {
        item.isCheck = flag
      })
    }
    const deleteAll = () => {
      state.todos = state.todos.filter((item) => !item.isCheck)
    }
    watch(
      () => state.todos,
      (val) => {
        setTodos(val)
      },
      { deep: true },
    )
    return {
      // 将state中的属性变为响应式, 外面可以直接拿着用, 因为后续不会再一直state.xxx来操作
      ...toRefs(state),
      addTodo,
      deleteTodo,
      update,
      markAll,
      deleteAll,
    }
  },
  components: {
    Header,
    List,
    Footer,
  },
})
</script>
<style scoped>
.todo-wrap {
  width: 500px;
  margin: 0 auto;
  border: 1px solid lightblue;
  border-radius: 5px;
  padding: 20px;
}
.todo-wrap h2 {
  text-align: center;
}
</style>
