<template>
    <div
        class="modal fade"
        id="createEmpresa"
        tabindex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        role="dialog"
        aria-labelledby="createEmpresaLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body text-center">
                    <h2 class="modal-title fw-bold mb-4" id="exampleModalLabel">
                        Nueva Empresa
                    </h2>
                    <form
                        id="newEmpresaForm"
                        class="row g-2"
                        @submit.prevent="newEmpresa"
                    >
                        <div class="form-floating">
                            <input
                                v-model="empresaForm.name"
                                type="text"
                                class="form-control"
                                id="floatingName"
                            />
                            <label for="floatingName">Nombre de Empresa</label>
                        </div>
                    </form>
                </div>
                <div class="modal-footer p-0 mt-3">
                    <button
                        v-if="!actionEmpresa"
                        type="button"
                        class="btn-modal btn-modal-left btn-modal-secondary col-6 fw-bold"
                        data-bs-dismiss="modal"
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
                        v-if="!actionEmpresa"
                        type="submit"
                        form="newEmpresaForm"
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
import { useEmpresas } from '../../composables/useEmpresas'

const { empresaForm, actionEmpresa, newEmpresa } = useEmpresas()
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
