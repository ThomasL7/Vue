<template>
  <div>
    <h2>Recherche</h2>
    <input v-model="searchTerm" placeholder="Rechercher" />
    <div>
      <button @click="filterByEven">Paires</button>
      <button @click="filterByOdd">Impaire</button>
      <button @click="filterAll">Tous</button>
    </div>
    <ul>
      <li v-for="item in filteredItems" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: "",
      items: Array.from({ length: 20 }, (_, i) => ({ id: i + 1, name: `Item ${i + 1}` })),
      filterType: "all",
    };
  },
  computed: {
    filteredItems() {
      let filtered = this.items.filter((item) => item.name.toLowerCase().includes(this.searchTerm.toLowerCase()));

      if (this.filterType === "even") {
        return filtered.filter((item) => item.id % 2 === 0);
      } else if (this.filterType === "odd") {
        return filtered.filter((item) => item.id % 2 !== 0);
      }

      return filtered;
    },
  },
  methods: {
    filterByEven() {
      this.filterType = "even";
    },
    filterByOdd() {
      this.filterType = "odd";
    },
    filterAll() {
      this.filterType = "all";
    },
  },
};
</script>

<style scoped>
h2 {
  color: #42b983;
}
</style>
