<template>
    <section class="w-full py-4 border-b bg-white px-32">
        <nav class="flex items-center justify-between">
            <div class="flex w-[51%] justify-between items-center gap-3">
                <img src="../assets/icons/menu.svg" alt="">
                <ul class="flex w-[95%] justify-between items-center">
                    <li>
                        <h1>All category</h1>
                    </li>
                    <li>
                        <h1>Hot offers</h1>
                    </li>
                    <li>
                        <h1>Gift boxes</h1>
                    </li>
                    <li>
                        <h1>Projects</h1>
                    </li>
                    <li>
                        <h1>Menu item</h1>
                    </li>
                    <li>
                        <select class="outline-none text-center">
                            <option selected>Help</option>
                            <option value="">For bayers</option>
                            <option value="">For suppliers</option>
                        </select>
                    </li>
                </ul>
            </div>
            <div class="w-[23%] flex justify-between items-center">
                <select class="outline-none">
                    <option selected>English, USD</option>
                    <option value="">Deutsch, DEM</option>
                    <option value="">Russain, RUB</option>
                </select>
                <div class="flex">
                    <h1>Ship to</h1>
                    <select class="outline-none">
                        <option selected>DEM</option>
                        <option>RUB</option>
                    </select>
                </div>
            </div>
        </nav>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
</style>