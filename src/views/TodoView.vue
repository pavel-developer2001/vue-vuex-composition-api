<template lang="">
  <router-link to="/">Назад</router-link>
  <div v-if="isLoading">Loading...</div>
  <div v-if="error">{{ error }}</div>
  <div v-if="!isLoading && !error && !isEdit">
    <div>id: {{ todo.id }}</div>
    <p>{{ todo.text }}</p>
    <button @click="isEdit = true">Edit</button>
    <button @click="removeTodo">Delete</button>
  </div>
  <div v-if="isEdit">
    <form @submit.prevent>
      <input placeholder="enter todo" v-model="text" />
      <button @click="updateTodo">Update</button>
      <button @click="isEdit = false">Cancel</button>
    </form>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import {
  todoDataSelect,
  todoIsLoadingSelect,
  todoErrorSelect,
} from "../store/modules/todo/todo.selector";

const route = useRoute();
const router = useRouter();
const { state, dispatch } = useStore();

const isEdit = ref(false);
const text = ref("");

const todo = computed(() => todoDataSelect(state));
const isLoading = computed(() => todoIsLoadingSelect(state));
const error = computed(() => todoErrorSelect(state));

onMounted(async () => {
  await dispatch("todo/getTodo", route.params.id);
  text.value = todo.value.text;
});

const updateTodo = () => {
  if (!text.value) return alert("Enter todo");
  const newTodo = { id: todo.value.id, text: text.value };
  dispatch("todo/updateTodo", newTodo);
  isEdit.value = false;
};

const removeTodo = () => {
  if (confirm("You want delete todo?")) {
    dispatch("todo/removeTodo", todo.value.id);
    router.push("/");
  }
};
</script>
<style lang=""></style>
