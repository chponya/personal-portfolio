<script setup lang="ts">
import { ref } from 'vue'
import emblaCarouselVue from 'embla-carousel-vue'

import { hackathons } from '../../data/hackathons'

import HackathonCard from './HackathonCard.vue'
import HackathonModal from './HackathonModal.vue'

const [emblaRef, emblaApi] = emblaCarouselVue()
void emblaRef

const modalOpen = ref(false)

function prev() {
  emblaApi.value?.scrollPrev()
}

function next() {
  emblaApi.value?.scrollNext()
}
</script>

<template>
  <div class="relative">

    <button
      class="absolute left-0 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow"
      @click="prev"
    >
      ←
    </button>

    <div
      ref="emblaRef"
      class="overflow-hidden"
    >
      <div class="flex">

        <div
          v-for="hackathon in hackathons"
          :key="hackathon.project"
          class="min-w-1/4 flex-none px-3"
        >
          <HackathonCard
            :hackathon="hackathon"
            @open="modalOpen = true"
          />
        </div>

      </div>
    </div>

    <button
      class="absolute right-0 top-1/2 z-10 translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow"
      @click="next"
    >
      →
    </button>

    <HackathonModal
      :open="modalOpen"
      @close="modalOpen = false"
    />
  </div>
</template>
