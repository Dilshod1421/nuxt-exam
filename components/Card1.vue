<template>
    <div class="w-[15%] h-full border py-2 px-5 flex flex-col items-center justify-evenly">
        <div class="w-full h-[140px] flex items-center justify-center">
            <img :src="item.img" alt="img">
        </div>
        <div class="flex flex-col gap-1 items-center w-[100%]">
            <h1>{{ item.title }}</h1>
            <button class="text-[#EB001B] w-[60%] py-1 px-3 text-sm bg-[#FFE3E3] rounded-2xl flex items-center justify-center font-semibold">-{{ item.sale
            }}%</button>
        </div>
    </div>
</template>

<script setup>
const { item } = defineProps(['item']);
</script>

<style lang="scss" scoped></style>