<template>
  <div class="numbercard home-item">
    <div class="home-dash-font-div">
      <span class="home-dash-font">{{value}}</span>
      <span class="labeltext">{{label}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "numbercard",
  props: ["value", "label"]
};
</script>

<style scpoed>
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
