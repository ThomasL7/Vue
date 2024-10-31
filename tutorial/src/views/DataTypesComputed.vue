<template>
  <div>
    <h2>Types et Données Calculées</h2>
    <p>Cet exemple montre la différence entre `data` et `computed` dans Vue.</p>

    <!-- Zone pour les données -->
    <div>
      <h3>Données (data)</h3>
      <p>Message : {{ message }}</p>
      <button @click="changeMessage">Changer le message</button>
    </div>

    <!-- Zone pour les données calculées -->
    <div>
      <h3>Données calculées (computed)</h3>
      <p>Message calculé : {{ computedMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataTypesComputed",
  data() {
    return {
      message: "Hello Vue.js!",
    };
  },
  computed: {
    computedMessage() {
      return this.message.toUpperCase();
    },
  },
  methods: {
    changeMessage() {
      this.message = this.message === "Hello Vue.js!" ? "Bonjour Vue.js!" : "Hello Vue.js!";
    },
  },
};
</script>

<style scoped>
h2 {
  color: #42b983;
}
</style>
