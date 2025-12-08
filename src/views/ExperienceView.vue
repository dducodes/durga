<template>
  <div class="px-5 py-5 md:px-12 md:py-5 text-left text-amber-50 mx-3">
    <article data-page="about">
      <header>
        <div
          class="text-2xl font-bold text-blue-300 mb-10 fadein-bot title-section flex items-center justify-center flex-col">
          <h4>Past Experiences</h4>
          <h4 class="text-base font-normal text-white">
            Explore my past internships and what I have taken away from each of them!</h4>
        </div>
      </header>
      <section>
        <div>
          <div class="grid grid-cols-1 gap-4 pb-32 md:grid-cols-1 lg:grid-cols-1 fade-zoom-in">
            <div v-for="item in items" :key="item.id">
              <div
                class="experience-card flex flex-col gap-4 rounded-lg bg-[#1e1e1f] hover:bg-[#282828] border border-[#383838] p-6 text-amber-50 transition-all uration-200 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl">
                <!-- Header with Title and Period -->
                <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div class="flex-1">
                    <h3 class="text-xl md:text-l font-bold text-blue-300">{{ item.name }}</h3>
                    <p class="text-sm md:text-base font-semibold text-gray-300">{{ item.company }}</p>
                    <p class="text-xs md:text-sm text-gray-400">{{ item.location }}</p>
                  </div>
                  <div class="text-right">
                    <p class="text-xs md:text-sm font-medium text-blue-300">{{ item.period }}</p>
                  </div>
                </div>

                <!-- Description Points -->
                <div class="flex flex-col gap-2">
                  <ul class="list-disc list-inside space-y-2">
                    <li v-for="(desc, index) in item.description" :key="index" class="text-sm md:text-base text-gray-300 leading-relaxed">
                      {{ desc }}
                    </li>
                  </ul>
                </div>

                <!-- Reflection Link (if available) -->
                <div v-if="item.reflection !== 'null'" class="flex justify-end pt-2">
                  <a :href="item.reflection" target="_blank" rel="noreferrer"
                    title="View Internship Reflection" class="text-blue-300 hover:text-blue-200 transition-colors flex items-center gap-2">
                    <svg stroke="currentColor"
                      fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                      height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    <span class="text-xs md:text-sm">View Reflection</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  </article>
</div></template>

<script>
import Experiences from "../api/ExperienceViewAPI";

export default {
  name: "ExperienceViewAPI",
  mixins: [Experiences],
};
</script>

<style src="../styles/ExperienceView.css"></style>