<template>
  <div class="panel-bg">
    <div>
      <p class="paper-section-text section-bolder profile-section-text">Logged-in user</p>
    </div>
    <div style="height:150px;display:flex;justify-content:center;align-items:center;">
      <img class="profile-photo" :src="photo">
    </div>
    <div class="info-box">
      <div class="profile-section-div">
        <p class="paper-section-text section-bolder profile-section-text2">Employee NO</p>
        <p class="paper-text-show" style="margin:0.5rem;">{{employeeno}}</p>
      </div>
      <div class="profile-section-div">
        <p class="paper-section-text section-bolder profile-section-text2">Name</p>
        <p class="paper-text-show" style="margin:0.5rem;">{{name}}</p>
      </div>
      <div class="profile-section-div">
        <p class="paper-section-text section-bolder profile-section-text2">Position & Department</p>
        <p class="paper-text-show" style="margin:0.5rem;">{{position}}</p>
        <p class="paper-text-show" style="margin:0.5rem;">{{department}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profilepanel",
  props: ['photo','name','position','employeeno','department']
};
</script>

<style scoped>
.name-text {
  text-align: center;
}
.panel-bg {
  background-color: #e8ecef;
  height: 100%;
  padding: 15px;
  display: block;
}
.profile-photo {
  width: 100px;
  height: auto;
  border-radius: 50%;
}
.profile-section-text {
  background-color: #e4e4e4;
  text-indent: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  height: 30px;
  text-transform: uppercase;
}
.profile-section-text2 {
  background-color: #e4e4e4;
}
.profile-section-div {
  margin-bottom: 10px;
}
.info-box {
    border: 1px solid #e4e4e4;
    overflow: hidden;
    border-width: 1px;
    border-radius: 5px;
}
</style>
