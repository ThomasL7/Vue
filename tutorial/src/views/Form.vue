<template>
  <div class="form-tutorial">
    <h2>Gestion des Formulaires avec Validation</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="email">Email :</label>
        <input type="email" v-model="formData.email" required />
        <span v-if="errors.email">{{ errors.email }}</span>
      </div>
      <div>
        <label for="password">Mot de passe :</label>
        <input type="password" v-model="formData.password" required minlength="6" />
        <span v-if="errors.password">{{ errors.password }}</span>
      </div>
      <button type="submit">Soumettre</button>
    </form>
    <p v-if="submitted">Formulaire soumis avec succès !</p>
  </div>
</template>

<script>
export default {
  name: "FormTutorial",
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
      errors: {
        email: "",
        password: "",
      },
      submitted: false,
    };
  },
  methods: {
    validateForm() {
      this.errors.email = "";
      this.errors.password = "";

      if (!this.formData.email.includes("@")) {
        this.errors.email = "L'email doit contenir un @";
      }

      if (this.formData.password.length < 6) {
        this.errors.password = "Le mot de passe doit contenir au moins 6 caractères";
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.errors.email && !this.errors.password) {
        this.submitted = true;
      }
    },
  },
};
</script>

<style scoped>
.form-tutorial {
  max-width: 400px;
  margin: auto;
}
form div {
  margin-bottom: 1em;
}
span {
  color: red;
}
</style>
