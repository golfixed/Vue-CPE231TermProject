<template>
  <div class="display home-item">
    <itemlabel :labeltext="label0"/>
    <div class="inner-display" >
      <div class="numbercard home-dash-font-div">
        <span class="home-dash-font">{{value1}}</span>
        <span class="labeltext">{{label1}}</span>
      </div>
      <div
        class="numbercard home-dash-font-div"
        style="border: 1px solid #dee2e6;border-width: 0 0 0 1px;"
      >
        <span class="home-dash-font">{{value2}}</span>
        <span class="labeltext">{{label2}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import itemlabel from "@/components/itemlabel.vue";
export default {
  name: "numbercard2",
  props: ["value1", "label1", "value2", "label2", "label0",'value3','label3'],
  components: {
    itemlabel
  }
};
</script>

<style scpoed>
.display {
  display: grid;
  grid-template-rows: auto 1fr;
}
.inner-display {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px 0;
}
.labeltext {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
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
  margin: 20px 0px;
  display: inline-block;
}
</style>
