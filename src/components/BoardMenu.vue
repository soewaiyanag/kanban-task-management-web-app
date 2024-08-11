<script setup>
import { storeToRefs } from 'pinia';
import { useBoardStore } from '@/stores/board';
import BoardIcon from './Icons/BoardIcon.vue';

const boardStore = useBoardStore();
const { boardNames, currentBoardIndex } = storeToRefs(boardStore);

const isCurrentBoard = (index) => currentBoardIndex.value === index;

const handleBoardClick = (index) => {
  boardStore.updateCurrentBoardIndex(index);
};

const createNewBoard = () => {
  console.log('Create new board clicked');
};
</script>

<template>
  <div class="whitespace-nowrap text-nowrap pt-6">
    <h2 class="mb-4 text-base font-normal uppercase text-battleship-grey">
      All Boards ({{ boardNames.length }})
    </h2>
    <div role="list">
      <button
        v-for="(boardName, index) in boardNames"
        :key="index"
        class="group -ml-12 flex w-full cursor-pointer select-none items-center gap-3 rounded-r-3xl py-3.5 pl-12 font-semibold transition-colors"
        :class="{
          'bg-purple-heart text-white': isCurrentBoard(index),
          'text-battleship-grey hover:bg-purple-heart/10 hover:text-purple-heart':
            !isCurrentBoard(index),
        }"
        @click="handleBoardClick(index)"
        :aria-pressed="isCurrentBoard(index)"
        role="listitem"
      >
        <BoardIcon
          :class="{
            'fill-white': isCurrentBoard(index),
            'fill-battleship-grey group-hover:fill-purple-heart': !isCurrentBoard(index),
          }"
        />
        {{ boardName }}
      </button>
      <button
        class="group -ml-12 flex w-full cursor-pointer select-none items-center gap-3 rounded-r-3xl py-3.5 pl-12 font-semibold text-purple-heart transition-colors"
        @click="createNewBoard"
        role="listitem"
      >
        <BoardIcon class="fill-purple-heart" />
        <span>+ Create New Board</span>
      </button>
    </div>
  </div>
</template>
