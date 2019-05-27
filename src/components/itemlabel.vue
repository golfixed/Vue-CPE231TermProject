<template>
  <div class="home-dash-label text-align">
    <span class="home-dash-label text-align">{{labeltext}}</span>
  </div>
</template>

<script>
export default {
  name: "boxlabel",
  props: ["labeltext"]
};
</script>

<style scoped>
.home-dash-label {
  text-align: center;
  height: 30px;
  width: 100%;
  color: #495057;
  font-weight: bold;
  background-color: rgb(232, 232, 232);
  text-transform: uppercase;
}
.text-align {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
