<template>
    <h2>Child子级组件</h2>
    <h3>{{msg}}</h3>
    <button @click="emitTest">事件分发（context.emit)</button>
</template>

<script>
    import { defineComponent,reactive} from 'vue';
    export default defineComponent({
        name: "Child",
        props:[
            'msg'
        ],
        // context 可以解构成 （{attrs,emit,slot}）
        setup(props,context) {
            // props参数是一个对象，里面有父级组件向自己组件传递的数据，并且是在子级组件中使用prop接收到的所有属性
            // 包含props配置声明且传入了所有属性的对象
            // context 参数是一个对象，里面有attrs对象（用于接收该组件标签上的属性，但是没有在props中声明的），
            // emit方法（分发事件）就是用于子传父，slots对象（插槽）
            console.log("================")
            // console.log(props.msg)
            console.log(context.attrs.msg2)
            console.log(context.emit)
            function emitTest() {
                context.emit('testClick','hahahahaha')
            }
            return {
                emitTest
            }
        }
    })
</script>

<style scoped>

</style>