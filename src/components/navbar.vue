<template>
  <div class="container-fluid d-flex align-items-center nav-style">
    <div class="row" style="width:100%;">
      <div class="col-6">
        <h5 style="margin-bottom:0px;">
          <b>Warehouse Management II</b>
        </h5>
      </div>
      <div class="col-6 d-flex flex-row justify-content-end" style="    padding: 0px;">
          <div class="d-flex justify-content-end align-items-center" style="padding: 0px 10px;">
            <i class="fas fa-user" style="margin-right: 10px;"></i> User:
            <select
              style="background-color: transparent;color: white;border: 0px;font-weight: bold; margin-left:10px;"
              v-model="selectedUser"
            >
              <option v-for="(user, i) in staffList" :key="i" :value="i">
                <b>{{user['employeeno']}}</b>
                <b>{{user['employeename']}}</b>
                <b>({{user['position']}})</b>
              </option>
            </select>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "navbar",
  created() {
    this.staffListing();
  },
  data: () => ({
    staffList:{},
    selectedUser: 0
  }),
  components: {
  },
  watch: {
    selectedUser: function(newVal, oldVal) {
      this.$store.commit('CHANGE_USER', this.staffList[this.selectedUser])
      // this.$store.state.user.role
    },
  },
  methods: {
    staffListing: function() {
      axios.get("http://localhost/role_stafflist.php").then(res => {
        this.staffList = res.data;
        console.log(res.data)
      });
    },
  }
}
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
