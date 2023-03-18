<template>
    <div
        class="bd-callout bd-callout-right bd-callout-dark rounded-3 text-end p-3"
    >
        <h1 class="fw-bold">Samary Hotel S.A.</h1>
    </div>
    <div class="row row-cols-3 row-cols-md-4 g-2 text-center">
        <div class="col empresa__box" v-for="item in sucursalesArr">
            <RouterLink
                :to="`/admin/sucursal/${item._id}/stats`"
                class="card h-100 rounded-3 shadow-sm text-decoration-none"
            >
                <div class="card-body p-1 py-3">
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
                    <span class="material-icons-outlined fs-1"> add_home </span>
                </div>
            </div>
        </div>
    </div>
    <addSucursal />
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useSucursales } from '../../composables/useSucursales'
import addSucursal from '../../components/admin/addSucursal.vue'
import { useNavBar } from '../../composables/useNavBar'

const { showNavBar, contentNavBar } = useNavBar()
showNavBar.value = false

const { sucursalesArr, listSucursales } = useSucursales()
const route = useRoute()

listSucursales(route.params.id)
contentNavBar()
</script>

<style scoped>
.empresa__box .card {
    color: #212529;
    user-select: none;
}

.empresa__box:hover .card {
    color: #198754;
    border: 4px solid transparent;
    border-color: #198754;
    cursor: pointer;
}
</style>
