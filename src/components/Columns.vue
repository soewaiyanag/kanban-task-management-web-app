<script setup>
import { storeToRefs } from 'pinia';
import { useBoardStore } from '@/stores/board';
import Column from './Column.vue';

const { currentBoard } = storeToRefs(useBoardStore());
</script>

<template>
    <div
        class="grid max-h-[calc(100vh-6rem+1px)] min-w-[calc(100vw-18rem)] max-w-[100vw] grid-flow-col justify-start gap-5 overflow-scroll p-6"
    >
        <Column
            v-for="({ name, tasks }, index) in currentBoard.columns"
            :key="index"
            :tasks
        />
    </div>
</template>
