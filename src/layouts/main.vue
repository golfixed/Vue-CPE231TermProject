<template>
  <div class="main all-font" style="width:100vw;padding:0px; margin:0px;">
    <div style="grid-column: span 2;">
      <navbar/>
    </div>
    <div style="overflow: scroll;border: 1px solid #207fd0;border-width: 0px 1px 0px 0px;">
      <sidebar/>
    </div>
    <div style="overflow: scroll;">
      <slot/>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue";
import sidebar from "@/components/sidebar.vue";
export default {
  name: "mainlayout",
  components: {
    navbar,
    sidebar
  }
};
</script>

<style>
.navbar-grid {
  grid-column: span 2;
}
.main {
  position: fixed;
  display: grid;
  grid-template-rows: 50px calc(100vh - 50px);
  grid-template-columns: 200px calc(100vw - 200px);
  margin: 0;
  padding: 0;
}
.all-font {
  font-family: "Roboto", sans-serif;
}
a:hover {
  text-decoration: none !important;
}

</style>
