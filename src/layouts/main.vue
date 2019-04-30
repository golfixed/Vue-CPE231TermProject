<template>
  <div class="container-fluid all" style="padding:0px; margin:0px;">
    <navbar/>
    <div class="container-fluid" style="padding-top:50px;">
      <div class="row">
        <div
          class="col-2"
          style="oveflow:scroll;position:fixed;z-index:990;height: calc(100vh - 50px); background-color:white;border: 1px solid #026cc742; border-width: 0px 1px 0px 0px;"
        >
          <sidebar/>
        </div>
        <div class="col-12" style="padding-left: 17.66666667%;">
          <slot/>
        </div>
      </div>
    </div>
    <footer/>
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue";
import footera from "@/components/footer.vue";
import sidebar from "@/components/sidebar.vue";
export default {
  name: "mainlayout",
  components: {
    navbar,
    footera,
    sidebar
  }
};
</script>

<style>
.all {
  font-family: "Roboto", sans-serif;
}
a:hover {
  text-decoration: none !important;
}

.toolbar-item:hover {
  background-color: #e6e6e6;
  border: 1px solid #9c9c9c;
}
.toolbar-div {
  /* -webkit-box-shadow: 0px 1px 3px #999;
  box-shadow: 0px 1px 3px #999; */
  height: 100px;
  background-color: #f1f1f1;
  position: fixed;
  z-index: 100;
  width: calc(100% - 16.666667%);
  border: 1px solid #d6d6d6;
  border-width: 0 0 1px 0;
}
.toolbar-item:hover {
  background-color: #e6e6e6;
  border: 1px solid #9c9c9c;
}
.toolbar-font {
  font-size: 25px;
  margin-bottom: 7px;
}
.toolbar-item {
  background-color: white;
  border: 1px solid #d4d4d4;
  border-radius: 6px;
  height: 80px;
  width: 80px;
  margin: 0px 5px;
  align-items: center;
  justify-content: center;
  color: #5f5f5f;
}
.page-title{
  color: #5f5f5f;
  margin:0px;
  margin-left: 10px;
}
</style>
