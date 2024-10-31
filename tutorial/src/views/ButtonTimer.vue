<template>
  <div class="counter-tutorial">
    <h2>Tutoriel : Compteur avec Désactivation du Bouton</h2>
    <button :disabled="isDisabled" @click="increment">Incrémenter</button>
    <p>Compteur : {{ counter }}</p>
    <p v-if="counter >= maxCount" class="max-count-alert">Le compteur a atteint sa valeur maximale !</p>
  </div>
</template>

<script>
export default {
  name: "CounterTutorial",
  data() {
    return {
      counter: 0,
      maxCount: 10,
      isDisabled: false,
    };
  },
  methods: {
    increment() {
      if (this.counter < this.maxCount) {
        this.counter++;
        this.isDisabled = true;
        setTimeout(() => {
          this.isDisabled = false;
        }, 2000);
      } else {
        alert("Le compteur a atteint sa valeur maximale !");
      }
    },
  },
};
</script>

<style scoped>
.counter-tutorial {
  text-align: center;
  margin: 20px;
}
button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}
button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
.max-count-alert {
  color: red;
  font-weight: bold;
  margin-top: 10px;
}
</style>
