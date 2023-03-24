<template>
    <!-- Formulario de Create Empleado -->
    <div
        class="modal fade"
        id="editEmpleado"
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
                        Editar Empleado
                    </h2>
                    <form
                        id="editEmpleadoForm"
                        class="row g-2"
                        @submit.prevent="updateEmpleado(empleadoForm._id)"
                    >
                        <div class="form-floating">
                            <input
                                v-model="empleadoForm.fullName"
                                type="text"
                                class="form-control"
                                id="editEmpleadoInputName"
                            />
                            <label for="editEmpleadoInputName"
                                >Nombre completo</label
                            >
                        </div>
                        <div class="form-floating">
                            <input
                                v-model="empleadoForm.cargo"
                                type="text"
                                class="form-control"
                                id="editEmpleadoInputCargo"
                            />
                            <label for="editEmpleadoInputCargo"
                                >Cargo empleado</label
                            >
                        </div>
                        <div class="input-group">
                            <div class="form-floating">
                                <input
                                    :value="empleadoForm.avatar"
                                    type="text"
                                    class="form-control"
                                    id="editEmpleadoInputAvatar"
                                    disabled
                                />
                                <label for="editEmpleadoInputAvatar"
                                    >Seleccionar imagen</label
                                >
                            </div>
                            <button
                                type="button"
                                class="btn btn-secondary boton-imagen"
                                :style="{
                                    backgroundImage:
                                        'url(' + empleadoForm.avatar + ')',
                                }"
                                data-bs-target="#editEmpleadoAvatar"
                                data-bs-toggle="modal"
                            ></button>
                        </div>
                        <div class="form-floating">
                            <input
                                v-model="empleadoForm.password"
                                type="password"
                                class="form-control"
                                id="editEmpleadoInputPassword"
                            />
                            <label for="editEmpleadoInputPassword"
                                >Contraseña</label
                            >
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
                        form="editEmpleadoForm"
                        class="btn-modal btn-modal-right btn-modal-primary col-6 fw-bold"
                        data-bs-target="#editEmpleadoMessage"
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
        id="editEmpleadoAvatar"
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
                        :src="`${empleadoForm.avatar}`"
                        width="100"
                        alt=""
                        srcset=""
                    />
                    <h5 class="mt-3 fw-bold">Seleccionar una imagen</h5>
                    <div class="images">
                        <img
                            v-for="(image, index) in avatares"
                            alt=""
                            :key="index"
                            :src="image"
                            width="50"
                            @click="selectImage(image)"
                        />
                    </div>
                </div>
                <div class="modal-footer p-0">
                    <button
                        type="button"
                        class="btn-modal btn-modal-block btn-modal-primary col fw-bold"
                        data-bs-target="#editEmpleado"
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
        id="editEmpleadoMessage"
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
                        Editar Empleado
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
                        Actualizando...
                    </p>
                    <p v-else class="fs-4 fw-bold text-success">
                        Se actualizo ¡Correctamente!
                    </p>
                </div>
                <div class="modal-footer p-0">
                    <button
                        v-if="errorApi.show"
                        type="button"
                        class="btn-modal btn-modal-block btn-modal-danger col fw-bold"
                        data-bs-target="#editEmpleado"
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

const { empleadoForm, actionState, errorApi, updateEmpleado, cleanForm } =
    useEmpleados()

const avatares = [
    '/avatars/man01.png',
    '/avatars/man02.png',
    '/avatars/man03.png',
    '/avatars/man04.png',
    '/avatars/man05.png',
    '/avatars/man06.png',
    '/avatars/man07.png',
    '/avatars/man08.png',
    '/avatars/woman01.png',
    '/avatars/woman02.png',
    '/avatars/woman03.png',
    '/avatars/woman04.png',
    '/avatars/woman05.png',
    '/avatars/woman06.png',
    '/avatars/woman07.png',
    '/avatars/woman08.png',
]
const selectImage = image => {
    empleadoForm.value.avatar = image
}
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

.boton-imagen {
    background-size: cover; /* ajusta la imagen al tamaño del botón */
    width: 58px;
    height: 58px;
    border: none;
}
</style>
