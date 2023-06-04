<template>
    <div class="bg-slate-100">
        <Header />
        <main class="main-h-screen">
            <slot />
        </main>
        <Footer />
    </div>
</template>

<script setup>

</script>

<style lang="scss">
::-webkit-scrollbar {
    width: 0;
}
</style>