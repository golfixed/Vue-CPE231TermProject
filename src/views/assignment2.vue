<template>
  <div class="home-layout">
    <div>
      <toolbar pagename="Manager Assignment"/>
    </div>
    <div class="page-display">
    </div>
  </div>
</template>

<script>
import layout_main from "@/layouts/main.vue";
import toolbar from "@/components/toolbar.vue";
export default {
    name: 'assignment',
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
