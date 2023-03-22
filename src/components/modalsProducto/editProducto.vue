<template>
    <div
        class="modal fade"
        id="editProducto"
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
                        Editar Producto
                    </h2>
                    <form
                        id="editProductoForm"
                        class="row g-2"
                        @submit.prevent="updateProducto(productoForm._id)"
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
                        type="button"
                        class="btn-modal btn-modal-left btn-modal-secondary col-6 fw-bold"
                        data-bs-dismiss="modal"
                        @click="clearForm"
                    >
                        Cerrar
                    </button>
                    <button
                        type="submit"
                        form="editProductoForm"
                        class="btn-modal btn-modal-right btn-modal-primary col-6 fw-bold"
                        data-bs-target="#editProducto2"
                        data-bs-toggle="modal"
                    >
                        Actualizar
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- Second Modal -->
    <div
        class="modal fade"
        id="editProducto2"
        tabindex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body text-center">
                    <h2 class="modal-title fw-bold mb-4" id="modalTitleId">
                        Editar Categoria
                    </h2>
                    <p v-if="!actionState">
                        El elemento
                        <strong class="text-success fs-5">{{
                            productoForm.name
                        }}</strong
                        >, fue actualizado correctamente.
                    </p>
                    <p v-else class="fw-bold fs-4 text-success">
                        <span
                            class="spinner-border spinner-border-md"
                            role="status"
                            aria-hidden="true"
                        ></span
                        ><br />
                        Actualizando...
                    </p>
                </div>
                <div class="modal-footer p-0">
                    <button
                        v-if="!actionState"
                        type="button"
                        class="btn-modal btn-modal-block btn-modal-secondary col fw-bold"
                        data-bs-dismiss="modal"
                        @click="clearForm"
                    >
                        Cerrar
                    </button>
                    <button
                        v-else
                        type="button"
                        class="btn-modal btn-modal-block btn-modal-disabled col disabled"
                        data-bs-dismiss="modal"
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useProductos } from '../../composables/useProductos'

const { productoForm, categoriasArr, actionState, updateProducto, clearForm } =
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
