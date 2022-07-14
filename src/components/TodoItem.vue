<template lang="">
  <router-link :to="todo.id">{{ todo.text }}</router-link>
</template>
<script setup>
const { todo } = defineProps({ todo: { type: Object, required: true } });
</script>
<style lang=""></style>
