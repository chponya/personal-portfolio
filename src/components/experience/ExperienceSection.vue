<script setup lang="ts">
import { experience } from '@/data/experience'
import ExperienceCard from './ExperienceCard.vue'
</script>

<template>
  <section
    id="experience"
    class="card section"
  >
    <h2 class="section-title">
      Опыт
    </h2>

    <div class="flex gap-1 overflow-x-auto pb-2">
      <ExperienceCard
        v-for="item in experience"
        :key="item.title"
        :period="item.period"
        :title="item.title"
        :description="item.description"
      />
    </div>
  </section>
</template>