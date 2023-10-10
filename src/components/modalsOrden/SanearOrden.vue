<template>
	<ModalBase id-modal="sanearOrden" titulo="Sanear Orden">
		<CheckOrden :orden-selected="ordenSelected" />
		<div class="mt-2">
			<PayOrden />
		</div>
		<template #footer>
			<BtnBack @action-back="cleanForm" />
			<BtnNext
				name="Guardar"
				color="success"
				target="msgSanear"
				@action-next="sendOrden(ordenSelected)"
			/>
		</template>
	</ModalBase>
	<ModalAlert id-modal="msgSanear" :action="actionState" :error-api="errorApi">
		<BtnFull
			:action="actionState"
			:show="errorApi?.show"
			target="sanearOrden"
			@close="cleanForm, loadOrdenesOfCaja($route.params.id)"
		/>
	</ModalAlert>
</template>
<script setup>
import { useOrdenes } from '@/composables/useOrdenes'
import ModalAlert from '../ModalAlert.vue'
import ModalBase from '../ModalBase.vue'
import BtnBack from '../buttons/BtnBack.vue'
import BtnFull from '../buttons/BtnFull.vue'
import BtnNext from '../buttons/BtnNext.vue'
import CheckOrden from './CheckOrden.vue'
import PayOrden from './PayOrden.vue'
import { useCaja } from '@/composables/useCaja'

const { ordenSelected, actionState, errorApi, cleanForm, sendOrden } =
	useOrdenes()

const { loadOrdenesOfCaja } = useCaja()
</script>
