<template>
    <h3>子级组件</h3>
    <h3>{{msg}}</h3>
</template>

<script>
    import {defineComponent,ref,reactive} from 'vue';
    export default defineComponent({
        name: "AsyncComponent",
        setup() {
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve({
                        msg:'？？？'
                    })
                },2000)
            })
        }
    })
</script>

<style scoped>

</style>