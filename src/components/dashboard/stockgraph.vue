<template>
  <div class="home-item graphcard">
    <div class="home-dash-bg">
      <GChart 
      type="PieChart" 
      :data="chartData" 
      :options="chartOptions"/>
    </div>
    <div class="labeltext">{{labeltext}}</div>
  </div>
</template>

<script>
import itemlabel from "@/components/itemlabel.vue";
import { GChart } from "vue-google-charts";
export default {
  name: "stockgraph",
  props: ["labeltext"],
  components: {
    itemlabel,
    GChart
  },
  data () {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Types','number'],
        ['Raw', 50],
        ['Produced', 90]
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
          width: 100,
          height: 100,
          is3D: true,
          color: ['red','green']
        }
      }
    }
  }
};
</script>

<style scoped>
.graphcard {
  height: 100%;
}
.home-dash-bg {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 30px);
  background-color: #efefef;
  width: 100%;
  color: #495057;
}
.labeltext {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  height: 30px;
}
</style>
