<script setup lang="ts">
import avatar from  '../../assets/images/avatar.jpg'
</script>

<template>
  <section
    id="hero"
    class="card pl-15 pr-8 flex h-[500px] items-center justify-between"
  >
    <div class="max-w-lg">
      <p class="mb-4 text-lg">
        Привет! Я
      </p>

      <h1 class="mb-3 text-6xl font-bold">
        Соня
      </h1>

      <h2 class="mb-6 text-3xl font-semibold text-violet-500">
        Frontend Developer
      </h2>

      <p class="mb-8 text-slate-500">
        Создаю понятные и красивые интерфейсы
        для веб-приложений.
      </p>

      <div class="flex gap-4">
        <a
          href="https://github.com/chponya"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-xl bg-violet-500 px-6 py-3 text-white transition hover:bg-violet-600"
        >
          GitHub
        </a>

        <button
          class="rounded-xl border border-slate-300 px-6 py-3 transition hover:bg-slate-100"
        >
          Связаться
        </button>
      </div>
    </div>

    <img
      :src="avatar"
      alt="Avatar"
      class="h-full w-full rounded-lg object-cover"
    />
  </section>
</template>
