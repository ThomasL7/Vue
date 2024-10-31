<template>
  <div>
    <h2>Communication avec les Événements</h2>
    <p>Ce tutoriel montre comment un composant enfant peut envoyer un événement au composant parent.</p>

    <!-- Message envoyé par l'enfant -->
    <p>Message reçu de l'enfant : {{ message.message }}</p>
    <p>Nombre reçu de l'enfant : {{ message.number }}</p>

    <!-- Composant enfant -->
    <EventButton @send-message="handleMessage" />
  </div>
</template>

<script>
import EventButton from "@/components/EventButton.vue";

export default {
  name: "EmitTutorial",
  components: {
    EventButton,
  },
  data() {
    return {
      message: {
        message: "",
        number: null,
      },
    };
  },
  methods: {
    handleMessage(payload) {
      this.message = payload;
    },
  },
};
</script>

<style scoped>
h2 {
  color: #42b983;
}
</style>
