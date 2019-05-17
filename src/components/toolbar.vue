<template>
  <div class="toolbar-div">
    <div class="toolbar-div-left">
      <h3 class="page-title">{{pagename}}</h3>
    </div>
    <div v-if="pagename === 'Home'" class="toolbar-div-right">
      <toolbaritem icon="fa fa-sync" label="refresh"/>
      <toolbaritem icon="fa fa-sign-out-alt" label="log out"/>
    </div>
    <div v-if="pagename === 'Document'" class="toolbar-div-right">
      <div
        style="display: flex;border:1px solid #d6d6d6;border-width: 0 1px 0 0;padding-right:5px;"
      >
        <toolbaritem icon="fas fa-plus" label="add new"/>
        <toolbaritem icon="fa fa-trash-alt" label="delete"/>
        <toolbaritem icon="fa fa-sync" label="refresh"/>
      </div>
      <div style="display: flex;padding-left:5px;">
        <toolbaritem icon="fa fa-file-download" label="download"/>
        <toolbaritem icon="fa fa-print" label="print"/>
      </div>
    </div>
    <div v-if="pagename === 'Staff Assignment'" class="toolbar-div-right">
      <toolbaritem icon="fa fa-sync" label="refresh"/>
      <toolbaritem icon="fa fa-sign-out-alt" label="log out"/>
    </div>
    <div v-if="pagename === 'Manager Assignment'" class="toolbar-div-right">
      <toolbaritem icon="fa fa-sync" label="refresh"/>
      <toolbaritem icon="fa fa-sign-out-alt" label="log out"/>
    </div>
    <div v-if="pagename === 'Customer'" class="toolbar-div-right">
      <toolbaritem icon="fas fa-plus" label="add new"/>
      <toolbaritem icon="fa fa-trash-alt" label="delete"/>
      <toolbaritem icon="fa fa-sync" label="refresh"/>
    </div>
    <div v-if="pagename === 'Supplier'" class="toolbar-div-right">
      <toolbaritem icon="fas fa-plus" label="add new"/>
      <toolbaritem icon="fa fa-trash-alt" label="delete"/>
      <toolbaritem icon="fa fa-sync" label="refresh"/>
    </div>
  </div>
</template>

<script>
import toolbaritem from "@/components/toolbar-item.vue";
export default {
  name: "toolbar",
  components: {
    toolbaritem
  },
  props: ["pagename"]
};
</script>

<style>
.toolbar-div {
  display: grid;
  grid-template-columns: 400px calc(100vw - 600px);
  width: calc(100vw - 200px);
  height: 100px;
  background-color: #f1f1f1;
  position: fixed;
  z-index: 100;
  border: 1px solid #d6d6d6;
  border-width: 0 0 1px 0;
  margin: 0;
  padding: 0;
}
.toolbar-div-left {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.toolbar-div-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 5px;
}
.page-title {
  color: #5f5f5f;
  margin: 0px;
  margin-left: 10px;
  text-indent: 20px;
}
</style>
