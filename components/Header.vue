<script setup lang="ts"> 
const route = useRoute();   
const colorMode = useColorMode();
const changeColor = () => (colorMode.preference = (colorMode.value === 'light' ? 'dark' : 'light'));
</script>
<template>
    <nav class="backdrop-blur-md py-3 border-b border-slate-200 dark:border-slate-700  fixed top-0 left-0 right-0 z-50">
        <Container>
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-2 lg:gap-3">
                    <div>
                        <h3 class="text-sm lg:text-base font-medium text-gray-800 dark:text-gray-300">Sumona Eva</h3>
                        <p class="text-xs lg:text-sm text-gray-500 dark:text-gray-400 font-normal">Software Engineer</p>
                    </div>
                </div>
                
                <ul class="flex items-center gap-1 lg:gap-2" >
                    <li>
                        <a href="https://www.github.com/sumona-eva" target="_blank">
                            <Icon name="mdi:github-face" class="text-xl lg:text-2xl text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100" />
                        </a>
                    </li>
                    <li>
                        <button @click="changeColor">
                            <Icon name="material-symbols:light-mode-outline-rounded" v-if="colorMode.value === 'dark'" class="text-lg lg:text-xl text-gray-300"  />
                            <Icon name="material-symbols-light:dark-mode-outline" v-else class="text-xl lg:text-2xl text-gray-500" />
                        </button>
                    </li>
                </ul>
            </div>
        </Container> 
    </nav>
</template>