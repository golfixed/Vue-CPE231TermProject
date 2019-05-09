<template>
  <div class="row" style="overflow:scroll;">
    <div class="col-12 d-flex align-items-center" style="height: auto;background-color: #1a6dc1;">
        <img class="img-fluid" src="/static/img/logo_blue.png">
    </div>
    <div class="col-12" style="overflow: hidden;padding:0px;">
      <!-- {{ $store.state.a }} <button @click="$store.commit('INCREMENT')">ADD</button> -->
      <ul>
        <router-link to="/">
          <li class="sidebar-li d-flex align-items-center">
            <p class="sidebar-icon">
              <i class="fas fa-home"></i>
            </p>Home
          </li>
        </router-link>
        <router-link to="/document">
          <li class="sidebar-li d-flex align-items-center">
            <p class="sidebar-icon">
              <i class="fas fa-file-alt"></i>
            </p>Document
          </li>
        </router-link>
        <router-link to="/assignment">
          <li class="sidebar-li d-flex align-items-center">
            <p class="sidebar-icon">
              <i class="fas fa-edit"></i>
            </p>Assignment
          </li>
        </router-link>
        <router-link to="/customer">
          <li class="sidebar-li d-flex align-items-center">
            <p class="sidebar-icon">
              <i class="fas fa-users"></i>
            </p>Customer
          </li>
        </router-link>
        <router-link to="/supplier">
          <li class="sidebar-li d-flex align-items-center">
            <p class="sidebar-icon">
              <i class="fas fa-truck-loading"></i>
            </p>Supplier
          </li>
        </router-link>
        <router-link to="/stocking">
          <li class="sidebar-li d-flex align-items-center">
            <p class="sidebar-icon">
              <i class="fas fa-chart-pie"></i>
            </p>Stocking
          </li>
        </router-link>
        <router-link to="/physicalcount">
          <li class="sidebar-li d-flex align-items-center">
            <p class="sidebar-icon">
              <i class="fas fa-pencil-ruler"></i>
            </p>Physical Count
          </li>
        </router-link>
        <router-link to="/adjust">
          <li class="sidebar-li d-flex align-items-center">
            <p class="sidebar-icon">
              <i class="fas fa-sliders-h"></i>
            </p>Adjust
          </li>
        </router-link>
        <router-link to="/transfer">
          <li class="sidebar-li d-flex align-items-center">
            <p class="sidebar-icon">
              <i class="fas fa-arrows-alt"></i>
            </p>Transfer
          </li>
        </router-link>
        <router-link to="/delivery">
          <li class="sidebar-li d-flex align-items-center">
            <p class="sidebar-icon">
              <i class="fas fa-truck"></i>
            </p>Delivery
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar"
};
</script>

<style scoped>
li {
  list-style-type: none;
}
ul {
  padding-left: 0px;
}
.sidebar-li {
  height: 50px;
  color: #5f5f5f;
  border: 1px solid transparent;
  padding: 0px 20px;
}
.sidebar-li:hover {
  height: 50px;
  background-color: #207fd0;
  color: white;
  transition: all 0.3s;
  border: 1px solid transparent;
}
.router-link-exact-active > .sidebar-li{
  height: 50px;
  background-color: #207fd0;
  color: white;
  transition: all 0.3s;
  border: 1px solid transparent;
  font-weight: bold;
}
.sidebar-icon {
  font-size: 20px;
  width: 50px;
  margin: 0px;
  text-align: center;
}
</style>
