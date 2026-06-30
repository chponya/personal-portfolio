<script setup lang="ts">
import avatar from  '@/assets/images/avatar-mizuki.jpg'
</script>

<template>
  <section
    id="hero"
    class="card pl-15 pr-0 flex h-[500px] items-center"
  >
    <div class="max-w-lg">
      <p class="mb-4 text-lg">
        Привет! Я
      </p>

      <h1 class="mb-3 text-6xl font-name">
        Соня
      </h1>

      <h2 class="mb-6 text-3xl font-semibold text-(--primary)">
        Frontend Developer
      </h2>

      <p class="mb-8 w-[300px] text-(--text-light)">
        Создаю понятные и красивые интерфейсы
        для веб-приложений.
      </p>

      <div class="flex gap-4">
        <a
          href="https://github.com/chponya"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-xl bg-(--primary) !text-white px-6 py-3  transition hover:bg-(--primary-hover)"
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
      class="ml-auto h-full w-[950px] object-cover fade-left"
    />
  </section>
</template>
