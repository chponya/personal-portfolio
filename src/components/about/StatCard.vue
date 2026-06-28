<script setup lang="ts">
interface Props {
  stat: {
    value: string
    label: string
  }
}

defineProps<Props>()
</script>

<template>
  <div
    class="w-38 rounded-2xl flex-col align-center border border-slate-200 bg-slate-50 p-6 pb-4"
  >
    <h3 class="mb-2 text-3xl font-bold text-violet-500">
      {{ stat.value }}
    </h3>

    <p class="text-sm text-slate-500">
      {{ stat.label }}
    </p>
  </div>
</template>