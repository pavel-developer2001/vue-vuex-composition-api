<template>
  <CreateTodo />
  <div v-if="isLoading">Loading...</div>
  <div v-if="error">{{ error }}</div>
  <div v-if="!isLoading && !error">
    <div v-for="todo in todos" :key="todo.id">
      <TodoItem :todo="todo" />
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import {
  todosData,
  todoIsLoadingSelect,
  todoErrorSelect,
} from "../store/modules/todo/todo.selector";

import TodoItem from "../components/TodoItem.vue";
import CreateTodo from "../components/CreateTodo.vue";

const { state, dispatch } = useStore();

const todos = computed(() => todosData(state));
const isLoading = computed(() => todoIsLoadingSelect(state));
const error = computed(() => todoErrorSelect(state));

onMounted(() => {
  dispatch("todo/getTodos");
});
</script>
