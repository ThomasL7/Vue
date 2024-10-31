<template>
  <div>
    <h2>Utilisation des Slots dans Vue</h2>
    <p>Ce tutoriel montre comment insérer du contenu personnalisé dans un composant en utilisant les slots.</p>

    <!-- Slot par défaut et slot nommé -->
    <SlotDisplay>
      <template v-slot:default>
        <p>Contenu par défaut : ce texte est rendu dans le slot par défaut du composant enfant.</p>
      </template>

      <template v-slot:header>
        <h3>Header personnalisé</h3>
      </template>

      <template v-slot:footer>
        <p>Footer personnalisé : ce texte apparaît dans le slot footer du composant enfant.</p>
      </template>
    </SlotDisplay>
  </div>
</template>

<script>
import SlotDisplay from "@/components/SlotDisplay.vue";

export default {
  name: "SlotsTutorial",
  components: {
    SlotDisplay,
  },
};
</script>

<style scoped>
h2 {
  color: #42b983;
}
</style>
