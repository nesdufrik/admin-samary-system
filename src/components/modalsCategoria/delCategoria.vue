<template>
	<ModalBase id-modal="deleteCategoria" titulo="¿Seguro de eliminar?">
		<p>
			Una vez que elimines
			<strong class="text-danger fs-5">{{ categoriaForm.name }}</strong
			>, no podrás recuperarlo. Asegúrate de que realmente no necesitas esta
			información antes de continuar con la eliminación.
		</p>
		<template #footer>
			<BtnBack @action-back="clearForm" />
			<BtnDelete
				target="msgDeleteCategoria"
				@action-delete="delCategoria(categoriaForm._id)"
			/>
		</template>
	</ModalBase>
	<ModalAlert
		:action="actionState"
		:error-api="errorApi"
		id-modal="msgDeleteCategoria"
	>
		<BtnFull
			:action="actionState"
			:show="errorApi?.show"
			target="deleteCategoria"
			@close="clearForm"
		/>
	</ModalAlert>
</template>

<script setup>
import ModalBase from '@/components/ModalBase.vue'
import ModalAlert from '@/components/ModalAlert.vue'
import BtnBack from '@/components/buttons/BtnBack.vue'
import BtnDelete from '@/components/buttons/BtnDelete.vue'
import BtnFull from '@/components/buttons/BtnFull.vue'
import { useProductos } from '@/composables/useProductos'

const { categoriaForm, actionState, errorApi, clearForm, delCategoria } =
	useProductos()
</script>
