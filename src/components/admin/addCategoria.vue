<template>
    <div
        class="modal fade"
        id="newCategoria"
        tabindex="-1"
        data-bs-keyboard="false"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title fw-bold" id="modalTitleId">
                        Nueva Categoria
                    </h2>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <form
                        id="newCategoriaForm"
                        class="row g-2"
                        @submit.prevent="newCategoria($route.params.id)"
                    >
                        <div>
                            <div class="form-floating">
                                <input
                                    v-model="categoriaForm.name"
                                    type="text"
                                    class="form-control"
                                    id="categoriaName"
                                    placeholder="nombre"
                                    @keydown.enter.prevent=""
                                />
                                <label for="categoriaName"
                                    >Nombre de Categoria</label
                                >
                            </div>
                        </div>
                        <div class="input-group">
                            <div class="form-floating">
                                <input
                                    v-model="etiqueta"
                                    type="text"
                                    class="form-control"
                                    id="categoriaEtiqueta"
                                    placeholder="etiqueta"
                                    @keydown.enter.prevent="addEtiqueta"
                                />
                                <label for="categoriaEtiqueta">Etiquetas</label>
                            </div>
                            <button
                                type="button"
                                @click="addEtiqueta"
                                class="btn btn-outline-success material-icons-round"
                            >
                                send
                            </button>
                        </div>
                        <div>
                            <div class="textarea-container">
                                <div
                                    v-for="(
                                        etiqueta, index
                                    ) in categoriaForm.etiquetas"
                                    class="d-inline-flex mb-1 px-1 py-1 fw-semibold text-success bg-success bg-opacity-10 border border-success border-opacity-10 rounded-2 me-1"
                                >
                                    <div>
                                        <span class="align-middle me-3">
                                            {{ etiqueta }}
                                        </span>
                                        <span
                                            class="fs-5 align-middle material-icons-round"
                                            @click="removeEtiqueta(index)"
                                            >clear</span
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                    >
                        Cerrar
                    </button>
                    <button
                        type="submit"
                        form="newCategoriaForm"
                        class="btn btn-primary"
                    >
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useProductos } from '../../composables/useProductos'

const { categoriaForm, actionState, newCategoria } = useProductos()

const etiqueta = ref('')
const addEtiqueta = () => {
    if (!categoriaForm.value.etiquetas) {
        categoriaForm.value.etiquetas = []
    }
    if (etiqueta.value.trim()) {
        categoriaForm.value.etiquetas.push(etiqueta.value.trim())
        etiqueta.value = ''
    }
}
const removeEtiqueta = index => {
    categoriaForm.value.etiquetas.splice(index, 1)
}
</script>

<style scoped>
.textarea-container {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    min-height: 80px;
    width: 100%;
    box-sizing: border-box;
}
</style>
