<template>
	<div
		class="vh-100 d-flex align-items-center justify-content-center text-center"
	>
		<main class="form-signin w-100">
			<form @submit.prevent="login">
				<img class="mb-4" src="../assets/login.png" alt="logo" />
				<h1 class="h3 mb-3 fw-semibold">Inicio de Sesión</h1>
				<div class="form-floating">
					<input
						type="text"
						v-model="logInForm.email"
						class="form-control"
						id="Login"
					/>
					<label for="Login">Usuario / Email</label>
				</div>
				<div class="form-floating password-container">
					<input
						type="password"
						v-model="logInForm.password"
						class="form-control"
						id="Password"
					/>
					<span
						id="IconEye"
						class="material-icons-round"
						@click="toggleShowPassword"
						>visibility_off</span
					>
					<label for="Password">Contraseña</label>
				</div>
				<div class="alert alert-warning" role="alert" v-if="logInData.show">
					{{ logInData.message }}
				</div>
				<button
					class="w-100 btn btn-lg btn-primary fw-bold"
					type="submit"
					v-if="!actionState"
				>
					Iniciar
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

function toggleShowPassword() {
	const passwordInput = document.getElementById('Password')
	const iconShow = document.getElementById('IconEye')
	if (passwordInput.type === 'password') {
		passwordInput.type = 'text'
		iconShow.innerText = 'visibility'
	} else {
		passwordInput.type = 'password'
		iconShow.textContent = 'visibility_off'
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

.password-container {
	position: relative;
}

span {
	position: absolute;
	top: 28%;
	right: 4%;
	cursor: pointer;
	color: lightgray;
	user-select: none;
}
</style>
