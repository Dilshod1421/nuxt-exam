<template>
    <div class="flex flex-col items-center">
        <div class="w-full p-5 flex justify-between">
            <div class="flex gap-3">
                <div class="w-20 h-20 p-2 flex items-center justify-centerv border rounded-lg">
                    <img class="w-full h-full" src="~/assets/images/shirt.png" alt="">
                </div>
                <div>
                    <h1 class="font-medium mb-2">T-shirts with multiple colors, for men and lady</h1>
                    <h2 class="text-[#8B96A5]">Size: medium, Color: blue, Material: Plastic</h2>
                    <h2 class="text-[#8B96A5]">Seller: Artel Market</h2>
                    <div class="flex gap-2 items-center mt-2">
                        <button class="text-[#FA3434] border rounded-lg py-1 px-2 hover:border-[#FA3434]">Remove</button>
                        <button class="text-[#0D6EFD] border rounded-lg py-1 px-2 hover:border-[#0D6EFD]">Save for
                            later</button>
                    </div>
                </div>
            </div>
            <div>
                <h1 class="font-medium flow-right pb-2 pl-16">$78.99</h1>
                <div class="w-[123px] flex items-center border py-1 rounded-lg hover:cursor-pointer px-2">
                    <h1 class="pr-1">Qty: </h1>
                    <input class="w-[65%] outline-none placeholder:text-black" type="number" placeholder="1">
                </div>
            </div>
        </div>
        <hr class="w-[96%]">
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>