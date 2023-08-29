<template>
	<ModalBase id-modal="editEmpleado" titulo="Editar Usuario">
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
				<label for="editEmpleadoInputName">Nombre completo</label>
			</div>
			<div class="form-floating">
				<input
					v-model="empleadoForm.cargo"
					type="text"
					class="form-control"
					id="editEmpleadoInputCargo"
				/>
				<label for="editEmpleadoInputCargo">Cargo empleado</label>
			</div>
			<div class="d-flex">
				<div class="form-floating w-100 me-1">
					<input
						:value="empleadoForm.avatar"
						type="text"
						class="form-control"
						id="floatingAvatarEmpleadoUPDATE"
						disabled
					/>
					<label for="floatingAvatarEmpleadoUPDATE">Elegir avatar</label>
				</div>
				<div class="dropstart ms-auto">
					<button
						type="button"
						class="btn btn-secondary boton-imagen"
						data-bs-toggle="dropdown"
						aria-expanded="false"
						:style="{
							backgroundImage: `url(${empleadoForm.avatar})`,
						}"
					></button>
					<div class="dropdown-menu p-2 text-center">
						<img
							v-for="(image, index) in avatares"
							role="button"
							alt=""
							:key="index"
							:src="image"
							width="40"
							@click="selectImage(image)"
						/>
					</div>
				</div>
			</div>
			<div class="form-floating">
				<input
					v-model="empleadoForm.password"
					type="password"
					class="form-control"
					id="editEmpleadoInputPassword"
				/>
				<label for="editEmpleadoInputPassword">Contraseña</label>
			</div>
		</form>
		<template #footer>
			<BtnBack @action-back="cleanForm" />
			<BtnNext
				name="Actualizar"
				form-id="editEmpleadoForm"
				target="msgEditEmpleado"
			/>
		</template>
	</ModalBase>
	<ModalAlert
		:action="actionState"
		:error-api="errorApi"
		id-modal="msgEditEmpleado"
	>
		<BtnFull
			:action="actionState"
			:show="errorApi?.show"
			target="editEmpleado"
			@close="cleanForm"
		/>
	</ModalAlert>
</template>

<script setup>
import ModalBase from '@/components/ModalBase.vue'
import ModalAlert from '@/components/ModalAlert.vue'
import BtnBack from '../buttons/BtnBack.vue'
import BtnNext from '../buttons/BtnNext.vue'
import BtnFull from '../buttons/BtnFull.vue'
import { useEmpleados } from '@/composables/useEmpleados'

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
const selectImage = (image) => {
	empleadoForm.value.avatar = image
}
</script>

<style scoped>
.boton-imagen {
	background-size: cover; /* ajusta la imagen al tamaño del botón */
	width: 58px;
	height: 58px;
	border: none;
}
</style>
