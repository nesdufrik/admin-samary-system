<template>
    <div
        class="modal fade"
        id="newProducto"
        tabindex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content text-center">
                <div class="modal-body">
                    <h2 class="modal-title fw-bold mb-4" id="modalTitleId">
                        Nuevo Producto
                    </h2>
                    <form
                        id="newProductoForm"
                        class="row g-2"
                        @submit.prevent="newProducto($route.params.id)"
                    >
                        <div class="form-floating">
                            <input
                                v-model="productoForm.name"
                                type="text"
                                class="form-control"
                                id="productoName"
                                @keydown.enter.prevent
                                required
                            />
                            <label for="productoName"
                                >Nombre del Producto</label
                            >
                        </div>
                        <div class="col-md">
                            <div class="form-floating">
                                <select
                                    v-model="productoForm.categoria"
                                    class="form-select"
                                    id="productoCategoria"
                                >
                                    <option selected></option>
                                    <option
                                        v-for="categoria in categoriasArr"
                                        :value="categoria.name"
                                    >
                                        {{ categoria.name }}
                                    </option>
                                </select>
                                <label for="productoCategoria">Categoria</label>
                            </div>
                        </div>
                        <div class="col-md">
                            <div
                                class="form-floating"
                                v-for="categoria in categoriasArr"
                                v-if="productoForm.categoria"
                            >
                                <select
                                    v-model="productoForm.etiqueta"
                                    class="form-select"
                                    id="productoEtiqueta"
                                    v-if="
                                        categoria.name == productoForm.categoria
                                    "
                                >
                                    <option selected></option>
                                    <option
                                        v-for="etiqueta in categoria.etiquetas"
                                        :value="etiqueta"
                                    >
                                        {{ etiqueta }}
                                    </option>
                                </select>
                                <label for="productoEtiqueta">Etiqueta</label>
                            </div>
                            <div class="form-floating" v-else>
                                <select
                                    v-model="productoForm.etiqueta"
                                    class="form-select"
                                    id="productoEtiqueta"
                                    disabled
                                >
                                    <option selected></option>
                                </select>
                                <label for="productoEtiqueta">Etiqueta</label>
                            </div>
                        </div>
                        <div class="form-floating">
                            <input
                                v-model="productoForm.precio"
                                type="number"
                                class="form-control"
                                id="productoPrecio"
                                step=".1"
                                @keydown.enter.prevent
                                required
                            />
                            <label for="productoPrecio">Precio en Bs.</label>
                        </div>
                    </form>
                </div>
                <div class="modal-footer p-0 mt-3">
                    <button
                        v-if="!actionState"
                        type="button"
                        class="btn-modal btn-modal-left btn-modal-secondary col-6 fw-bold"
                        data-bs-dismiss="modal"
                        @click="clearForm"
                    >
                        Cerrar
                    </button>
                    <button
                        v-else
                        type="button"
                        class="btn-modal btn-modal-left btn-modal-secondary col-6 disabled"
                        data-bs-dismiss="modal"
                    >
                        Cerrar
                    </button>
                    <button
                        v-if="!actionState"
                        type="submit"
                        form="newProductoForm"
                        class="btn-modal btn-modal-right btn-modal-primary col-6 fw-bold"
                    >
                        Guardar
                    </button>
                    <button
                        v-else
                        class="btn-modal btn-modal-right btn-modal-disabled col-6 disabled"
                        type="button"
                    >
                        <span
                            class="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                        ></span>
                        Guardando...
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useProductos } from '../../composables/useProductos'

const { productoForm, categoriasArr, actionState, newProducto, clearForm } =
    useProductos()
</script>

<style scoped>
.btn-modal {
    margin: 0;
    padding: 0.8rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-top: 0;
    border-bottom: 0;
    border-right: 0;
    user-select: none;
}
</style>
