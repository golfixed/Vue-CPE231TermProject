<template>
  <router-link :to="linkto">
    <div class="home-item align-middle">
      <div class="home-item-bg">
        <i :class="icon" style="font-size:60px;"></i>
      </div>
      <div class="home-item-label">{{label}}</div>
    </div>
  </router-link>
</template>

<script>
import itemlabel from "@/components/itemlabel.vue";
export default {
  name: "mitem",
  props: ["linkto", "icon", "label"],
  components: {
    itemlabel
  }
};
</script>

<style>
.align-middle {
  flex-direction: column;
}
.home-item {
  background-color: #efefef;
  border-radius: 6px;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  overflow: hidden;
  border: 1px solid grey;
}
.home-item:hover {
  border: 1px solid #1764a6;
}
.home-item-bg {
  background-color: #efefef;
  height: 120px;
  width: 100%;
  color: #495057;
  display: flex;
  justify-content: center;
  align-items: center;
}
.home-item:hover > .home-item-bg {
  background-color: #207fd0;
  transition: all 0.5s;
  color: white;
}
.home-item-label {
  background-color: #e4e4e4;
  height: 30px;
  width: 100%;
  color: #495057;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}
.home-item:hover > .home-item-label {
  background-color: #1764a7;
  transition: all 0.5s;
  color: white;
  font-weight: bold;
}
</style>
