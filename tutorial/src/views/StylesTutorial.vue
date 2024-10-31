<template>
  <div class="style-tutorial">
    <h2>Gestion des Styles dans Vue</h2>
    <p>Ce tutoriel explore les options de stylisation : globale, scoped, et modules.</p>

    <!-- Exemple de style scoped -->
    <div class="scoped-section">
      <p class="scoped-text">Ce texte utilise un style scoped, il ne sera pas affecté par les styles globaux.</p>
    </div>

    <!-- Exemple de style global -->
    <div class="global-section">
      <p class="global-text">Ce texte utilise un style global appliqué à tout le site.</p>
    </div>

    <!-- Exemple de style avec un module CSS -->
    <div :class="$myStyle.moduleText">
      <p>Ce texte utilise un style via module CSS pour éviter toute collision de style. Vous utilisez :class="$style.moduleText" dans le template pour appliquer ce style, et seul ce composant pourra accéder à cette classe sous ce nom.</p>
    </div>
  </div>
</template>

<script>
import styles from "@/assets/StylesTutorial.module.css";

export default {
  name: "StylesTutorial",
  computed: {
    $myStyle() {
      return styles;
    },
  },
};
</script>

<style scoped>
.style-tutorial {
  color: #42b983;
}
.scoped-section {
  border: 1px solid #42b983;
  padding: 10px;
  margin-bottom: 10px;
}
.scoped-text {
  color: #42b983;
}
</style>

<style>
.global-section {
  border: 1px solid #35495e;
  padding: 10px;
  margin-bottom: 10px;
}
.global-text {
  color: #35495e;
}
</style>
