<template>
  <div class="home-layout">
    <div>
      <toolbar pagename="Transfer"/>
    </div>
    <div class="page-display">
      <div style="border:1px solid #d9d9d9;border-width:0 1px 0 0;">
        <div style="display:flex;justify-content:center;">
          <div class="addingbar">
            <div
              style="padding:20px 0;display:flex;justify-content: space-between;align-items:center;"
            >
              <h5 style="margin:0px;padding-right:20px;">Transfer Information</h5>
            </div>
            <div>
              <form style="display:grid;grid-template-rows: auto 32px;">
                <div style="height: calc(100vh - 280px);">
                  <div style="display:flex;align-items:center;">
                    <p class="paper-section-text">Transfering Header</p>
                  </div>
                  <div style="padding:10px 15px;">
                    <div style="display: flex; margin: 10px 0;">
                      <p class="box-text">Item NO</p>
                      <input style="width: 219px;" class="textbox" type="text">
                    </div>
                    <div style="display: flex; margin: 10px 0;">
                      <p class="box-text">Type</p>
                      <div style="display:flex;align-items:center;">
                        <input type="radio" checked="checked" value="Tranfer-In" name="type" style="margin:0 10px;" > Tranfer IN
                        <input type="radio" value="Tranfer-Out" name="type" style="margin:0 10px;"> Transfer OUT
                      </div>
                    </div>
                  </div>

                  <div style="display:flex;align-items:center;">
                    <p class="paper-section-text">Transfering Location</p>
                  </div>
                  <div style="padding:10px 15px;">
                    <div style="display: flex; margin: 10px 0;">
                      <p class="box-text">From</p>
                      <select style="height:32px;width:219px;" name="Type">
                        <option>AB1234</option>
                        <option>KG</option>
                        <option>KG</option>
                      </select>
                    </div>
                    <div style="display: flex; margin: 10px 0;">
                      <p class="box-text">To</p>
                      <select style="height:32px;width:219px;" name="Type">
                        <option>AA0000</option>
                        <option>...</option>
                        <option>KG</option>
                      </select>
                    </div>
                  </div>
                  <div style="display:flex;align-items:center;">
                    <p class="paper-section-text">Quantity</p>
                  </div>
                  <div style="padding:10px 15px;">
                    <div style="display: flex; margin: 10px 0;">
                      <p class="box-text">Quantity</p>
                      <input style="width: 219px;" class="textbox" type="text">
                    </div>
                    <div style="display: flex; margin: 10px 0;">
                      <p class="box-text">Unit</p>
                      <select style="height:32px;width:219px;" name="Type">
                        <option>M</option>
                        <option>...</option>
                        <option>KG</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div style="display: flex; justify-content:flex-end;">
                  <btn
                    text="Clear"
                    btntype="reset"
                    style="margin-right: 10px;"
                    color="btn-refresh"
                  />
                  <btn text="Submit" color="btn-refresh"/>
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
  name: "transfer",
  created() {
    this.$emit(`update:layout`, layout_main);
  },
  components: {
    toolbar,
    btn
  }
};
</script>

<style>
</style>
