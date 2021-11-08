// 限制返回的数据为todo数组
import todo from '../Types/Todo'
export function getTodos(): todo[] {
  return JSON.parse(window.localStorage.getItem('todos') || '[]')
}
export function setTodos(todos: todo[]): void {
  window.localStorage.setItem('todos', JSON.stringify(todos))
}
