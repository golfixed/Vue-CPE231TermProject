<template>
  <div class="toolbar-div">
    <div class="toolbar-div-left">
      <h3 class="page-title">{{pagename}}</h3>
    </div>
    <div class="toolbar-div-right">
        <titem icon="fa fa-sync" label="refresh" />
        <titem icon="fa fa-sign-out-alt" label="log out" />
    </div>
  </div>
</template>

<script>
import titem from "@/components/toolbar-item.vue"
export default {
  name: "toolbar",
  components:{
      titem
  },
  props: ['pagename'] 
};
</script>

<style>
.toolbar-div {
  display: grid;
  grid-template-columns: 1fr 1fr;
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
