<template>
  <nav>
    <ul>
      <li><router-link to="/">Accueil</router-link></li>
      <li><router-link to="/data-computed">Types & Calculations</router-link></li>
      <li><router-link to="/button-timer">Button timer</router-link></li>
      <li><router-link to="/events">Événements</router-link></li>
      <li><router-link to="/conditions">Conditions</router-link></li>
      <li><router-link to="/scoped-styles">Styles Scoped</router-link></li>
      <li><router-link to="/props-data">Props & Data</router-link></li>
      <li><router-link to="/emit-events">Émettre des Événements</router-link></li>
      <li><router-link to="/slots">Slots</router-link></li>
      <li><router-link to="/form">Form</router-link></li>
      <li><router-link to="/to-do">To do list</router-link></li>
      <li><router-link to="/auth-page">Authentification</router-link></li>
      <li><router-link to="/pagination">Pagination</router-link></li>
      <li><router-link to="/filter-search">Filter & search</router-link></li>
      <li><router-link to="/state">States</router-link></li>
      <li><router-link to="/api">API</router-link></li>
      <li><router-link to="/animations">Animations</router-link></li>
      <li><router-link to="/line-edition">Line edition</router-link></li>
      <li><router-link to="/drag-drop">Drag drop</router-link></li>
      <li><router-link to="/cache">Cache</router-link></li>
    </ul>
    <ul>
      <li><router-link to="/dyna-form">Dynamic form</router-link></li>
      <li><router-link to="/graphic">Graphic</router-link></li>
      <li><router-link to="/theme">Theme</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
nav ul {
  display: flex;
  list-style: none;
  gap: 1rem;
}
</style>
