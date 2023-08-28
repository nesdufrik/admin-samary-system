<template>
	<ModalBase id-modal="delEmpleado" titulo="¿Seguro de eliminar?">
		<p>
			Una vez que elimines
			<strong class="text-danger fs-5">{{ empleadoForm.fullName }}</strong
			>, no se podra recuperar. Asegúrate de que realmente no necesitas esta
			información antes de continuar con la eliminación.
		</p>
		<template #footer>
			<BtnBack @action-back="cleanForm" />
			<BtnDelete
				target="msgDelEmpleado"
				@action-delete="delEmpleado(empleadoForm._id)"
			/>
		</template>
	</ModalBase>
	<ModalAlert
		:action="actionState"
		:error-api="errorApi"
		id-modal="msgDelEmpleado"
	>
		<BtnFull
			:action="actionState"
			:show="errorApi?.show"
			target="delEmpleado"
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
import { useEmpleados } from '@/composables/useEmpleados'

const { empleadoForm, actionState, errorApi, delEmpleado, cleanForm } =
	useEmpleados()
</script>
