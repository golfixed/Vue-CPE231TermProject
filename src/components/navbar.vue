<template>
  <div class="container-fluid d-flex align-items-center nav-style">
    <div class="row" style="width:100%;">
      <div class="col-6">
        <h5 style="margin-bottom:0px;">
          <b>Warehouse Management I</b>
        </h5>
      </div>
      <div class="col-6 d-flex flex-row justify-content-end" style="    padding: 0px;">
        <div class="d-flex justify-content-end align-items-center" style="padding: 0px 10px;">
          <!-- <vue-dropdown :config="config"></vue-dropdown> -->
          Mode:
          <select
            style="background-color: transparent;color: white;border: 0px;font-weight: bold; margin-left:10px;"
          >
            <option value="manager">
              <b>Manager</b>
            </option>
            <option>
              <b>Saler</b>
            </option>
            <option>
              <b>Staff</b>
            </option>
            <option>
              <b>Supervisor</b>
            </option>
          </select>
        </div>
        <div
          class="d-flex justify-content-center align-items-center"
          style="border: 1px solid #ffffff;border-width: 0px 0px 0px 1px;padding: 0px 10px;"
        >
          <i class="fas fa-user" style="margin-right: 10px;"></i>Dummy User
          <!-- <i class="fas fa-chevron-down" style="margin-left: 10px;"></i> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import VueDropdown from "vue-dynamic-dropdown";
export default {
  name: "navbar",
  components: {
    // VueDropdown
  }
  // data: function() {
  //   return {
  //     config: {
  //       options: [
  //         {
  //           value: "option 1"
  //         },
  //         {
  //           value: "option 2"
  //         },
  //         {
  //           value: "option 3"
  //         }
  //       ],
  //       prefix: "The",
  //       backgroundColor: "green"
  //     }
  //   };
  // }
};
</script>

<style scoped>
.nav-style {
    height: 50px;
    color: white;
    background-color: #1d1d1d;
    /* box-shadow: 0px 1px 10px #464646; */
    position: fixed;
    z-index: 999;
}
</style>
