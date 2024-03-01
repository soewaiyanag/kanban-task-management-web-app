<script setup>
import Nav from './components/Nav.vue';
import Sidebar from './components/Sidebar.vue';
</script>

<template>
  <div class="bg-baby-blue transition-colors dark:bg-gunmetal">
    <Nav />
    <Sidebar class="hidden md:flex" />
  </div>
</template>
