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
                <select class="outline-none cursor-pointer">
                    <option selected>English, USD</option>
                    <option value="">France, FRK</option>
                    <option value="">Russain, RUB</option>
                </select>
                <div class="flex gap-2 justify-between w-[33%]">
                    <h1>Ship to</h1>
                    <div class="flex flex-col gap-[2px] absolute pl-14 pt-2">
                        <img v-if="fra" @click="FRA" class="w-[22] h-4 rounded-sm border border-black hover:cursor-pointer"
                            src="../assets/images/flags/fra.png" alt="">
                        <img v-if="usa" @click="USA" class="w-[22] h-4 rounded-sm border border-black hover:cursor-pointer"
                            src="../assets/images/flags/usa.png" alt="">
                        <img v-if="rus" @click="RUS" class="w-[22] h-4 rounded-sm border border-black hover:cursor-pointer"
                            src="../assets/images/flags/rus.png" alt="">
                    </div>
                    <img v-if="on" @click="dropDown" class="hover:cursor-pointer" src="../assets/icons/down.svg" alt="">
                    <img v-else @click="dropDown1" class="hover:cursor-pointer" src="../assets/icons/up.svg" alt="">
                </div>
            </div>
        </nav>
    </section>
</template>

<script setup>
const fra = ref(true);
const FRA = () => {
    usa.value = false;
    rus.value = false;
};
const usa = ref(false);
const USA = () => {
    usa.value = true;
    fra.value = false;
    rus.value = false;
};
const rus = ref(false);
const RUS = () => {
    rus.value = true;
    fra.value = false;
    usa.value = false;
};
const on = ref(true);
const dropDown = () => {
    on.value = true;
    fra.value = true;
    usa.value = true;
    rus.value = true;
};
const dropDown1 = () => {
    on.value = false;
    FRA();
};
</script>

<style lang="scss" scoped></style>