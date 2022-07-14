<template lang="">
  <form @submit.prevent="addTodo">
    <input placeholder="enter todo" v-model="text" />
    <button type="'submit'">Add</button>
  </form>
</template>
<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { nanoid } from "nanoid";

const text = ref("");
const { dispatch } = useStore();

const addTodo = () => {
  if (!text.value) return alert("Enter text!");
  const newTodo = { id: nanoid(), text: text.value };
  dispatch("todo/addTodo", newTodo);
  text.value = "";
};
</script>
<style lang=""></style>
