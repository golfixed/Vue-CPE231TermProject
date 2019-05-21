<template>
  <div class="home-layout">
    <div>
      <toolbar pagename="Document"/>
    </div>
    <div class="page-display-doc">
      <div class="searchbar searchbar-display">
        <div class="searchbox">
          <h3 class="section-text">Search</h3>
          <div>
            <form>
              <div style="display: flex; margin: 10px 0;">
                <p class="box-text">Doc NO</p>
                <input class="textbox" type="number" v-model="DocNo" min="1">
              </div>
              <div style="display: flex; margin: 10px 0;">
                <p class="box-text">Document Type</p>
                <select v-model="DocType" @change="search();" style="width:250px;height:32px;">
                  <option value>Select Document Type</option>
                  <option value="POO">Purchase PO</option>
                  <option value="PRT">Purchase Return</option>
                  <option value="SOO">Sales</option>
                  <option value="SRT">Sale Return</option>
                  <option value="PWO">Produced WO</option>
                  <option value="PMO">Produced MO</option>
                  <option value="WOR">Production Return</option>
                  <option value="MOR">Production Reject for MO</option>
                  <option value="RWO">Raw Mat Return WO</option>
                  <option value="RMO">Raw Mat Return MO</option>
                  <option value="IWO">Raw Material Issue WO</option>
                  <option value="IMO">Raw Material Issue MO</option>
                  <option value="ADI">Adjust In</option>
                  <option value="ADO">Adjust Out</option>
                  <option value="TFI">Tranfer In</option>
                  <option value="TFO">Tranfer Out</option>
                </select>
              </div>
              <!-- <div style="display: flex; justify-content:flex-end;">
                <button class="btn-refresh" @click="fetchList()">Clear</button>
                <button style="margin-left: 10px;" class="btn-refresh" @click="search()">Search</button>
              </div>-->
            </form>
          </div>
        </div>
        <div class="listbox" style="padding-top: 0px;">
          <table class="doc-list-table">
            <thead>
              <tr>
                <th>Doc No</th>
                <th>Doc Type</th>
                <th>Reccord</th>
                <th>Doc Date</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(data, i) in list"
                :key="i"
                @click="ShowResult();noselectf();"
              >
                <td>{{data['DocNo']}}</td>
                <td>{{data['MovementCode']}}</td>
                <td>{{data['Reccord']}}</td>
                <td>{{data['DocDate']}}</td>
              </tr>
            </tbody>
            <tr>
              <td style="width:360px;">
                <p style="padding:0;margin:0;">Showing: 4 items from all 600</p>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="viewing-div">
        <div
          style="display:flex;align-items:center;height:100%;"
          v-if="noselect === true"
        >No document is selected.</div>
        <div class="doc-paper" v-if="noselect === false">
          <div>
            <div class="doc-paper-header">
              <div>
                <img src="/static/img/logo_grey.png" style="height:70px;">
              </div>
              <div>
                <h5>
                  BUSIFRIEND Company Limited
                  <br>
                  <b>Warehouse Devision</b>
                </h5>
                <p>Tel. +662-000-0000 | Prachauthit 52, Bangkok, 10140</p>
              </div>
            </div>
            <div class="doctype-title">{{document['MovementReason']}}</div>
            <div>
              <div style="display:flex;align-items:flex-end;">
                <p class="paper-section-text">Document Header</p>
              </div>
              <div class="paper-textbox-div">
                <p class="paper-textbox-label">Ref NO:</p>
                <p class="paper-text-show">{{document['RefNo']}}</p>
              </div>
              <div class="paper-textbox-div">
                <p class="paper-textbox-label">Doc NO:</p>
                <p class="paper-text-show">{{document['DocNo']}}</p>
              </div>
              <div class="paper-textbox-div">
                <p class="paper-textbox-label">Date:</p>
                <p class="paper-text-show">{{document['DocDate']}}</p>
              </div>
              <div style="display:flex;align-items:flex-end;">
                <p class="paper-section-text">Order Information</p>
              </div>
              <div class="paper-textbox-div">
                <p class="paper-textbox-label">Quantity:</p>
                <p class="paper-text-show">{{document['Qty']}}</p>
              </div>
              <div class="paper-textbox-div">
                <p class="paper-textbox-label">Category:</p>
                <p class="paper-text-show">{{document['MovementReason']}}</p>
              </div>
              <div class="paper-textbox-div">
                <p class="paper-textbox-label">Location:</p>
                <p class="paper-text-show">{{document['Location']}}</p>
              </div>
              <div class="paper-textbox-div" v-if="document['CustomerName']">
                <p class="paper-textbox-label">Customer:</p>
                <p class="paper-text-show">{{document['CustomerName']}}</p>
              </div>
              <div class="paper-textbox-div" v-if="document['SupplierName']">
                <p class="paper-textbox-label">Supplier:</p>
                <p class="paper-text-show">{{document['SupplierName']}}</p>
              </div>
              <div class="paper-textbox-div" v-if="document['ReturnNo']">
                <p class="paper-textbox-label">Return No:</p>
                <p class="paper-text-show">{{document['ReturnType']}}</p>
              </div>
              <div style="display:flex;align-items:flex-end;">
                <p class="paper-section-text">Document Movement</p>
              </div>
              <table style="width:100%;">
                <tr style="border: 3px solid #d9d9d9;border-width: 3px 0 0 0;">
                  <th>Ref No</th>
                  <th>Item No</th>
                  <th>Quantity</th>
                  <th>Location</th>
                </tr>

                <tr v-for="(data, i) in document_ref" :key="i">
                  <td>{{data['RefNo']}}</td>
                  <td>{{data['ItemNo']}}</td>
                  <td>{{data['Qty']}}</td>
                  <td>{{data['Location']}}</td>
                </tr>
              </table>
              <div style="display:flex;align-items:flex-end;">
                <p class="paper-section-text">Approval</p>
              </div>
              <div class="paper-textbox-div" style="grid-column: span 2;">
                <p class="paper-textbox-label">Approved by:</p>
                <p class="paper-text-show">{{document['EmployeeNo']}} {{document['EmployeeName']}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import toolbar from "@/components/toolbar.vue";
import layout_main from "@/layouts/main.vue";
import btn from "@/components/btn/btn-main.vue";
import axios from "axios";

export default {
  name: "document",
  created() {
    this.$emit(`update:layout`, layout_main);
    this.fetchList();
  },
  data() {
    return {
      list: [],
      document: {},
      document_ref: [],
      DocNo: "",
      DocType: "",
      noselect: true
    };
  },
  components: {
    toolbar,
    btn
  },
  methods: {
    fetchList: function() {
      axios.get("http://localhost/document_list.php").then(res => {
        this.list = res.data;
      });
    },
    noselectf: function() {
      this.noselect = false;
    },
    ShowResult: function() {
      axios
        .get("http://localhost/document_show.php?docno=" + this.DocNo + "&type=" + this.DocType)
        .then(res => {
          this.document = res.data[0];
          this.document_ref = res.data;
          console.log(res);
        });
    },
    search: function() {
      axios
        .get(
          "http://localhost/document_search.php?docno=" +
            this.DocNo +
            "&type=" +
            this.DocType
        )
        .then(res => {
          this.list = res.data;
          console.log(this.list);
        });
    }
  }
};
</script>

<style scoped>
.doctype-title {
  font-size: 20px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}
.page-display-doc {
  display: grid;
  grid-template-columns: 400px calc(100vw - 600px);
  height: calc(100vh - 150px);
}
.doc-list-table {
  width: 100%;
  border-radius: 5px;
}

.viewing-div {
  padding: 15px;
  background-color: #cccccc;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  overflow: scroll;
}
.doc-paper {
  background-color: white;
  min-width: 400px;
  width: 800px;
  height: fit-content;
  /* max-width: 800px;
  min-height: 500px;
  height: 700px;
  max-height: 1200px; */
  box-shadow: /* The top layer shadow */ 0 -1px 1px rgba(0, 0, 0, 0.15),
    /* The second layer */ 0 -10px 0 -5px #eee,
    /* The second layer shadow */ 0 -10px 1px -4px rgba(0, 0, 0, 0.15),
    /* The third layer */ 0 -20px 0 -10px #eee,
    /* The third layer shadow */ 0 -20px 1px -9px rgba(0, 0, 0, 0.15);
  padding: 15px;
}
.doc-paper-header {
  grid-column: span 2;
  border: solid grey;
  border-width: 0 0 3px 0;
  display: flex;
  justify-content: space-between;
  text-align: right;
  align-items: center;
}
.paper-textbox-div {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  padding: 0 10px;
}
.btn-refresh {
  background-color: #f1f1f1;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 5px 10px;
}
</style>
