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
                        data-bs-toggle="modal"
                        data-bs-target="#deleteCategoria"
                        @click="editarCategoria(categoria._id)"
                    >
                        delete
                    </button>
                    <button
                        class="tarjeta__button tarjeta__button--edit link-secondary material-icons-round"
                        data-bs-toggle="modal"
                        data-bs-target="#editCategoria"
                        @click="editarCategoria(categoria._id)"
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
    <!-- Lista de productos -->
    <div class="bg-light rounded-3 table-responsive p-2">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th colspan="3" class="align-middle fs-4">Productos</th>
                    <th colspan="2" class="align-middle">Precio Bs.</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="align-middle">Tallarines con pasta Bolognesa</td>
                    <td class="align-middle">Comida</td>
                    <td class="align-middle">Pastas</td>
                    <td class="align-middle">34.9</td>
                    <td class="align-middle text-end">
                        <span
                            class="tarjeta__link text-secondary material-icons-round me-md-2"
                            >edit</span
                        >
                        <span
                            class="tarjeta__link text-danger material-icons-round"
                            >delete</span
                        >
                    </td>
                </tr>
                <tr>
                    <td class="align-middle">Botellin Paceña Pico de Oro</td>
                    <td class="align-middle">Bebidas</td>
                    <td class="align-middle">Cervezas</td>
                    <td class="align-middle">34.9</td>
                    <td class="align-middle text-end">
                        <span
                            class="tarjeta__link text-secondary material-icons-round me-md-2"
                            >edit</span
                        >
                        <span
                            class="tarjeta__link text-danger material-icons-round"
                            >delete</span
                        >
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <addCategoriaModal />
    <editCategoriaModal />
    <delCategoriaModal />
</template>

<script setup>
import addCategoriaModal from '../../components/admin/addCategoria.vue'
import editCategoriaModal from '../../components/admin/editCategoria.vue'
import delCategoriaModal from '../../components/admin/delCategoria.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useProductos } from '../../composables/useProductos'

const { categoriasArr, listCategorias, editarCategoria } = useProductos()

const route = useRoute()
const cat_switch = ref(true)
const switched = () => {
    cat_switch.value = !cat_switch.value
}
listCategorias(route.params.id)
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
    font-size: 1.4rem;
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
}

.tarjeta__link {
    user-select: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.tarjeta__button--edit {
    margin-right: 2rem;
}
</style>
