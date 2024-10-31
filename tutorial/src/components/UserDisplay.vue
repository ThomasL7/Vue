<template>
  <div class="user-display">
    <p v-if="user">Bonjour, {{ user }} !</p>
    <p v-else>Veuillez entrer un nom pour l'afficher ici.</p>
  </div>
</template>

<script>
export default {
  name: "UserDisplay",
  props: {
    user: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>

<style scoped>
.user-display {
  margin-top: 15px;
  padding: 10px;
  border: 1px solid #42b983;
  color: #42b983;
}
</style>
