<template>
  <div class="home-layout">
    <div>
      <toolbar pagename="Stocking"/>
    </div>
    <div class="page-display">
      <div class="assignment2-display-grid">
        <div
          class="wo-searchbar"
          style="display:flex;justify-content: space-between;align-items:center;"
        >
          <h5 style="margin:0px;padding-right:20px;">Stock List</h5>
          <div>
            <input
              style="height:32px;"
              type="text"
              class="textbox"
              placeholder="Item Name"
              v-model="ItemName"
            >
            <button class="btn-refresh" @click="search()" style="margin-left:5px;">Search</button>
          </div>
        </div>
        <div style="overflow:scroll;padding:0 15px;">
          <table style="width:100%;">
            <tr style="border: 3px solid #d9d9d9;border-width: 3px 0 0 0;">
              <th>Item NO</th>
              <th>Item Name</th>
              <th>Location</th>
              <th>Quantity</th>
              <th>Unit</th>
              <th>Type</th>
            </tr>
            
            <tr v-for="(data, i) in list" :key="i" @click="showResult(data['ItemName'])">
              <td>{{data['ItemNo']}}</td>
              <td>{{data['ItemName']}}</td>
              <td>{{data['Location']}}</td>
              <td>{{data['OnHandQty']}}</td>
              <td>{{data['Unit']}}</td>
              <td>{{data['ItemType']}}</td>
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
  name: "stocking",
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
      ItemName: ""
    };
  },
  methods: {
    fetchList: function() {
      axios.get("http://localhost/stocking_list.php").then(res => {
        console.log(res);
        this.list = res.data;
      });
    },
    search: function() {
      console.log(this.ItemName);
      console.log("search");
      axios
        .get("http://localhost/stocking_search.php?id=" + this.ItemName)
        .then(res => {
          console.log("res");
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
.page-display {
  height: calc(100vh - 150px);
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
