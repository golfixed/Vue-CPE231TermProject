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
        <sidebaritem v-if="this.$store.state.user.position == 'CEO' || this.$store.state.user.position == 'manager'" linkto="/summary" icon="fas fa-chart-line" label="Summary"/>
        <li v-if="this.$store.state.user.position == 'CEO' || this.$store.state.user.position == 'staff' || this.$store.state.user.position == 'delivery'" class="sidebar-section-text">Dashboard</li>
        <sidebaritem v-if="this.$store.state.user.position == 'CEO' || this.$store.state.user.position == 'staff'" linkto="/assignment/staff" icon="fas fa-columns" label="Assignment"/>
        <sidebaritem v-if="this.$store.state.user.position == 'CEO' || this.$store.state.user.position == 'delivery'" linkto="/delivery/dashboard" icon="fas fa-clipboard-list" label="Delivery" />
        <li class="sidebar-section-text">List View</li>
        <sidebaritem linkto="/document" icon="fas fa-file-alt" label="Document"/>
        <sidebaritem v-if="this.$store.state.user.position == 'CEO' || this.$store.state.user.position == 'supervisor'" linkto="/assignment/manager" icon="fas fa-edit" label="Assignment"/>
        <sidebaritem v-if="this.$store.state.user.position == 'CEO' || this.$store.state.user.position == 'delivery' || this.$store.state.user.position == 'saler'" linkto="/customer" icon="fas fa-users" label="Customer"/>
        <sidebaritem v-if="this.$store.state.user.position == 'CEO' || this.$store.state.user.position == 'purchaser'" linkto="/supplier" icon="fas fa-truck-loading" label="Supplier"/>
        <sidebaritem v-if="this.$store.state.user.position == 'CEO' || this.$store.state.user.position == 'staff' || this.$store.state.user.position == 'manager' || this.$store.state.user.position == 'supervisor' || this.$store.state.user.position == 'purchaser'" linkto="/stocking" icon="fas fa-chart-pie" label="Stock"/>
        <sidebaritem v-if="this.$store.state.user.position == 'CEO' || this.$store.state.user.position == 'supervisor'" linkto="/countlist" icon="fas fa-th-list" label="Count"/>
        <li v-if="this.$store.state.user.position == 'CEO' || this.$store.state.user.position == 'staff' || this.$store.state.user.position == 'supervisor' || this.$store.state.user.position == 'saler'" class="sidebar-section-text">Form</li>
        <sidebaritem v-if="this.$store.state.user.position == 'CEO' || this.$store.state.user.position == 'staff'" linkto="/physicalcount" icon="fas fa-pencil-ruler" label="Physical Count"/>
        <sidebaritem v-if="this.$store.state.user.position == 'CEO' || this.$store.state.user.position == 'supervisor'" linkto="/move" icon="fas fa-arrows-alt" label="Move Order"/>
        <sidebaritem v-if="this.$store.state.user.position == 'CEO' || this.$store.state.user.position == 'saler'" linkto="/delivery" icon="fas fa-truck" label="Delivery"/>
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
.sidebar-section-text {
  color: white;
  background-color: #ffffff00;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;
  text-transform: uppercase;
  padding: 20px 0;
  text-indent: 20px;
}
</style>
