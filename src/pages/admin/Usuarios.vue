<template>
    <div
        class="tarjeta rounded-2 bd-callout bd-callout-left bd-callout-secondary p-2"
    >
        <div>
            <h2 class="fw-bold m-0">Usuarios</h2>
        </div>
        <button
            class="tarjeta__button link-secondary align-middle material-icons-round"
        >
            note_add
        </button>
    </div>
    <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4 g-2">
        <div class="col">
            <div class="card tarjeta">
                <div class="card-body">
                    <div>
                        <h4 class="fw-semibold">categoria.name</h4>
                        <div
                            class="d-inline-flex mb-1 px-1 py-1 fw-semibold text-success bg-success bg-opacity-10 border border-success border-opacity-10 rounded-2 me-1"
                        >
                            <span class="align-middle"> etiqueta </span>
                        </div>
                    </div>
                    <button
                        class="tarjeta__button tarjeta__button--delete link-danger material-icons-round"
                    >
                        delete
                    </button>
                    <button
                        class="tarjeta__button tarjeta__button--edit link-secondary material-icons-round"
                    >
                        edit
                    </button>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card tarjeta">
                <div class="card-body">
                    <div>
                        <h4 class="fw-semibold">categoria.name</h4>
                        <div
                            class="d-inline-flex mb-1 px-1 py-1 fw-semibold text-success bg-success bg-opacity-10 border border-success border-opacity-10 rounded-2 me-1"
                        >
                            <span class="align-middle"> etiqueta </span>
                        </div>
                    </div>
                    <button
                        class="tarjeta__button tarjeta__button--delete link-danger material-icons-round"
                    >
                        delete
                    </button>
                    <button
                        class="tarjeta__button tarjeta__button--edit link-secondary material-icons-round"
                    >
                        edit
                    </button>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100 tarjeta">
                <div class="card-body">
                    <div>
                        <h4 class="fw-semibold">categoria.name</h4>
                        <div
                            class="d-inline-flex mb-1 px-1 py-1 fw-semibold text-success bg-success bg-opacity-10 border border-success border-opacity-10 rounded-2 me-1"
                        >
                            <span class="align-middle"> etiqueta </span>
                        </div>
                    </div>
                    <button
                        class="tarjeta__button tarjeta__button--delete link-danger material-icons-round"
                    >
                        delete
                    </button>
                    <button
                        class="tarjeta__button tarjeta__button--edit link-secondary material-icons-round"
                    >
                        edit
                    </button>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card tarjeta">
                <div class="card-body">
                    <div>
                        <h4 class="fw-semibold">categoria.name</h4>
                        <div
                            class="d-inline-flex mb-1 px-1 py-1 fw-semibold text-success bg-success bg-opacity-10 border border-success border-opacity-10 rounded-2 me-1"
                        >
                            <span class="align-middle"> etiqueta </span>
                        </div>
                    </div>
                    <button
                        class="tarjeta__button tarjeta__button--delete link-danger material-icons-round"
                    >
                        delete
                    </button>
                    <button
                        class="tarjeta__button tarjeta__button--edit link-secondary material-icons-round"
                    >
                        edit
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
<style scoped>
.tarjeta {
    position: relative;
}

.tarjeta__button {
    user-select: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.4rem;
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
}

.tarjeta__link {
    user-select: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.tarjeta__button--edit {
    margin-right: 2rem;
}
</style>
