<template>
    <!-- Formulario de Create Empleado -->
    <div
        class="modal fade"
        id="delEmpleado"
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
                        ¿Seguro de eliminar?
                    </h2>
                    <p>
                        Una vez que elimines
                        <strong class="text-danger fs-5">{{
                            empleadoForm.fullName
                        }}</strong
                        >, no se podra recuperar. Asegúrate de que realmente no
                        necesitas esta información antes de continuar con la
                        eliminación.
                    </p>
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
                        class="btn-modal btn-modal-right btn-modal-danger col-6 fw-bold"
                        @click="delEmpleado(empleadoForm._id)"
                        data-bs-target="#delEmpleadoMessage"
                        data-bs-toggle="modal"
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- Message Create Empleado -->
    <div
        class="modal fade"
        id="delEmpleadoMessage"
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
                    <p v-if="errorApi.show" class="fs-6 fw-bold text-danger">
                        {{ errorApi.message }}
                    </p>

                    <p
                        v-else-if="actionState"
                        class="fs-4 fw-bold text-secondary"
                    >
                        <span
                            class="spinner-border spinner-border-md"
                            role="status"
                            aria-hidden="true"
                        ></span
                        ><br />
                        Eliminando...
                    </p>
                    <p v-else>
                        El empleado
                        <strong class="text-danger fs-5">{{
                            empleadoForm.fullName
                        }}</strong
                        >, fue eliminado correctamente.
                    </p>
                </div>
                <div class="modal-footer p-0">
                    <button
                        v-if="actionState"
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

const { empleadoForm, actionState, errorApi, delEmpleado, cleanForm } =
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
