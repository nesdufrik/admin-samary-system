<template>
    <div class="container" v-if="!cargando">
        <h1 class="display-3 text-center">Cargando...</h1>
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
