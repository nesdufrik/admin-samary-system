<template>
    <div class="container-fluid">
        <h1>Productos</h1>
        <div v-for="categoria in categoriasArr" :key="categoria._id">
            <h2>
                {{ categoria.name }}
            </h2>
            <ul class="list-group mb-3">
                <li class="list-group-item">
                    <span
                        class="badge bg-secondary me-2"
                        v-for="(etiqueta, index) in categoria.etiquetas"
                        :key="index"
                    >
                        <span class="align-middle">
                            {{ etiqueta }} - {{ index }}
                        </span>
                    </span>
                </li>
                <li class="list-group-item">
                    <form>
                        <div class="row">
                            <div class="col-8">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Nueva etiqueta"
                                    required
                                />
                            </div>
                            <div class="col-4">
                                <button type="submit" class="btn btn-primary">
                                    Agregar
                                </button>
                            </div>
                        </div>
                    </form>
                </li>
            </ul>
            <button class="btn btn-danger">Eliminar categoría</button>
        </div>
        <form>
            <div class="row mt-3">
                <div class="col-8">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Nueva categoría"
                        required
                    />
                </div>
                <div class="col-4">
                    <button type="submit" class="btn btn-primary">
                        Agregar
                    </button>
                </div>
            </div>
        </form>
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
