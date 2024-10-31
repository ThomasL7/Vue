async function fetchTasksFromAPI() {
  // Simule des données provenant d'une API
  return [
    { text: "Task 1", completed: false },
    { text: "Task 2", completed: true },
  ];
}

import { createStore } from "vuex";

export default createStore({
  state: {
    tasks: [],
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    },
    removeTask(state, index) {
      state.tasks.splice(index, 1);
    },
    toggleTask(state, index) {
      state.tasks[index].completed = !state.tasks[index].completed;
    },
  },
  actions: {
    async loadTasks({ commit }) {
      const tasks = await fetchTasksFromAPI();
      tasks.forEach((task) => commit("addTask", task));
    },
  },
  getters: {
    completedTasks(state) {
      return state.tasks.filter((task) => task.completed);
    },
  },
});
