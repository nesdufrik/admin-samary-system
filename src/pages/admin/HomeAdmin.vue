<template>
    <div class="d-flex flex-column h-100">
        <div class="flex-shrink-0 mb-3">
            <NavBar />
            <div class="container-xl">
                <RouterView />
            </div>
        </div>
        <footer class="footer mt-auto py-3 bg-light bg-opacity-50">
            <div class="container-xl text-center">
                <small class="text-muted">&copy; FrikTek 2023</small>
            </div>
        </footer>
    </div>
</template>

<script setup>
import NavBar from '../../components/NavBarAdmin.vue'
</script>

<style scoped></style>
