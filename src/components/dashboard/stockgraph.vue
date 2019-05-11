<template>
  <div class="home-item graphcard">
    <div class="home-dash-bg">Summary graph will be shown here</div>
    <div class="labeltext">{{labeltext}}</div>
  </div>
</template>

<script>
import itemlabel from "@/components/itemlabel.vue";
export default {
  name: "stockgraph",
  props: ["labeltext"],
  components: {
    itemlabel
  }
};
</script>

<style scoped>
.graphcard {
  height: 100%;
}
.home-dash-bg {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 30px);
  background-color: #efefef;
  width: 100%;
  color: #495057;
}
.labeltext {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  height: 30px;
}
</style>
