<template>
  <div class="home-layout">
    <div>
      <toolbar pagename="Delivery"/>
    </div>
    <div class="page-display">
      <div style="border:1px solid #d9d9d9;border-width:0 1px 0 0;">
        <div style="display:flex;justify-content:center;">
          <div class="addingbar">
            <div
              style="padding:20px 0;display:flex;justify-content: space-between;align-items:center;"
            >
              <h5 style="margin:0px;padding-right:20px;">Add new delivery order</h5>
            </div>
            <div>
              <form
                style="display:grid;grid-template-rows: auto 32px; grid-template-columns: 50% 50%;grid-gap:15px;"
              >
                <div style="height: calc(100vh - 280px);">
                  <div style="display:flex;align-items:center;">
                    <p class="paper-section-text">Customer Detail</p>
                  </div>
                  <div style="padding:10px 15px;">
                    <div style="display: flex; margin: 10px 0;">
                      <p class="box-text">Customer Name</p>
                      <input style="width: 219px;" class="textbox" type="text">
                    </div>
                    <div style="display: flex; margin: 10px 0;">
                      <p class="box-text">Address</p>
                      <textarea
                        class="paper-textarea-box"
                        style="width: 219px;"
                        name="cus-address"
                      />
                    </div>
                  </div>
                  <div style="display:flex;align-items:center;">
                    <p class="paper-section-text">Contact Inforamtion</p>
                  </div>
                  <div style="padding:10px 15px;">
                    <div style="display: flex; margin: 10px 0;">
                      <p class="box-text">Phone</p>
                      <input style="width: 219px;" class="textbox" type="text">
                    </div>
                    <div style="display: flex; margin: 10px 0;">
                      <p class="box-text">Email</p>
                      <input style="width: 219px;" class="textbox" type="text">
                    </div>
                  </div>
                </div>
                <div>
                  <div style="display:flex;align-items:center;">
                    <p class="paper-section-text">Movement Detail</p>
                  </div>
                  <div style="padding:10px 15px;">
                    <div style="display: flex; margin: 10px 0;">
                      <p class="box-text">Movement NO</p>
                      <input style="width: 219px;" class="textbox" type="text">
                    </div>
                    <div style="display: flex; margin: 10px 0;">
                      <p class="box-text">Ref NO</p>
                      <input style="width: 219px;" class="textbox" type="text">
                    </div>
                    <div style="display: flex; margin: 10px 0;">
                      <p class="box-text">Item NO</p>
                      <input style="width: 219px;" class="textbox" type="text">
                    </div>
                    <div style="display: flex; margin: 10px 0;">
                      <p class="box-text">Move Quantity</p>
                      <input style="width: 219px;" class="textbox" type="text">
                    </div>
                    <div style="display: flex; margin: 10px 0;">
                      <p class="box-text">Location</p>
                      <input style="width: 219px;" class="textbox" type="text">
                    </div>
                    <div style="display: flex; margin: 10px 0;">
                      <p class="box-text">Order Date</p>
                      <input style="width: 219px;" class="textbox" type="date">
                    </div>
                  </div>
                  <div style="display:flex;align-items:center;">
                    <p class="paper-section-text">Assign To</p>
                  </div>
                  <div style="padding:10px 15px;">
                    <div style="display: flex; margin: 10px 0;">
                      <p class="box-text">Employee NO</p>
                      <input style="width: 219px;" class="textbox" type="text">
                    </div>
                  </div>
                </div>
                <div style="display: flex; justify-content:flex-end;grid-column: span 2;">
                  <btn
                    text="Clear"
                    btntype="reset"
                    style="margin-right: 10px;"
                    color="btn-refresh"
                  />
                  <btn text="Assign" color="btn-refresh"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import toolbar from "@/components/toolbar.vue";
import layout_main from "@/layouts/main.vue";
import btn from "@/components/btn/btn-main.vue";
export default {
  name: "delivery",
  created() {
    this.$emit(`update:layout`, layout_main);
  },
  components: {
    toolbar,
    btn
  }
};
</script>

<style scoped>
</style>
