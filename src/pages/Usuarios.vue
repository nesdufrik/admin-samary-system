<template>
    <div
        class="tarjeta rounded-2 bd-callout bd-callout-left bd-callout-secondary p-2"
    >
        <div>
            <h2 class="fw-bold m-0">Usuarios</h2>
        </div>
        <button
            class="tarjeta__button link-secondary align-middle material-icons-round"
            data-bs-target="#createEmpleado"
            data-bs-toggle="modal"
            @click="defaulAvatar"
        >
            note_add
        </button>
    </div>
    <div class="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-2">
        <div
            v-for="empleado in empleadosArr"
            :key="empleado._id"
            class="col tarjeta"
        >
            <div class="user-card h-100">
                <div class="user-image">
                    <img
                        :src="empleado.avatar"
                        alt="Imagen de perfil de usuario"
                    />
                </div>
                <div class="user-description">
                    <h2 class="user-name">
                        {{ empleado.fullName }}
                    </h2>
                    <p class="user-job">{{ empleado.cargo }}</p>
                    <p class="user-username">{{ empleado.email }}</p>
                </div>
            </div>
            <button
                class="tarjeta__button tarjeta__button--edit tarjeta__button--delete link-danger material-icons-round"
                data-bs-target="#delEmpleado"
                data-bs-toggle="modal"
                @click="editarEmpleado(empleado._id)"
            >
                delete
            </button>
            <button
                class="tarjeta__button link-secondary material-icons-round"
                data-bs-target="#editEmpleado"
                data-bs-toggle="modal"
                @click="editarEmpleado(empleado._id)"
            >
                edit
            </button>
        </div>
    </div>

    <addEmpleadoModal />
    <editEmpleadoModal />
    <delEmpleadoModal />
</template>

<script setup>
import addEmpleadoModal from '../components/modalsEmpleado/addEmpleado.vue'
import editEmpleadoModal from '../components/modalsEmpleado/editEmpleado.vue'
import delEmpleadoModal from '../components/modalsEmpleado/delEmpleado.vue'
import { useRoute } from 'vue-router'
import { useEmpleados } from '../composables/useEmpleados'

const { empleadosArr, listEmpleados, editarEmpleado, defaulAvatar } =
    useEmpleados()

const route = useRoute()

listEmpleados(route.params.id)
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
    margin-top: 1.7rem;
}

.user-card {
    background-color: #f8f9fa;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 10px;
}

.user-image {
    width: 100px;
    height: 100px;
    overflow: hidden;
    margin-bottom: 15px;
}

.user-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.user-description {
    display: flex;
    flex-direction: column;
    text-align: center;
}

.user-name {
    margin: 0;
    font-size: 24px;
    font-weight: bold;
}

.user-job,
.user-username {
    margin: 2px 0 0 0;
    font-size: 16px;
    color: #666;
}

@media only screen and (max-width: 767px) {
    .user-card {
        justify-content: flex-start;
        text-align: left;
        flex-direction: row;
    }

    .user-image {
        width: 80px;
        height: 80px;
        margin-right: 8px;
        margin-bottom: 0;
    }

    .user-description {
        text-align: left;
        margin-right: 10px;
        max-width: calc(100% - 120px);
        flex-wrap: wrap;
    }

    .user-name {
        font-size: 20px;
    }

    .user-job,
    .user-username {
        font-size: 16px;
        margin: 0;
    }
}
</style>
