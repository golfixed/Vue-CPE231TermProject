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
                <p class="box-text">Name</p>
                <input class="textbox" type="text" name="search_name" v-model="SupplierName">
              </div>
              <div style="display: flex; justify-content:flex-end;">
                <button class="btn-refresh" @click="fetchList()">Show All</button>
                <button class="btn-refresh" @click="search()" style="margin-left:10px;">Search</button>
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
              <tr v-for="(data, i) in list" :key="i" @click="showResult(data['SupplierNo']);noselectf();">
                <td>{{data['SupplierNo']}}</td>
                <td>{{data['SupplierName']}}</td>
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
          <div
            style="display:flex;justify-content:center;align-items:center;height:calc(100vh - 200px);font-size:20px;color: grey;"
            v-if="noselect === true"
          >No selected Supplier</div>
          <div class="doc-paper-grid" v-if="noselect === false">
            <div style="display:flex;align-items:flex-end;">
              <p class="paper-section-text">Supplier Information</p>
            </div>
            <div style="display:flex;align-items:flex-end;margin-left:10px;">
              <p class="paper-section-text">Supplier Logo</p>
            </div>
            <div class="paper-textbox-div">
              <p class="paper-textbox-label">Supplier NO:</p>
              <p class="paper-text-show">{{result['SupplierNo']}}</p>
            </div>
            <div
              class="paper-textbox-div"
              style="display:block;grid-row: span 8;background-color: #f3f3f3;margin-left: 10px;"
            >
              <div class="suplier-logo">
                <img :src="result['SupplierLogo']" style="width:200px;height:200px;">
              </div>
            </div>
            <div class="paper-textbox-div">
              <p class="paper-textbox-label">Name:</p>
              <p class="paper-text-show">{{result['SupplierName']}}</p>
            </div>
            <div style="display:flex;align-items:flex-end;">
              <p class="paper-section-text">Contact Information</p>
            </div>
            <div class="paper-textbox-div">
              <p class="paper-textbox-label">Phone:</p>
              <p class="paper-text-show">{{result['SupplierPhone']}}</p>
            </div>
            <div class="paper-textbox-div">
              <p class="paper-textbox-label">Email:</p>
              <p class="paper-text-show">{{result['SupplierEmail']}}</p>
            </div>
            <div class="paper-textbox-div">
              <p class="paper-textbox-label">Address:</p>
              <p class="paper-textarea-show">{{result['SupplierAddress']}}</p>
            </div>
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
  name: "suppiler",
  created() {
    this.$emit(`update:layout`, layout_main);
    this.fetchList();
  },
  components: {
    toolbar,
    btn
  },
  data() {
    return {
      list: [],
      result: [],
      SupplierName: "",
      noselect: true
    };
  },
  methods: {
    fetchList: function() {
      axios.get("http://localhost/supplier_list.php").then(res => {
        this.list = res.data;
        // this.count = res.data2
      });
    },
    showResult: function(id) {
      axios.get("http://localhost/supplier_show.php?id=" + id).then(res => {
        this.result = res.data[0];
      });
    },
    search: function() {
      axios
        .get("http://localhost/supplier_search.php?id=" + this.SupplierName)
        .then(res => {
          this.list = res.data;
        });
    },
    noselectf: function() {
      this.noselect = false;
    }
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
  grid-template-rows: 132px auto;
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
  height: calc(100vh - 362px);
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
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  overflow: scroll;
}
.doc-paper {
  background-color: white;
  height: 100%;
  min-width: 400px;
  width: 100%;
  padding: 15px;
}
.doc-paper-grid {
  display: grid;
  grid-template-columns: 70% 30%;
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
.suplier-logo {
  border: 1px solid grey;
  background-color: white;
  width: 100%;
  height: 210px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
</style>
