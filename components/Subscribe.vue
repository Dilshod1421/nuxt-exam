<template>
    <div class="bg-[#EFF2F4] w-full py-9 flex items-center justify-center">
        <div class="flex flex-col items-center gap-4">
            <div class="text-center">
                <h1 class="text-xl font-semibold">Subscribe on our newsletter</h1>
                <h2 class="text-[#606060]">Get daily news on upcoming offers from many suppliers all over the world</h2>
            </div>
            <form @submit.prevent class="flex gap-2 items-center">
                <img class="absolute ml-2" src="../assets/icons/email.svg" alt="">
                <input class="px-9 py-2 outline-none rounded-lg border" type="text" placeholder="Email">
                <button class="text-white bg-[#127FFF] hover:bg-[#1570d8] rounded-lg py-2 px-4 focus:ring-2 ring-[#166ff4]">Subscribe</button>
            </form>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>