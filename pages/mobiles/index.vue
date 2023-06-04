<template>
    <div class="pt-20">
        <Navbar />
        <div class="my-6 px-32">
            <ul class="categories flex items-center gap-3">
                <li>
                    <h1>Home</h1>
                    <img src="~/assets/icons/right.svg" alt="">
                </li>
                <li>
                    <h1>Clothings</h1>
                    <img src="~/assets/icons/right.svg" alt="">
                </li>
                <li>
                    <h1>Men's wear</h1>
                    <img src="~/assets/icons/right.svg" alt="">
                </li>
                <li>
                    <h1>Summer clothing</h1>
                </li>
            </ul>
        </div>
        <div class="container mx-auto px-32 flex gap-5">
            <Sidebar class="overflow-y-auto max-h-[71vh]" />
            <div class="w-[80%] flex flex-col gap-5">
                <div class="w-full h-16 bg-white rounded-lg border flex items-center justify-between pl-5 pr-3">
                    <h1>12,911 items in <strong>Mobile accessory</strong></h1>
                    <div class="flex items-center gap-4">
                        <input class="w-5 h-5 rounded-lg hover:cursor-pointer focus:ring-1 ring-blue-400" type="checkbox">
                        <h1>Verified only</h1>
                        <select class="outline-none border rounded-lg py-1 px-2 hover:cursor-pointer">
                            <option selected>Featured</option>
                            <option>Brands</option>
                            <option>Price range</option>
                            <option>Condition</option>
                            <option>Ratings</option>
                            <option>Manufacturer</option>
                        </select>
                        <div class="flex rounded-lg">
                            <div class="bg-[#DEE2E7] p-2 border hover:cursor-pointer rounded-l-md hover:bg-[#d8d8d9]">
                                <img src="~/assets/icons/menu1.svg" alt="">
                            </div>
                            <div class="bg-white p-2 border hover:cursor-pointer rounded-r-md hover:bg-slate-50">
                                <img src="~/assets/icons/menu2.svg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-wrap w-full gap-2">
                    <div v-for="el in 10" :key="el">
                        <FilterBtn />
                    </div>
                    <button class="text-[#0D6EFD] border-none hover:text-[#366bba]">Clear all filter</button>
                </div>
                <div class="w-full flex flex-wrap justify-between">
                    <Card6 v-for="el in 9" :key="el" />
                </div>
            </div>
        </div>
        <Subscribe />
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.categories li {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    :hover {
        cursor: pointer;
    }

    img {
        padding-top: 4px;
    }

    h1 {
        color: #8B96A5;
    }
}
</style>