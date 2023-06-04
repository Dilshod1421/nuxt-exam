<template>
    <div class="w-[23.5%] h-[200px] rounded-lg bg-white">
        <div
            class="absolute w-[55px] h-[55px] ml-48 mt-24 rounded-full border border-white bg-[#D1E7FF] flex items-center justify-center">
            <img :src="ex.icon" alt="">
        </div>
        <img class="w-full bg-[#242222] rounded-t-lg" :src="ex.img" alt="">
        <div class="p-5">
            <h1 class="font-semibold w-[60%]">{{ ex.title }}</h1>
        </div>
    </div>
</template>

<script setup>
const { ex } = defineProps(['ex']);
</script>

<style lang="scss" scoped></style>