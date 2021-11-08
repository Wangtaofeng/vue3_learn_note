<template>
  <div class="todo-wrap">
    <h2>todoList</h2>
    <Header :addToPlan = 'addToPlan'></Header>
    <List :todos = 'todos' ></List>
    <Footer :todos ='todos'
            :clearCompleted = 'clearCompleted'
            :checkAll = 'checkAll'/>
  </div>
</template>

<script lang="ts">
import {defineComponent,provide,reactive,toRefs,watch,onMounted} from 'vue';
import Header from './components/Head.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'
import {Todo} from "@/types/todo.ts";
import {saveTodos,readTodos} from "@/utils/localStorageUtils";

export default defineComponent({
  name: 'App',
  setup() {
    // const state = reactive<{todos:Todo[]}>({
    //   todos:[
    //     {id:1,title:'xxx',isCompleted:false},
    //     {id:2,title:'xxx',isCompleted:true},
    //     {id:3,title:'xxx',isCompleted:false}
    //   ]
    // })
    const state = reactive<{todos:Todo[]}>({
      todos:[]
    })
    //界面加载完毕后再读取数据
    onMounted(()=> {
      setTimeout(()=>{  state.todos = readTodos()},1000)

    })
    // value=>saveTodos(value)缩写
    watch(()=>state.todos, saveTodos,{deep:true})


    // 用于head组件添加数据
    const addToPlan = (todo:Todo)=> {
      state.todos.unshift(todo)
    }
    const delTodo:Function = (index:number)=> {
      state.todos.splice(index,1)
    }
    const updateState = (todo:Todo,val:boolean)=> {
      todo.isCompleted = val
      console.log(todo)
    }
    const checkAll = (val:boolean)=> {
      state.todos.forEach(item=>{
        item.isCompleted = val
      })
    }
    const clearCompleted = ()=> {
      state.todos = state.todos.filter((item,index)=>{
        if(item.isCompleted) {
          return false
        }
        return true
      })
    }
    provide('delTodo',delTodo)
    provide('updateState',updateState)
    return{
      // 将state中的所有属性转换为ref对象 ，用的时候直接使用属性名称即可
      ...toRefs(state),
      // 给header组件的添加方法
      addToPlan,
      // 给footer组件的全选方法
      checkAll,
      clearCompleted
    }
  },
  components: {
    Header,List,Footer
  }
});
</script>

<style>

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
