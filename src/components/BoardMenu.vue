<script setup>
import BoardIcon from './BoardIcon.vue';
</script>

<template>
  <div class="text-nowrap pt-6">
    <h2 class="mb-4 text-base font-normal uppercase text-battleship-grey">
      All Boards (3)
    </h2>
    <ul>
      <li
        class="-ml-12 flex items-center gap-3 rounded-r-3xl bg-purple-heart py-4 pl-12 text-white"
      >
        <BoardIcon :fill="'white'" />
        Platform Launch
      </li>
      <li
        class="-ml-12 flex items-center gap-3 rounded-r-3xl py-4 pl-12 text-battleship-grey"
      >
        <BoardIcon :fill="'var(--battleship-grey)'" />
        Platform Launch
      </li>
      <li
        class="-ml-12 flex items-center gap-3 rounded-r-3xl py-4 pl-12 text-battleship-grey"
      >
        <BoardIcon :fill="'var(--battleship-grey)'" />
        Platform Launch
      </li>
    </ul>
  </div>
</template>
