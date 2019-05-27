<template>
  <div class="display1 home-item">
    <itemlabel :labeltext="label0"/>
    <div class="numbercard home-dash-font-div">
      <span class="home-dash-font"><i v-if="icon" :class="icon" style="font-size:50px; margin-right:20px;"></i>{{value1}}</span>
      <span class="labeltext">{{label1}}</span>
    </div>
  </div>
</template>

<script>
import itemlabel from "@/components/itemlabel.vue";
export default {
  name: "numbercard",
  props: ["value1", "label1","label0",'icon'],
  components: {
    itemlabel
  }
};
</script>

<style scpoed>
.display1 {
  display: grid;
  grid-template-rows: auto 1fr;
}
.numbercard {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.home-dash-font-div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.home-dash-font {
  font-size: 50px;
  font-weight: bold;
  color: #495057;
  margin: 15px 0px;
  display: inline-block;
}
</style>
