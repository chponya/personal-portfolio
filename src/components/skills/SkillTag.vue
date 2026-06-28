<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <span
    class="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600 transition hover:bg-violet-100 hover:text-violet-600"
  >
    {{ label }}
  </span>
</template>