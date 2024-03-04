<script setup>
import BoardIcon from './Icons/BoardIcon.vue';
import { useBoardStore } from '@/stores/board';
import { storeToRefs } from 'pinia';

const { boardNames, currentBoardIndex } = storeToRefs(useBoardStore());
</script>

<template>
    <div class="text-nowrap pt-6">
        <h2 class="mb-4 text-base font-normal uppercase text-battleship-grey">
            All Boards ({{ boardNames.length }})
        </h2>
        <ul>
            <li
                v-for="(boardName, index) in boardNames"
                class="group cursor-pointer font-semibold transition-colors"
                :class="{
                    '-ml-12 flex items-center gap-3 rounded-r-3xl bg-purple-heart py-3.5 pl-12 text-white':
                        currentBoardIndex === index,
                    '-ml-12 flex items-center gap-3 rounded-r-3xl py-3.5 pl-12 text-battleship-grey hover:bg-purple-heart/10 hover:text-purple-heart':
                        currentBoardIndex !== index,
                }"
                @click="currentBoardIndex = index"
            >
                <BoardIcon
                    :class="
                        currentBoardIndex === index
                            ? 'fill-white'
                            : 'fill-battleship-grey group-hover:fill-purple-heart'
                    "
                />
                {{ boardName }}
            </li>
        </ul>
    </div>
</template>
