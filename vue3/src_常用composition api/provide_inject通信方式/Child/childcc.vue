<template></template>
<script lang="ts">
import { defineComponent, inject } from 'vue'
export default defineComponent({
  setup() {
    const color = inject('color2')
    console.log(color)
  },
})
</script>
<style scoped></style>
