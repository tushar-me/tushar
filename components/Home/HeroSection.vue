<template>
     <section class="lg:py-20">
        <Container>
            <div class="w-full h-screen flex items-center justify-center ">
                <div class="max-w-6xl mx-auto realtive z-10">        
                    <h1 class="text-2xl lg:text-8xl text-center font-normal  text-gray-900 dark:text-gray-200 mb-4 lg:mb-7">Building the Future of Web <span>Experiences</span></h1>
                    <p class="text-sm text-gray-700 dark:text-gray-400 text-centter max-w-4xl mx-auto text-center font-normal tracking-wide">I'm Tushar Imran, a passionate software engineer dedicated to designing, developing, and optimizing digital solutions that elevate user experiences and drive growth.</p>

                    <div class="flex items-center justify-center py-10 gap-5">
                        <a href="#get-started" class="bg-primary py-2 px-3 lg:px-4 lg:py-2  rounded-md text-white text-xs lg:text-base font-normal flex items-center gap-2">
                            <Icon name="octicon:rocket-24" />
                            Get Started
                        </a>
                        <NuxtLink to="/cover-letter" class="border border-primary  text-primary px-3 py-2 lg:px-4 lg:py-2 rounded-md  flex items-center gap-2 hover:bg-primary text-xs lg:text-base   hover:text-white">
                            <Icon name="mdi:cloud-download-outline"  />
                            Download CV 
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </Container>
     </section>
</template>