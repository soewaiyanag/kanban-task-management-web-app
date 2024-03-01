<script setup>
import { ref } from 'vue';
import HideSidebarIcon from './Icons/HideSidebarIcon.vue';
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
      class="-mt-px flex min-h-[calc(100vh-6rem+1px)] flex-col overflow-hidden border-r border-r-battleship-grey border-t-charcoal bg-white transition-all duration-300 dark:bg-charcoal"
      :class="visible ? 'w-[17.5rem] px-6 opacity-100' : 'w-0 opacity-0'"
      @transitionend="handleTransitionEnd"
    >
      <BoardMenu />
      <ThemeSwitcher class="mt-auto" />
      <button
        class="group my-8 -ml-12 flex items-center gap-4 text-nowrap rounded-r-3xl py-3.5 pl-12 text-left transition-colors hover:bg-purple-heart/10"
        @click="hideSlide"
      >
        <HideSidebarIcon
          class="fill-battleship-grey group-hover:fill-purple-heart"
        />
        <span
          class="font-semibold text-battleship-grey group-hover:text-purple-heart"
          >Hide Sidebar</span
        >
      </button>
    </div>
    <button
      class="absolute bottom-8 left-0 flex w-14 animate-[slideRight_1s_cubic-bezier(0.22,0.68,0,1)_1] justify-center rounded-r-3xl bg-purple-heart py-5 transition-all hover:bg-lavender-blue"
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
