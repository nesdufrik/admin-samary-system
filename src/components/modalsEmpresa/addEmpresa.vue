<template>
	<ModalBase id-modal="createEmpresa" titulo="Nueva Empresa">
		<form id="createEmpresaForm" class="row g-2" @submit.prevent="newEmpresa">
			<div class="form-floating">
				<input
					v-model="empresaForm.name"
					type="text"
					class="form-control"
					id="floatingName"
				/>
				<label for="floatingName">Nombre de Empresa</label>
			</div>
		</form>
		<template #footer>
			<BtnBack @action-back="cleanForm" />
			<BtnNext
				name="Guardar"
				form-id="createEmpresaForm"
				target="msgCreateEmpresa"
			/>
		</template>
	</ModalBase>
	<ModalAlert
		id-modal="msgCreateEmpresa"
		:action="actionState"
		:error-api="errorApi"
	>
		<BtnFull
			target="createEmpresa"
			:action="actionState"
			:show="errorApi?.show"
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

const { empresaForm, actionState, errorApi, cleanForm, newEmpresa } =
	useEmpresas()
</script>
