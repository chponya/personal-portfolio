<script setup lang="ts">
interface Props {
  hackathon: {
    period: string
    title: string
    description: string
  }
}

defineProps<Props>()
</script>

<template>
  <div
    class="flex w-64 flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6"
  >
    <p class="mb-3 text-sm font-semibold text-violet-500">
      {{ hackathon.period }}
    </p>

    <h3 class="mb-2 text-base font-semibold text-slate-900">
      {{ hackathon.title }}
    </h3>

    <p class="text-sm leading-6 text-slate-500">
      {{ hackathon.description }}
    </p>
  </div>
</template>