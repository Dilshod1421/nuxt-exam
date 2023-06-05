<template>
    <header class="w-full fixed py-5 px-32 border-b bg-white z-50">
        <nav class="h-[40px] flex items-center justify-between">
            <nuxt-link to="/"><img src="../assets/icons/logo.svg" alt="logo"></nuxt-link>
            <ul class="h-[42px] w-[20%] flex justify-between items-center">
                <li class="flex h-full items-center p-1 hover:border-b-2 border-gray-500" v-for="el in profile"
                    :key="el.id">
                    <nuxt-link class="h-full flex flex-col items-center justify-between" :to="el.path">
                        <img :src="el.icon" alt="">
                        <h1 class="text-[#8B96A5] text-[12px]">{{ el.title }}</h1>
                    </nuxt-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>