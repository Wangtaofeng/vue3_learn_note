<template>
  <li
    class="todo-item"
    @mouseenter="handle(true)"
    @mouseleave="handle(false)"
    :style="{ backgroundColor: backColor }"
  >
    <div>
      <input type="checkbox" v-model="isComplete" />
      <span>{{ todo.content }}</span>
    </div>
    <button class="delBtn" v-show="isShow" @click="deleteOne">删除</button>
  </li>
</template>
<script lang="ts">
import Todo from '../Types/Todo'
import { computed, defineComponent, ref } from 'vue'
export default defineComponent({
  props: {
    todo: {
      type: Object as () => Todo,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    deleteTodo: {
      type: Function,
      required: true,
    },
    update: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const isShow = ref(false)
    const backColor = ref('white')
    const handle = (flag: boolean) => {
      if (flag) {
        isShow.value = true
        backColor.value = 'pink'
      } else {
        isShow.value = false
        backColor.value = 'white'
      }
    }
    const deleteOne = () => {
      props.deleteTodo(props.index)
    }
    const isComplete = computed({
      get() {
        return props.todo.isCheck
      },
      set(val: boolean) {
        props.update(props.index, val)
      },
    })
    return {
      isShow,
      backColor,
      handle,
      deleteOne,
      isComplete,
    }
  },
})
</script>
<style scoped>
.todo-item {
  border: 1px solid lightblue;
  list-style: none;
  width: 100%;
  padding: 5px;
  margin-left: -40px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
}
.delBtn {
  background-color: #e95b47;
  color: #fff;
  border-radius: 5px;
  border: none;
}
</style>
