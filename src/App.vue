<template>
    <div class="vh-100" v-if="!cargando">
        <div class="d-flex flex-column text-center h-100">
            <main class="w-100 m-auto flex-shrink-0 p-5">
                <h1 class="display-3 fw-bold text-success">Cargando</h1>
                <div
                    class="spinner-grow text-success"
                    style="width: 3rem; height: 3rem"
                    role="status"
                ></div>
            </main>
        </div>
    </div>
    <div class="vh-100" v-else>
        <RouterView />
    </div>
</template>

<script setup>
import { useAuth } from './composables/useAuth'

const { cargando } = useAuth()
</script>

<style lang="scss" scoped></style>
