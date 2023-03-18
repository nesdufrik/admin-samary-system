<template>
    <div
        class="rounded-2 bd-callout bd-callout-left bd-callout-secondary p-2 d-flex justify-content-between align-items-center"
    >
        <div>
            <h2 class="fw-bold m-0">Categorias</h2>
        </div>
        <div class="p-2">
            <span class="link align-middle material-icons-outlined me-3"
                >add_box</span
            >
            <span
                class="link align-middle material-icons-outlined me-3"
                v-if="cat_switch"
                :onclick="switched"
                >visibility_off</span
            >
            <span
                class="link align-middle material-icons-outlined me-3"
                v-else
                :onclick="switched"
                >visibility</span
            >
        </div>
    </div>
    <div class="row row-cols-1 row-cols-md-4 g-2" v-if="cat_switch">
        <div
            class="col"
            v-for="categoria in categoriasArr"
            :key="categoria._id"
        >
            <div class="card h-100">
                <h4 class="card-header fw-semibold">
                    {{ categoria.name }}
                </h4>
                <div class="card-body">
                    <div
                        class="badge d-inline-flex mb-1 px-1 py-1 fw-semibold text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 me-1"
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
    <div
        class="rounded-2 bd-callout bd-callout-left bd-callout-secondary p-2 d-flex justify-content-between align-items-center"
    >
        <div>
            <h2 class="fw-bold m-0">Productos</h2>
        </div>
        <div class="p-2">
            <span class="link align-middle material-icons-outlined me-3"
                >add_box</span
            >
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
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
const cat_switch = ref(true)
const switched = () => {
    cat_switch.value = !cat_switch.value
}
listCategorias(route.params.id)
</script>
<style scoped>
.link {
    cursor: pointer;
    user-select: none;
}
</style>
