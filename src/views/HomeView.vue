<template>
  <main
    class="mt-10 md:mt-1 flex flex-col-reverse gap-8 items-center md:flex-row md:gap-16 md:justify-center min-h-[65vh] md:min-h-[80vh]">
    <div class="space-y-2 text-center md:text-left px-10">
      <p class="text-blue-300">Hello World, I'm</p>
      <h1 class="text-4xl font-bold md:text-5xl text-white fadein-up">Durga</h1>
      <div class="py-2">
        <h1
        class="typewrite text-xl font-semibold md:text-2xl fadein-up bg-gradient-to-r from-blue-300 to-emerald-400 text-transparent bg-clip-text"
        ref="typewriter">
          <span class="wrap">{{ txt }}</span>
        </h1>
      </div>
      <p class="text-white pr-4 fade-in-from-left">Welcome to My Website! <span class="wave">👋🏼</span></p>
      <br>
    </div>
    <div class="flex justify-center md:justify-start fadein-right"><img alt="avatar" fetchpriority="high" width="300" height="300" decoding="async" data-nimg="1"
        class="w-96 h-96 rounded-full object-cover border-4 border-blue-300 pict" src="/personal assests/Durga_Chandrasekaran_Photo.jpg">
    </div>
  </main>
</template>

<!-- For the different titles used -->
<script>
import Typewriter from "../api/HomeViewAPI";

export default {
  name: "HomeViewAPI",
  mixins: [Typewriter], 
};
</script>

<!-- Style sheet -->
<style src="../styles/HomeView.css"></style>



