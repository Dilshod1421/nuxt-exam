<template>
    <div class="w-full h-16 bg-white rounded-lg border flex py-2 items-center justify-between pl-5 pr-3">
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
</template>

<script setup>

</script>

<style lang="scss" scoped></style>