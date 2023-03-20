<template>
    <div
        class="modal fade"
        id="deleteCategoria"
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
                    <h2 class="modal-title fw-bold" id="modalTitleId">
                        ¿Seguro de eliminar?
                    </h2>
                    <p class="mt-4">
                        Una vez que elimines
                        <strong class="text-danger fs-5">{{
                            categoriaEdit.name
                        }}</strong
                        >, no podrás recuperarlo. Asegúrate de que realmente no
                        necesitas esta información antes de continuar con la
                        eliminación.
                    </p>
                </div>
                <div class="modal-footer p-0">
                    <button
                        v-if="!actionState"
                        type="button"
                        class="btn-modal btn-modal-left btn-modal-secondary col-6 fw-bold"
                        data-bs-dismiss="modal"
                    >
                        Cerrar
                    </button>
                    <button
                        v-else
                        type="button"
                        class="btn-modal btn-modal-left btn-modal-disabled col-6 disabled"
                        data-bs-dismiss="modal"
                    >
                        Cerrar
                    </button>
                    <button
                        v-if="!actionState"
                        type="submit"
                        class="btn-modal btn-modal-right btn-modal-danger m-0 col-6 fw-bold"
                        @click="delCategoria(categoriaEdit._id)"
                    >
                        Eliminar
                    </button>
                    <button
                        v-else
                        class="btn-modal btn-modal-right btn-modal-disabled m-0 col-6 disabled"
                        type="button"
                    >
                        <span
                            class="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                        ></span>
                        Eliminando...
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useProductos } from '../../composables/useProductos'

const { categoriaEdit, actionState, delCategoria } = useProductos()
</script>

<style scoped>
.link-badge {
    cursor: pointer;
    user-select: none;
}
.textarea-container {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    min-height: 80px;
    width: 100%;
    box-sizing: border-box;
}
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
.btn-modal-left {
    border-bottom-left-radius: 0.375rem;
}
.btn-modal-right {
    border-bottom-right-radius: 0.375rem;
}

.btn-modal-primary {
    color: var(--bs-primary-text);
    background-color: var(--bs-primary-bg-subtle);
}
.btn-modal-primary:hover {
    color: var(--bs-gray-100);
    background-color: var(--bs-primary-text);
    border-color: var(--bs-primary-text);
}
.btn-modal-danger {
    color: var(--bs-danger-text);
    background-color: var(--bs-danger-bg-subtle);
}
.btn-modal-danger:hover {
    color: var(--bs-gray-100);
    background-color: var(--bs-danger-text);
    border-color: var(--bs-danger-text);
}
.btn-modal-secondary {
    color: var(--bs-dark-text);
    background-color: var(--bs-gray-100);
}

.btn-modal-secondary:hover {
    color: var(--bs-gray-100);
    background-color: var(--bs-dark-text);
    border-color: var(--bs-secondary-text);
}
.btn-modal-disabled {
    color: var(--bs-gray-600);
    background-color: var(--bs-gray-200);
    cursor: not-allowed;
}
</style>
