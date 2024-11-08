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
                    <img src="https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-1/438030285_1493774881567830_5386508072253652943_n.jpg?stp=c2.7.666.665a_dst-jpg_s320x320&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=nGgi6atTmEkQ7kNvgE5g_Qj&_nc_zt=24&_nc_ht=scontent.fdac24-5.fna&_nc_gid=AXwJ_wSN3-H6SI7N7wY2Llw&oh=00_AYARMAuoR3lkWIWKQogsnNPxM1Kw817JKKg3yXPppliLmA&oe=67339192" class="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-primary">
                    <div>
                        <h3 class="text-sm lg:text-base font-medium text-gray-800 dark:text-gray-300">Tushar Imram</h3>
                        <p class="text-xs lg:text-sm text-gray-500 dark:text-gray-400 font-normal">Software Engineer</p>
                    </div>
                </div>
                
                <ul class="flex items-center gap-1 lg:gap-2" >
                    <li>
                        <a href="https://www.facebook.com/tusharimran.online" target="_blank">
                            <Icon name="uit:linkedin-alt" class="text-xl lg:text-2xl text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/tusharimran.online" target="_blank">
                            <Icon name="mdi:github-face" class="text-xl lg:text-2xl text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/tusharimran.online" target="_blank">
                            <Icon name="uit:facebook-f" class="text-xl lg:text-2xl text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100"   />
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