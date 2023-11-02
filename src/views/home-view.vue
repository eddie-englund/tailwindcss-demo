<script setup lang="ts">
import actionButton from '@/components/action-button.vue'
</script>

<template>
  <main>
    <div class="flex flex-col justify-center gap-4 text-center">
      <h1 class="text-6xl font-black text-mint-700 dark:text-mint-500">
        Welcome to the Tailwindcss demo!
      </h1>
      <p class="mx-auto max-w-3xl text-lg font-medium dark:text-gray-400">
        Tailwindcss is a utility-first CSS framework packed with classes like
        flex, pt-4, text-center and rotate-90 that can be composed to build any
        design, directly in your markup.
      </p>
      <div class="flex justify-center gap-4">
        <action-button>
          <p>Sign up</p>
        </action-button>
        <action-button :loading="true" :secondary="true">
          <p>Waiting for an action...</p>
        </action-button>
      </div>
    </div>
  </main>
</template>
