<template>
  <div>
    <div class="row d-flex align-items-center toolbar-div">
      <div class="col-3">
        <h3 class="page-title">STOCKING</h3>
      </div>
      <div class="col-9 d-flex flex-row justify-content-end">
        <div class="d-flex flex-column toolbar-item">
          <i class="fas fa-sync toolbar-font"></i>Refresh
        </div>
        <div class="d-flex flex-column toolbar-item">
          <i class="fas fa-cog toolbar-font"></i>Settings
        </div>
        <div class="d-flex flex-column toolbar-item">
          <i class="fas fa-sign-out-alt toolbar-font"></i>Log Out
        </div>
      </div>
    </div>
    <div>
      <div class="row" style="padding: 10px; padding-top: 100px;"></div>
    </div>
  </div>
</template>

<script>
import layout_main from "@/layouts/main.vue";
export default {
    name: 'stocking',
  created() {
    this.$emit(`update:layout`, layout_main);
  }
};
</script>

<style>
</style>
