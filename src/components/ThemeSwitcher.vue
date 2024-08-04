<script setup>
import { ref, watch, onMounted } from 'vue';
import useTheme from '@/composables/useTheme';

// composables
const theme = useTheme();

// states
const checked = ref(false);

watch(checked, (newChecked) => {
  theme.setTheme(newChecked ? 'dark' : 'light');
});

onMounted(() => {
  checked.value = theme.currentTheme === 'dark';
});
</script>

<template>
  <div
    class="flex items-center justify-center gap-x-4 rounded-md bg-alice-blue py-4 dark:bg-gunmetal"
  >
    <img class="aspect-square h-5" src="/assets/icons/icon-light-theme.svg" alt="light theme" />
    <label class="cursor-pointer">
      <input type="checkbox" v-model="checked" class="peer sr-only" />
      <div
        class="after:border-bg-purple-heart dark:border-bg-purple-heart peer-checked:bg-blue-600 peer relative h-6 w-11 rounded-full bg-purple-heart after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-white after:bg-white after:transition-all after:ease-in-out after:content-[''] peer-checked:after:translate-x-full dark:bg-purple-heart"
      ></div>
    </label>
    <img class="aspect-square h-4" src="/assets/icons/icon-dark-theme.svg" alt="light theme" />
  </div>
</template>
