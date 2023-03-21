<template>
    <div
        class="bd-callout bd-callout-right bd-callout-success rounded-3 text-end p-3"
    >
        <h1 class="fw-bold">Administrar Empresas</h1>
        <span
            >Sección de acceso a las diferentes empresas creadas del
            usuario</span
        >
    </div>
    <div class="row row-cols-2 row-cols-md-4 g-2 text-center">
        <div class="col empresa__box" v-for="item in empresasArr">
            <RouterLink
                :to="`/admin/empresa/${item._id}`"
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
            data-bs-target="#createEmpresa"
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
    <addEmpresaModal />
</template>

<script setup>
import addEmpresaModal from '../../components/admin/addEmpresa.vue'
import { useEmpresas } from '../../composables/useEmpresas'
import { useNavBar } from '../../composables/useNavBar'

const { showNavBar, contentNavBar } = useNavBar()
showNavBar.value = false

const { empresasArr, listEmpresas } = useEmpresas()

listEmpresas()
contentNavBar()
</script>

<style scoped></style>
