<script setup>
import Button from './Button.vue';
import { useThemeStore } from '@/stores/theme';
import { useBoardStore } from '@/stores/board';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const theme = useThemeStore();
const { boardNames, currentBoardIndex } = storeToRefs(useBoardStore());
const isBoardMenuOpen = ref(false);
</script>

<template>
    <nav
        class="flex min-h-24 items-stretch space-x-8 border-b border-alice-blue bg-white px-6 dark:border-outer-space dark:bg-charcoal"
    >
        <picture
            class="flex md:min-w-64 md:border-r md:border-r-alice-blue md:dark:border-r-outer-space"
        >
            <source
                media="(min-width: 768px)"
                :srcset="
                    theme.isDarkTheme
                        ? '/assets/icons/logo-light.svg'
                        : '/assets/icons/logo-dark.svg'
                "
            />
            <img
                class="my-auto"
                src="/assets/icons/logo-mobile.svg"
                alt="logo"
            />
        </picture>
        <div class="flex w-full items-center justify-between">
            <div class="flex items-center gap-3">
                <h1
                    class="text-xl font-semibold text-midnight dark:text-white md:text-2xl"
                >
                    {{ boardNames[currentBoardIndex] }}
                </h1>
                <img
                    :src="
                        isBoardMenuOpen
                            ? '/assets/icons/icon-chevron-up.svg'
                            : '/assets/icons/icon-chevron-down.svg'
                    "
                    alt="open or hide board menu"
                    class="mt-1 h-2.5 w-3.5 md:hidden"
                />
            </div>
            <div class="flex items-center gap-4">
                <Button>
                    <img
                        src="/assets/icons/icon-add-task-mobile.svg"
                        alt="add new task"
                        class="h-3 w-3 lg:h-2.5 lg:w-2.5"
                    />
                    <span
                        class="hidden text-nowrap text-base font-medium text-white lg:inline-block"
                        >Add New Task</span
                    >
                </Button>
                <button>
                    <img
                        class="cursor-pointer"
                        src="/assets/icons/icon-vertical-ellipsis.svg"
                        alt="vertical ellipsis"
                    />
                </button>
            </div>
        </div>
    </nav>
</template>
