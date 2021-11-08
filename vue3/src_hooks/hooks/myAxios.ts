/*
前面定义的hook没有做类型限制, 定义hook时, 可以将hook中的某个数据进行类型限制, 也可以使用泛型进行约束
可以对参数进行约束, 可以对内部定义的数据约束
比如定义一个ajax函数, 返回值是获取到的数据, 该数据类型在调用该hook时进行限制, 在这里将返回的结果做限制
*/
import axios from 'axios'
import {ref} from 'vue'
export default function myAxios<T>(url: string) {
  // 使用ref或者reactive对数据进行约束时, 不是在返回的代理对象约束, 而是在调用该api时限制类型
  // 该api本身就是一个函数, 支持泛型, 传入什么类型, 就约束什么
  // 如果想约束类型为T， 但是又要限制初始值，可以传入两个或者关系的泛型
  const res = ref<T | null>(null)
  const loading = ref<boolean>(true)
  const error = ref<string>('')
  axios
    .get(url)
    .then(response => {
      loading.value = false
      res.value = response.data
    })
    .catch(err => {
      loading.value = false
      error.value = err
    })
  return {
    res,
    loading,
    error
  }
}
