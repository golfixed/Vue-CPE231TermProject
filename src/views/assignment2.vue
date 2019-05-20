<template>
  <div class="home-layout">
    <div>
      <toolbar pagename="Manager Assignment"/>
    </div>
    <div class="page-display">
      <div style="border:1px solid #d9d9d9;border-width:0 1px 0 0;">
        <div class>
          <div class="addingbar">
            <div
              style="padding:20px 0;display:flex;justify-content: space-between;align-items:center;"
            >
              <h5 style="margin:0px;padding-right:20px;">New Assignment</h5>
            </div>
            <div>
              <form style="display:grid;grid-template-rows: auto 32px;">
                <div style="height: calc(100vh - 280px);">
                  <div style="display:flex;align-items:center;">
                    <p class="paper-section-text">Assign To</p>
                  </div>
                  <div style="padding:10px 15px;">
                    <div style="display: flex; margin: 10px 0;">
                      <p class="box-text">Employee NO</p>
                      <input style="width: 219px;" class="textbox" type="text">
                    </div>
                  </div>
                  <div style="display:flex;align-items:center;">
                    <p class="paper-section-text">Assignment Detail</p>
                  </div>
                  <div style="padding:10px 15px;">
                    <div style="display: flex; margin: 10px 0;">
                      <p class="box-text">Item NO</p>
                      <input style="width: 219px;" class="textbox" type="text">
                    </div>
                    <div style="display: flex; margin: 10px 0;">
                      <p class="box-text">Quantity</p>
                      <input style="width: 219px;" class="textbox" type="text">
                    </div>
                    <div style="display: flex; margin: 10px 0;">
                      <p class="box-text">Location</p>
                      <input style="width: 219px;" class="textbox" type="text">
                    </div>
                    <div style="display: flex; margin: 10px 0;">
                      <p class="box-text">Order Type</p>
                      <select style="height:32px;width:219px;" name="Type">
                        <option>Move</option>
                        <option>Goods In</option>
                        <option>Goods Out</option>
                      </select>
                    </div>
                    <div style="display: flex; margin: 10px 0;">
                      <p class="box-text">Order Date</p>
                      <input style="width: 219px;" class="textbox" type="date">
                    </div>
                  </div>
                </div>
                <div style="display: flex; justify-content:flex-end;">
                  <btn text="Clear" style="margin-right: 10px;" color="btn-refresh"/>
                  <btn text="Assign" color="btn-refresh"/>
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
          <h5 style="margin:0px;padding-right:20px;">On Going Work Orders</h5>
          <div>
            <input
              style="margin-right: 5px;height:32px;"
              type="text"
              class="textbox"
              placeholder="Assignment NO"
            >
            <btn text="Search" color="btn-refresh"/>
          </div>
        </div>
        <div style="overflow:scroll;padding:0 15px;">
          <table style="width:100%;">
            <tr style="border: 3px solid #d9d9d9;border-width: 3px 0 0 0;">
              <th>Assignment NO</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Category</th>
              <th>Work Date</th>
              <th>Employee NO</th>
            </tr>
            <tr>
              <td>0001</td>
              <td>Micro Polycarbonate Grad A++</td>
              <td>200</td>
              <td>Move</td>
              <td>20-10-2018</td>
              <td>123456</td>
            </tr>
            <tr>
              <td>0002</td>
              <td>Micro Polycarbonate Grad B</td>
              <td>120</td>
              <td>Goods Out</td>
              <td>19-10-2018</td>
              <td>123457</td>
            </tr>
            <tr>
              <td>0003</td>
              <td>Dark Oak Wood from Italy (RAW)</td>
              <td>500</td>
              <td>Goods In</td>
              <td>17-10-2018</td>
              <td>123478</td>
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
export default {
  name: "assignment",
  created() {
    this.$emit(`update:layout`, layout_main);
  },
  components: {
    toolbar,
    btn
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
