import {ref} from 'vue'
import axios from "axios";
// 发送ajax的请求
export default function<T> (url:string) {
    //加载状态
    const loading = ref(true)
    // 请求成功的数据
    const data = ref<T | null>(null)  // 坑
    // 错误信息
    const errorMsg = ref('')
    axios.get(url).then(res=>{
      // 改变状态
      loading.value = false
      data.value = res.data
    }).catch(error=>{
      loading.value = true
      errorMsg.value = error.message || '错误！'
    })
    return {
        loading,
        data,
        errorMsg
    }
}