<template>
    <div class="dark:bg-gray-950 bg-gray-50">
        <Header />
            <slot />
        <Footer /> 
    </div>
</template>

<style>
html {
    scroll-behavior: smooth;
}
</style>