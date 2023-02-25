<template>
    <div
        class="modal fade"
        id="createProducto"
        tabindex="-1"
        aria-labelledby="createProductoLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen-sm-down">
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
                    <form @submit.prevent="newProducto">
                        <div class="form-floating mb-3">
                            <input
                                v-model="productosForm.name"
                                type="text"
                                class="form-control"
                                id="floatingName"
                                placeholder="nombre"
                            />
                            <label for="floatingName">Nombre producto</label>
                        </div>
                        <div class="form-floating mb-3">
                            <select
                                v-model="productosForm.tipo"
                                class="form-select"
                                id="floatingCategoria"
                            >
                                <option
                                    v-for="cat in prodTipo"
                                    :value="cat.name"
                                >
                                    {{ cat.name }}
                                </option>
                            </select>
                            <label for="floatingCategoria">Categoria</label>
                        </div>
                        <div class="form-floating mb-3" v-for="cat in prodTipo">
                            <select
                                v-model="productosForm.subtipo"
                                class="form-select"
                                id="floatingSubtipo"
                                v-if="cat.name == productosForm.tipo"
                            >
                                <option v-for="sub in cat.subtipo" :value="sub">
                                    {{ sub }}
                                </option>
                            </select>
                            <label
                                v-if="cat.name == productosForm.tipo"
                                for="floatingSubtipo"
                                >Sub Categoria</label
                            >
                        </div>
                        <div class="form-floating mb-3">
                            <input
                                v-model="productosForm.precio"
                                type="number"
                                class="form-control"
                                id="floatingPrecio"
                                step=".1"
                            />
                            <label for="floatingPrecio">Precio</label>
                        </div>
                        <div class="d-grid gap-2">
                            <button
                                v-if="prodActionLoaded"
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

<script setup></script>

<style lang="scss" scoped></style>
