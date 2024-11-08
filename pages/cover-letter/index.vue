<script setup lang="ts">
useSeoMeta({
  title: 'Tushar Imran - Cover Letter',
  description: 'Software Engineer, Full Stack Developer, AI Enthusiast, Gamer.'
})
import {projects} from '~/stores/projects';
import {skills} from '~/stores/skills';
import { usePdfStore } from '~/stores/pdfStore';
const { loading, downloadPDF } = usePdfStore();
</script>

<template>
    <section v-if="loading" class="fixed w-full h-full top-0 left-0 backdrop-blur-xl z-50 flex flex-col gap-2 items-center justify-center">
        <Icon name="line-md:downloading-loop" class="text-5xl lg:text-8xl text-primary" />
        <p class="text-white">Downloading CV...</p>
    </section>
    <section class="py-24 overflow-x-scroll">
            <div class="flex items-center justify-center gap-3 fixed bottom-0 lg:bottom-6 left-1/2 -translate-x-1/2 bg-white py-3 px-4 rounded-md border border-primary z-10 shadow-xl shadow-primary/30 w-full lg:w-auto">
                    <NuxtLink to="/" class="border border-primary  text-primary px-3 py-1 rounded-md  flex items-center gap-2 hover:bg-primary hover:text-white">
                        <Icon name="ic:outline-home" />
                        Home
                    </NuxtLink>
                    <button  @click="downloadPDF" class=" bg-primary  px-3 py-1 rounded-md  flex items-center gap-2 text-white">
                        <Icon name="mdi:cloud-download-outline"  />
                        Download CV</button>
                </div>

        <div id="cv-section" :class="{'bg-white  w-[896px]  max-w-4xl mx-auto border border-gray-400 py-4' : !loading}">
            <header>    
                <h1 class="text-5xl font-bold text-gray-600 text-center mb-2">Tushar Imran</h1>
                <p class="text-sm text-gray-600 text-center">Full Stack Web Developer</p>

                <ul class="flex items-center justify-center space-x-4 py-3 " :class="{'mt-0' : loading}">
                    <li>
                        <a href="https://www.linkedin.com/in/tushar-me/" target="_blank" class="flex items-center space-x-2">
                            <Icon name="skill-icons:linkedin" class="text-xl" :class="{'mt-0' : !loading, 'mt-4' : loading}"  />
                            <span class="text-sm text-blue-500 font-medium underline">tushar-me</span>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:tusharimran.dev@gmail.com" class="flex items-center space-x-2">
                            <Icon name="skill-icons:gmail-light" class="text-xl" :class="{'mt-0' : !loading, 'mt-4' : loading}"/>
                            <span class="text-sm text-blue-500 font-medium underline">tusharimran.dev@gmail.com</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/tushar-me" target="_blank" class="flex items-center space-x-2">
                            <Icon name="logos:github-octocat"  class="text-xl" :class="{'mt-0' : !loading, 'mt-4' : loading}"/>
                            <span class="text-sm text-blue-500 font-medium underline">tushar-me</span>
                        </a>
                    </li>
                    <li>
                        <a href="tel:01624680562"  class="flex items-center space-x-2">
                            <Icon name="emojione-v1:mobile-phone"  class="text-xl" :class="{'mt-0' : !loading, 'mt-4' : loading}" />
                            <span class="text-sm text-blue-500 font-medium underline">+880 1624 680562</span>
                        </a>
                    </li>
                </ul>
            </header>
            <main class="flex px-5">
                <div class="w-2/3">
                    <h3 class="text-2xl text-gray-700 font-semibold mb-2">Skills</h3>
                    <div v-for="(item, index) in skills" :key="index" class="mb-4">
                        <h4 class="text-base text-gray-700 font-semibold mb-1">{{ item?.category }}</h4>
                        <ul class="flex flex-wrap gap-3">
                            <li class="flex items-center space-x-1" v-for="(skill, i) in item?.skills" :key="i">
                                <Icon :name="skill?.icon" :size="skill?.icon_size" :class="{'mt-3' : loading}" />
                                <span class="text-sm text-gray-600 font-medium">{{ skill?.name }}</span>
                            </li>
                        </ul>
                    </div>

                    <h3 class="text-2xl text-gray-700 font-semibold mb-2 mt-8">Exprieance</h3>
                    <div>
                        <div class="flex items-center justify-between">
                            <span class="text-sm">Software Developer</span>
                            <a href="https://creativetechpark.com/" target="_blank" class="text-sm text-blue-500 font-medium underline">Creative Tech Park</a>
                            <span class="text-sm">January 2024 - Present</span>
                        </div>
                        <div class="pl-4 py-2">
                            <p class="text-sm font-normal text-gray-600 mb-2 text-justify">Joined Creative Techpark as a Fullstack Software Developer specializing in Laravel and Vue.js, developing various projects and websites over the past 1 years.</p>

                            <p class="text-sm font-normal text-gray-600 mb-2 text-justify">Worked on several group company projects, including ERP software, CRM systems, e-commerce platforms, Learning Management Systems, Exam Control Systems, informative websites, and many more.</p>

                            <p class="text-sm font-normal text-gray-600 mb-2 text-justify">Developed single-vendor and multi-vendor e-commerce platforms, integrating payment gateways like Stripe, PayPal, SSLCommerz, wallet systems, and other complex functionalities.</p>
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center justify-between">
                            <span class="text-sm">Frontend Developer</span> 
                            <a href="https://ultradevs.com/" target="_blank" class="text-sm text-blue-500 font-medium underline">ultraDevs</a>
                            <span class="text-sm">July 2023 - September 2023</span>
                        </div>
                        <div class="pl-4 py-2">
                            <p class="text-sm font-normal text-gray-600 mb-2">Joined ultraDevs as a frontend developer specializing in HTML templates and built various client projects and websites.</p>
                        </div>
                    </div>
                </div>
                <div class="w-1/3 pl-5">
                    <h3 class="text-2xl text-gray-700 font-semibold mb-2">Portfolios</h3>
                    <div v-for="(project, index) in projects" :key="index" class="mb-3">
                        <div class="flex items-center justify-between">
                            <p class="text-sm text-gray-700 font-bold">{{ project?.name }}</p>
                            <p class="text-xs text-gray-600 font-normal">{{ project?.category }}</p>
                        </div>
                        <a :href="project?.url" target="_blank" class="text-sm text-blue-500 font-medium underline">{{ project?.url?.substring(0,30) + '...' }}</a>
                        <ul class="flex flex-wrap gap-2" v-if="project?.technologies">
                            <h4 class="text-sm text-gray-700 font-normal">Technologies:</h4>
                            <li class="flex items-center space-x-1" v-for="(item, i) in project?.technologies" :key="i">
                                <Icon :name="item?.icon" :size="item?.icon_size" :class="{'mt-3' : loading}" />
                                <span class="text-xs text-gray-600">{{ item?.name }}</span>
                            </li>
                        </ul>
                        <p v-else class="text-xs text-gray-600 font-normal flex items-center gap-1">
                            <Icon name="ic:sharp-verified" class="text-blue-500" />
                            {{ project?.description }}
                        </p>
                    </div>

                    <h3 class="text-2xl text-gray-700 font-semibold mb-2 mt-5">Education</h3>
                    <div class="mb-3">
                        <p class="text-sm text-gray-700 font-bold mb-1">Higher Secondary Certificate (HSC)</p>
                        <p class="text-sm text-gray-600 font-normal mb-1">Haji Jasim Uddin College</p>
                        <p class="text-sm text-gray-600 font-normal mb-1">4.67 Out Of 5.00</p>
                    </div>
                    <div>
                        <p class="text-sm text-gray-700 font-bold mb-1">Secondary School Certificate (SSC)</p>
                        <p class="text-sm text-gray-600 font-normal mb-1">Dublia High School</p>
                        <p class="text-sm text-gray-600 font-normal mb-1">4.17 Out Of 5.00</p>
                    </div>

                    <h3 class="text-2xl text-gray-700 font-semibold mb-2 mt-5">Training</h3>
                    <div class="mb-3">
                        <p class="text-sm text-gray-700 font-bold mb-1">Web Development with PHP and Laravel</p>
                        <a href="https://ostad.app/" target="_blank" class="text-sm text-blue-500 underline font-normal mb-1">Ostad</a>
                    </div>
                </div>
            </main>
        </div>
    </section>
</template>
