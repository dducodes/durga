<template>
    <div class="icon-container">
        <a @click="downloadResume" class="icon" title="Resume" style="cursor: pointer;">
            <img class="w-6 h-6 md:w-8 md:h-8" :src="$baseUrl + 'skills-img/Resume.svg'"/> 
        </a>
        <a href="mailto:durgabgf@gmail.com" target="_blank" class="icon" title="Email">
            <img class="w-6 h-6 md:w-8 md:h-8" :src="$baseUrl + 'skills-img/Email.svg'" />
        </a>
        <a href="https://www.linkedin.com/in/durga-chandrasekaran/" target="_blank" class="icon" title="LinkedIn">
            <img class="w-6 h-6 md:w-8 md:h-8" :src="$baseUrl + 'skills-img/LinkedIn.svg'" />
        </a>
        <a href="https://github.com/dducodes" target="_blank" class="icon" title="Github">
            <img class="w-6 h-6 md:w-8 md:h-8" :src="$baseUrl + 'skills-img/Github2.svg'" />
        </a>
    </div>
</template>

<script>
export default {
    name: "SocialIcons",
    methods: {
        downloadResume() {
            const link = document.createElement('a');
            link.href = this.$baseUrl + 'personal-assests/Durga_DO_Chandrasekaran_Resume.pdf';
            link.download = 'Durga_Chandrasekaran_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
};
</script>

<style scoped>
.icon-container {
    display: flex;
    gap: 20px;
}

.icon {
    width: 50px;
    height: 50px;
    background-color: #b1b1b1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.3s ease;
    text-decoration: none;
}

.icon:hover {
    transform: scale(1.1);
}

.icon i {
    color: #555;
    font-size: 24px;
}

/* revert to original icon image sizing: 30x30 by default */
.icon img {
    width: 30px;
    height: 30px;
    object-fit: contain;
}

/* slightly smaller icons on narrow mobile screens */
@media (max-width: 420px) {
  .icon {
    width: 44px;
    height: 44px;
  }
  .icon img {
    width: 26px;
    height: 26px;
  }
}
</style>