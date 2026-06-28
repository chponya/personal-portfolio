<script setup lang="ts">
defineProps<{
  open: boolean
}>()

const emit = defineEmits(['close'])
</script>

<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      @click.self="emit('close')"
    >
      <div
        class="flex h-[500px] w-[900px] items-center justify-center rounded-3xl bg-white"
      >
        Модальное окно (заглушка)
      </div>
    </div>
  </Teleport>
</template>