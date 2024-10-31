<template>
  <div>
    <h2>Conditions avec Vue</h2>
    <p>Ce tutoriel montre comment utiliser des conditions pour afficher du contenu en fonction de l'état des données.</p>

    <!-- Exemple de v-if, v-else-if, v-else -->
    <div>
      <h3>Affichage Conditionnel</h3>
      <p>État actuel : {{ status }}</p>

      <!-- Menu de sélection pour changer l'état -->
      <select v-model="status">
        <option value="loading">Chargement</option>
        <option value="success">Succès</option>
        <option value="error">Erreur</option>
      </select>

      <!-- Affichage conditionnel basé sur l'état -->
      <div v-if="status === 'loading'">
        <p>Chargement en cours... Veuillez patienter.</p>
      </div>
      <div v-else-if="status === 'success'">
        <p>Succès ! Les données ont été chargées.</p>
      </div>
      <div v-else>
        <p>Erreur ! Une erreur est survenue.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConditionsTutorial",
  data() {
    return {
      status: "loading",
    };
  },
};
</script>

<style scoped>
h2 {
  color: #42b983;
}
select {
  margin-top: 10px;
}
</style>
