<template>
    <h2 :style="{color}">孙子组件</h2>
</template>

<script>
    import {defineComponent,inject} from 'vue'
    export default defineComponent({
        name: "GrandSon",
        setup() {
            const color = inject('color')
            return {
                color
            }
        }
    })
</script>

<style scoped>

</style>