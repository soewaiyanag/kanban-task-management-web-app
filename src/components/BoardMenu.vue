<script setup>
import { ref, onMounted } from 'vue';
import BoardIcon from './Icons/BoardIcon.vue';

const boards = ref([]);
const activeBoard = ref(0);

async function fetchBoards() {
  const response = await fetch('/data.json');
  const data = await response.json();
  boards.value = data?.boards;
}

onMounted(fetchBoards);
</script>

<template>
  <div class="text-nowrap pt-6">
    <h2 class="mb-4 text-base font-normal uppercase text-battleship-grey">
      All Boards ({{ boards.length }})
    </h2>
    <ul>
      <li
        v-for="({ name }, index) in boards"
        class="group cursor-pointer font-semibold transition-colors"
        :class="{
          '-ml-12 flex items-center gap-3 rounded-r-3xl bg-purple-heart py-3.5 pl-12 text-white':
            activeBoard === index,
          '-ml-12 flex items-center gap-3 rounded-r-3xl py-3.5 pl-12 text-battleship-grey hover:bg-purple-heart/10 hover:text-purple-heart':
            activeBoard !== index,
        }"
        @click="activeBoard = index"
      >
        <BoardIcon
          :class="
            activeBoard === index
              ? 'fill-white'
              : 'fill-battleship-grey group-hover:fill-purple-heart'
          "
        />
        {{ name }}
      </li>
    </ul>
  </div>
</template>
