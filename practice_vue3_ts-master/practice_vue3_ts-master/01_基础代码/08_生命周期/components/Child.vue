<template>
    <div>
        <h3>子级组件</h3>
        <h3>{{msg}}</h3>
        <button @click="update">更新信息</button>
    </div>

</template>

<script>
    import {defineComponent,ref,onBeforeMount,onMounted,onUpdated,onBeforeUpdate,onUnmounted,onBeforeUnmount} from 'vue'
    export default defineComponent({
        name: "Child",
        beforeCreate() {
            console.log('2.x中的beforeCreate...')
        },
        created() {
            console.log('2.x中的Create...')
        },
        beforeMount() {
            console.log('2.x中的beforeMount...')
        },
        mounted() {
            console.log('2.x中的mounted...')
        },
        beforeUpdate() {
            console.log('2.x中的beforeUpdate...')
        },
        updated() {
            console.log('2.x中的updated...')
        },
        // 已经在vue3中改名了 不能再使用
        beforeUnmount() {
            console.log('2.x中的beforeUnmount...')
        },
        unmounted() {
            console.log('2.x中的unmounted...')
        },


        setup() {
            let msg = ref('abc')
            const update = ()=> {
                msg.value += '==='
            }
            console.log('3.0中的setup')
            onBeforeMount(()=>{
                console.log('3.0中的onBeforeMount...')
            })
            onMounted(()=>{
                console.log('3.0中的onBeforeMount...')
            })
            onUpdated(()=>{
                console.log('3.0中的onUpdated...')
            })
            onBeforeUpdate(()=>{
                console.log('3.0中的onBeforeUpdate...')
            })
            onUnmounted(()=>{
                console.log('3.0中的onUnmounted...')
            })
            onBeforeUnmount(()=>{
                console.log('3.0中的onBeforeUnmount...')
            })
            return {
                msg,update
            }
        }


    })
</script>

<style scoped>

</style>