<template>
    <!-- Formulario de Create Empleado -->
    <div
        class="modal fade"
        id="createEmpleado"
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
                        Nuevo Empleado
                    </h2>
                    <form
                        id="createEmpleadoForm"
                        class="row g-2"
                        @submit.prevent="newEmpleado($route.params.id)"
                    >
                        <div class="form-floating">
                            <input
                                v-model="empleadoForm.name"
                                type="text"
                                class="form-control"
                                id="floatinNameEmpleado"
                            />
                            <label for="floatinNameEmpleado"
                                >Nombre completo</label
                            >
                        </div>
                        <div class="form-floating">
                            <input
                                v-model="empleadoForm.cargo"
                                type="text"
                                class="form-control"
                                id="floatingCargoEmpleado"
                            />
                            <label for="floatingCargoEmpleado"
                                >Cargo empleado</label
                            >
                        </div>
                        <div class="form-floating">
                            <input
                                v-model="empleadoForm.avatar"
                                type="text"
                                class="form-control"
                                id="floatingAvatarEmpleado"
                            />
                            <label for="floatingAvatarEmpleado"
                                >Seleccionar imagen</label
                            >
                        </div>
                        <div class="form-floating">
                            <input
                                v-model="empleadoForm.email"
                                type="text"
                                class="form-control"
                                id="floatingUsernameEmpleado"
                            />
                            <label for="floatingUsernameEmpleado"
                                >nombre.apellido</label
                            >
                        </div>
                        <div class="form-floating">
                            <input
                                v-model="empleadoForm.password"
                                type="password"
                                class="form-control"
                                id="floatingPassword"
                            />
                            <label for="floatingPassword">Contraseña</label>
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
                        form="createEmpleadoForm"
                        class="btn-modal btn-modal-right btn-modal-primary col-6 fw-bold"
                        data-bs-target="#createEmpleadoMessage"
                        data-bs-toggle="modal"
                    >
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- Avatar Selection -->
    <div
        class="modal fade"
        id="createEmpleadoAvatar"
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
                    <img
                        :src="`/avatars/${empleadoForm.avatar}`"
                        alt=""
                        srcset=""
                    />
                    <div>Grupo de imagenes</div>
                </div>
                <div class="modal-footer p-0">
                    <button
                        type="button"
                        class="btn-modal btn-modal-block btn-modal-primary col fw-bold"
                        data-bs-target="#createEmpleado"
                        data-bs-toggle="modal"
                    >
                        Regresar
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- Message Create Empleado -->
    <div
        class="modal fade"
        id="createEmpleadoMessage"
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
                    <p v-if="errorApi.show" class="fs-6 fw-bold text-danger">
                        {{ errorApi.message }}
                    </p>

                    <p
                        v-else-if="actionState"
                        class="fs-4 fw-bold text-success"
                    >
                        <span
                            class="spinner-border spinner-border-md"
                            role="status"
                            aria-hidden="true"
                        ></span
                        ><br />
                        Guardando...
                    </p>
                    <p v-else class="fs-4 fw-bold text-success">
                        Se guardo ¡Correctamente!
                    </p>
                </div>
                <div class="modal-footer p-0">
                    <button
                        v-if="errorApi.show"
                        type="button"
                        class="btn-modal btn-modal-block btn-modal-danger col fw-bold"
                        data-bs-target="#createEmpleado"
                        data-bs-toggle="modal"
                    >
                        Regresar
                    </button>
                    <button
                        v-else-if="actionState"
                        type="button"
                        class="btn-modal btn-modal-block btn-modal-disabled col disabled"
                        data-bs-dismiss="modal"
                    >
                        Cerrar
                    </button>
                    <button
                        v-else
                        type="button"
                        class="btn-modal btn-modal-block btn-modal-secondary col fw-bold"
                        data-bs-dismiss="modal"
                        @click="cleanForm"
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useEmpleados } from '../../composables/useEmpleados'

const { empleadoForm, actionState, errorApi, newEmpleado, cleanForm } =
    useEmpleados()
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
