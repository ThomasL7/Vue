<!-- npm install chart.js -->

<template>
  <div>
    <h2>Graphiques avec Chart.js</h2>
    <canvas id="myChart"></canvas>
  </div>
</template>

<script>
import { Chart, registerables } from "chart.js";

export default {
  mounted() {
    Chart.register(...registerables);
    const ctx = document.getElementById("myChart").getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3],
            backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: { beginAtZero: true },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  },
};
</script>

<style scoped>
canvas {
  max-width: 600px;
  margin: auto;
}
</style>
