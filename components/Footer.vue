<template>
    <footer class="w-full">
        <section class="bg-white w-full flex items-center px-32 pt-10 pb-24 justify-between">
            <div class="w-[22%]">
                <img src="../assets/icons/logo.svg" alt="">
                <p class="text-justify text-base text-[#505050] py-5">Best information about the company gies here but now
                    lorem
                    ipsum is</p>
                <div class="icons flex items-center gap-3 h-[31px]">
                    <img src="../assets/icons/facebook.svg" alt="">
                    <img src="../assets/icons/twitter.svg" alt="">
                    <img src="../assets/icons/linkedin.svg" alt="">
                    <img src="../assets/icons/instagram.svg" alt="">
                    <img src="../assets/icons/youtube.svg" alt="">
                </div>
            </div>
            <div class="text-justify">
                <h1>About</h1>
                <ul>
                    <li>About Us</li>
                    <li>Find store</li>
                    <li>Categories</li>
                    <li>Blogs</li>
                </ul>
            </div>
            <div class="text-justify">
                <h1>Partnership</h1>
                <ul>
                    <li>About Us</li>
                    <li>Find store</li>
                    <li>Categories</li>
                    <li>Blogs</li>
                </ul>
            </div>
            <div class="text-justify">
                <h1>Information</h1>
                <ul>
                    <li>Help Center</li>
                    <li>Money Refund</li>
                    <li>Shipping</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div class="text-justify">
                <h1>For users</h1>
                <ul>
                    <li>Login</li>
                    <li>Register</li>
                    <li>Settings</li>
                    <li>My orders</li>
                </ul>
            </div>
            <div class="text-justify">
                <h1>Get up</h1>
                <div class="bg-[#1C1C1C] rounded-lg flex p-2 mb-2 hover:bg-[#353434] hover:cursor-pointer">
                    <img src="../assets/icons/appstore.svg" alt="">
                </div>
                <div class="bg-[#1C1C1C] rounded-lg flex p-2 hover:bg-[#353434] hover:cursor-pointer">
                    <img src="../assets/icons/playmarket.svg" alt="">
                </div>
            </div>
        </section>
        <div class="w-full bg-[#EFF2F4]">
            <div class="container flex items-center justify-between mx-auto px-32 pt-5 pb-3">
                <h1 class="text-[#606060]">© 2023 Ecommerce.</h1>
                <div class="flex gap-1 items-center">
                    <img class="w-[24px] h-[17px]" src="../assets/images/flags/usa.png" alt="usa">
                    <select class="bg-[#EFF2F4] rounded-lg outline-none hover:cursor-pointer hover:bg-white">
                        <option selected>English</option>
                        <option value="">China</option>
                        <option value="">Deutsch</option>
                    </select>
                </div>
            </div>
        </div>
        <hr class="w-full border-4 border-[#bef1e5]">
    </footer>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.icons img:hover {
    cursor: pointer;
    border: 1px solid black;
    border-radius: 50%;
}

h1 {
    font-weight: 500;
    padding-bottom: 8px;
}

li {
    color: #8B96A5;
    font-weight: 400;
}
</style>