<template>
    <div
        class="tarjeta bd-callout bd-callout-right bd-callout-dark rounded-3 text-end p-3"
    >
        <h1 class="fw-bold">{{ sucursalData.name }}</h1>
        <span class="small fw-bold"
            >Direccion: {{ sucursalData.direccion }}</span
        ><br />
        <span class="small fw-bold">Telefono: {{ sucursalData.telefono }}</span>
        <button
            class="tarjeta__button link-secondary material-icons-round"
            @click="editarSucursal"
            data-bs-toggle="modal"
            data-bs-target="#editarSucursal"
        >
            settings
        </button>
        <button
            class="tarjeta__button tarjeta__button--edit link-secondary material-icons-round"
            @click="editarSucursal"
            data-bs-toggle="modal"
            data-bs-target="#deleteSucursal"
        >
            delete
        </button>
    </div>
    <RouterView />
    <editSucursalModal />
    <delSucursalModal />
</template>

<script setup>
import editSucursalModal from '../../components/admin/editSucursal.vue'
import delSucursalModal from '../../components/admin/delSucursal.vue'
import { useRoute } from 'vue-router'
import { useNavBar } from '../../composables/useNavBar'
import { useSucursales } from '../../composables/useSucursales'

const { showNavBar, contentNavBar } = useNavBar()
showNavBar.value = true

const { sucursalData, editarSucursal, loadSucursal } = useSucursales()
const route = useRoute()

loadSucursal(route.params.id)
contentNavBar()
</script>

<style scoped>
.tarjeta {
    position: relative;
}

.tarjeta__button {
    user-select: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.7rem;
    position: absolute;
    left: 0.5rem;
    top: 0.5rem;
}

.tarjeta__button--edit {
    margin-top: 2rem;
}
</style>
