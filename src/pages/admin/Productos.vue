<template>
    <div
        class="tarjeta rounded-2 bd-callout bd-callout-left bd-callout-secondary p-2"
    >
        <div>
            <h2 class="fw-bold m-0">Categorias</h2>
        </div>
        <button
            class="tarjeta__button link-secondary tarjeta__button--edit align-middle material-icons-round"
            data-bs-toggle="modal"
            data-bs-target="#newCategoria"
        >
            note_add
        </button>
        <button
            class="tarjeta__button link-secondary align-middle material-icons-round"
            v-if="cat_switch"
            :onclick="switched"
        >
            visibility_off
        </button>
        <button
            class="tarjeta__button link-secondary align-middle material-icons-round"
            v-else
            :onclick="switched"
        >
            visibility
        </button>
    </div>
    <div class="row row-cols-1 row-cols-md-4 g-2" v-if="cat_switch">
        <div
            class="col"
            v-for="categoria in categoriasArr"
            :key="categoria._id"
        >
            <div class="card tarjeta">
                <div class="card-body">
                    <div>
                        <h4 class="fw-semibold">
                            {{ categoria.name }}
                        </h4>
                        <div
                            class="d-inline-flex mb-1 px-1 py-1 fw-semibold text-success bg-success bg-opacity-10 border border-success border-opacity-10 rounded-2 me-1"
                            v-for="(etiqueta, index) in categoria.etiquetas"
                            :key="index"
                        >
                            <span class="align-middle">
                                {{ etiqueta }}
                            </span>
                        </div>
                    </div>
                    <button
                        class="tarjeta__button tarjeta__button--delete link-danger material-icons-round"
                    >
                        delete
                    </button>
                    <button
                        class="tarjeta__button tarjeta__button--edit link-secondary material-icons-round"
                    >
                        edit
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div
        class="tarjeta rounded-2 bd-callout bd-callout-left bd-callout-secondary p-2 d-flex justify-content-between align-items-center"
    >
        <div>
            <h2 class="fw-bold m-0">Productos</h2>
        </div>
        <button
            class="tarjeta__button link-secondary align-middle material-icons-round"
        >
            note_add
        </button>
    </div>
    <addCategoria />
</template>

<script setup>
import addCategoria from '../../components/admin/addCategoria.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useProductos } from '../../composables/useProductos'

const { categoriasArr, listCategorias } = useProductos()

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

.tarjeta {
    position: relative;
}

.tarjeta__button {
    user-select: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.4rem;
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
}

.tarjeta__button--edit {
    margin-right: 2rem;
}
</style>
