import {Todo} from '../types/todo'
// 保存数据到浏览器缓存中
export function saveTodos(todos:Todo[]) {
    localStorage.setItem('todos_key',JSON.stringify(todos))
}
// 从浏览器中读取数据
export function readTodos():Todo[] {
    return JSON.parse(localStorage.getItem('todos_key') || '[]')
}