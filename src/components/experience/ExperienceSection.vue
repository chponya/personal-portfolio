<script setup lang="ts">
import { hackathons } from '../../data/experience'
import HackathonCard from './ExperienceCard.vue'
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
        <HackathonCard
          v-for="hackathon in hackathons"
          :key="hackathon.title"
          :hackathon="hackathon"
        />
    </div>
  </section>
</template>
