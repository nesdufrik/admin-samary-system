<template>
    <div
        class="bd-callout bd-callout-right bd-callout-dark rounded-3 text-end p-3"
    >
        <h1 class="fw-bold">Bar La Chicheria</h1>
        <span>Direccion:</span><br />
        <span>Telefono:</span>
    </div>
    <RouterView />
</template>

<script setup>
import { useNavBar } from '../../composables/useNavBar'

const { showNavBar, contentNavBar } = useNavBar()
showNavBar.value = true

contentNavBar()
</script>

<style scoped>
.img-fluid {
    height: 100%;
    object-fit: cover;
}
</style>
