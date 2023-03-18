<template>
    <div class="container" v-if="!cargando">
        <h1 class="display-3 text-center">Cargando...</h1>
    </div>
    <div class="d-flex flex-column h-100" v-else>
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
import { useAuth } from '../../composables/useAuth'

const { cargando } = useAuth()
</script>

<style scoped></style>
