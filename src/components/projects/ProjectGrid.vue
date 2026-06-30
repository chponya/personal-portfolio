<script setup lang="ts">
import { computed, ref } from 'vue'

import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard.vue'

const expanded = ref(false)

const visibleProjects = computed(() =>
  expanded.value
    ? projects
    : projects.slice(0, 3),
)
</script>

<template>
  <div>
    <div class="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      <ProjectCard
        v-for="project in visibleProjects"
        :key="project.title"
        :project="project"
      />
    </div>

    <div
      v-if="projects.length > 3"
      class="mt-6 flex justify-center"
    >
      <button
        class="font-medium text-(--primary) transition hover:text-(--primary-hover)"
        @click="expanded = !expanded"
      >
        {{ expanded ? 'Свернуть' : 'Показать больше' }}
      </button>
    </div>
  </div>
</template>
