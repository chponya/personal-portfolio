<script setup lang="ts">
interface Props {
    period: string
    title: string
    description: string
}

defineProps<Props>()
</script>

<template>
  <div
    class="flex w-64 flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6"
  >
    <p class="mb-3 text-sm font-semibold text-(--primary)">
      {{ period }}
    </p>

    <h3 class="mb-2 text-base font-semibold text-slate-900">
      {{ title }}
    </h3>

    <p class="text-sm leading-6 text-slate-500">
      {{ description }}
    </p>
  </div>
</template>