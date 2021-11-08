<template>
    <h2>子级组件</h2>
    <hr>
    <GrandSon></GrandSon>
</template>

<script>
    import {defineComponent} from 'vue'
    import GrandSon from "./GrandSon";
    export default defineComponent({
        name: "Son",
        components:{
            GrandSon
        }
    })
</script>

<style scoped>

</style>