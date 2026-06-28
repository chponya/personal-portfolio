<script setup lang="ts">
import type { Hackathon } from '../../data/hackathons'

defineProps<{
  hackathon: Hackathon
}>()

const emit = defineEmits<{
  (e: 'open'): void
}>()
</script>

<template>
  <button
    class="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
    @click="emit('open')"
  >
    <img
      :src="hackathon.image"
      :alt="hackathon.project"
      class="h-44 w-full object-cover"
    >

    <div class="p-4 text-left">
      <h3 class="font-semibold">
        {{ hackathon.title }}
      </h3>

      <p class="text-slate-600">
        {{ hackathon.project }}
      </p>

      <span
        class="mt-3 inline-block rounded-full bg-violet-100 px-3 py-1 text-xs text-violet-600"
      >
        PDF
      </span>
    </div>
  </button>
</template>