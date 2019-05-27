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
</style>
