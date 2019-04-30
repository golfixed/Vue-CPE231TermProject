<template>
  <div>
    <div class="row d-flex align-items-center toolbar-div">
      <div class="col-3">
        <h3 class="page-title">HOME</h3>
      </div>
      <div class="col-9 d-flex flex-row justify-content-end">
        <div class="d-flex flex-column toolbar-item">
          <i class="fas fa-sync toolbar-font"></i>Refresh
        </div>
        <div class="d-flex flex-column toolbar-item">
          <i class="fas fa-cog toolbar-font"></i>Settings
        </div>
        <div class="d-flex flex-column toolbar-item">
          <i class="fas fa-sign-out-alt toolbar-font"></i>Log Out
        </div>
      </div>
    </div>
    <div>
      <div class="row" style="padding: 10px; padding-top: 110px;">
        <div class="col-12 d-flex flex-row" style="margin-top: 15px;color: #495057;">
          <i class="fas fa-chart-pie" style="margin-right:10px;font-size: 24px;  "></i>
          <h4>Summary</h4>
        </div>
        <div class="col-12 d-flex flex-row" style="padding:0;">
          <div class="col-6">
            <div class="home-item" style="height:330px;">
              <div class="home-dash-bg d-flex justify-content-center" style="height:300px;"></div>
              <div class="home-dash-label d-flex align-items-center justify-content-center" style="background-color: rgb(232, 232, 232);">
                <span class="home-dash-label d-flex align-items-center justify-content-center">Stock Overviews</span>
              </div>
            </div>
          </div>
          <div class="col-6 d-flex flex-row" style="padding:0;">

            <div class="col-6">
              <div class="home-item d-flex align-items-center justify-content-center flex-column"  style="margin-bottom:30px;">
                  <span class="align-self-center home-dash-font">12K</span>
                  <span class="home-dash-label">RAW Material Stocked</span>
              </div>
              <div class="home-item d-flex align-items-center justify-content-center flex-column">
                  <span class="align-self-center home-dash-font">343</span>
                  <span class="home-dash-label">Order Requested</span>
              </div>
            </div>

            <div class="col-6">
              <div class="home-item d-flex align-items-center justify-content-center flex-column"  style="margin-bottom:30px;">
                  <span class="align-self-center home-dash-font">20K</span>
                  <span class="home-dash-label">Produced Good Stocked</span>
              </div>
              <div class="home-item d-flex align-items-center justify-content-center flex-column">
                  <span class="align-self-center home-dash-font">785</span>
                  <span class="home-dash-label">Good Requested</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 d-flex flex-row" style="margin-top: 15px;color: #495057;">
          <i class="fas fa-cubes" style="margin-right:10px;font-size: 24px;  "></i>
          <h4>Menu</h4>
        </div>
        <router-link class="col-2" to="/document">
          <div class="home-item">
            <div class="home-item-bg d-flex justify-content-center">
              <i class="fas fa-file-alt align-self-center" style="font-size:60px;"></i>
            </div>
            <div class="home-item-label d-flex align-items-center justify-content-center">
              <p style="margin:0px;">Document</p>
            </div>
          </div>
        </router-link>

        <router-link class="col-2" to="/assignment">
          <div class="home-item">
            <div class="home-item-bg d-flex justify-content-center">
              <i class="fas fa-edit align-self-center" style="font-size:60px;"></i>
            </div>
            <div class="home-item-label d-flex align-items-center justify-content-center">
              <p style="margin:0px;">Assignment</p>
            </div>
          </div>
        </router-link>

        <router-link class="col-2" to="/customer">
          <div class="home-item">
            <div class="home-item-bg d-flex justify-content-center">
              <i class="fas fa-users align-self-center" style="font-size:60px;"></i>
            </div>
            <div class="home-item-label d-flex align-items-center justify-content-center">
              <p style="margin:0px;">Customer</p>
            </div>
          </div>
        </router-link>

        <router-link class="col-2" to="/supplier">
          <div class="home-item">
            <div class="home-item-bg d-flex justify-content-center">
              <i class="fas fa-truck-loading align-self-center" style="font-size:60px;"></i>
            </div>
            <div class="home-item-label d-flex align-items-center justify-content-center">
              <p style="margin:0px;">Supplier</p>
            </div>
          </div>
        </router-link>

        <router-link class="col-2" to="/stocking">
          <div class="home-item">
            <div class="home-item-bg d-flex justify-content-center">
              <i class="fas fa-chart-pie align-self-center" style="font-size:60px;"></i>
            </div>
            <div class="home-item-label d-flex align-items-center justify-content-center">
              <p style="margin:0px;">Stocking</p>
            </div>
          </div>
        </router-link>

        <router-link class="col-2" to="/physicalcount">
          <div class="home-item">
            <div class="home-item-bg d-flex justify-content-center">
              <i class="fas fa-pencil-ruler align-self-center" style="font-size:60px;"></i>
            </div>
            <div class="home-item-label d-flex align-items-center justify-content-center">
              <p style="margin:0px;">Physical Count</p>
            </div>
          </div>
        </router-link>

        <router-link class="col-2" to="/adjust">
          <div class="home-item">
            <div class="home-item-bg d-flex justify-content-center">
              <i class="fas fa-sliders-h align-self-center" style="font-size:60px;"></i>
            </div>
            <div class="home-item-label d-flex align-items-center justify-content-center">
              <p style="margin:0px;">Adjust</p>
            </div>
          </div>
        </router-link>

        <router-link class="col-2" to="/transfer">
          <div class="home-item">
            <div class="home-item-bg d-flex justify-content-center">
              <i class="fas fa-arrows-alt align-self-center" style="font-size:60px;"></i>
            </div>
            <div class="home-item-label d-flex align-items-center justify-content-center">
              <p style="margin:0px;">Transfer</p>
            </div>
          </div>
        </router-link>

        <router-link class="col-2" to="/delivery">
          <div class="home-item">
            <div class="home-item-bg d-flex justify-content-center">
              <i class="fas fa-truck align-self-center" style="font-size:60px;"></i>
            </div>
            <div class="home-item-label d-flex align-items-center justify-content-center">
              <p style="margin:0px;">Delivery</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import layout_main from "@/layouts/main.vue";
export default {
  name: "home",
  created() {
    this.$emit(`update:layout`, layout_main);
  },
  methods: {
    role(allows) {
      this.$store.state.user;
      console.log(allows.includes(this.$store.state.user));
      return allows.includes(this.$store.state.user);
    }
  }
};
</script>

<style scoped>
.home-item {
  background-color: #efefef;
  border-radius: 6px;
  height: 150px;
  /* -webkit-box-align: center; */
  /* -ms-flex-align: center; */
  /* align-items: center; */
  /* -webkit-box-pack: center; */
  /* -ms-flex-pack: center; */
  /* justify-content: center; */
  /* color: #106dc7; */
  /* text-align: center; */
  margin: 15px 0px;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  overflow: hidden;
}
.home-item-bg {
  background-color: #efefef;
  height: 120px;
  width: 100%;
  color: #495057;
}
.home-item-label {
  background-color: #e4e4e4;
  height: 30px;
  width: 100%;
  color: #495057;
  font-weight: bold;
}
.home-item:hover > .home-item-bg {
  background-color: #207fd0;
  transition: all 0.5s;
  color: white;
}
.home-item:hover > .home-item-label {
  background-color: #1764a7;
  transition: all 0.5s;
  color: white;
  font-weight: bold;
}
.home-dash-bg {
  background-color: #efefef;
  height: 120px;
  width: 100%;
  color: #495057;
}
.home-dash-label {
  text-align: center;
  height: 30px;
  width: 100%;
  color: #495057;
  font-weight: bold;
}
.home-dash-font{
  font-size: 3rem;
  font-weight: bold;
  color: #495057;
  margin: 20px 0px;
}
</style>
