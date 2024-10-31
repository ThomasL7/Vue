<template>
  <div class="slot-display">
    <!-- Slot nommé pour le header -->
    <header>
      <slot name="header">Contenu du header par défaut</slot>
    </header>

    <!-- Slot par défaut -->
    <main>
      <slot>Contenu principal par défaut</slot>
    </main>

    <!-- Slot nommé pour le footer -->
    <footer>
      <slot name="footer">Contenu du footer par défaut</slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: "SlotDisplay",
};
</script>

<style scoped>
.slot-display {
  border: 1px solid #42b983;
  padding: 15px;
  margin-top: 10px;
}
header,
footer {
  padding: 5px;
  background-color: #e5f5f3;
  margin-top: 10px;
}
main {
  padding: 10px;
  margin-top: 10px;
  background-color: #f9f9f9;
}
</style>
