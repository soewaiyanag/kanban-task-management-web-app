<script setup>
import Button from './Button.vue';
</script>

<template>
  <nav
    class="flex min-h-24 items-stretch space-x-8 border-b border-alice-blue bg-white px-6"
  >
    <picture class="flex md:min-w-64 md:border-r md:border-r-alice-blue">
      <source media="(min-width: 768px)" srcset="/assets/icons/logo-dark.svg" />
      <img class="my-auto" src="/assets/icons/logo-mobile.svg" alt="logo" />
    </picture>
    <div class="flex w-full items-center justify-between">
      <h1 class="text-xl font-semibold md:text-2xl">Platform Launch</h1>
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
