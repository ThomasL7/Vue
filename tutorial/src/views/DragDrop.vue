<template>
  <div>
    <h2>Drag and Drop</h2>
    <div class="drop-zone" @dragover.prevent @drop="drop">
      <div v-for="(item, index) in items" :key="item.id" class="draggable" draggable="true" @dragstart="dragStart(item)" @dragenter.prevent @dragover.prevent @drop="drop(index)">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
      ],
      draggedItem: null,
      draggedIndex: null,
    };
  },
  methods: {
    dragStart(item) {
      this.draggedItem = item;
      this.draggedIndex = this.items.indexOf(item);
    },
    drop(targetIndex) {
      if (this.draggedItem) {
        this.items.splice(this.draggedIndex, 1);
        this.items.splice(targetIndex, 0, this.draggedItem);
        this.draggedItem = null;
        this.draggedIndex = null;
      }
    },
  },
};
</script>

<style scoped>
.drop-zone {
  border: 2px dashed #42b983;
  padding: 20px;
  min-height: 200px;
}
.draggable {
  padding: 10px;
  margin: 5px;
  background-color: #35495e;
  color: white;
  cursor: grab;
}
</style>
