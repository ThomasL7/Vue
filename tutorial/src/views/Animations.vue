<template>
  <div>
    <h2>Transitions et Animations</h2>
    <button @click="toggleItem">{{ showItem ? "Cacher" : "Afficher" }} l'élément</button>
    <transition name="test">
      <div v-if="showItem" class="item">Ceci est un élément avec une animation.</div>
    </transition>
    <transition name="test">
      <div class="item">Test.</div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showItem: false,
    };
  },
  methods: {
    toggleItem() {
      this.showItem = !this.showItem;
    },
  },
};
</script>

<style scoped>
.test-enter-active,
.test-leave-active {
  transition: background-color 0.5s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 2s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.test-enter-from,
.test-leave-to {
  opacity: 0.25;
  background-color: rgb(129, 103, 103);
}

.test-enter-to,
.test-leave-from {
  opacity: 0.75;
  background-color: red;
}

.item {
  padding: 20px;
  /* background-color: rgb(228, 55, 205); */
  margin-top: 10px;
}
</style>
