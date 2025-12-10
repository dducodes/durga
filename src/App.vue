<template>
  <div class="max-w-7xl mx-auto flex flex-col relative">

    <nav class="max-w-7xl px-5 md:fixed top-0 z-[98] w-screen backdrop-blur-md bg-[#121212] bg-opacity-80 relative">
      <div class="container mx-auto flex flex-wrap items-center justify-between">
        <div class="flex md:order-2 fadein-bot"> 
          <a href="https://github.com/dducodes" target="_blank"><img class="w-9 rounded-full" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github"></a>
        </div>

        <!-- mobile hamburger -->
        <div class="md:hidden flex items-center">
          <button @click="mobileMenu = !mobileMenu" aria-label="Toggle menu" class="p-2 rounded-md text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div class="hidden md:flex justify-center items-center flex-1 md:order-none" id="mobile-menu-3">
          <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li>
              <router-link to="/"
                class="fadein-bot text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0"
                aria-current="page">Home</router-link>
            </li>
            <li>
              <router-link to="/about"
                class="fadein-bot fadein-1 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0">About</router-link>
            </li>
            <li>
              <router-link to="/portfolio"
                class="fadein-bot fadein-2 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0">Portfolio</router-link>
            </li>
            <li>
              <router-link to="/experience"
                class="fadein-bot fadein-3 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0 certificate">Experience</router-link>
            </li>
          </ul>
        </div>

        <!-- mobile menu dropdown -->
        <div v-if="mobileMenu" class="md:hidden absolute left-0 right-0 top-full bg-[#121212] bg-opacity-95 z-50">
          <ul class="flex flex-col p-4 space-y-2 text-white">
            <li><router-link @click="mobileMenu = false" to="/" class="block py-2">Home</router-link></li>
            <li><router-link @click="mobileMenu = false" to="/about" class="block py-2">About</router-link></li>
            <li><router-link @click="mobileMenu = false" to="/portfolio" class="block py-2">Portfolio</router-link></li>
            <li><router-link @click="mobileMenu = false" to="/experience" class="block py-2">Experience</router-link></li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="md:mt-[100px]">
      <router-view />
    </div>
  </div>
  <footer class="block md:hidden fixed bottom-0 left-0 right-0 rounded-t-3xl border border-[#383838] bg-[#121212] bg-opacity-80 backdrop-blur-md backdrop-opacity-90">
  <nav class="max-w-7xl px-5 z-[98] w-screen">
    <div class="container mx-auto flex items-center justify-between">

      <!-- CENTER MENU (mobile) -->
      <div class="flex md:hidden justify-center items-center flex-1" id="mobile-menu-3">
        <ul class="flex space-x-6 md:space-x-8 md:text-sm md:font-medium text-white">
          <li>
            <router-link to="/" class="fadein-bot">Home</router-link>
          </li>
          <li>
            <router-link to="/about" class="fadein-bot fadein-1">About</router-link>
          </li>
          <li>
            <router-link to="/portfolio" class="fadein-bot fadein-2">Portfolio</router-link>
          </li>
          <li>
            <router-link to="/experience" class="fadein-bot fadein-3">Experience</router-link>
          </li>
        </ul>
      </div>

      <!-- RIGHT ICON -->
      <div class="md:order-2 fadein-bot">
        <a href="https://github.com/dducodes" target="_blank">
          <img class="w-9 rounded-full" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="github">
        </a>
      </div>

    </div>
  </nav>
</footer>
</template>

<script>
export default {
  data() {
    return {
      mobileMenu: false
    }
  },
  methods: {
    redirectToHome() {
      this.$router.push('/')
    }
  },
}
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 5px; /* for vertical scrollbar */
  height: 5px; /* for horizontal scrollbar */
}

::-webkit-scrollbar-track {
  background: hsl(240, 1%, 17%);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background:rgb(188, 113, 218);
  border-radius: 5px;
}

::-webkit-scrollbar-button { width: 20px; }

body {
  font-family: 'Poppins', sans-serif;
  background: hsl(0, 0%, 7%);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  transition: color 0.3s;
}

nav a.router-link-exact-active {
  display: inline-flex;
  flex-direction: column;
  color: white;
  transition: color 0.3s;
}

nav a.router-link-exact-active::after {
  display: inline-block;
  content: "";
  margin-top: 0.08em;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: rgb(188, 113, 218);
}

nav a.router-link-exact-active:hover {
  color: white;
}


@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
