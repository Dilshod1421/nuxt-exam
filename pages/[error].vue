<template>
    <div class="container mx-auto px-32 py-32 items-center justify-between flex">
        <img src="../assets/images/error.png" alt="">
        <div class="flex flex-col gap-4 pr-10">
            <h1 class="font-medium text-[#47B886] text-[60px]">404 not found</h1>
            <h2 class="text-[#89CCAA] text-[28px]">Looking something we don't serve?</h2>
            <nuxt-link to="/">
                <h1 class="w-[35%] h-8 text-[23px] text-[#295040] hover:border-b-2 border-[#295040]">back to home</h1>
            </nuxt-link>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'error'
});
</script>

<style lang="scss" scoped></style>