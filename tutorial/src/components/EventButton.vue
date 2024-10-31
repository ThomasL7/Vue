<template>
  <div>
    <button @click="sendMessage">Envoyer un Message</button>
  </div>
</template>

<script>
export default {
  name: "EventButton",
  methods: {
    sendMessage() {
      this.$emit("send-message", {
        message: "Ceci est un message !",
        number: 42,
      });
    },
  },
};
</script>

<style scoped>
button {
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
