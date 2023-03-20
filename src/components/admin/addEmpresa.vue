<template>
    <div
        class="modal fade"
        id="createEmpresa"
        tabindex="-1"
        data-bs-keyboard="false"
        role="dialog"
        aria-labelledby="createEmpresaLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Agregar Nueva Empresa
                    </h1>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="newEmpresa">
                        <div class="form-floating mb-3">
                            <input
                                v-model="empresaForm.name"
                                type="text"
                                class="form-control"
                                id="floatingName"
                                placeholder="nombre"
                            />
                            <label for="floatingName">Nombre de Empresa</label>
                        </div>
                        <div class="d-grid gap-2">
                            <button
                                v-if="actionEmpresa"
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
import { useEmpresas } from '../../composables/useEmpresas'

const { empresaForm, actionEmpresa, newEmpresa } = useEmpresas()
</script>

<style lang="scss" scoped></style>
