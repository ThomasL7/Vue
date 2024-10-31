<template>
  <div>
    <h2>Authentification</h2>
    <form @submit.prevent="login">
      <input v-model="username" placeholder="Nom d'utilisateur" />
      <input v-model="password" placeholder="Mot de passe" type="password" />
      <button type="submit">Connexion</button>
    </form>
    <button v-if="isAuthenticated" @click="logout">Déconnexion</button>
    <p v-if="isAuthenticated">Bienvenue, {{ username }}</p>
  </div>
</template>

<script>
export default {
  name: "AuthPage",
  data() {
    return {
      username: "",
      password: "",
      isAuthenticated: false,
    };
  },
  created() {
    this.isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  },
  methods: {
    login() {
      if (this.username && this.password) {
        this.isAuthenticated = true;
        localStorage.setItem("isAuthenticated", "true");
      }
    },
    logout() {
      this.isAuthenticated = false;
      localStorage.removeItem("isAuthenticated");
    },
  },
};
</script>

<style scoped>
h2 {
  color: #42b983;
}
</style>
