<template>
  <div>
    <h2>Formulaires Dynamiques</h2>
    <form @submit.prevent="submitForm">
      <div v-for="(field, index) in fields" :key="index">
        <input v-model="field.value" :placeholder="field.placeholder" />
      </div>
      <button type="button" @click="addField">Ajouter un champ</button>
      <button type="submit">Soumettre</button>
    </form>
    <p v-if="submittedMessage">{{ submittedMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [{ value: "", placeholder: "Champ 1" }],
      submittedMessage: "",
    };
  },
  methods: {
    addField() {
      this.fields.push({ value: "", placeholder: `Champ ${this.fields.length + 1}` });
    },
    submitForm() {
      this.submittedMessage = `Soumis : ${this.fields.map((field) => field.value).join(", ")}`;
    },
  },
};
</script>

<style scoped>
input {
  display: block;
  margin: 10px 0;
}
</style>
