<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useDark, useToggle } from '@vueuse/core'
import SunIcon from '~icons/heroicons/sun-solid'
import MoonIcon from '~icons/heroicons/moon-solid'
import actionButton from './components/action-button.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div>
    <header class="mx-auto flex w-4/5 items-center justify-between pt-10">
      <h1 class="text-2xl font-bold underline underline-offset-2">
        TailwindCss Demo
      </h1>
      <nav class="flex items-center gap-4">
        <router-link
          to="/"
          class="duartion-150 ease text-xl font-medium transition-all hover:underline hover:opacity-70 active:text-sage-500"
        >
          Home
        </router-link>
        <router-link
          to="/about"
          class="duartion-150 ease text-xl font-medium transition-all hover:underline hover:opacity-70 active:text-sage-500"
        >
          About
        </router-link>
        <action-button @click="toggleDark()">
          <sun-icon v-if="isDark" />
          <moon-icon v-else />
        </action-button>
      </nav>
    </header>
    <div class="mx-auto mt-20 w-2/6">
      <router-view />
    </div>
  </div>
</template>
