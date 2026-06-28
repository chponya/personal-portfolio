<script setup lang="ts">
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'

import HeroSection from './components/hero/HeroSection.vue'
import AboutSection from './components/about/AboutSection.vue'
import ExperienceSection from './components/experience/ExperienceSection.vue'
import HackathonSection from './components/hackathons/HackathonSection.vue'
import ProjectsSection from './components/projects/ProjectsSection.vue'
import SkillsSection from './components/skills/SkillsSection.vue'
</script>

<template>
  <Navbar />

  <main class="mx-auto mb-10 flex max-w-7xl flex-col gap-4 px-0 pb-5">
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <HackathonSection />
    <ProjectsSection />
    <SkillsSection />
  </main>

  <Footer />
</template>