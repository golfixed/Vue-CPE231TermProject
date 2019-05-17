<template>

</template>

<script>
import layout_main from "@/layouts/main.vue";
export default {
    name: 'delivery',
  created() {
    this.$emit(`update:layout`, layout_main);
  }
};
</script>

<style>
</style>
