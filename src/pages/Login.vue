<template>
    <div class="container vh-100 d-flex text-center">
        <main class="form-signin w-100 m-auto">
            <form @submit.prevent="login">
                <img class="mb-4" src="../assets/login.png" alt="logo" />
                <h1 class="h3 mb-3 fw-normal">Iniciar Sesión</h1>

                <div class="form-floating">
                    <input
                        type="text"
                        v-model="logInForm.email"
                        class="form-control"
                        id="Login"
                        placeholder="name@example.com"
                    />
                    <label for="Login">Usuario / Email</label>
                </div>
                <div class="form-floating">
                    <input
                        type="password"
                        v-model="logInForm.password"
                        class="form-control"
                        id="Password"
                        placeholder="Password"
                    />
                    <label for="Password">Contraseña</label>
                </div>
                <div
                    class="alert alert-warning"
                    role="alert"
                    v-show="logInData.show"
                >
                    {{ logInData.message }}
                </div>
                <button
                    class="w-100 btn btn-lg btn-primary"
                    type="submit"
                    v-show="loading"
                >
                    Iniciar Sesión
                </button>
                <button
                    class="w-100 btn btn-lg btn-primary"
                    type="button"
                    disabled
                    v-show="!loading"
                >
                    <span
                        class="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                    ></span>
                    Iniciando...
                </button>
                <p class="mt-5 mb-3 text-muted fst-italic">FrikTek© 2023</p>
            </form>
        </main>
    </div>
</template>

<script setup>
import { useAuth } from '../composables/useAuth'

const { logInForm, logInData, loading, login } = useAuth()
</script>

<style scoped>
.form-signin {
    max-width: 330px;
    padding: 15px;
}

.form-signin .form-floating:focus-within {
    z-index: 2;
}

.form-signin input[type='text'] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.form-signin input[type='password'] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
</style>
