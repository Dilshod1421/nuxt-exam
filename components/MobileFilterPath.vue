<template>
    <div class="my-6 px-32 flex">
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