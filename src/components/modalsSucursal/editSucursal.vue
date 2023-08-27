<template>
	<ModalBase id-modal="editarSucursal" titulo="Editar Sucursal">
		<form
			id="editarSucursalForm"
			class="row g-2"
			@submit.prevent="updateSucursal(sucursalForm._id)"
		>
			<div class="form-floating">
				<input
					v-model="sucursalForm.name"
					type="text"
					class="form-control"
					id="floatingName"
				/>
				<label for="floatingName">Nombre de la sucursal</label>
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
					<label for="categoriaEtiqueta">Metodo de Pago</label>
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
					<BoxBadge
						v-for="(metodo, index) in sucursalForm.metodosPago"
						:nombre-etiqueta="metodo"
						:key="metodo"
					>
						<span
							role="button"
							class="fs-5 ms-1 material-icons-round"
							@click="removeMetodo(index)"
							>clear</span
						>
					</BoxBadge>
				</div>
			</div>
		</form>
		<template #footer>
			<BtnBack @action-back="cleanForm" />
			<BtnNext
				name="Actualizar"
				form-id="editarSucursalForm"
				target="msgEditarSucursal"
			/>
		</template>
	</ModalBase>
	<ModalAlert
		id-modal="msgEditarSucursal"
		:error-api="errorApi"
		:action="actionState"
	>
		<BtnFull
			target="editarSucursal"
			:action="actionState"
			:show="errorApi?.show"
			@close="cleanForm"
		/>
	</ModalAlert>
</template>

<script setup>
import ModalBase from '@/components/ModalBase.vue'
import ModalAlert from '@/components/ModalAlert.vue'
import BtnBack from '@/components/buttons/BtnBack.vue'
import BtnNext from '@/components/buttons/BtnNext.vue'
import BtnFull from '@/components/buttons/BtnFull.vue'
import BoxBadge from '@/components/BoxBadge.vue'
import { ref } from 'vue'
import { useSucursales } from '@/composables/useSucursales'

const { sucursalForm, actionState, errorApi, updateSucursal, cleanForm } =
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
const removeMetodo = (index) => {
	sucursalForm.value.metodosPago.splice(index, 1)
}
</script>

<style scoped>
.textarea-container {
	border: 2px dotted #ccc;
	border-radius: 5px;
	padding: 10px;
	min-height: 80px;
	width: 100%;
	box-sizing: border-box;
}
</style>
