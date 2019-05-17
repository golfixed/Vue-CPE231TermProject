<template>
  <div class="home-layout">
    <div>
      <toolbar pagename="Document"/>
    </div>
    <div class="page-display-doc">
      <div class="searchbar searchbar-display">
        <div class="searchbox">
          <h3 class="section-text">Search</h3>
          <div>
            <form>
              <div style="display: flex; margin: 10px 0;">
                <p class="box-text">Ref NO</p>
                <input class="textbox" type="text">
              </div>
              <div style="display: flex; margin: 10px 0;">
                <p class="box-text">Document Date</p>
                <input class="textbox" type="date">
              </div>
              <div style="display: flex; justify-content:flex-end;">
                <btn style="margin-right: 10px;" text="Show All" color="btn-refresh"/>
                <btn text="Search" color="btn-refresh"/>
              </div>
            </form>
          </div>
        </div>
        <div class="listbox" style="padding-top: 0px;">
          <table class="doc-list-table">
            <thead>
              <tr>
                <th>Ref No</th>
                <th>Doc No</th>
                <th>Doc Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1234</td>
                <td>ABCD</td>
                <td>13/10/2019</td>
              </tr>
              <tr>
                <td>2324</td>
                <td>ER3D</td>
                <td>03/10/1998</td>
              </tr>
              <tr>
                <td>1234</td>
                <td>ABCD</td>
                <td>13/10/2019</td>
              </tr>
            </tbody>
            <tr>
              <td style="width:360px;">
                <p style="padding:0;margin:0;">Showing: 4 items from all 600</p>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="viewing-div">
        <div class="doc-paper">
          <form>
            <div class="doc-paper-grid">
              <div class="doc-paper-header">
                <div>
                  <img src="/static/img/logo_grey.png" style="height:70px;">
                </div>
                <div>
                  <h5>
                    BUSIFRIEND Company Limited
                    <br>
                    <b>Warehouse Devision</b>
                  </h5>
                  <p>Tel. +662-000-0000 | Prachauthit 52, Bangkok, 10140</p>
                </div>
              </div>
              <div style="grid-column: span 2;display:flex;align-items:flex-end;">
                <p class="paper-section-text">Document Header</p>
              </div>
              <div class="paper-textbox-div">
                <p class="paper-textbox-label">Ref NO:</p>
                <p class="paper-text-show">1120</p>
              </div>
              <div class="paper-textbox-div">
                <p class="paper-textbox-label">Doc NO:</p>
                <p class="paper-text-show">0023</p>
              </div>
              <div class="paper-textbox-div">
                <p class="paper-textbox-label">Date:</p>
                <p class="paper-text-show">03-10-2015</p>
              </div>
              <div style="grid-column: span 2;display:flex;align-items:flex-end;">
                <p class="paper-section-text">Order Information</p>
              </div>
              <div class="paper-textbox-div">
                <p class="paper-textbox-label">Quantity:</p>
                <p class="paper-text-show">3000 Unit</p>
              </div>
              <div class="paper-textbox-div">
                <p class="paper-textbox-label" style="width: 215px;">Movement Code:</p>
                <p class="paper-text-show">7457</p>
              </div>
              <div class="paper-textbox-div">
                <p class="paper-textbox-label">Location:</p>
                <p class="paper-text-show">AB1234</p>
              </div>
              <div style="grid-column: span 2;">
                <table style="width: 100%;">
                  <tr>
                    <th>Customer NO</th>
                    <th>Suppiler NO</th>
                    <th>Employee NO</th>
                    <th>Return NO</th>
                  </tr>
                  <tr>
                    <td>1234</td>
                    <td>5678</td>
                    <td>9012</td>
                    <td>3456</td>
                  </tr>
                  <tr>
                    <td>1234</td>
                    <td>5678</td>
                    <td>9012</td>
                    <td>3456</td>
                  </tr>
                  <tr>
                    <td>1234</td>
                    <td>5678</td>
                    <td>9012</td>
                    <td>3456</td>
                  </tr>
                  <tr>
                    <td>1234</td>
                    <td>5678</td>
                    <td>9012</td>
                    <td>3456</td>
                  </tr>
                  <tr>
                    <td>1234</td>
                    <td>5678</td>
                    <td>9012</td>
                    <td>3456</td>
                  </tr>
                </table>
              </div>
              <div style="grid-column: span 2;display:flex;align-items:flex-end;">
                <p class="paper-section-text">Notes & Approval</p>
              </div>
              <div class="paper-textbox-div">
                <p class="paper-textbox-label">Notes:</p>
                <p class="paper-text-show">This is just a temporary document.</p>
              </div>
              <div class="paper-textbox-div">
                <p class="paper-textbox-label">Approved by:</p>
                <p class="paper-text-show">T. Peerapong</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import toolbar from "@/components/toolbar.vue";
import layout_main from "@/layouts/main.vue";
import btn from "@/components/btn/btn-main.vue";
export default {
  name: "document",
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
.page-display-doc {
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

.viewing-div {
  padding: 15px;
  background-color: #cccccc;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  overflow: scroll;
}
.doc-paper {
  background-color: white;
  min-width: 400px;
  width: 800px;
  max-width: 800px;
  min-height: 500px;
  height: 700px;
  max-height: 1200px;
  box-shadow: /* The top layer shadow */ 0 -1px 1px rgba(0, 0, 0, 0.15),
    /* The second layer */ 0 -10px 0 -5px #eee,
    /* The second layer shadow */ 0 -10px 1px -4px rgba(0, 0, 0, 0.15),
    /* The third layer */ 0 -20px 0 -10px #eee,
    /* The third layer shadow */ 0 -20px 1px -9px rgba(0, 0, 0, 0.15);
  padding: 15px;
}
.doc-paper-grid {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 100px 50px 60px 60px 20px 60px 60px auto 40px 60px;
}
.paper-section-text {
  margin: 0;
  width: 100%;
  background-color: #e9ecef;
  font-weight: bold;
  text-indent: 10px;
}
.doc-paper-header {
  grid-column: span 2;
  border: solid grey;
  border-width: 0 0 3px 0;
  display: flex;
  justify-content: space-between;
  text-align: right;
  align-items: center;
}
.paper-textbox-div {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  padding: 0 10px;
}
</style>
