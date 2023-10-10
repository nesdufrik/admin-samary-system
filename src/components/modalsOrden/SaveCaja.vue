<template>
	<ModalBase id-modal="saveCaja" titulo="Guardar caja">
		<p>
			Si ya termino de editar las ordenes de la caja, puede guardar y se
			actualizara toda la información en los reportes de administración
		</p>
		<template #footer>
			<BtnBack />
			<BtnNext
				name="Guardar"
				color="success"
				target="msgSave"
				@action-next="saveCaja(cajaSelected._id)"
			/>
		</template>
	</ModalBase>
	<ModalAlert :action="actionState" id-modal="msgSave" :error-api="errorApi">
		<BtnFull
			:action="actionState"
			:show="errorApi?.show"
			target="saveCaja"
			@close="$router.back()"
		/>
	</ModalAlert>
</template>
<script setup>
import { useCaja } from '@/composables/useCaja'
import ModalAlert from '../ModalAlert.vue'
import ModalBase from '../ModalBase.vue'
import BtnBack from '../buttons/BtnBack.vue'
import BtnFull from '../buttons/BtnFull.vue'
import BtnNext from '../buttons/BtnNext.vue'

const { cajaSelected, actionState, errorApi, saveCaja } = useCaja()
</script>
