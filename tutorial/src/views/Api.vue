<template>
  <div>
    <h2>Utilisation de l'API</h2>
    <button @click="fetchData">Charger des données</button>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        this.items = response.data;
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    },
  },
};
</script>

<style scoped>
h2 {
  color: #42b983;
}
</style>
