<template>
  <router-link :to="linkto">
    <li class="sidebar-li">
      <p class="sidebar-icon">
        <i :class="icon"></i>
      </p>
      {{label}}
    </li>
  </router-link>
</template>

<script>
export default {
  name: "sidebaritem",
  props: ["linkto", "icon", "label"]
};
</script>

<style>
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
  display: flex;
  align-items: center;
}
.sidebar-li:hover {
  height: 50px;
  background-color: #207fd0;
  color: white;
  transition: all 0.3s;
  border: 1px solid transparent;
}
.router-link-exact-active > .sidebar-li {
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
