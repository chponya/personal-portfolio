<script setup lang="ts">
import StatCard from './StatCard.vue'
import { stats } from '@/data/about'
</script>

<template>
  <section
    id="about"
    class="card section-card"
  >
    <h2 class="section-title">
      Обо мне
    </h2>

    <div class="flex items-start gap-12 border-t border-slate-200 pt-8">
      
      <!-- Левая часть -->
      <div class="basis-2/5">
        <p class="leading-8 text-slate-600">
          Я frontend-разработчик, который любит создавать
          современные, красивые и удобные интерфейсы.
          Постоянно изучаю новые технологии, участвую
          в хакатонах и учебных проектах, а также
          развиваюсь в области UI/UX.
        </p>
      </div>

      <!-- Правая часть -->
      <div class="basis-3/5">
        <div class="grid grid-cols-4 gap-5">
          <StatCard
            v-for="item in stats"
            :key="item.label"
            :stat="item"
          />
        </div>
      </div>

    </div>
  </section>
</template>
