<script setup lang="ts">
interface Props {
  title: string
  project: string
  image: string
}

const { title, project, image } = defineProps<Props>()

const emit = defineEmits<{
  (e: 'open'): void
}>()
</script>

<template>
  <button
    class="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
    @click="emit('open')"
  >
    <img
      :src="image"
      :alt="project"
      class="h-44 w-full object-cover"
    >

    <div class="p-4 text-left">
      <h3 class="font-semibold">
        {{ title }}
      </h3>

      <p class="text-slate-600">
        {{ project }}
      </p>

      <span
        class="mt-3 inline-block rounded-full bg-violet-100 px-3 py-1 text-xs text-(--primary)"
      >
        PDF
      </span>
    </div>
  </button>
</template>