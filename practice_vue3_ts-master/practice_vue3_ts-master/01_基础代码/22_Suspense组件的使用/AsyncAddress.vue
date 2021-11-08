<template>
    <h2>AsyncAdress组件</h2>
    <h3>{{data}}</h3>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'
    import axios from "axios";
    export default defineComponent({
        name: "AsyncAddress",
        // setup() {
        //     return axios.get('/data/address.json').then(res=>{
        //         return {
        //             data:res.data
        //         }
        //     })
        // }
        async setup() {
           const result = await axios.get('/data/address.json')
            return {
               data:result.data
            }
        }
    })
</script>

<style scoped>

</style>