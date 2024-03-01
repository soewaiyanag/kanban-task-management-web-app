<script setup>
import { ref } from 'vue';
import BoardMenu from './BoardMenu.vue';
import ThemeSwitcher from './ThemeSwitcher.vue';

const visible = ref(false);
const showSlideOpen = ref(true);

const showSlide = () => {
  visible.value = true;
  showSlideOpen.value = false;
};

const hideSlide = () => {
  visible.value = false;
};

const handleTransitionEnd = () => {
  if (!visible.value) {
    showSlideOpen.value = true;
  }
};
</script>

<template>
  <div class="justify-content-center relative min-h-full">
    <div
      class="flex min-h-[calc(100vh-6rem)] flex-col overflow-hidden bg-white transition-all duration-300"
      :class="visible ? 'w-[17.5rem] px-6 opacity-100' : 'w-0 opacity-0'"
      @transitionend="handleTransitionEnd"
    >
      <BoardMenu />
      <ThemeSwitcher class="mt-auto" />
      <button
        class="my-8 flex items-center gap-4 text-nowrap text-left"
        @click="hideSlide"
      >
        <img
          class="h-5 w-5"
          src="/assets/icons/icon-hide-sidebar.svg"
          alt="hide sidebar"
        />
        <span class="font-semibold text-battleship-grey">Hide Sidebar</span>
      </button>
    </div>
    <button
      class="absolute bottom-4 left-0 flex w-14 justify-center rounded-r-3xl bg-purple-heart py-5"
      v-show="showSlideOpen"
      @click="showSlide"
    >
      <img
        class="-ml-2"
        src="/assets/icons/icon-show-sidebar.svg"
        alt="show sidebar"
      />
    </button>
  </div>
</template>
