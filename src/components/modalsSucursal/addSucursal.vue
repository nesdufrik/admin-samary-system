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
                                v-model="sucursalForm.arroba"
                                type="text"
                                class="form-control"
                                id="floatingArroba"
                            />
                            <label for="floatingArroba">Arroba</label>
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
                        <div class="input-group">
                            <div class="form-floating">
                                <input
                                    v-model="metodo"
                                    type="text"
                                    class="form-control"
                                    id="categoriaEtiqueta"
                                    @keydown.enter.prevent="addMetodo"
                                />
                                <label for="categoriaEtiqueta"
                                    >Metodo de Pago</label
                                >
                            </div>
                            <button
                                type="button"
                                @click="addMetodo"
                                class="btn btn-outline-success material-icons-round"
                            >
                                send
                            </button>
                        </div>
                        <div>
                            <div class="textarea-container">
                                <div
                                    v-for="(
                                        metodo, index
                                    ) in sucursalForm.metodosPago"
                                    class="d-inline-flex mb-1 px-1 py-1 fw-semibold text-success bg-success bg-opacity-10 border border-success border-opacity-10 rounded-2 me-1"
                                >
                                    <div>
                                        <span class="align-middle me-3">
                                            {{ metodo }}
                                        </span>
                                        <span
                                            class="link-badge fs-5 align-middle material-icons-round"
                                            @click="removeMetodo(index)"
                                            >clear</span
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            v-if="errorApi.show"
                            class="alert alert-warning"
                            role="alert"
                        >
                            {{ errorApi.message }}
                        </div>
                    </form>
                </div>
                <div class="modal-footer p-0 mt-3">
                    <button
                        v-if="!actionSucursal"
                        type="button"
                        class="btn-modal btn-modal-left btn-modal-secondary col-6 fw-bold"
                        data-bs-dismiss="modal"
                        @click="cleanForm"
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
import { ref } from 'vue'
import { useSucursales } from '../../composables/useSucursales'

const { sucursalForm, actionSucursal, errorApi, newSucursal, cleanForm } =
    useSucursales()

const metodo = ref('')
const addMetodo = () => {
    if (!sucursalForm.value.metodosPago) {
        sucursalForm.value.metodosPago = []
    }
    if (metodo.value.trim()) {
        sucursalForm.value.metodosPago.push(metodo.value.trim())
        metodo.value = ''
    }
}
const removeMetodo = index => {
    sucursalForm.value.metodosPago.splice(index, 1)
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

.link-badge {
    cursor: pointer;
    user-select: none;
}
.textarea-container {
    border: 2px dotted #ccc;
    border-radius: 5px;
    padding: 10px;
    min-height: 80px;
    width: 100%;
    box-sizing: border-box;
}
</style>
