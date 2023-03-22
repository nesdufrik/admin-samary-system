<template>
    <div
        class="modal fade"
        id="createSucursal"
        tabindex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        role="dialog"
        aria-labelledby="createSucursalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body text-center">
                    <h2 class="modal-title fw-bold mb-4" id="exampleModalLabel">
                        Nueva Sucursal
                    </h2>
                    <form
                        id="newSucursalForm"
                        class="row g-2"
                        @submit.prevent="newSucursal($route.params.id)"
                    >
                        <div class="form-floating">
                            <input
                                v-model="sucursalForm.name"
                                type="text"
                                class="form-control"
                                id="floatingName"
                            />
                            <label for="floatingName"
                                >Nombre de la sucursal</label
                            >
                        </div>
                        <div class="form-floating">
                            <input
                                v-model="sucursalForm.direccion"
                                type="text"
                                class="form-control"
                                id="floatingDireccion"
                            />
                            <label for="floatingDireccion">Dirección</label>
                        </div>
                        <div class="form-floating">
                            <input
                                v-model="sucursalForm.telefono"
                                type="tel"
                                class="form-control"
                                id="floatingTelefono"
                            />
                            <label for="floatingTelefono">Teléfono</label>
                        </div>
                    </form>
                </div>
                <div class="modal-footer p-0 mt-3">
                    <button
                        v-if="!actionSucursal"
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
                        v-if="!actionSucursal"
                        type="submit"
                        form="newSucursalForm"
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
import { useSucursales } from '../../composables/useSucursales'

const { sucursalForm, actionSucursal, newSucursal } = useSucursales()
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
