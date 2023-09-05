<template>
	<ModalBase id-modal="createSucursal" titulo="Crear Sucursal">
		<form
			id="createSucursalForm"
			class="row g-2"
			@submit.prevent="newSucursal(empresaData.id)"
		>
			<div class="form-floating">
				<input
					v-model="sucursalForm.name"
					type="text"
					class="form-control"
					id="floatingNameSucursalCreate"
				/>
				<label for="floatingNameSucursalCreate">Nombre de la sucursal</label>
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
					id="floatingDireccionCreate"
				/>
				<label for="floatingDireccionCreate">Dirección</label>
			</div>
			<div class="form-floating">
				<input
					v-model="sucursalForm.telefono"
					type="tel"
					class="form-control"
					id="floatingTelefonoCreate"
				/>
				<label for="floatingTelefonoCreate">Teléfono</label>
			</div>
			<div class="input-group">
				<div class="form-floating">
					<input
						v-model="metodo"
						type="text"
						class="form-control"
						id="metodoCreate"
						@keydown.enter.prevent="addMetodo"
					/>
					<label for="metodoCreate">Metodo de Pago</label>
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
				name="Crear"
				form-id="createSucursalForm"
				target="msgCreateSucursal"
			/>
		</template>
	</ModalBase>
	<ModalAlert
		id-modal="msgCreateSucursal"
		:action="actionState"
		:error-api="errorApi"
	>
		<BtnFull
			:action="actionState"
			:show="errorApi?.show"
			target="createSucursal"
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
import { useEmpresas } from '@/composables/useEmpresas'

const { sucursalForm, actionState, errorApi, newSucursal, cleanForm } =
	useSucursales()
const { empresaData } = useEmpresas()

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
