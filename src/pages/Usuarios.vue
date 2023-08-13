<template>
	<div class="tarjeta">
		<BoxTitle titulo="Usuarios">
			<button
				class="tarjeta__button link-secondary align-middle material-icons-round"
				data-bs-target="#createEmpleado"
				data-bs-toggle="modal"
				@click="defaulAvatar"
			>
				note_add
			</button>
		</BoxTitle>
	</div>
	<div class="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-2">
		<div
			v-for="empleado in empleadosArr"
			:key="empleado._id"
			class="col tarjeta"
		>
			<BoxUser
				:url-avatar="empleado.avatar"
				:nombre-completo="empleado.fullName"
				:cargo="empleado.cargo"
				:email="empleado.email"
			>
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
			</BoxUser>
		</div>
	</div>

	<addEmpleadoModal />
	<editEmpleadoModal />
	<delEmpleadoModal />
</template>

<script setup>
import BoxTitle from '../components/BoxTitle.vue'
import BoxUser from '../components/BoxUser.vue'
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
</style>
