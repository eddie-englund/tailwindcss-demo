<script lang="ts" setup>
defineProps({
  disabled: Boolean,
  loading: Boolean,
  secondary: Boolean
})
</script>

<template>
  <button
    class="duartion-150 ease flex items-center justify-center gap-4 rounded-lg p-4 transition-all"
    :class="[
      loading
        ? 'cursor-not-allowed opacity-70'
        : 'cursor-pointer hover:opacity-70 active:opacity-50',
      secondary
        ? 'bg-gray-300 dark:bg-gray-700 dark:text-white'
        : 'bg-mint-700 dark:bg-mint-600'
    ]"
  >
    <slot></slot>
    <svg
      v-if="loading"
      class="-ml-1 mr-3 h-5 w-5 animate-spin dark:text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  </button>
</template>
