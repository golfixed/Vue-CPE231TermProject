<template>
  <div class="home-layout">
    <div>
      <toolbar pagename="Physical Count"/>
    </div>
    <div class="page-display">
      <div style="border:1px solid #d9d9d9;border-width:0 1px 0 0;">
        <div class>
          <div class="addingbar">
            <div class="section-side-text">
              <h5 style="margin:0px;padding-right:20px;">Target</h5>
            </div>
            <div>
              <form>
                <div style="height: calc(100vh - 280px);">
                  <div style="display:flex;align-items:center;">
                    <p class="paper-section-text">Search</p>
                  </div>
                  <div style="padding:10px 15px;">
                    <div style="display: flex; margin: 10px 0;">
                      <p class="box-text">Item NO</p>
                      <input
                        style="width: 219px;"
                        class="textbox"
                        type="number"
                        v-model="ItemNo"
                        min="1"
                      >
                    </div>
                    <div style="display: flex; margin: 10px 0;">
                      <p class="box-text">Location</p>
                      <input
                        style="width: 219px;"
                        class="textbox"
                        type="number"
                        v-model="Location"
                        min="1"
                      >
                    </div>
                    <div style="display:flex; justify-content:flex-end;">
                      <button class="btn-refresh" @click="select()" style="margin-left:10px;">Search</button>
                    </div>
                  </div>

                  <div style="display:flex;align-items:flex-end;">
                    <p class="paper-section-text">Item Information</p>
                  </div>
                  <div style="padding:15px;">
                    <div class="paper-textbox-div">
                      <p class="paper-textbox-label">Item NO:</p>
                      <p class="paper-text-show card-label">{{selectdata['ItemNo']}}</p>
                    </div>
                    <div class="paper-textbox-div">
                      <p class="paper-textbox-label">Item Name:</p>
                      <p class="paper-text-show card-label">{{selectdata['ItemName']}}</p>
                    </div>
                    <div class="paper-textbox-div">
                      <p class="paper-textbox-label">Location:</p>
                      <p class="paper-text-show card-label">{{selectdata['Location']}}</p>
                    </div>
                    <div class="paper-textbox-div">
                      <p class="paper-textbox-label">On Hand Qty:</p>
                      <p class="paper-text-show card-label">{{selectdata['OnHandQty']}}</p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="phycount-display">
        <div class="section-side-text">
          <h5 style="margin:0px;padding-right:20px;">Count</h5>
        </div>
        <div class="count-box">
          <div style="display:flex;align-items:center;">
            <p class="paper-section-text">Input Count</p>
          </div>
          <div style="padding:10px 15px;border: 1px solid #e8ecef;">
            <div style="display: flex; margin: 10px 0;">
              <p class="box-text">Quantity</p>
              <input style="width: 219px;" class="textbox" type="text" v-model="qty">
            </div>
          </div>
          <div style="display:flex;align-items:center;">
            <p class="paper-section-text">Count By</p>
          </div>
          <div style="padding:10px 15px;border: 1px solid #e8ecef;">
            <div style="display: flex; margin: 10px 0;">
              <p class="box-text">Employee NO</p>
              <input style="width: 219px;" class="textbox" type="text" v-model="employee">
            </div>
          </div>
          <div style="display: flex; justify-content:flex-end;margin: 15px 0px;">
            <button class="btn-refresh" @click="send()" style="margin-left:10px;">Save</button>
          </div>
          <div v-if="status === 'success'" class="savemessage-box mb-green">
            <h6 style="margin:0;margin-left:10px;">Successfully saved to the database</h6>
            <button
              class="btn-refresh"
              style="margin-right:10px;"
              value="Refresh Page"
              onClick="window.location.reload();"
            >Add More</button>
          </div>
          <div v-if="status === 'error'" class="savemessage-box mb-red">
            <h6 style="margin:0;margin-left:10px;">ERROR! Data not save to the database</h6>
            <button
              class="btn-refresh"
              style="margin-right:10px;"
              value="Refresh Page"
              onClick="window.location.reload();"
            >Clear</button>
          </div>
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
      employee: "",
      status: "not submit yet"
    };
  },
  methods: {
    select: function() {
      axios
        .get(
          "http://localhost/phycount_select.php?no=" +
            this.ItemNo +
            "&location=" +
            this.Location
        )
        .then(res => {
          this.selectdata = res.data[0];
        });
    },
    send: function() {
      axios
        .get(
          "http://localhost/phycount_save.php?qty=" +
            this.qty +
            "&employee=" +
            this.employee +
            "&itemno=" +
            this.ItemNo +
            "&location=" +
            this.Location
        )
        .then(res => {
          if (res.data === "success") {
            this.status = "success";
          } else {
            this.status = "error";
          }
        });
    }
  }
};
</script>

<style scoped>
.count-box {
  width: 100%;
  height: auto;
  background-color: #ffffff;
}
.phycount-display {
  background-color: #ffffff;
  padding: 15px;
}
.addingbar {
  padding: 15px;
  height: 100%;
}
.page-display {
  display: grid;
  grid-template-columns: 400px calc(100vw - 600px);
  height: calc(100vh - 150px);
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
