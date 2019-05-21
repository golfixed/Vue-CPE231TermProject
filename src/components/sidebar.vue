<template>
  <div class="sidebar-display">
    <div>
      <div class="sidebar-logo-div">
        <img class="sidebar-logo" src="/static/img/logo_blue.png">
      </div>
    </div>
    <div style="overflow:scroll;padding:0px;background-color: rgb(28, 99, 171);">
      <ul>
        <sidebaritem linkto="/" icon="fas fa-home" label="Home"/>
        <sidebaritem linkto="/document" icon="fas fa-file-alt" label="Document"/>
        <sidebaritem linkto="/assignment/staff" icon="fas fa-columns" label="Assignment"/>
        <sidebaritem linkto="/assignment/manager" icon="fas fa-edit" label="Assignment List"/>
        <sidebaritem linkto="/customer" icon="fas fa-users" label="Customer"/>
        <sidebaritem linkto="/supplier" icon="fas fa-truck-loading" label="Supplier"/>
        <sidebaritem linkto="/stocking" icon="fas fa-chart-pie" label="Stocking"/>
        <sidebaritem linkto="/countlist" icon="fas fa-th-list" label="Count List"/>
        <sidebaritem linkto="/physicalcount" icon="fas fa-pencil-ruler" label="Physical Count"/>
        <sidebaritem linkto="/adjust" icon="fas fa-sliders-h" label="Adjust"/>
        <sidebaritem linkto="/transfer" icon="fas fa-arrows-alt" label="Transfer"/>
        <sidebaritem linkto="/delivery" icon="fas fa-truck" label="Delivery"/>
      </ul>
    </div>
  </div>
</template>

<script>
import sidebaritem from "@/components/sidebaritem.vue";
export default {
  name: "sidebar",
  components: {
    sidebaritem
  }
};
</script>

<style scoped>
.sidebar-display {
  display: grid;
  grid-template-rows: 200px calc(100vh - 250px);
}
.sidebar-logo-div {
  width: 200px;
  height: 200px;
  background-color: #1a6dc1;
  position: fixed;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sidebar-logo {
  max-height: 200px;
}
</style>
