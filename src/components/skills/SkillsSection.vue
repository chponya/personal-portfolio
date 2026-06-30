<script setup lang="ts">
import SkillTag from './SkillTag.vue'
import { skills } from '@/data/skills'
</script>

<template>
  <section
    id="skills"
    class="card section"
  >
    <h2 class="section-title">
      Навыки
    </h2>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
      
      <!-- Frontend -->
      <div class="rounded-2xl border border-slate-200 p-6">
        <h3 class="mb-4 font-semibold">
          Frontend
        </h3>

        <div class="flex flex-wrap gap-2">
          <SkillTag
            v-for="item in skills.frontend"
            :key="item"
            :label="item"
          />
        </div>
      </div>

      <!-- Design -->
      <div class="rounded-2xl border border-slate-200 p-6">
        <h3 class="mb-4 font-semibold">
          Design
        </h3>

        <div class="flex flex-wrap gap-2">
          <SkillTag
            v-for="item in skills.design"
            :key="item"
            :label="item"
          />
        </div>
      </div>

      <!-- Other -->
      <div class="rounded-2xl border border-slate-200 p-6">
        <h3 class="mb-4 font-semibold">
          Other
        </h3>

        <div class="flex flex-wrap gap-2">
          <SkillTag
            v-for="item in skills.other"
            :key="item"
            :label="item"
          />
        </div>
      </div>

    </div>
  </section>
</template>
