<script setup lang="ts">
import type { Project } from '@/data/projects'

defineProps<{
  project: Project
}>()
</script>

<template>
  <div
    class="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
  >
    <img
      :src="project.image"
      :alt="project.title"
      class="h-52 w-full object-cover"
    >

    <div class="p-5">
      <h3 class="mb-2 text-2xl font-semibold">
        {{ project.title }}
      </h3>

      <p class="mb-5 text-slate-500">
        {{ project.description }}
      </p>

      <div class="flex flex-wrap gap-2">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="rounded-full bg-slate-100 px-3 py-1 text-sm"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>