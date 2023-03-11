<template>
    <div class="container-fluid p-3">
        <div class="row mb-5">
            <div class="col">
                <h1>Administración de Empresas</h1>
                <p>Cree una empresa o ingrese a una que ya tenga creada</p>
            </div>
        </div>
        <div class="row row-cols-3 row-cols-md-4 g-2 text-center">
            <div class="col empresa__box" v-for="item in empresasArr">
                <RouterLink
                    :to="`/admin/empresa/${item._id}`"
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
                data-bs-target="#createEmpresa"
            >
                <div class="card h-100 rounded-3 shadow-sm">
                    <div
                        class="card-body p-0 py-3 d-flex align-items-center justify-content-center"
                    >
                        <span class="material-icons-outlined fs-1">
                            add_home
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <addEmpresa />
</template>

<script setup>
import { useEmpresas } from '../../composables/useEmpresas'
import addEmpresa from '../../components/admin/addEmpresa.vue'

const { empresasArr, listEmpresas } = useEmpresas()

listEmpresas()
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
