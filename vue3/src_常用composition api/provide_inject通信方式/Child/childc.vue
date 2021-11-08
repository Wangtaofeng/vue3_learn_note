<template><Childcc /></template>
<script lang="ts">
import { defineComponent, inject } from 'vue'
import Childcc from './childcc.vue'
export default defineComponent({
  setup() {
    const color = inject('color')
    console.log(color)
  },
  components: {
    Childcc,
  },
})
</script>
<style scoped></style>
