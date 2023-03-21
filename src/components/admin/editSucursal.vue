<template>
    <div
        class="modal fade"
        id="editarSucursal"
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
                        Editar Sucursal
                    </h2>
                    <form
                        id="editSucursalForm"
                        class="row g-2"
                        @submit.prevent="updateSucursal(sucursalForm._id)"
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
                        type="button"
                        class="btn-modal btn-modal-left btn-modal-secondary col-6 fw-bold"
                        data-bs-dismiss="modal"
                        @click="cleanForm"
                    >
                        Cerrar
                    </button>
                    <button
                        type="submit"
                        form="editSucursalForm"
                        class="btn-modal btn-modal-right btn-modal-primary col-6 fw-bold"
                        data-bs-target="#editarSucursal2"
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
        id="editarSucursal2"
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
                        Editar Sucursal
                    </h2>
                    <p v-if="!actionSucursal">
                        El elemento
                        <strong class="text-success fs-5">{{
                            sucursalForm.name
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
                        v-if="!actionSucursal"
                        type="button"
                        class="btn-modal btn-modal-block btn-modal-secondary col fw-bold"
                        data-bs-dismiss="modal"
                        @click="cleanForm"
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
import { useSucursales } from '../../composables/useSucursales'

const { sucursalForm, actionSucursal, updateSucursal, cleanForm } =
    useSucursales()
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
