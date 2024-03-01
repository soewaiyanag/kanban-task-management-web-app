<script setup>
import { ref, computed } from 'vue';

const checked = ref(false);

const toggle = () => {
  checked.value = !checked.value;
};

const circleClasses = computed(() => ({
  'w-6 h-6 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 left-1 transition-all duration-300': true,
  'left-1/2': checked.value,
  'right-1': !checked.value,
}));
</script>

<template>
  <div
    class="flex items-center justify-center gap-x-4 rounded-md bg-alice-blue py-4"
  >
    <img
      class="aspect-square h-5"
      src="/public/assets/icons/icon-light-theme.svg"
      alt="light theme"
    />
    <label class="cursor-pointer">
      <input type="checkbox" value="" class="peer sr-only" />
      <div
        class="after:border-bg-purple-heart dark:border-bg-purple-heart peer-checked:bg-blue-600 peer relative h-6 w-11 rounded-full bg-purple-heart after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-white after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full dark:bg-purple-heart"
      ></div>
    </label>
    <img
      class="aspect-square h-4"
      src="/public/assets/icons/icon-dark-theme.svg"
      alt="light theme"
    />
  </div>
</template>
