<script setup>
defineProps(['task']);
</script>

<template>
    <div
        class="group w-full cursor-pointer rounded-lg bg-white px-4 py-8 shadow-md dark:bg-charcoal dark:text-white"
    >
        <h2 class="heading-l transition-colors group-hover:text-purple-heart">
            {{ task.title }}
        </h2>
        <span class="body-l mt-2 block"
            >{{ task.subtasks.filter((t) => t.isCompleted).length }} of
            {{ task.subtasks.length }} subtasks</span
        >
    </div>
</template>
