<template>
    <div class="pt-20">
        <Navbar />
        <MobileFilterPath />
        <div class="container mx-auto px-32 flex gap-5">
            <MobileSidebar class="overflow-y-auto max-h-[71vh]" />
            <div class="w-[80%] flex flex-col gap-5 overflow-y-auto max-h-[71vh] pb-52">
                <MobileFilter class="flex" />
                <div class="flex flex-wrap w-full gap-2">
                    <div v-for="el in 6" :key="el">
                        <MobileFilterBtn />
                    </div>
                    <button class="text-[#0D6EFD] border-none hover:text-[#366bba]">Clear all filter</button>
                </div>
                <div class="w-full flex flex-wrap justify-between">
                    <MobileCard v-for="el in 9" :key="el" />
                </div>
                <div>
                    <div class="pages flex items-center justify-center border border-[#DEE2E7] rounded-md float-right">
                        <div class="border rounded-l-md hover:cursor-pointer">
                            <img src="~/assets/icons/left.svg" alt="">
                        </div>
                        <div class="border hover:cursor-pointer">
                            <h1 class="font-medium">1</h1>
                        </div>
                        <div class="border rounded-r-md hover:cursor-pointer">
                            <img src="~/assets/icons/right1.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Subscribe />
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.pages div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 40px;
    background: white;
}
</style>