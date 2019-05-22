<template>
  <div class="order-card2">
    <div>
      <div class="type-title">
        <h4>Sale Order</h4>
      </div>
      <div style="display:flex;align-items:flex-end;">
        <p class="paper-section-text">References</p>
      </div>
  
      <div class="paper-textbox-div">
        <p class="paper-textbox-label">Delivery NO:</p>
        <p class="paper-text-show card-label">{{DeliveryNo}}</p>
      </div>
      <div class="paper-textbox-div">
        <p class="paper-textbox-label">Doc NO:</p>
        <p class="paper-text-show card-label">{{DocNo}}</p>
      </div>
      <div class="paper-textbox-div">
        <p class="paper-textbox-label">Movement NO:</p>
        <p class="paper-text-show card-label">{{MovementNo}}</p>
      </div>
      <div style="height:40px;display:flex;align-items:flex-end;">
        <p class="paper-section-text">Detail</p>
      </div>
      <div class="paper-textbox-div">
        <p class="paper-textbox-label">Item Name:</p>
        <p class="paper-text-show card-label">{{ItemName}}</p>
      </div>
      <div class="paper-textbox-div">
        <p class="paper-textbox-label">Quantity:</p>
        <p class="paper-text-show card-label">{{MoveQty}}</p>
      </div>
      <div style="height:40px;display:flex;align-items:flex-end;">
        <p class="paper-section-text">Customer Details</p>
      </div>
      <div class="paper-textbox-div">
        <p class="paper-textbox-label">Name:</p>
        <p class="paper-text-show card-label">{{CustomerName}}</p>
      </div>
      <div class="paper-textbox-div">
        <p class="paper-textbox-label">Address:</p>
        <p class="paper-text-show card-label">{{CustomerAddress}}</p>
      </div>
      <div class="paper-textbox-div">
        <p class="paper-textbox-label">Phone:</p>
        <p class="paper-text-show card-label">{{CustomerPhone}}</p>
      </div>
      <div class="paper-textbox-div">
        <p class="paper-textbox-label">E-mail:</p>
        <p class="paper-text-show card-label">{{CustomerEmail}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import btn from "@/components/btn/btn-main.vue";
export default {
  name: "ordercard",
  props: ['DeliveryNo','DocNo','MovementNo','ItemName','MoveQty','CustomerName','CustomerAddress','CustomerPhone','CustomerEmail'],
  components: {
    btn
  }
};
</script>

<style>
.order-card2 {
  background-color: white;
  height: calc(100vh - 237px);
  margin: 15px 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: 5px;
  padding: 15px;
  display:grid;
  grid-template-rows: auto auto;
}
.card-label {
  padding-left: 15px;
}
.paper-textbox-div {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
  border: 1px solid #d6d6d6;
  border-width: 0 0 1px 0;
}
.type-title {
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
