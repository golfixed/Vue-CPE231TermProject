<template>
  <div class="home-layout">
    <div>
      <toolbar pagename="Move Order"/>
    </div>
    <div class="page-display">
      <div style="border:1px solid #d9d9d9;border-width:0 1px 0 0;">
        <div class>
          <div class="addingbar">
            <div class="section-side-text">
              <h5 style="margin:0px;padding-right:20px;">Document Target</h5>
            </div>
            <div>
              <form>
                <div style="height: calc(100vh - 280px);">
                  <div style="display:flex;align-items:center;">
                    <p class="paper-section-text">Search</p>
                  </div>
                  <div style="padding:10px 15px;">
                    <div style="display: flex; margin: 10px 0;">
                      <p class="box-text">Document No</p>
                      <input
                        style="width: 219px;"
                        class="textbox"
                        type="number"
                        v-model="DocNo"
                        min="1"
                      >
                    </div>
                    <div style="display: flex; margin: 10px 0;">
                      <p class="box-text">Doc Type</p>
                      <select v-model="DocType" style="width:219px;height:32px;">
                        <option value>Select Document Type</option>
                        <option value="POO">Purchase PO</option>
                        <option value="PRT">Purchase Return</option>
                        <option value="SOO">Sales</option>
                        <option value="SRT">Sale Return</option>
                        <option value="PWO">Produced WO</option>
                        <option value="PMO">Produced MO</option>
                        <option value="WOR">Production Return</option>
                        <option value="MOR">Production Reject for MO</option>
                        <option value="RWO">Raw Mat Return WO</option>
                        <option value="RMO">Raw Mat Return MO</option>
                        <option value="IWO">Raw Material Issue WO</option>
                        <option value="IMO">Raw Material Issue MO</option>
                        <option value="ADI">Adjust In</option>
                        <option value="ADO">Adjust Out</option>
                        <option value="TFI">Tranfer</option>
                      </select>
                    </div>
                    <div style="display:flex; justify-content:flex-end;">
                      <button class="btn-refresh" @click="select()" style="margin-left:10px;">Search</button>
                    </div>
                  </div>

                  <div style="display:flex;align-items:flex-end;">
                    <p class="paper-section-text">Document Information</p>
                  </div>
                  <div style="padding:15px;">
                    <div class="paper-textbox-div">
                      <p class="paper-textbox-label">Ref NO:</p>
                      <p class="paper-text-show card-label">{{selectdata['RefNo']}}</p>
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
                      <p class="paper-textbox-label">Quantity:</p>
                      <p class="paper-text-show card-label">{{selectdata['Qty']}}</p>
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
          <h5 style="margin:0px;padding-right:20px;">Assign Order</h5>
        </div>
        <div class="count-box">
          <div style="display:flex;align-items:center;">
            <p class="paper-section-text">Input Count</p>
          </div>
          <div style="padding:10px 15px;border: 1px solid #e8ecef;">
            <div style="display: flex; margin: 10px 0;">
              <p class="box-text">Location</p>
              <input style="width: 219px;" class="textbox" type="text" v-model="Location">
            </div>
          </div>
          <div style="display:flex;align-items:center;">
            <p class="paper-section-text">Count By</p>
          </div>
          <div style="padding:10px 15px;border: 1px solid #e8ecef;">
            <div style="display: flex; margin: 10px 0;">
              <p class="box-text">Employee</p>
              <select v-model="Employee" style="width:219px;height:32px;">
                <option
                  v-for="(data,i) in staff_list"
                  :key="i"
                  :value="data['employeeno']"
                >{{data['employeeno']}} {{data['employeename']}}</option>
              </select>
            </div>
          </div>
          <div style="display: flex; justify-content:flex-end;margin: 15px 0px;">
            <button
              class="btn-refresh"
              @click="assign(selectdata['Qty'],selectdata['RefNo'])"
              onClick="window.location.reload();"
              style="margin-left:10px;"
            >Assign</button>
          </div>
          <div v-if="updated_result === 'success'" class="savemessage-box mb-green">
            <h6 style="margin:0;margin-left:10px;">Successfully saved to the database</h6>
            <button
              class="btn-refresh"
              style="margin-right:10px;"
              value="Refresh Page"
              onClick="window.location.reload();"
            >Add More</button>
          </div>
          <div v-if="updated_result === 'error'" class="savemessage-box mb-red">
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
    this.stafflist();
  },
  components: {
    toolbar,
    btn
  },
  data() {
    return {
      DocNo: "",
      DocType: "",
      selectdata: [],
      Location: "",
      Employee: "",
      staff_list: [],
      updated_result: ""
    };
  },
  methods: {
    select: function() {
      axios
        .get(
          "http://localhost/move_select.php?no=" +
            this.DocNo +
            "&type=" +
            this.DocType
        )
        .then(res => {
          this.selectdata = res.data[0];
        });
    },
    stafflist: function() {
      axios.get("http://localhost/assignment_liststaff.php").then(res => {
        this.staff_list = res.data;
      });
    },
    assign: function(Qty, RefNo) {
      axios
        .get(
          "http://localhost/move_assign.php?Qty=" +
            Qty +
            "&Employee=" +
            this.Employee +
            "&RefNo=" +
            RefNo +
            "&DocType=" +
            this.DocType +
            "&NewLocation=" +
            this.Location
        )
        .then(res => {
          res.data = "success";
          if (res.data === "success") {
            this.updated_result = "success";
          } else {
            this.updated_result = "error";
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
