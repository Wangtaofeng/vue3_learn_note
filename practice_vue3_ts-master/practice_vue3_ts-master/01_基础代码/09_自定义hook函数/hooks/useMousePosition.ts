import {onBeforeUnmount, onMounted, ref} from "vue";

export default function () {
    let x = ref('1')
    let y = ref('1')
    const clickHandler = (event:any)=> {
        x.value = event.pageX
        y.value = event.pageY
    }
    // 页面加载完了再进行点击操作
    onMounted(()=>{
        window.addEventListener('click',clickHandler)
    })
    onBeforeUnmount(()=>{
        window.removeEventListener('click',clickHandler)
    })
    return {
        x,y
    }
}