<template>
  <div class="home-layout">
    <div>
      <toolbar pagename="Adjust"/>
    </div>
    <div class="page-display">
      <div style="border:1px solid #d9d9d9;border-width:0 1px 0 0;">
        <div style="display:flex;justify-content:center;">
          <div class="addingbar">
            <div
              style="padding:20px 0;display:flex;justify-content: space-between;align-items:center;"
            >
              <h5 style="margin:0px;padding-right:20px;">Item Detail</h5>
            </div>
            <div>
              <form style="display:grid;grid-template-rows: auto 32px;">
                <div style="height: calc(100vh - 280px);">
                  <div style="display:flex;align-items:center;">
                    <p class="paper-section-text">Item Header</p>
                  </div>
                  <div style="padding:10px 15px;">
                    <div style="display: flex; margin: 10px 0;">
                      <p class="box-text">Item NO</p>
                      <input style="width: 219px;" class="textbox" type="text">
                    </div>

                    <div style="display: flex; margin: 10px 0;">
                      <p class="box-text">Name</p>
                      <input style="width: 219px;" class="textbox" type="text">
                    </div>
                  </div>

                  <div style="display:flex;align-items:center;">
                    <p class="paper-section-text">Unit & Type</p>
                  </div>
                  <div style="padding:10px 15px;">
                    <div style="display: flex; margin: 10px 0;">
                      <p class="box-text">Unit</p>
                      <select style="height:32px;width:219px;" name="Type">
                        <option>KG</option>
                        <option>KG</option>
                        <option>KG</option>
                      </select>
                    </div>
                    <div style="display: flex; margin: 10px 0;">
                      <p class="box-text">Item Type</p>
                      <select style="height:32px;width:219px;" name="Type">
                        <option>RAW</option>
                        <option>...</option>
                        <option>KG</option>
                      </select>
                    </div>
                    <div style="display: flex; margin: 10px 0;">
                      <p class="box-text">Material Type</p>
                      <select style="height:32px;width:219px;" name="Type">
                        <option>มี type ไรบ้างวะ</option>
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
  name: "adjust",
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
