<template>
  <div>
    <h2>Pagination</h2>
    <ul>
      <li v-for="item in paginatedItems" :key="item.id">{{ item.name }}</li>
    </ul>
    <button @click="prevPage" :disabled="currentPage === 1">Précédent</button>
    <button @click="nextPage" :disabled="currentPage === totalPages">Suivant</button>
    <p>Page {{ currentPage }} sur {{ totalPages }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: Array.from({ length: 50 }, (_, i) => ({ id: i + 1, name: `Item ${i + 1}` })),
      currentPage: 1,
      pageSize: 10,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.items.length / this.pageSize);
    },
    paginatedItems() {
      const start = (this.currentPage - 1) * this.pageSize;
      return this.items.slice(start, start + this.pageSize);
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
  },
};
</script>

<style scoped>
h2 {
  color: #42b983;
}
</style>
