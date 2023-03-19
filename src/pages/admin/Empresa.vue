<template>
    <div
        class="bd-callout bd-callout-right bd-callout-dark rounded-3 text-end p-3"
    >
        <h1 class="fw-bold">{{ empresaData.name }}</h1>
    </div>
    <div class="row row-cols-2 row-cols-md-4 g-2 text-center">
        <div class="col empresa__box" v-for="item in sucursalesArr">
            <RouterLink
                :to="`/admin/sucursal/${item._id}/stats`"
                class="card h-100 rounded-3 shadow-sm"
            >
                <div
                    class="card-body p-0 py-3 d-flex align-items-center justify-content-center"
                >
                    <h2>{{ item.name }}</h2>
                </div>
            </RouterLink>
        </div>
        <div
            class="col empresa__box"
            data-bs-toggle="modal"
            data-bs-target="#createSucursal"
        >
            <div class="card h-100 rounded-3 shadow-sm">
                <div
                    class="card-body p-0 py-3 d-flex align-items-center justify-content-center"
                >
                    <span class="material-icons-round fs-1"> add_home </span>
                </div>
            </div>
        </div>
    </div>
    <addSucursal />
</template>

<script setup>
import addSucursal from '../../components/admin/addSucursal.vue'
import { useRoute } from 'vue-router'
import { useEmpresas } from '../../composables/useEmpresas'
import { useSucursales } from '../../composables/useSucursales'
import { useNavBar } from '../../composables/useNavBar'

const { showNavBar, contentNavBar } = useNavBar()
showNavBar.value = false

const { empresaData, loadEmpresa } = useEmpresas()
const { sucursalesArr, listSucursales } = useSucursales()
const route = useRoute()

listSucursales(route.params.id)
loadEmpresa(route.params.id)
contentNavBar()
</script>

<style scoped></style>
