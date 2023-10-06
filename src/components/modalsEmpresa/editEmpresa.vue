<template>
	<ModalBase id-modal="editarEmpresa" titulo="Editar Empresa">
		<form
			id="editarEmpresaForm"
			class="row g-2"
			@submit.prevent="updateEmpresa(empresaForm._id)"
		>
			<div class="form-floating">
				<input
					v-model="empresaForm.name"
					type="text"
					class="form-control"
					id="floatingNameEmpresaEdit"
				/>
				<label for="floatingNameEmpresaEdit">Nombre de Empresa</label>
			</div>
		</form>
		<template #footer>
			<BtnBack @action-back="cleanForm" />
			<BtnNext
				name="Actualizar"
				form-id="editarEmpresaForm"
				target="msgEditarEmpresa"
			/>
		</template>
	</ModalBase>
	<ModalAlert
		id-modal="msgEditarEmpresa"
		:action="actionState"
		:error-api="errorApi"
	>
		<BtnFull
			:action="actionState"
			:show="errorApi?.show"
			target="editarEmpresa"
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
import { useEmpresas } from '@/composables/useEmpresas'

const { empresaForm, actionState, errorApi, updateEmpresa, cleanForm } =
	useEmpresas()
</script>

<style scoped>
.btn-modal {
	margin: 0;
	padding: 0.8rem;
	font-size: 1rem;
	border: 1px solid #ccc;
	border-top: 0;
	border-bottom: 0;
	border-right: 0;
	user-select: none;
}
</style>
