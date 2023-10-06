<template>
	<ModalBase id-modal="deleteProducto" titulo="¿Seguro de Eliminar?">
		<p>
			Una vez que elimines
			<strong class="text-danger fs-5">{{ productoForm.name }}</strong
			>, no podrás recuperarlo. Asegúrate de que realmente no necesitas esta
			información antes de continuar con la eliminación.
		</p>
		<template #footer>
			<BtnBack @action-back="clearForm" />
			<BtnDelete
				target="msgDeleteProducto"
				@action-delete="delProducto(productoForm._id)"
			/>
		</template>
	</ModalBase>
	<ModalAlert
		:action="actionState"
		:error-api="errorApi"
		id-modal="msgDeleteProducto"
	>
		<BtnFull
			:action="actionState"
			:show="errorApi?.show"
			target="deleteProducto"
			@close="clearForm"
		/>
	</ModalAlert>
</template>

<script setup>
import ModalBase from '@/components/ModalBase.vue'
import ModalAlert from '@/components/ModalAlert.vue'
import BtnBack from '../buttons/BtnBack.vue'
import BtnDelete from '../buttons/BtnDelete.vue'
import BtnFull from '../buttons/BtnFull.vue'
import { useProductos } from '@/composables/useProductos'

const { productoForm, actionState, errorApi, delProducto, clearForm } =
	useProductos()
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
