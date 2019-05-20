<template>
  <div class="home-layout">
    <div>
      <toolbar pagename="Physical Count"/>
    </div>
    <div class="page-display">
      <div style="border:1px solid #d9d9d9;border-width:0 1px 0 0;">
        <div class>
          <div class="addingbar">
            <div
              style="padding:20px 0;display:flex;justify-content: space-between;align-items:center;"
            >
              <h5 style="margin:0px;padding-right:20px;">Counting</h5>
            </div>
            <div>
              <form style="display:grid;grid-template-rows: auto 32px; ">
                <div style="height: calc(100vh - 280px);">
                  <div style="display:flex;align-items:center;">
                    <p class="paper-section-text">Select Item</p>
                  </div>
                  <div style="padding:10px 15px;">
                    <div style="display: flex; margin: 10px 0;">
                      <p class="box-text">Item NO</p>
                      <input style="width: 219px;" class="textbox" type="number" v-model="ItemNo" min="1">
                    </div>
                    <div style="display: flex; margin: 10px 0;">
                      <p class="box-text">Location</p>
                      <input style="width: 219px;" class="textbox" type="number" v-model="Location" min="1">
                    </div>
                    <button class="btn-refresh" @click="select()" style="margin-left:10px;">Select</button>
                  </div>
                  <div style="display:flex;align-items:center;">
                    <p class="paper-section-text">Input Physical Count</p>
                  </div>
                  <div style="padding:10px 15px;">
                    <div style="display: flex; margin: 10px 0;">
                      <p class="box-text">Quantity</p>
                      <input style="width: 219px;" class="textbox" type="text" v-model="qty">
                    </div>
                    <div style="display: flex; margin: 10px 0;">
                      <p class="box-text">Employee NO</p>
                      <input style="width: 219px;" class="textbox" type="text" v-model="employee">
                    </div>
                  </div>
                </div>
                <div style="display: flex; justify-content:flex-end;">
                <button class="btn-refresh" @click="send()" style="margin-left:10px;">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="assignment2-display-grid">
        <div
          class="wo-searchbar"
          style="display:flex;justify-content: space-between;align-items:center;"
        >
          <h5 style="margin:0px;padding-right:20px;">Item Detail</h5>
        </div>
        <div style="overflow:scroll;padding:0 15px;">
          <table style="width:100%;">
            <tr style="border: 3px solid #d9d9d9;border-width: 3px 0 0 0;">
              <th>Item NO</th>
              <th>Location</th>
              <th>Item Name</th>
              <th>On Hand Quantity</th>
            </tr>
            <tr v-for="(data, i) in selectdata" :key="i">
              <td>{{data['ItemNo']}}</td>
              <td>{{data['Location']}}</td>
              <td>{{data['ItemName']}}</td>
              <td>{{data['OnHandQty']}}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import layout_main from "@/layouts/main.vue";
import toolbar from "@/components/toolbar.vue";
import btn from "@/components/btn/btn-main.vue";
import axios from "axios";
export default {
  name: "PhysicalCount",
  created() {
    this.$emit(`update:layout`, layout_main);
  },
  components: {
    toolbar,
    btn
  },
  data() {
    return {
      selectdata: [],
      ItemNo: "",
      Location: "",
      qty: "",
      employee: ""
    };
  },
  methods: {
    select: function() {
      axios.get("http://localhost/phycount_select.php?no=" + this.ItemNo + "&location=" + this.Location).then(res => {
        console.log(res);
        this.selectdata = res.data;
      });
    },
    send: function() {
      axios.get("http://localhost/phycount_save.php?qty=" + this.qty + "&employee=" + this.employee + "&itemno=" + this.ItemNo + "&location=" + this.Location)
    }
  }
};
</script>

<style scoped>
.addingbar {
  padding: 15px;
  height: 100%;
}
.page-display {
  display: grid;
  grid-template-columns: 400px calc(100vw - 600px);
  height: calc(100vh - 150px);
}
.assignment2-display-grid {
  display: grid;
  grid-template-rows: auto calc(100vh - 100px);
  background-color: #ffffff;
}
.wo-searchbar {
  padding: 20px;
}
th {
  text-align: center;
  /* background-color: #ececec; */
}
td,
th {
  border: 1px solid #d6d6d6;
  border-width: 0 0 1px 0;
}
td {
  text-indent: 10px;
}
tr {
  height: 30px;
}
tr:hover {
  background-color: #ececec;
}
table tbody,
table thead {
  display: block;
  width: 100%;
}
table tbody {
  overflow: auto;
  height: calc(100vh - 410px);
}
table thead tr th,
table tbody tr td {
  width: 123px;
}
table thead tr {
  border: 0px solid #d6d6d6;
  border-width: 3px 0 0 0;
}
.paper-textbox-div {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  border: 0;
  border-width: 0;
}
</style>
