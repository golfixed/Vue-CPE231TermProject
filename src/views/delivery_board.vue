<template>
  <div class="home-layout">
    <div>
      <toolbar pagename="Delivery Board"/>
    </div>
    <div class="page-display">
      <div class="assignment-display-grid">
        <div class="staff-detail">
          <div class="sec1">
            <form style="display: flex;align-items: center;">
              <div style="display: flex;">
                <p style="width:100px;" class="box-text">Employee NO</p>
                <select
                  v-model="Employee"
                  @change="search();callname();noselectf();"
                  style="width:200px;height:32px;"
                >
                  <option
                    v-for="(data,i) in staff_list"
                    :key="i"
                    :value="data['employeeno']"
                  >{{data['employeeno']}} {{data['employeename']}}</option>
                </select>
              </div>
            </form>
          </div>
          <div class="sec1">
            <p style="width:50px" class="paper-textbox-label">Name:</p>
            <p class="paper-text-show assigned-name">{{staff['EmployeeName']}}</p>
          </div>
          <div class="sec1">
            <p style="width: 100px;" class="paper-textbox-label">Department:</p>
            <p class="paper-text-show assigned-name">{{staff['Department']}}</p>
          </div>
        </div>
        <div style=";background-color: #cccccc; overflow:scroll;">
          <div
            style="display:flex;justify-content:center;align-items:center;height:calc(100vh - 200px);font-size:20px;color: grey;"
            v-if="noselect === true"
          >No selected Employee</div>
          <div class="order-panel" v-if="noselect === false">
            <div class="order-card2-div" v-for="(data, i) in list" :key="i">
              <div style="display: flex;justify-content: flex-end;    z-index: 100;
    margin-top: 25px;
    margin-right: 21px;">
                <button
                  onClick="window.location.reload();"
                  @click="update(data['MovementNo']);"
                  style="border-radius:50%;height:25px;border: 1px solid red;color: red;display: flex;justify-content: flex-end;"
                >
                  <i class="fas fa-times"></i>
                </button>
              </div>
              <ordercard
                :DeliveryNo="data['DeliveryNo']"
                :DocNo="data['DocNo']"
                :MovementNo="data['MovementNo']"
                :ItemName="data['ItemName']"
                :MoveQty="data['MoveQty']"
                :CustomerName="data['CustomerName']"
                :CustomerAddress="data['CustomerAddress']"
                :CustomerPhone="data['CustomerPhone']"
                :CustomerEmail="data['CustomerEmail']"
              />
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
import ordercard from "@/components/order-card2.vue";
import axios from "axios";
export default {
  name: "deliveryboard",
  created() {
    this.$emit(`update:layout`, layout_main);
    this.stafflist();
    this.callname();
  },
  data() {
    return {
      list: [],
      staff: [],
      staff_list: [],
      Employee: "",
      updated_result: "",
      MovementNo: "",
      noselect: true
    };
  },
  components: {
    toolbar,
    ordercard
  },
  methods: {
    search: function() {
      axios
        .get("http://localhost/delivery_search.php?employee=" + this.Employee)
        .then(res => {
          this.list = res.data;
        });
    },
    callname: function() {
      axios
        .get("http://localhost/delivery_name.php?employee=" + this.Employee)
        .then(res => {
          this.staff = res.data[0];
        });
    },
    update: function(mov) {
      axios.get("http://localhost/delivery_update.php?no=" + mov).then(res => {
        console.log(res);
        if (res.data === "success") {
          this.updated_result = "success";
        } else {
          this.updated_result = "error";
        }
      });
    },
    stafflist: function() {
      axios.get("http://localhost/delivery_liststaff.php").then(res => {
        this.staff_list = res.data;
      });
    },
    noselectf: function() {
      this.noselect = false;
    }
  }
};
</script>

<style scoped>
.assignment-display-grid {
  display: grid;
  grid-template-rows: auto calc(100vh - 100px);
}
.staff-detail {
  display: grid;
  grid-template-columns: 40% 35% 25%;
  border: 1px solid #d6d6d6;
  border-width: 0 0 1px 0;
}
.assigned-name {
  font-size: 15px;
}
.sec1 {
  padding: 10px 20px;
  display: flex;
  align-items: center;
}
.order-panel {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  height: 100%;
}
.order-card2-div {
  width: 390px;
  display: inline-block;
}
.order-panel > .order-card2-div:first-child {
  margin-left: 10px;
}
.order-panel > .order-card2-div:last-child {
  margin-right: 10px;
}
</style>
