<template>
  <div class="main all-font" style="width:100vw;padding:0px; margin:0px;">
    <div style="grid-column: span 2;">
      <navbar/>
    </div>
    <div style="border: 1px solid #207fd0;border-width: 0px 1px 0px 0px;">
      <sidebar/>
    </div>
    <div>
      <slot/>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue";
import sidebar from "@/components/sidebar.vue";
export default {
  name: "mainlayout",
  components: {
    navbar,
    sidebar
  }
};
</script>

<style>
.navbar-grid {
  grid-column: span 2;
}
.main {
  position: fixed;
  display: grid;
  grid-template-rows: 50px calc(100vh - 50px);
  grid-template-columns: 200px calc(100vw - 200px);
  margin: 0;
  padding: 0;
}
.home-layout {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px calc(100vh - 150px);
}
.all-font {
  font-family: "Roboto", sans-serif;
}
a:hover {
  text-decoration: none !important;
}
.section-text {
  font-size: 20px;
  margin-bottom: 10px;
}
.textbox {
  width: 250px;
  border: 1px solid grey;
  border-radius: 5px;
  height: 30px;
  text-indent: 10px;
}
.paper-textbox-box {
  width: 100%;
  text-indent: 10px;
  border: solid grey;
  border-width: 1px;
  height: 30px;
  border-radius: 5px;
}
.doc-textbox-box {
  width: 100%;
  text-indent: 10px;
  border: solid grey;
  border-width: 0 0 1px 0;
  height: 30px;
}
.paper-textarea-box {
  width: 100%;
  height: 70px;
  border: solid grey;
  border-width: 1px;
  border-radius: 5px;
}
.paper-textarea-show {
  width: 100%;
  height: 70px;
  border: 0px solid grey;
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #1b63ab;
  margin: 0;
}
.paper-text-show {
  width: 100%;
  /* border: solid white; */
  /* border-width: 1px; */
  height: 30px;
  /* border-radius: 5px; */
  margin: 0;
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #1b63ab;
}
.paper-textbox-label {
  color: rgb(39, 39, 39);
  padding: 0;
  margin: 0;
  margin-right: 10px;
  width: 150px;
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
  height: calc(100vh - 362px);
}
table thead tr th,
table tbody tr td {
  width: 184px;
}
table thead tr {
  border: 0px solid #d6d6d6;
  border-width: 3px 0 0 0;
}
.paper-section-text {
  margin: 0;
  width: 100%;
  background-color: #e9ecef;
  font-weight: bold;
  text-indent: 10px;
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
.btn-refresh {
  background-color: #f1f1f1;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 5px 10px;
}
.section-side-text {
  padding-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.savemessage-box{
    /* height: 50px; */
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 11px 0px;
}
.mb-grey{
    background-color: #e9ecef7d;
    border: 1px solid #dee2e6;
}
.mb-green{
    background-color: #28a74540;
    border: 1px solid #28a7456b;
}
.mb-red{
    background-color: #ff52522b;
    border: 1px solid #ff52524f;
}
</style>
