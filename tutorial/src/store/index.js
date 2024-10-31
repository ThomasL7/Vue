async function fetchTasksFromAPI() {
  return [
    { text: "Task 1", completed: false },
    { text: "Task 2", completed: true },
  ];
}

// async function fetchTasksFromAPI() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     if (!response.ok) {
//       throw new Error("Network response was not ok " + response.statusText);
//     }
//     const data = await response.json();
//     return data.map((task) => ({
//       text: task.title,
//       completed: task.completed,
//     }));
//   } catch (error) {
//     console.error("There was a problem with the fetch operation:", error);
//     return [];
//   }
// }

import { createStore } from "vuex";

export default createStore({
  // = data
  state: {
    tasks: [],
  },
  // = computed
  getters: {
    completedTasks(state) {
      return state.tasks.filter((task) => task.completed);
    },
  },
  // = methods
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
  // Appel API pour modifier un state via l'appel d'une mutation
  actions: {
    async loadTasks({ commit }) {
      const tasks = await fetchTasksFromAPI();
      tasks.forEach((task) => commit("addTask", task));
    },
  },
});
