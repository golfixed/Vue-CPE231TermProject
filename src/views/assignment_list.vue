<template>
  <div class="home-layout">
    <div>
      <toolbar pagename="Assignment List"/>
    </div>
    <div>
      <div style="border:1px solid #d9d9d9;border-width:0 1px 0 0;">
      </div>
      <div class="assignment2-display-grid">
        <div
          class="wo-searchbar"
          style="display:flex;justify-content: space-between;align-items:center;"
        >
          <h5 style="margin:0px;padding-right:20px;">On Going Work Orders</h5>
          <!-- <div>
            <input
              style="margin-right: 5px;height:32px;"
              type="text"
              class="textbox"
              placeholder="Movement NO"
            >
            <btn text="Search" color="btn-refresh"/>
          </div> -->
        </div>
        <div style="overflow:scroll;padding:0 15px;">
          <table style="width:100%;">
            <tr style="border: 3px solid #d9d9d9;border-width: 3px 0 0 0;">
              <th>Movement NO</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Category</th>
              <th>Work Date</th>
              <th>Employee Name</th>
            </tr>
            <tr v-for="(data, i) in list" :key="i">
              <td>{{data['MovementNo']}}</td>
              <td>{{data['ItemName']}}</td>
              <td>{{data['MoveQty']}}</td>
              <td>{{data['MovementReason']}}</td>
              <td>{{data['MoveDate']}}</td>
              <td>{{data['EmployeeName']}}</td>
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
import axios from "axios";
export default {
  name: "assignment",
  created() {
    this.$emit(`update:layout`, layout_main);
    this.FeatchList();
  },
  components: {
    toolbar,
    btn
  },
  data() {
    return {
      list: []
    };
  },
  methods: {
    FeatchList: function() {
      axios.get("http://localhost/assignment_list.php").then(res => {
        this.list = res.data;
      });
    }
  }
};
</script>

<style scoped>
.addingbar {
  padding: 15px;
  height: 100%;
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
