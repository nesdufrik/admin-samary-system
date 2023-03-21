<template>
    <div
        class="modal fade"
        id="deleteProducto"
        tabindex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content text-center">
                <div class="modal-body text-center">
                    <h2 class="modal-title fw-bold mb-4" id="modalTitleId">
                        ¿Seguro de eliminar?
                    </h2>
                    <p>
                        Una vez que elimines
                        <strong class="text-danger fs-5">{{
                            productoForm.name
                        }}</strong
                        >, no podrás recuperarlo. Asegúrate de que realmente no
                        necesitas esta información antes de continuar con la
                        eliminación.
                    </p>
                </div>
                <div class="modal-footer p-0">
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
                        class="btn-modal btn-modal-right btn-modal-danger m-0 col-6 fw-bold"
                        @click="delProducto(productoForm._id)"
                        data-bs-target="#deleteProducto2"
                        data-bs-toggle="modal"
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- Second Modal -->
    <div
        class="modal fade"
        id="deleteProducto2"
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
                        ¿Seguro de eliminar?
                    </h2>
                    <p v-if="!actionState">
                        El elemento
                        <strong class="text-danger fs-5">{{
                            productoForm.name
                        }}</strong
                        >, fue eliminado correctamente.
                    </p>
                    <p v-else class="fw-bold fs-4 text-secondary">
                        <span
                            class="spinner-border spinner-border-md"
                            role="status"
                            aria-hidden="true"
                        ></span
                        ><br />
                        Eliminando...
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

const { productoForm, actionState, delProducto, clearForm } = useProductos()
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
