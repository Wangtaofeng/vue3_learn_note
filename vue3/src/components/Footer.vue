<template>
  <div class="todo-footer">
    <div>
      <label><input type="checkbox" v-model="isAllMark" /></label>
      <span class="todo-tag"
        ><span>已完成{{ count }}</span> /全部{{ todos.length }}
      </span>
    </div>
    <button class="btn btn-danger" @click="deleteAll">清除已完成任务</button>
  </div>
</template>
<script lang="ts">
import todo from '@/Types/Todo'
import { computed, defineComponent } from 'vue'
export default defineComponent({
  props: {
    todos: {
      type: Array as () => todo[],
      required: true,
    },
    deleteAll: {
      type: Function,
      required: true,
    },
    markAll: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const count = computed(() => {
      return props.todos.reduce((pre, item) => pre + (item.isCheck ? 1 : 0), 0)
    })
    const isAllMark = computed({
      get() {
        return count.value === props.todos.length && count.value !== 0
      },
      set(val) {
        props.markAll(val)
      },
    })
    return {
      count,
      isAllMark,
    }
  },
})
</script>
<style scoped>
.todo-footer {
  display: flex;
  justify-content: space-between;
}
.btn-danger {
  color: #fff;
  background-color: #e95b47;
  border: none;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
}
.todo-tag {
  margin-left: 15px;
}
</style>
