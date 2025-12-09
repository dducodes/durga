<template>
    <div class="icon-container">
        <a href="/personal assests/Durga_DO_Chandrasekaran_Resume.pdf" download="Durga_Chandrasekaran_Resume" class="icon" title="Resume">
            <img src="/skills-img/Resume.svg"/> 
        </a>
        <a href="mailto:durgac.d.2023@scis.smu.edu.sg.com" target="_blank" class="icon" title="Email">
            <img src="/skills-img/Email.svg" />
        </a>
        <a href="https://www.linkedin.com/in/durga-chandrasekaran/" target="_blank" class="icon" title="LinkedIn">
            <img src="/skills-img/LinkedIn.svg" />
        </a>
        <a href="https://github.com/dducodes" target="_blank" class="icon" title="Github">
            <img src="/skills-img/Github2.svg" />
        </a>
    </div>
</template>

<script>
export default {
    name: "SocialIcons",
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

img {
    width: 30px;
    height: 30px;
}
</style>