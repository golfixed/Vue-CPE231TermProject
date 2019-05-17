<template>

</template>

<script>
import layout_main from "@/layouts/main.vue";
export default {
    name: 'phycount',
  created() {
    this.$emit(`update:layout`, layout_main);
  }
};
</script>

<style>
</style>
