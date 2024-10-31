<template>
  <div>
    <h2>Gestion des Événements</h2>
    <p>Ce tutoriel montre comment Vue gère les événements tels que les clics et le survol.</p>

    <!-- Exemple de clic -->
    <div>
      <h3>Événement de clic</h3>
      <p>Nombre de clics : {{ clickCount }}</p>
      <button @click="incrementClickCount">Cliquez ici</button>
    </div>

    <!-- Exemple de survol -->
    <div>
      <h3>Événement de survol</h3>
      <p @mouseover="hoverMessage = 'Vous survolez le texte!'" @mouseleave="hoverMessage = 'Survolez ce texte.'">
        {{ hoverMessage }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventsTutorial",
  data() {
    return {
      clickCount: 0,
      hoverMessage: "Survolez ce texte.",
    };
  },
  methods: {
    incrementClickCount() {
      this.clickCount++;
    },
  },
};
</script>

<style scoped>
h2 {
  color: #42b983;
}
button {
  margin-top: 10px;
}
</style>
