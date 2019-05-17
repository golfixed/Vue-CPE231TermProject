<template>

</template>

<script>
import layout_main from "@/layouts/main.vue";
import toolbar from "@/components/toolbar.vue";
export default {
  name: 'stocking',
  created() {
    this.$emit(`update:layout`, layout_main);
  },
  components: {
    toolbar
  }
};
</script>

<style>
</style>
