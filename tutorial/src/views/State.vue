<template>
  <div>
    <h2>Gestion des États avec Vuex</h2>
    <input v-model="newTask" placeholder="Ajouter une tâche" @keyup.enter="submitTask" />
    <button @click="submitTask">Ajouter</button>
    <button @click="loadTasks">Charger les tâches</button>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <input type="checkbox" :checked="task.completed" @change="toggleTask(index)" />
        <span :class="{ completed: task.completed }">{{ task.text }}</span>
        <button @click="removeTask(index)">Supprimer</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["tasks"]),
    ...mapGetters(["completedTasks"]),
  },
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    ...mapMutations(["addTask", "removeTask", "toggleTask"]),
    ...mapActions(["loadTasks"]),
    submitTask() {
      if (this.newTask.trim() !== "") {
        this.addTask({ text: this.newTask, completed: false });
        this.newTask = "";
      }
    },
  },
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
