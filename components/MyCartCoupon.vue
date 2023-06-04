<template>
    <div class="w-full gap-5 border bg-white rounded-lg p-5 flex flex-col shadow-sm shadow-[rgba(56,56,56,0.1)]">
        <div>
            <div class="flex items-center justify-between">
                <h1 class="text-[#505050]">Subtotal:</h1>
                <h1 class="text-[#505050]">$1403.97</h1>
            </div>
            <div class="flex items-center justify-between">
                <h1 class="text-[#505050]">Discount:</h1>
                <h1 class="text-[#FA3434]">- $60.00</h1>
            </div>
            <div class="flex items-center justify-between">
                <h1 class="text-[#505050]">Tax:</h1>
                <h1 class="text-[#00B517]">+ $14.00</h1>
            </div>
        </div>
        <hr>
        <div class="flex items-center justify-between">
            <h1 class="font-semibold">Total:</h1>
            <h1 class="text-xl font-semibold">$1357.97</h1>
        </div>
        <button
            class="w-full text-white bg-[#00B517] rounded-[8px] py-4 font-medium text-lg hover:bg-[#03a018] focus:ring-1 ring-[#048a16]">Checkout</button>
        <div class="pays flex items-center w-full justify-evenly">
            <div>
                <img src="~/assets/icons/a-express.svg" alt="">
            </div>
            <div>
                <img src="~/assets/icons/master.svg" alt="">
            </div>
            <div>
                <img src="~/assets/icons/paypal.svg" alt="">
            </div>
            <div>
                <img src="~/assets/icons/visa.svg" alt="">
            </div>
            <div>
                <img src="~/assets/icons/applepay.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.pays div {
    width: 34px;
    height: 22px;
    border: 1px solid rgb(178, 176, 176);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
        cursor: pointer;
    }
}
</style>