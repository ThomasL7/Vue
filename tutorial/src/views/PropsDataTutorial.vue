<template>
  <div>
    <h2>Échange de données entre composants</h2>
    <p>Ce tutoriel montre comment les props permettent de passer des données d'un composant parent à un enfant.</p>

    <!-- Formulaire pour entrer le nom -->
    <label for="username">Entrez votre nom :</label>
    <input type="text" v-model="username" placeholder="Votre nom" />

    <!-- Composant enfant avec prop 'user' -->
    <UserDisplay :user="username" />
    <UserDisplay user="username" />
  </div>
</template>

<script>
import UserDisplay from "@/components/UserDisplay.vue";

export default {
  name: "PropsDataTutorial",
  components: {
    UserDisplay,
  },
  data() {
    return {
      username: "",
    };
  },
};
</script>

<style scoped>
h2 {
  color: #42b983;
}
input {
  margin-top: 10px;
  padding: 5px;
}
</style>
