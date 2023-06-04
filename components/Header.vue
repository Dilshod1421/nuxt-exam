<template>
    <header class="w-full fixed py-5 px-32 border-b bg-white z-50">
        <nav class="h-[40px] flex items-center justify-between">
            <nuxt-link to="/"><img src="../assets/icons/logo.svg" alt="logo"></nuxt-link>
            <form v-if="name == 'index' || name == 'mobiles'" @submit.prevent
                class="w-[48%] flex h-[40px] border border-[#0D6EFD] rounded-lg">
                <input type="text" name="search" id="search" placeholder="Search"
                    class="w-[60%] h-full rounded-l-lg outline-none pl-3 focus:ring-2 ring-[#166ff4]">
                <select
                    class="h-full text-center w-[23%] outline-none border-l border-[#0D6EFD] focus:ring-2 ring-[#166ff4]">
                    <option selected>All category</option>
                    <option v-for="el in category" :key="el.id">{{ el.name }}</option>
                </select>
                <button type="submit"
                    class="h-full w-[17%] bg-[#0D6EFD] text-white rounded-r-lg focus:ring-2 ring-[#166ff4] hover:bg-[#1464db]">Search</button>
            </form>
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

<script setup>
import { profile } from '~/constants/profile';
const { useCategories } = useDatas();
const category = useCategories();
const { name } = useRoute();
</script>

<style lang="scss" scoped></style>