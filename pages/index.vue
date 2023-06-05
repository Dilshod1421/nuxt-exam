<template>
    <div class="pt-20">
        <Navbar />
        <div class="container mx-auto mt-6 px-32 flex flex-col gap-8">
            <section class="categories flex justify-between items-center p-3 w-full bg-[#FFFFFF] rounded-lg">
                <ul class="w-[21%]">
                    <li v-for="el in categories" :key="el.id"
                        class="rounded-lg p-2 hover:bg-[#E5F1FF] hover:cursor-pointer">
                        <nuxt-link class="item text-[#505050]" :to="el.path">{{ el.name }}</nuxt-link>
                    </li>
                </ul>
                <div class="w-[57%] h-full">
                    <div class="absolute pl-16 pt-16">
                        <h1 class="text-3xl">Latest trendting</h1>
                        <h1 class="text-4xl font-semibold">Electronic items</h1>
                        <button
                            class="bg-white py-2 px-3 mt-5 rounded-lg hover:bg-slate-100 focus:ring-2 ring-[#a3b3cb]">Learn
                            more</button>
                    </div>
                    <img class="w-full h-[384px]" src="../assets/images/electronics.png" alt="">
                </div>
                <div class="w-[19%] flex flex-col justify-between gap-4">
                    <div class="w-full flex flex-col justify-between gap-2 bg-[#E3F0FF] rounded-lg p-2">
                        <div class="flex w-full justify-evenly">
                            <img src="../assets/icons/user.svg" alt="">
                            <div>
                                <h1 class="font-semibold">Hi, user</h1>
                                <h1 class="font-semibold">let's get started</h1>
                            </div>
                        </div>
                        <button
                            class="bg-[#127FFF] hover:bg-[#167bee] font-semibold w-full flex justify-center items-center text-white py-2 rounded-lg focus:ring-2 ring-[#166ff4]">Join
                            now</button>
                        <button
                            class="font-semibold bg-white hover:bg-slate-50 border border-[#DEE2E7] w-full flex justify-center items-center text-[#127FFF] py-2 rounded-lg focus:ring-2 ring-[#bbc9df]">Log
                            in</button>
                    </div>
                    <div class="w-full p-3 text-white bg-[#F38332] rounded-lg">
                        <h1>Get US $10 off</h1>
                        <h1>with a new</h1>
                        <h1>suppier</h1>
                    </div>
                    <div class="w-full p-3 text-white bg-[#55BDC3] rounded-lg">
                        <h1>Send quetos with</h1>
                        <h1>supplier</h1>
                        <h1>preferences</h1>
                    </div>
                </div>
            </section>

            <section class="deals-and-offers bg-white w-full h-[240px] rounded-lg flex items-center border">
                <div class="p-5 h-full w-[25%] border-r">
                    <h1 class="text-xl font-semibold">Deals and offers</h1>
                    <h2 class="text-[rgb(139,150,165)] ">Hygiene equipments</h2>
                    <div class="flex gap-2 pt-5">
                        <div class="time">
                            <h1>04</h1>
                            <h2 class>Days</h2>
                        </div>
                        <div class="time">
                            <h1>13</h1>
                            <h2 class>Hour</h2>
                        </div>
                        <div class="time">
                            <h1>34</h1>
                            <h2 class>Min</h2>
                        </div>
                        <div class="time">
                            <h1>56</h1>
                            <h2 class>Sec</h2>
                        </div>
                    </div>
                </div>
                <DealsAndOffersCard v-for="el in tech" :key="el" :item="el" />
            </section>

            <section class="home-and-outdoor bg-white w-full rounded-lg flex items-center h-[260px] border">
                <div class="h-full w-[25%]">
                    <div class="absolute pt-5 pl-5">
                        <h1 class="text-xl font-semibold w-[55%] text-justify pb-5">Home and outdoor</h1>
                        <button class="bg-white rounded-lg py-1 px-3 hover:bg-slate-50">Source now</button>
                    </div>
                    <img class="rounded-l-lg w-full h-[260px]" src="../assets/images/home-outdoor.png" alt="">
                </div>
                <div class="w-[75%] flex flex-wrap">
                    <HomeAndOutdoorCard v-for="(el, i) in 8" :key="i" />
                </div>
            </section>

            <section class="gadgets bg-white w-full rounded-lg flex items-center h-[260px] border">
                <div class="h-full w-[25%]">
                    <div class="absolute pt-5 pl-5">
                        <h1 class="text-xl font-semibold w-[45%] text-justify pb-5">Consumer electronics and gadgets</h1>
                        <button class="bg-white rounded-lg py-1 px-3 hover:bg-slate-50">Source now</button>
                    </div>
                    <img class="rounded-l-lg w-full h-[260px]" src="../assets/images/consumer.png" alt="">
                </div>
                <div class="w-[75%] flex flex-wrap">
                    <HomeAndOutdoorCard v-for="(el, i) in 8" :key="i" />
                </div>
            </section>

            <section class="supplier w-full h-[440px] rounded-lg flex justify-between p-10">
                <div class="text-white w-[30%] flex flex-col gap-4">
                    <h1 class="text-3xl font-semibold">An easy way to send requests to all suppliers</h1>
                    <p class="text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt.</p>
                </div>
                <form @submit.prevent class="quote h-[346px] w-[36%] bg-white rounded-lg p-5 flex flex-col gap-5">
                    <h1 class="text-xl font-semibold">Send quote to suppliers</h1>
                    <input class="px-3 py-1 border placeholder:text-black rounded-lg outline-none" type="text"
                        placeholder="What item you need?">
                    <textarea class="p-2 border rounded-lg outline-none h-[73px]" cols="30" rows="10"
                        placeholder="Type more details"></textarea>
                    <div class="flex gap-2">
                        <input class="px-3 py-1 border placeholder:text-black rounded-lg outline-none" type="text"
                            placeholder="Quantity">
                        <input class="px-3 w-[30%] py-1 border placeholder:text-black rounded-lg outline-none" type="number"
                            placeholder="Pcs">
                    </div>
                    <button type="submit"
                        class="text-white w-[50%] hover:bg-[#0667d6] bg-[#127FFF] rounded-lg py-2 px-4 focus:ring-2 ring-[#166ff4]">Send
                        inquiry</button>
                </form>
            </section>

            <section class="recommended-items w-full">
                <h1 class="text-2xl font-semibold">Recommended items</h1>
                <div class="w-full items-center justify-between flex flex-wrap">
                    <RecommendedItemsCard v-for="(el, i) in 10" :key="i" />
                </div>
            </section>

            <section class="extra-services w-full">
                <h1 class="text-2xl font-semibold pb-5">Our extra services</h1>
                <div class="flex w-full items-center justify-between">
                    <ExtraServicesCard v-for="(el, i) in extra_services" :key="i" :ex="el" />
                </div>
            </section>

            <section class="regions w-full pb-7">
                <h1 class="text-2xl font-semibold pb-5">Suppliers by region</h1>
                <div class="flex flex-wrap w-full items-center">
                    <RegionCard v-for="(el, i) in countries" :key="i" :co="el" />
                </div>
            </section>
        </div>
        <Subscribe />
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
li:hover {

    .item {
        color: #1C1C1C;
        font-weight: 500;
    }
}

.time {
    background: #606060;
    color: white;
    border-radius: 4px;
    width: 45px;
    height: 56px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-weight: 700;
    }

    h2 {
        font-size: 12px;
    }
}

.supplier {
    background: linear-gradient(94.99deg, #2C7CF1 7.19%, rgba(0, 209, 255, 0.5) 89.49%);
}

.quote {
    box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.25);
}
</style>