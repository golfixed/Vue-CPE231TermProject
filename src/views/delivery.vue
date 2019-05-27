<template>
  <div class="home-layout">
    <div>
      <toolbar pagename="Delivery"/>
    </div>
    <div class="page-display">
      <div style="border:1px solid #d9d9d9;border-width:0 1px 0 0;">
        <div class>
          <div class="addingbar">
            <div class="section-side-text">
              <h5 style="margin:0px;padding-right:20px;">Delivery Detail</h5>
            </div>
            <div>
              <form>
                <div style="height: calc(100vh - 280px);">
                  <div style="display:flex;align-items:center;">
                    <p class="paper-section-text">Search</p>
                  </div>
                  <div style="padding:10px 15px;">
                    <div style="display: flex; margin: 10px 0;">
                      <p class="box-text">Movement No</p>
                      <input
                        style="width: 219px;"
                        class="textbox"
                        type="number"
                        v-model="movementno"
                        @change="show();"
                        min="1"
                      >
                    </div>
                    <div style="display:flex; justify-content:flex-end;">
                      <button class="btn-refresh" @click="show();" style="margin-left:10px;">Search</button>
                    </div>
                  </div>

                  <div style="display:flex;align-items:flex-end;">
                    <p class="paper-section-text">Detail</p>
                  </div>
                  <div style="padding:15px;">
                    <div class="paper-textbox-div">
                      <p class="paper-textbox-label">Movement No:</p>
                      <p class="paper-text-show card-label">{{data['movementno']}}</p>
                    </div>
                    <div class="paper-textbox-div">
                      <p class="paper-textbox-label">Doc no:</p>
                      <p class="paper-text-show card-label">{{data['docno']}}</p>
                    </div>
                    <div class="paper-textbox-div">
                      <p class="paper-textbox-label">Item Name:</p>
                      <p class="paper-text-show card-label">{{data['itemname']}}</p>
                    </div>
                    <div class="paper-textbox-div">
                      <p class="paper-textbox-label">Quantity:</p>
                      <p class="paper-text-show card-label">{{data['moveqty']}}</p>
                    </div>
                    <div class="paper-textbox-div">
                      <p class="paper-textbox-label">Customer:</p>
                      <p class="paper-text-show card-label">{{data['customername']}}</p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="phycount-display">
        <div class="section-side-text">
          <h5 style="margin:0px;padding-right:20px;">Delivery</h5>
        </div>
        <div style="display:flex;align-items:center;">
          <p class="paper-section-text">Assign To</p>
        </div>
        <div class="count-box">
          <div style="padding:10px 15px;border: 1px solid #e8ecef;">
            <div style="display: flex; margin: 10px 0;">
              <p class="box-text">Employee</p>
                <select
                  v-model="employee"
                  style="width:200px;height:32px;"
                >
                  <option v-for="(dataman,i) in deliveryman" :key="i" :value="dataman['employeeno']">{{dataman['employeeno']}}  {{dataman['employeename']}}</option>
                </select>
            </div>
          </div>
                  <div style="margin: 15px 0;display:flex; justify-content:flex-end;">
                      <button class="btn-refresh" @click="save();" onClick="window.location.reload();" style="margin-left:10px;">Assign</button>
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
  name: "PhysicalCount",
  created() {
    this.$emit(`update:layout`, layout_main);
    this.select();
  },
  components: {
    toolbar,
    btn
  },
  data() {
    return {
      data: [],
      list: [],
      deliveryman: [],
      movementno: "",
      employee:"",
      test: 'Noy here'
    };
  },
  methods: {
    show: function() {
      this.test = 'HERE!!!';
      axios
        .get("http://localhost/delivery_show.php?movementno=" + this.movementno)
        .then(res => {
          this.data = res.data[0];
          console.log(res);
        });
    },
    save: function() {
      axios
        .get("http://localhost/delivery_save.php?employee=" + this.employee +"&movement=" + this.movementno)
        .then(res => {
          this.list = res.data;
        });
    },
     select: function() {
      axios
        .get("http://localhost/delivery_select.php")
        .then(res => {
          this.deliveryman = res.data;
        })
    }
  }
};
</script>

<style scoped>
.count-box {
  width: 100%;
  height: auto;
  background-color: #ffffff;
}
.phycount-display {
  background-color: #ffffff;
  padding: 15px;
}
.addingbar {
  padding: 15px;
  height: 100%;
}
.page-display {
  display: grid;
  grid-template-columns: 400px calc(100vw - 600px);
  height: calc(100vh - 150px);
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