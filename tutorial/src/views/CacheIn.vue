<template>
  <div>
    <h2>Mise en Cache des Données</h2>
    <button @click="fetchData">Charger les Données</button>
    <div v-if="data">{{ data }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
    };
  },
  methods: {
    fetchData() {
      const cachedData = localStorage.getItem("data");
      if (cachedData) {
        this.data = JSON.parse(cachedData);
      } else {
        setTimeout(() => {
          const newData = "Données récupérées depuis l'API";
          localStorage.setItem("data", JSON.stringify(newData));
          this.data = newData;
        }, 2000);
      }
    },
  },
};
</script>

<style scoped>
button {
  margin-bottom: 10px;
}
</style>
