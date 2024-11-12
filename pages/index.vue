<template>
    <span class="gradient"></span>
    <HomeHeroSection />
    <HomeServiceSection />
    <HomeTechnologiesSection />
</template>

<style scoped>
.gradient{
    background: radial-gradient(50% 50% at 50% 50%, #11DC82 0, #00dc8200);
    filter: blur(180px);
    height: 30vh;
    opacity: 1;
    position: fixed;
    top: 30vh;
    width: 100%;
    z-index: 0;
}
</style>