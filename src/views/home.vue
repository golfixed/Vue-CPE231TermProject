<template>
  <div class="home-layout">
    <div>
      <toolbar pagename="Home"/>
    </div>
    <div class="page-display">
      <!-- <pagesection icon="fas fa-chart-pie" sectext="Summary"/>
      <div class="dashboard">
        <stockgraph labeltext="Overview Stock" style="grid-column: span 2; grid-row: span 2;"/>
        <numbercard value="12K" label="Raw Material Stock"/>
        <numbercard value="20K" label="Produced Good Stock"/>
        <numbercard value="343" label="Order Requested"/>
        <numbercard value="785" label="Good  Requested"/>
      </div> -->
      <!-- <pagesection style="margin-top: 20px;" icon="fas fa-cubes" sectext="Menu"/> -->
      <div class="menu-item-box">
        <mitem linkto="/document" icon="fas fa-file-alt" label="Document"/>
        <mitem linkto="/assignment/staff" icon="fas fa-columns" label="Assignment"/>
        <mitem linkto="/assignment/manager" icon="fas fa-edit" label="Assignment List"/>
        <mitem linkto="/customer" icon="fas fa-users" label="Customer"/>
        <mitem linkto="/supplier" icon="fas fa-truck-loading" label="Supplier"/>
        <mitem linkto="/stocking" icon="fas fa-chart-pie" label="Stocking"/>
        <mitem linkto="/physicalcount" icon="fas fa-th-list" label="Count List"/>
        <mitem linkto="/physicalcount" icon="fas fa-pencil-ruler" label="Physical Count"/>
        <mitem linkto="/adjust" icon="fas fa-sliders-h" label="Adjust"/>
        <mitem linkto="/transfer" icon="fas fa-arrows-alt" label="Transfer"/>
        <mitem linkto="/delivery/dashboard" icon="fas fa-clipboard-list" label="Delivery Board"/>
        <mitem linkto="/delivery" icon="fas fa-truck" label="Delivery"/>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import layout_main from "@/layouts/main.vue";
import toolbar from "@/components/toolbar.vue";
import pagesection from "@/components/page-section.vue";
import stockgraph from "@/components/dashboard/stockgraph.vue";
import numbercard from "@/components/dashboard/numbercard.vue";
import mitem from "@/components/menuitem.vue";
export default {
  name: "home",
  components: {
    toolbar,
    pagesection,
    stockgraph,
    numbercard,
    mitem
  },
  created() {
    this.$emit(`update:layout`, layout_main);
  },
  methods: {
    role(allows) {
      this.$store.state.user;
      return allows.includes(this.$store.state.user);
    }
  }
};
</script>

<style scoped>
.page-display {
  padding: 15px;
  margin: 0;
  display: inline-block;
  width: 100%;
  overflow: scroll;
}
.dashboard {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 150px);
  grid-gap: 15px;
}
.menu-item-box {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-gap: 15px;
}
</style>
