<template>
	<ModalBase id-modal="deleteSucursal" titulo="¿Seguro de eliminar?">
		<p>
			Una vez que elimines
			<strong class="text-danger fs-5">{{ sucursalForm.name }}</strong
			>, no podrás recuperarlo. Asegúrate de que realmente no necesitas esta
			información antes de continuar con la eliminación.
		</p>
		<template #footer>
			<BtnBack @action-back="cleanForm" />
			<BtnDelete
				target="msgDeleteSucursal"
				@action-delete="delSucursal(sucursalForm._id)"
			/>
		</template>
	</ModalBase>
	<ModalAlert
		id="msgDeleteSucursal"
		:action="actionState"
		:error-api="errorApi"
	>
		<BtnFull
			target="deleteSucursal"
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
import BtnDelete from '@/components/buttons/BtnDelete.vue'
import BtnFull from '@/components/buttons/BtnFull.vue'
import { useSucursales } from '@/composables/useSucursales'

const { sucursalForm, actionState, errorApi, delSucursal, cleanForm } =
	useSucursales()
</script>

<style scoped></style>
