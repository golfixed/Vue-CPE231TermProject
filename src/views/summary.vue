<template>
  <div class="home-layout">
    <div>
      <toolbar pagename="Summary"/>
    </div>
    <div class="page-display">
      <!-- <pagesection icon="fas fa-chart-pie" sectext="Summary"/> -->
      <div class="dashboard">
        <div
          style="overflow:hidden;border-radius:6px;grid-column: span 2; grid-row: span 2;background-color: #efefef;"
        >
          <itemlabel labeltext="returning"/>
          <div
            style="height:calc(100% - 30px);display: grid;grid-template-columns: repeat(2, 1fr);"
          >
            <stockgraph
              labeltext="Overview Stock"
              :data="graphdata.data"
              :options="graphdata.options"
              style="display:flex;align-items:center;padding:15px;"
            />
            <div style="display:grid;grid-template-rows: repeat(3, 1fr);padding:20px;">
              <div
                v-for="(data, i) in graphinfo"
                :key="i"
                style="display:flex;justify-content: center;align-items: center;border: solid #dee2e5;border-width: 0 0 1px 0;"
              >
                <span class="home-dash-font">{{data['ReturnCount']}}</span>
                <span class="labeltext" style="margin-left:20px;">{{data['ReturnType']}}</span>
              </div>
            </div>
          </div>
        </div>
        <numbercard2
          label0="Stock Total"
          :value1="MTR['Total']"
          label1="Raw Material"
          :value2="FNG['Total']"
          label2="Finished Goods"
          style="grid-column: span 2;"
        />
        <numbercard
          :value1="shippingCount['Pending']"
          icon="fa fa-paper-plane"
          label0="shipping"
          label1="Pending"
        />
        <numbercard :value1="maxStore['Location']" label0="inventory" label1="Max Stored Location"/>
        <div
          style="grid-column: span 2;grid-row:span 2;background-color: #efefef;overflow: hidden;border-radius: 6px;"
        >
          <div class="display home-item">
            <itemlabel labeltext="item transfering"/>
            <div class="inner-display-in">
              <div
                class="numbercard home-dash-font-div"
                v-for="(transCount, i) in transCount"
                :key="i"
              >
                <span class="home-dash-font" v-if="transCount['MovementType'] === 'in'">
                  <i class="fa fa-arrow-down" style="font-size:50px; margin-right:20px;"></i>
                  {{transCount['TransactionCount']}}
                </span>
                <span class="home-dash-font" v-if="transCount['MovementType'] === 'out'">
                  <i class="fa fa-arrow-up" style="font-size:50px; margin-right:20px;"></i>
                  {{transCount['TransactionCount']}}
                </span>
                <span class="labeltext" v-if="transCount['MovementType'] === 'in'">Goods In</span>
                <span class="labeltext" v-if="transCount['MovementType'] === 'out'">Goods Out</span>
              </div>
            </div>
          </div>
          <div style="padding:15px;">
            <div class="trans-location">
              <div class="trans-location-list" v-for="(data, i) in transLocation" :key="i">
                Location:
                <span class="labeltext" style="margin:0 20px;">{{data['Location']}}</span>
                Quantiy:
                <span
                  class="labeltext"
                  style="margin:0 20px;"
                >{{data['Qty']}}</span>
              </div>
            </div>
          </div>
        </div>
        <div style="overflow:hidden;border-radius:6px;background-color: #efefef;grid-row: span 2;">
          <itemlabel labeltext="most assigned staff"/>
          <div style="height:calc(100% - 30px);padding:10px;">
            <div style="display: flex;justify-content: center;align-items: center; margin:20px ;">
              <img :src="maxWorkedStaff['photo']" style="height:70px;border-radius:1000000px;">
            </div>
            <div class="staff-info">
              <div class="paper-textbox-div">
                <p class="paper-textbox-label" style="width:200px;">Employee NO:</p>
                <p class="paper-text-show card-label">{{maxWorkedStaff['EmployeeNo']}}</p>
              </div>
              <div class="paper-textbox-div">
                <p class="paper-textbox-label" style="width:200px;">Employee Name:</p>
                <p class="paper-text-show card-label">{{maxWorkedStaff['EmployeeName']}}</p>
              </div>
              <div class="paper-textbox-div">
                <p class="paper-textbox-label" style="width:200px;">Assignments:</p>
                <p class="paper-text-show card-label">{{maxWorkedStaff['CountAssignment']}}</p>
              </div>
            </div>
          </div>
        </div>
        <div style="overflow:hidden;border-radius:6px;background-color: #efefef;">
          <itemlabel labeltext="top customer"/>
          <div style="height:calc(100% - 30px);padding:10px;">
            <div class="staff-info">
              <div class="paper-textbox-div">
                <p class="paper-textbox-label" style="width:200px;">Customer Name:</p>
                <p class="paper-text-show card-label">{{topCustomerData['CustomerName']}}</p>
              </div>
              <div class="paper-textbox-div">
                <p class="paper-textbox-label" style="width:200px;">Quantity :</p>
                <p class="paper-text-show card-label">{{topCustomerData['Qty']}}</p>
              </div>
            </div>
          </div>
        </div>
        <numbercard
          :value1="customerCount['TotalCustomer']"
          icon="fa fa-users"
          label0="total customer"
          label1="Customers"
        />
        <div
          style="grid-column: span 2;background-color: #efefef;overflow: hidden;border-radius: 6px;"
        >
          <div class="display home-item">
            <itemlabel labeltext="supplier"/>
            <!-- <div class="inner-display-in">
              <div
                class="numbercard home-dash-font-div"
                v-for="(transCount, i) in transCount"
                :key="i"
              >
                <span class="home-dash-font" v-if="transCount['MovementType'] === 'in'">
                  <i class="fa fa-arrow-down" style="font-size:50px; margin-right:20px;"></i>
                  {{transCount['TransactionCount']}}
                </span>
                <span class="home-dash-font" v-if="transCount['MovementType'] === 'out'">
                  <i class="fa fa-arrow-up" style="font-size:50px; margin-right:20px;"></i>
                  {{transCount['TransactionCount']}}
                </span>
                <span class="labeltext" v-if="transCount['MovementType'] === 'in'">Goods In</span>
                <span class="labeltext" v-if="transCount['MovementType'] === 'out'">Goods Out</span>
              </div>
            </div> -->
          </div>
          <div style="padding:6px;">
            <div class="trans-location">
              <div class="trans-location-list" v-for="(data, i) in topSupplier" :key="i">
                Supplier Name:
                <span class="labeltext" style="margin:0 20px;">{{data['SupplierName']}}</span>
                Purchased Count:
                <span
                  class="labeltext"
                  style="margin:0 20px;"
                >{{data['CountQty']}}</span>
              </div>
            </div>
          </div>
        </div>
        <div
          style="grid-column: span 2;background-color: #efefef;overflow: hidden;border-radius: 6px;"
        >
          <div class="display home-item">
            <itemlabel labeltext="customer"/>
            <!-- <div class="inner-display-in">
              <div
                class="numbercard home-dash-font-div"
                v-for="(transCount, i) in transCount"
                :key="i"
              >
                <span class="home-dash-font" v-if="transCount['MovementType'] === 'in'">
                  <i class="fa fa-arrow-down" style="font-size:50px; margin-right:20px;"></i>
                  {{transCount['TransactionCount']}}
                </span>
                <span class="home-dash-font" v-if="transCount['MovementType'] === 'out'">
                  <i class="fa fa-arrow-up" style="font-size:50px; margin-right:20px;"></i>
                  {{transCount['TransactionCount']}}
                </span>
                <span class="labeltext" v-if="transCount['MovementType'] === 'in'">Goods In</span>
                <span class="labeltext" v-if="transCount['MovementType'] === 'out'">Goods Out</span>
              </div>
            </div> -->
          </div>
          <div style="padding:6px;">
            <div class="trans-location">
              <div class="trans-location-list" v-for="(data, i) in customerList" :key="i">
                Name:
                <span class="labeltext" style="margin:0 20px;width:100px;justify-content:flex-start;">{{data['CustomerName']}}</span>
                Item Name:
                <span
                  class="labeltext"
                  style="margin:0 15px;width:100px;justify-content:flex-start;"
                >{{data['ItemName']}}</span>
                Quantity:
                <span
                  class="labeltext"
                  style="margin:0 15px;width:100px;justify-content:flex-start;"
                >{{data['Qty']}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import layout_main from "@/layouts/main.vue";
import toolbar from "@/components/toolbar.vue";
import pagesection from "@/components/page-section.vue";
import stockgraph from "@/components/dashboard/stockgraph.vue";
import numbercard from "@/components/dashboard/numbercard.vue";
import numbercard2 from "@/components/dashboard/numbercard2.vue";
import mitem from "@/components/menuitem.vue";
import itemlabel from "@/components/itemlabel.vue";
import axios from "axios";
export default {
  name: "home",
  components: {
    toolbar,
    pagesection,
    stockgraph,
    numbercard,
    numbercard2,
    mitem,
    itemlabel
  },
  created() {
    this.$emit(`update:layout`, layout_main);
    this.stock_FNG();
    this.stock_MTR();
    this.return_reason_graph();
    this.return_reason_detail();
    this.transaction_Count();
    this.transaction_Location();
    this.shipping_Count();
    this.inventory_maxStore();
    this.maxWorkedStaff_f();
    this.totalCustomer();
    this.topCustomer();
    this.top3Supplier();
    this.customerListing();
  },
  data() {
    return {
      FNG: {},
      MTR: {},
      graphdata: {},
      graphinfo: {},
      returnDetail: {},
      transCount: {},
      transLocation: {},
      shippingCount: {},
      maxStore: {},
      maxWorkedStaff: {},
      customerCount: {},
      topCustomerData: {},
      topSupplier: {},
      customerList:{}
    };
  },
  methods: {
    role(allows) {
      this.$store.state.user;
      return allows.includes(this.$store.state.user);
    },
    stock_FNG: function() {
      axios.get("http://localhost/summary_stock.php?type=FNG").then(res => {
        this.FNG = res.data[0];
      });
    },
    stock_MTR: function() {
      axios.get("http://localhost/summary_stock.php?type=MTR").then(res => {
        this.MTR = res.data[0];
      });
    },
    transaction_Count: function() {
      axios.get("http://localhost/summary_transaction2.php").then(res => {
        this.transCount = res.data;
      });
    },
    transaction_Location: function() {
      axios.get("http://localhost/summary_transaction.php").then(res => {
        this.transLocation = res.data;
      });
    },
    shipping_Count: function() {
      axios.get("http://localhost/summary_shipping.php").then(res => {
        this.shippingCount = res.data[0];
      });
    },
    topCustomer: function() {
      axios.get("http://localhost/summary_customer3.php").then(res => {
        this.topCustomerData = res.data[0];
      });
    },
    customerListing: function() {
      axios.get("http://localhost/summary_customer.php").then(res => {
        this.customerList = res.data;
      });
    },
    inventory_maxStore: function() {
      axios.get("http://localhost/summary_inventory.php").then(res => {
        this.maxStore = res.data[0];
      });
    },
    top3Supplier: function() {
      axios.get("http://localhost/summary_supplier2.php").then(res => {
        this.topSupplier = res.data;
      });
    },
    maxWorkedStaff_f: function() {
      axios.get("http://localhost/summary_staff.php").then(res => {
        this.maxWorkedStaff = res.data[0];
      });
    },
    totalCustomer: function() {
      axios.get("http://localhost/summary_customer2.php").then(res => {
        this.customerCount = res.data[0];
        console.log(res.data);
      });
    },
    return_reason_detail: function() {
      axios.get("http://localhost/summary_return_detail.php").then(res => {
        this.returnDetail = res.data;
      });
    },
    return_reason_graph: function() {
      axios.get("http://localhost/summary_return_reason.php").then(res => {
        this.graphinfo = res.data;
        const graphParser = {
          type: "pie",
          data: {
            datasets: [
              {
                data: [],
                backgroundColor: [
                  "	rgb(60,179,113)",
                  "rgb(143,188,143)",
                  "	rgb(46,139,87)"
                ],
                hoverBackgroundColor: [
                  "	rgb(60,179,113)",
                  "rgb(143,188,143)",
                  "	rgb(46,139,87)"
                ]
              }
            ],
            labels: []
          },
          options: {
            responsive: true
          }
        };
        this.graphdata = res.data;
        this.graphdata.forEach(element => {
          graphParser.data.datasets[0].data.push(element["ReturnCount"]);
          graphParser.data.labels.push(element["ReturnType"]);
        });
        this.graphdata = graphParser;
        // console.log("data");
        // console.log(this.graphdata.data);
      });
    }
  }
};
</script>

<style scoped>
.page-display {
  padding: 15px;
  margin: 0;
  display: inline-block;
  width: 100%;
  overflow: scroll;
}
.dashboard {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 150px);
  grid-gap: 15px;
}
.inner-display-in {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  padding: 20px 0;
}
.home-dash-font-div:last-child {
  border: 1px solid #dee2e6;
  border-width: 0 0 0 1px;
}
.trans-location {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: solid #dee2e5;
  border-width: 1px;
  border-radius: 6px;
  background-color: #f5f5f5;
}
.trans-location-list:last-child {
  border: 0;
}
.trans-location-list {
  display: flex;
  border: solid #dee2e5;
  border-width: 0 0 1px 0;
  align-items: center;
  height: 35px;
  text-indent:10px;
}
.staff-info > .paper-textbox-div:last-child {
  border: 0;
}
.paper-textbox-div {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
  border: 1px solid #d6d6d6;
  border-width: 0 0 1px 0;
  height: 50px;
}
.lebeltext {
  width:200px;
}
</style>
