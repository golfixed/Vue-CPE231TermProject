<script>
import itemlabel from "@/components/itemlabel.vue";
import { Pie, mixins } from "vue-chartjs";
import axios from "axios";
import { constants } from "fs";
const { reactiveProp } = mixins;

export default {
  extends: Pie,
  props: ['data','options'],
  mounted () {
    this.renderChart(this.data, this.options)
  },
  watch: {
    data: function (newVal, oldVal) {
      this.renderChart(this.data, this.options)
    }
  }
};
</script>

<style scoped>
canvas {
  display: flex !important;
  max-height: 100% !important;
  width: auto !important;
  margin: auto;
} 
</style>
