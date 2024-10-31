<template>
  <div>
    <h2>Gestion du Cycle de Vie des Composants</h2>
    <button @click="toggleComponent">{{ isMounted ? "Démonter" : "Monter" }} le composant</button>
    <button @click="handleResize" :disabled="!isMounted">Simuler un redimensionnement</button>

    <div v-if="isMounted">
      <p>{{ message }}</p>
      <p>Redimensionnez la fenêtre pour voir les messages du cycle de vie s'afficher ci-dessous.</p>
    </div>
    <h3>Messages du Cycle de Vie :</h3>
    <ul>
      <li v-for="(log, index) in lifecycleLogs" :key="index">{{ log }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMounted: true,
      message: "Bonjour, Vue!",
      lifecycleLogs: [],
    };
  },
  created() {
    this.addLog("Le composant a été créé");
  },
  mounted() {
    this.addLog("Le composant est monté");
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    this.addLog("Le composant va être démonté");
    console.log("Le composant va être démonté");
    window.removeEventListener("resize", this.handleResize);
  },
  unmounted() {
    this.addLog("Le composant a été démonté");
    console.log("Le composant a été démonté");
  },
  methods: {
    toggleComponent() {
      this.isMounted = !this.isMounted;
    },
    handleResize() {
      this.addLog("La fenêtre a été redimensionnée");
    },
    addLog(message) {
      this.lifecycleLogs.push(message);
    },
  },
};
</script>

<style scoped>
h2 {
  color: #42b983;
}
button {
  margin-right: 10px;
  margin-bottom: 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  background: #f0f0f0;
  padding: 5px;
  margin-bottom: 5px;
  border-radius: 4px;
}
</style>
