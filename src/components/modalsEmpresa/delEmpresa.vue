<template>
	<ModalBase id-modal="deleteEmpresa" titulo="¿Seguro de eliminar?">
		<p>
			Una vez que elimines
			<strong class="text-danger fs-5">{{ empresaForm.name }}</strong
			>, no podrás recuperarlo. Asegúrate de que realmente no necesitas esta
			información antes de continuar con la eliminación.
		</p>
		<template #footer>
			<BtnBack @action-back="cleanForm" />
			<BtnDelete
				target="msgDeleteEmpresa"
				@action-delete="delEmpresa(empresaForm._id)"
			/>
		</template>
	</ModalBase>
	<ModalAlert
		:action="actionState"
		id-modal="msgDeleteEmpresa"
		:error-api="errorApi"
	>
		<BtnFull
			:action="actionState"
			:show="errorApi?.show"
			target="deleteEmpresa"
			@close="cleanForm"
		/>
	</ModalAlert>
</template>

<script setup>
import ModalBase from '@/components/ModalBase.vue'
import ModalAlert from '@/components/ModalAlert.vue'
import BtnBack from '../buttons/BtnBack.vue'
import BtnDelete from '../buttons/BtnDelete.vue'
import BtnFull from '../buttons/BtnFull.vue'
import { useEmpresas } from '@/composables/useEmpresas'

const { empresaForm, actionState, errorApi, delEmpresa, cleanForm } =
	useEmpresas()
</script>
