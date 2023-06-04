<template>
    <div class="pt-20">
        <div class="container mx-auto flex flex-col px-32 gap-7 py-16">
            <div class="flex w-full justify-between">
                <div class="w-[72%] bg-white border rounded-lg">
                    <MyCartCard1 v-for="el in 3" :key="el" />
                    <div class="w-full flex justify-between items-center p-5">
                        <button class="bg-[#127FFF] rounded-lg hover:bg-[#1371dd]"><nuxt-link to="/"
                                class="flex text-white rounded-lg py-1 px-4 items-center gap-3"><span><img
                                        src="~/assets/icons/left1.svg" alt=""></span>Back to
                                shop</nuxt-link></button>
                        <button class="text-[#0D6EFD] rounded-lg border py-1 px-2 hover:border-[#0D6EFD]">Remove
                            all</button>
                    </div>
                </div>
                <div class="w-[24%] flex flex-col gap-3">
                    <div class="w-full bg-white border rounded-lg p-5">
                        <h1 class="pb-3">Have a coupon?</h1>
                        <div class="flex w-full border rounded-lg">
                            <input
                                class="pl-[10px] border hover:border-gray-400 rounded-l-lg py-1 outline-none focus:ring-1 ring-gray-400"
                                type="text" placeholder="Add coupon">
                            <button
                                class="w-[100%] rounded-r-lg border font-medium hover:border-[#0D6EFD] text-[#0D6EFD] focus:ring-1 ring-[#0b5dd9] px-3 py-1">Apply</button>
                        </div>
                    </div>
                    <MyCart2 />
                </div>
            </div>
            <MyCart3 />
            <div class="save_or_later bg-white rounded-md border w-full p-5">
                <h1 class="font-semibold text-xl pb-5">Saved or later</h1>
                <div class="flex w-full items-center justify-between">
                    <MyCartCard2 v-for="el in 4" :key="el" />
                </div>
            </div>
            <div class="bg-[#237CFF] w-full h-[120px] rounded-lg flex items-center justify-between p-7">
                <div class="text-white">
                    <h1 class="font-semibold text-2xl">Super discount on more than 100 USD</h1>
                    <h2>Have you ever finally just write dummy info</h2>
                </div>
                <button
                    class="text-white bg-[#FF9017] hover:bg-[#ff8400] focus:ring-2 ring-[#da780e] rounded-md py-2 px-5 font-medium">Shop
                    now</button>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped></style>