<template>
    <div class="w-[20%] mb-6 flex items-center gap-3">
        <img :src="co.flag" alt="">
        <div>
            <h1 class="font-normal">{{ co.name }}</h1>
            <h2 class="text-[#8B96A5] text-[13px]">{{ co.site }}</h2>
        </div>
    </div>
</template>

<script setup>
const { co } = defineProps(['co']);
</script>

<style lang="scss" scoped></style>