<template>
    <div class="container-fluid">
        <h2>Productos</h2>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div
                class="col"
                v-for="categoria in categoriasArr"
                :key="categoria._id"
            >
                <div class="card h-100">
                    <div class="card-header">
                        {{ categoria.name }}
                    </div>
                    <div class="card-body">
                        <div
                            class="d-inline-flex mb-3 px-2 py-1 fw-semibold text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 me-1"
                            v-for="(etiqueta, index) in categoria.etiquetas"
                            :key="index"
                        >
                            <span class="align-middle">
                                {{ etiqueta }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useProductos } from '../../composables/useProductos'

const {
    categoriasArr,
    categoriaForm,
    actionState,
    listCategorias,
    newCategoria,
} = useProductos()

const route = useRoute()

listCategorias(route.params.id)
</script>
<style scoped></style>
