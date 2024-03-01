import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', () => {
  const isDarkTheme = ref(false);

  function setIsDarkTheme(checked) {
    if (checked) {
      isDarkTheme.value = true;
    } else {
      isDarkTheme.value = false;
    }
  }

  return { isDarkTheme, setIsDarkTheme };
});
