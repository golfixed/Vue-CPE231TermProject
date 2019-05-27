<template>
  <div class="home-layout">
    <div>
      <toolbar pagename="Home"/>
    </div>
    <div class="bot-display">
      <div class="page-display">
        <!-- <pagesection icon="fas fa-cubes" sectext="Menu"/> -->
        <div style="display:flex;align-items:flex-end; margin-bottom: 15px;">
          <p class="paper-section-text section-bolder">List View</p>
        </div>
        <div class="menu-item-box2">
          <mitem linkto="/document" icon="fas fa-file-alt" label="Document"/>
          <mitem v-if="this.$store.state.user.position == 'supervisor' || this.$store.state.user.position == 'CEO'" linkto="/assignment/manager" icon="fas fa-edit" label="Assignment"/>
          <mitem v-if="this.$store.state.user.position == 'saler' || this.$store.state.user.position == 'CEO'|| this.$store.state.user.position == 'delivery'" linkto="/customer" icon="fas fa-users" label="Customer"/>
          <mitem v-if="this.$store.state.user.position == 'purchaser' || this.$store.state.user.position == 'CEO'" linkto="/supplier" icon="fas fa-truck-loading" label="Supplier"/>
          <mitem v-if="this.$store.state.user.position == 'manager' || this.$store.state.user.position == 'CEO'|| this.$store.state.user.position == 'staff' || this.$store.state.user.position == 'supervisor' || this.$store.state.user.position == 'purchaser' " linkto="/stocking" icon="fas fa-chart-pie" label="Stock"/>
          <mitem v-if="this.$store.state.user.position == 'supervisor' || this.$store.state.user.position == 'CEO'" linkto="/countlist" icon="fas fa-th-list" label="Count"/>
        </div>
        <div 
         v-if="this.$store.state.user.position == 'delivery' || this.$store.state.user.position == 'CEO' || this.$store.state.user.position == 'staff' " 
        style="display:flex;align-items:flex-end; margin: 15px 0;">
          <p class="paper-section-text section-bolder">Dashboard</p>
        </div>
        <div class="menu-item-box2">
          <mitem v-if="this.$store.state.user.position == 'staff' || this.$store.state.user.position == 'CEO'" linkto="/assignment/staff" icon="fas fa-columns" label="Assignment"/>
          <mitem v-if="this.$store.state.user.position == 'delivery' || this.$store.state.user.position == 'CEO'" linkto="/delivery/dashboard" icon="fas fa-clipboard-list" label="Delivery"/>
        </div>
        <div
         v-if="this.$store.state.user.position == 'supervisor' || this.$store.state.user.position == 'saler' || this.$store.state.user.position == 'staff' || this.$store.state.user.position == 'CEO'" 
        style="display:flex;align-items:flex-end; margin: 15px 0;">
          <p class="paper-section-text section-bolder">Form</p>
        </div>
        <div class="menu-item-box2">
          <mitem v-if="this.$store.state.user.position == 'staff' || this.$store.state.user.position == 'CEO' " linkto="/physicalcount" icon="fas fa-pencil-ruler" label="Physical Count"/>
          <mitem v-if="this.$store.state.user.position == 'supervisor' || this.$store.state.user.position == 'CEO' " linkto="/move" icon="fas fa-arrows-alt" label="Move Order"/>
          <mitem v-if="this.$store.state.user.position == 'saler'  || this.$store.state.user.position == 'CEO'" linkto="/delivery" icon="fas fa-truck" label="Delivery"/>
        </div>
      </div>
      <div>
        <profilepane
          :photo="this.$store.state.user.photo"
          :name="this.$store.state.user.employeename"
          :employeeno="this.$store.state.user.employeeno"
          :position="this.$store.state.user.position"
          :department="this.$store.state.user.department"
        />
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
import profilepane from "@/components/profilepanel.vue";
export default {
  name: "home",
  components: {
    toolbar,
    pagesection,
    stockgraph,
    numbercard,
    mitem,
    profilepane
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
.bot-display {
  display: grid;
  grid-template-columns: auto 250px;
}
.page-display {
  padding: 15px;
  margin: 0;
  display: inline-block;
  width: 100%;
  overflow: scroll;
}
.menu-item-box {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-gap: 15px;
}
.menu-item-box2 {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 15px;
}
.section-bolder {
  border-radius: 5px;
  height: 30px;
  display: flex;
  align-items: center;
}
</style>
