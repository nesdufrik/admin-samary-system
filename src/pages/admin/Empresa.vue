<template>
    <div
        class="tarjeta bd-callout bd-callout-right bd-callout-dark rounded-3 text-end p-3"
    >
        <h1 class="fw-bold">{{ empresaData.name }}</h1>
        <button
            class="tarjeta__button link-secondary material-icons-round"
            @click="editarEmpresa"
            data-bs-toggle="modal"
            data-bs-target="#editarEmpresa"
        >
            settings
        </button>
        <button
            class="tarjeta__button tarjeta__button--edit link-secondary material-icons-round"
            @click="editarEmpresa"
            data-bs-toggle="modal"
            data-bs-target="#deleteEmpresa"
        >
            delete
        </button>
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
    <addSucursalModal />
    <editEmpresaModal />
    <delEmpresaModal />
</template>

<script setup>
import editEmpresaModal from '../../components/admin/editEmpresa.vue'
import delEmpresaModal from '../../components/admin/delEmpresa.vue'
import addSucursalModal from '../../components/admin/addSucursal.vue'
import { useRoute } from 'vue-router'
import { useEmpresas } from '../../composables/useEmpresas'
import { useSucursales } from '../../composables/useSucursales'
import { useNavBar } from '../../composables/useNavBar'

const { showNavBar, contentNavBar } = useNavBar()
showNavBar.value = false

const { empresaData, loadEmpresa, editarEmpresa } = useEmpresas()
const { sucursalesArr, listSucursales } = useSucursales()
const route = useRoute()

listSucursales(route.params.id)
loadEmpresa(route.params.id)
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
