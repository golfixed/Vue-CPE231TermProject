<template>
  <div class="home-layout">
    <div>
      <toolbar pagename="Supplier"/>
    </div>
    <div class="page-display-cus">
      <div class="searchbar searchbar-display">
        <div class="searchbox">
          <h3 class="section-text">Search</h3>
          <div>
            <form>
              <div style="display: flex; margin: 10px 0;">
                <p class="box-text">Supplier NO</p>
                <input class="textbox" type="text" name="search_supplier_no">
              </div>
              <div style="display: flex; margin: 10px 0;">
                <p class="box-text">Name</p>
                <input class="textbox" type="text" name="search_name">
              </div>
              <div style="display: flex; justify-content:flex-end;">
                <btn btntype="reset" style="margin-right: 10px;" text="Show All" color="btn-refresh"/>
                <btn btntype="submit" text="Search" color="btn-refresh"/>
              </div>
            </form>
          </div>
        </div>
        <div class="listbox" style="padding-top: 0px;">
          <table class="doc-list-table">
            <thead>
              <tr>
                <th style="width: 123px;">Supplier No</th>
                <th style="width: 246px;">Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12334</td>
                <td>West King Wood Co.,Ltd.</td>
              </tr>
              <tr>
                <td>45434</td>
                <td>Aka Iron and Material</td>
              </tr>
              <tr>
                <td>12123</td>
                <td>Arakane PU and Polycarbon</td>
              </tr>
            </tbody>
            <tr>
              <td style="width:360px;">
                <p style="padding:0;margin:0;">Showing: 3 items from all 40</p>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="viewing-div">
        <div class="doc-paper">
          <form>
            <div class="doc-paper-grid">
              <div style="display:flex;align-items:flex-end;">
                <p class="paper-section-text">Customer Information</p>
              </div>
              <div class="paper-textbox-div">
                <p class="paper-textbox-label">Customer NO:</p>
                <input class="paper-textbox-box" type="text">
              </div>
              <div class="paper-textbox-div">
                <p class="paper-textbox-label">Name:</p>
                <input class="paper-textbox-box" type="text">
              </div>
              <div style="display:flex;align-items:flex-end;">
                <p class="paper-section-text">Contact Information</p>
              </div>
              <div class="paper-textbox-div">
                <p class="paper-textbox-label">Phone:</p>
                <input class="paper-textbox-box" type="text">
              </div>
              <div class="paper-textbox-div">
                <p class="paper-textbox-label">Email:</p>
                <input class="paper-textbox-box" type="text">
              </div>
              <div class="paper-textbox-div">
                <p class="paper-textbox-label">Address:</p>
                <textarea style="width:100%;height:70px;"></textarea>
              </div>
              <div style="display:flex;align-items:flex-end;">
                <p class="paper-section-text">History</p>
              </div>
              <div style="padding: 15px 10px;">
                <table style="width: 100%;">
                  <thead>
                    <tr>
                      <th style="width: 123px;">Item NO</th>
                      <th style="width: 500px;">Item Name</th>
                      <th style="width: 156px;">Quantity</th>
                    </tr>
                  </thead>
                  <tbody style="height:calc(100vh - 696px);">
                    <tr>
                      <td style="width: 123px;">1234</td>
                      <td style="width: 500px;">Dark Oak Wood (RAW A1)</td>
                      <td style="width: 156px;">12</td>
                    </tr>
                  </tbody>
                  <tr>
                    <td style="width:360px;">
                      <p style="padding:0;margin:0;">Showing: 12 items from all 640</p>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </form>
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
  name: "suppiler",
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
.page-display-cus {
  display: grid;
  grid-template-columns: 400px calc(100vw - 600px);
  height: calc(100vh - 150px);
}
.searchbar {
  border: 1px solid #d6d6d6;
  border-width: 0px 1px 0px 0px;
}
.searchbar-display {
  display: grid;
  grid-template-rows: 180px auto;
}
.searchbox,
.listbox {
  padding: 15px;
}
.box-text {
  width: 120px;
  padding: 0px;
  margin: 0px;
  display: flex;
  align-items: center;
}
.doc-list-table {
  width: 100%;
  border-radius: 5px;
}
th {
  text-align: center;
  background-color: #ececec;
}
td,
th {
  border: 1px solid #d6d6d6;
  border-width: 1px;
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
/* table thead tr th,
table tbody tr td {
  width: 123px;
} */
table thead tr {
  border: 2px solid #d6d6d6;
  border-width: 3px 1px 0px 1px;
}
table tbody tr > td:last-child {
  width: 246px;
}
table tbody tr > td:first-child {
  width: 123px;
}
.viewing-div {
  background-color: #cccccc;
  display: flex;
  justify-content: center;
  overflow: scroll;
  padding: 15px;
}
.doc-paper {
  background-color: white;
  height: 100%;
  min-width: 800px;
  max-width: 800px;
  overflow: hidden;
  padding: 15px;
}
.doc-paper-grid {
  display: grid;
  grid-template-rows: 20px 50px 50px 50px 50px 50px 80px 50px auto;
}
.paper-section-text {
  margin: 0;
  width: 100%;
  background-color: #e9ecef;
  font-weight: bold;
  text-indent: 10px;
}
.paper-textbox-label {
  color: rgb(39, 39, 39);
  padding: 0;
  margin: 0;
  margin-right: 10px;
  width: 200px;
}
.paper-textbox-div {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
}
.paper-textbox-box {
  width: 100%;
  text-indent: 10px;
  border: solid grey;
  border-width: 1px;
}
</style>
