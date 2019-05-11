<template>
  <div class="toolbar-item item-align">
    <div>
      <i :class="icon" style="font-size: 25px;text-align: center;margin-bottom: 7px; display:block;"></i>
      {{label}}
    </div>
  </div>
</template>

<script>
export default {
  name: "toolbar-item",
  props: ["icon", "label"]
};
</script>

<style>
.toolbar-item {
  background-color: white;
  border: 1px solid #d4d4d4;
  border-radius: 6px;
  height: 80px;
  width: 80px;
  margin: 0px 5px;
  color: #5f5f5f;
}
.toolbar-item:hover {
  background-color: #e6e6e6;
  border: 1px solid #9c9c9c;
}
.item-align {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
