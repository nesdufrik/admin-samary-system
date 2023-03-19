<template>
    <div
        class="bd-callout bd-callout-right bd-callout-dark rounded-3 text-end p-3"
    >
        <h1 class="fw-bold">{{ sucursalData.name }}</h1>
        <span class="small">Direccion: {{ sucursalData.direccion }}</span
        ><br />
        <span class="small">Telefono: {{ sucursalData.telefono }}</span>
    </div>
    <RouterView />
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useNavBar } from '../../composables/useNavBar'
import { useSucursales } from '../../composables/useSucursales'

const { showNavBar, contentNavBar } = useNavBar()
showNavBar.value = true

const { sucursalData, loadSucursal } = useSucursales()
const route = useRoute()

loadSucursal(route.params.id)
contentNavBar()
</script>

<style scoped>
.img-fluid {
    height: 100%;
    object-fit: cover;
}
</style>
