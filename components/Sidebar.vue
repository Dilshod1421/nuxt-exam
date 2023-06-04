<template>
    <div class="w-[20%] base">
        <div>
            <div @click="upDown">
                <h1>Category</h1>
                <img v-if="down" src="../assets/icons/down.svg" alt="">
                <img v-else src="../assets/icons/up.svg" alt="">
            </div>
            <ul v-if="!down" class="mobile">
                <li v-for="(el, i) in mobiles.length / 2" :key="i">
                    <h2>{{ mobiles[i].name }}</h2>
                </li>
                <li v-for="(el, i) in hall_of_mobiles" :key="i">
                    <h2 v-if="see">{{ el.name }}</h2>
                </li>
                <SeeAPart v-if="see" @click="seeAll" />
                <SeeAllBtn v-else @click="seeAll" />
            </ul>
        </div>
        <div>
            <div @click="upDown1">
                <h1>Brands</h1>
                <img v-if="down1" src="../assets/icons/down.svg" alt="">
                <img v-else src="../assets/icons/up.svg" alt="">
            </div>
            <ul v-if="!down1">
                <li v-for="(el, i) in brands.length / 2" :key="i">
                    <input class="w-5 h-5 hover:cursor-pointer focus:ring-1 ring-blue-400" type="checkbox">
                    <h2>{{ brands[i].name }}</h2>
                </li>
                <li v-for="el in hall_of_brands" :key="el.id">
                    <input v-if="see1" class="w-5 h-5 hover:cursor-pointer focus:ring-1 ring-blue-400" type="checkbox">
                    <h2 v-if="see1">{{ el.name }}</h2>
                </li>
                <SeeAPart v-if="see1" @click="seeAll1" />
                <SeeAllBtn v-else @click="seeAll1" />
            </ul>
        </div>
        <div>
            <div @click="upDown2">
                <h1>Features</h1>
                <img v-if="down2" src="../assets/icons/down.svg" alt="">
                <img v-else src="../assets/icons/up.svg" alt="">
            </div>
            <ul v-if="!down2">
                <li v-for="(el, i) in features.length / 2" :key="i">
                    <input class="w-5 h-5 hover:cursor-pointer focus:ring-1 ring-blue-400" type="checkbox">
                    <h2>{{ features[i].name }}</h2>
                </li>
                <li v-for="el in hall_of_features" :key="el.id">
                    <input v-if="see2" class="w-5 h-5 hover:cursor-pointer focus:ring-1 ring-blue-400" type="checkbox">
                    <h2 v-if="see2">{{ el.name }}</h2>
                </li>
                <SeeAPart v-if="see2" @click="seeAll2" />
                <SeeAllBtn v-else @click="seeAll2" />
            </ul>
        </div>
        <div>
            <div>
                <h1>Price range</h1>
                <img src="../assets/icons/down.svg" alt="">
            </div>
        </div>
        <div>
            <div>
                <h1>Condition</h1>
                <img src="../assets/icons/down.svg" alt="">
            </div>
        </div>
        <div>
            <div>
                <h1>Ratings</h1>
                <img src="../assets/icons/down.svg" alt="">
            </div>
        </div>
        <div>
            <div>
                <h1>Manufacturer</h1>
                <img src="../assets/icons/down.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
import { mobiles } from '~/constants/mobiles';
import { brands } from '~/constants/brands';
import { features } from '~/constants/features';
const hall_of_mobiles = mobiles.slice(mobiles.length / 2, mobiles.length);
const hall_of_brands = brands.slice(brands.length / 2, brands.length);
const hall_of_features = features.slice(features.length / 2, features.length);

const down = ref(true);
const upDown = () => {
    down.value = !down.value;
};
const see = ref(false);
const seeAll = () => {
    see.value = !see.value;
};

const down1 = ref(true);
const upDown1 = () => {
    down1.value = !down1.value;
};
const see1 = ref(false);
const seeAll1 = () => {
    see1.value = !see1.value;
};

const down2 = ref(true);
const upDown2 = () => {
    down2.value = !down2.value;
};
const see2 = ref(false);
const seeAll2 = () => {
    see2.value = !see2.value;
};
</script>

<style lang="scss" scoped>
.base div {
    div {
        display: flex;
        width: 100%;
        padding: 8px;
        align-items: center;
        justify-content: space-between;
        border-top: 1.5px solid #c5c7c7;
    }

    ul {
        padding-bottom: 12px;

        li {
            display: flex;
            gap: 13px;
            padding-left: 8px;
            padding-top: 2px;
            padding-bottom: 2px;

            :hover {
                cursor: pointer;
                color: black;
            }
        }
    }

    :hover {
        cursor: pointer;
    }

    h1 {
        font-weight: 600;
    }
}

.mobile li {
    color: #505050;
}
</style>