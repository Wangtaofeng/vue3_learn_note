<template>
  <h2>父级组件</h2>
  <ModalButton></ModalButton>
</template>

<script lang="ts">
import {defineComponent,ref,reactive} from 'vue';
import ModalButton from "@/ModalButton.vue";
export default defineComponent({
  name: 'App',
  setup() {

    return{

    }
  },
  components: {
    ModalButton
  }
});
</script>

<style>
</style>
