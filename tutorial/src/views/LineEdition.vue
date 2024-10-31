<template>
  <div>
    <h2>Édition en Ligne</h2>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <input v-model="item.name" />
        <button @click="saveItem(index)">Sauvegarder</button>
      </li>
    </ul>
    <button @click="addItem">Ajouter un élément</button>
    <p v-if="savedMessage" v-html="savedMessage"></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [{ name: "Élément 1" }, { name: "Élément 2" }],
      savedMessage: "",
    };
  },
  methods: {
    addItem() {
      this.items.push({ name: "" });
    },
    saveItem(index) {
      const itemList = this.items.map((item) => item.name).join(", ");
      this.savedMessage = `Sauvegardé : ${this.items[index].name}<br>Liste des éléments : ${itemList}`;
    },
  },
};
</script>

<style scoped>
h2 {
  color: #42b983;
}
</style>
