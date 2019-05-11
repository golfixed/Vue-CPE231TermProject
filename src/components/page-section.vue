<template>
  <div class="section">
    <i :class="icon" style="margin-right:10px;font-size: 24px;  "></i>
    <h4>{{sectext}}</h4>
  </div>
</template>

<script>
export default {
  name: "pagesector",
  props: ["icon", "sectext"]
};
</script>

<style>
.section {
  margin: 10px 0;
  color: #495057;
  display: inline-flex;
  width: 100%;
}
</style>
