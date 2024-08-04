import { defineStore } from 'pinia';
import { ref } from 'vue';

const useThemeStore = defineStore('theme', () => {
  const currentTheme = ref(null);

  const setTheme = (theme) => {
    currentTheme.value = theme;
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  };

  const toggleTheme = () => {
    const newTheme = currentTheme.value === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  setTheme(localStorage.getItem('theme') || 'light');

  return { currentTheme, setTheme, toggleTheme };
});

export default useThemeStore;
