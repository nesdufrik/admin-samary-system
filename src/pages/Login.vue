<template>
    <div class="d-flex flex-column text-center h-100">
        <main class="form-signin w-100 m-auto flex-shrink-0">
            <form @submit.prevent="login">
                <img class="mb-4" src="../assets/login.png" alt="logo" />
                <h1 class="h3 mb-3 fw-normal">Iniciar Sesión</h1>

                <div class="form-floating">
                    <input
                        type="text"
                        v-model="logInForm.email"
                        class="form-control"
                        id="Login"
                    />
                    <label for="Login">Usuario / Email</label>
                </div>
                <div class="form-floating">
                    <input
                        type="password"
                        v-model="logInForm.password"
                        class="form-control"
                        id="Password"
                    />
                    <label for="Password">Contraseña</label>
                </div>
                <div class="form-check mb-3 text-start">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        id="showPassword"
                        v-model="showPassword"
                        @click="toggleShowPassword"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                        Mostrar contraseña
                    </label>
                </div>
                <div
                    class="alert alert-warning"
                    role="alert"
                    v-if="logInData.show"
                >
                    {{ logInData.message }}
                </div>
                <button
                    class="w-100 btn btn-lg btn-primary"
                    type="submit"
                    v-if="!actionState"
                >
                    Iniciar Sesión
                </button>
                <button
                    class="w-100 btn btn-lg btn-primary"
                    type="button"
                    v-else
                    disabled
                >
                    <span
                        class="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                    ></span>
                    Iniciando...
                </button>
            </form>
        </main>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useAuth } from '../composables/useAuth'

const { logInForm, logInData, actionState, login } = useAuth()

const route = useRoute()

if (route.query.show && route.query.message) {
    logInData.value = {
        show: route.query.show,
        message: route.query.message,
    }
}

let showPassword = false

function toggleShowPassword() {
    const passwordInput = document.getElementById('Password')
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'
    } else {
        passwordInput.type = 'password'
    }
}
</script>

<style scoped>
.form-signin {
    max-width: 330px;
    padding: 15px;
}

.form-signin .form-floating:focus-within {
    z-index: 2;
}

.form-signin #Login {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.form-signin #Password {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
</style>
