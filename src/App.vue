<script setup>
import Nav from './components/Nav.vue';
import Sidebar from './components/Sidebar.vue';
import Columns from './components/Columns.vue';
import Modal from './components/Modal.vue';
</script>

<template>
  <div class="relative bg-baby-blue transition-colors dark:bg-gunmetal">
    <Nav />
    <div class="grid grid-cols-1 md:grid-cols-[auto_1fr]">
      <Sidebar class="hidden md:flex" />
      <Columns />
    </div>
    <Modal />
  </div>
</template>
