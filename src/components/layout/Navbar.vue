<script setup lang="ts">
import { navigation } from '@/data/navigation'
</script>

<template>
  <header
    class="card sticky top-0 z-50 mb-4 flex items-center justify-between px-6 py-4"
  >
    <a
      href="#top"
      class="text-xl font-bold transition hover:text-violet-500"
    >
      ✦
    </a>

    <nav>
      <ul class="flex gap-8">
        <li
          v-for="item in navigation"
          :key="item.href"
        >
          <a
            :href="item.href"
            class="text-sm text-slate-700 transition hover:text-violet-500"
          >
            {{ item.title }}
          </a>
        </li>
      </ul>
    </nav>

    <a
      href="https://github.com/chponya"
      target="_blank"
      class="rounded-xl border px-4 py-2 transition hover:bg-slate-100"
    >
      GitHub
    </a>
  </header>
</template>