<script setup>
import Task from './Task.vue';
defineProps(['tasks']);
</script>

<template>
    <div class="w-96 space-y-5">
        <Task v-for="(task, index) in tasks" :key="index" :task />
    </div>
</template>
