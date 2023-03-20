<template>
    <div
        class="modal fade"
        id="createSucursal"
        tabindex="-1"
        aria-labelledby="createSucursalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen-sm-down">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Agregar Nueva Sucursal
                    </h1>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="newSucursal(`${route.params.id}`)">
                        <div class="form-floating mb-3">
                            <input
                                v-model="sucursalForm.name"
                                type="text"
                                class="form-control"
                                id="floatingName"
                                placeholder="nombre"
                            />
                            <label for="floatingName"
                                >Nombre de la sucursal</label
                            >
                        </div>
                        <div class="form-floating mb-3">
                            <input
                                v-model="sucursalForm.direccion"
                                type="text"
                                class="form-control"
                                id="floatingDireccion"
                                placeholder="direccion"
                            />
                            <label for="floatingDireccion">Dirección</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input
                                v-model="sucursalForm.telefono"
                                type="tel"
                                class="form-control"
                                id="floatingTelefono"
                                placeholder="telefono"
                            />
                            <label for="floatingTelefono">Teléfono</label>
                        </div>
                        <div class="d-grid gap-2">
                            <button
                                v-if="actionSucursal"
                                class="btn btn-lg btn-primary"
                                type="button"
                                disabled
                            >
                                <span
                                    class="spinner-border spinner-border-sm"
                                    role="status"
                                    aria-hidden="true"
                                ></span>
                                Guardando...
                            </button>
                            <button
                                v-else
                                class="btn btn-primary btn-lg"
                                type="submit"
                            >
                                Guardar
                            </button>
                            <button
                                class="btn btn-secondary"
                                type="button"
                                data-bs-dismiss="modal"
                            >
                                Cerrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useSucursales } from '../../composables/useSucursales'

const { sucursalForm, actionSucursal, newSucursal } = useSucursales()
const route = useRoute()
</script>

<style lang="scss" scoped></style>
