<template>
	<ModalBase id-modal="editarCategoria" titulo="Editar Categoría">
		<form
			id="editarCategoriaForm"
			class="row g-2"
			@submit.prevent="updateCategoria(categoriaForm._id)"
		>
			<div>
				<div class="form-floating">
					<input
						v-model="categoriaForm.name"
						type="text"
						class="form-control"
						id="categoriaName"
						@keydown.enter.prevent=""
					/>
					<label for="categoriaName">Nombre de Categoria</label>
				</div>
			</div>
			<div class="input-group">
				<div class="form-floating">
					<input
						v-model="etiqueta"
						type="text"
						class="form-control"
						id="categoriaEtiqueta"
						@keydown.enter.prevent="addEtiqueta"
					/>
					<label for="categoriaEtiqueta">Etiquetas</label>
				</div>
				<button
					type="button"
					@click="addEtiqueta"
					class="btn btn-outline-success material-icons-round"
				>
					send
				</button>
			</div>
			<div>
				<div class="textarea-container">
					<BoxBadge
						v-for="(etiqueta, index) in categoriaForm.etiquetas"
						:nombre-etiqueta="etiqueta"
						:key="etiqueta"
					>
						<span
							role="button"
							class="fs-6 ms-1 material-icons-round"
							@click="removeEtiqueta(index)"
							>remove_circle</span
						>
					</BoxBadge>
				</div>
			</div>
		</form>
		<template #footer>
			<BtnBack @action-back="clearForm" />
			<BtnNext
				name="Actualizar"
				form-id="editarCategoriaForm"
				target="msgEditarCategoria"
			/>
		</template>
	</ModalBase>
	<ModalAlert
		:action="actionState"
		:error-api="errorApi"
		id-modal="msgEditarCategoria"
	>
		<BtnFull
			:action="actionState"
			:show="errorApi?.show"
			target="editarCategoria"
			@close="clearForm"
		/>
	</ModalAlert>
</template>

<script setup>
import ModalBase from '@/components/ModalBase.vue'
import ModalAlert from '@/components/ModalAlert.vue'
import BoxBadge from '@/components/BoxBadge.vue'
import BtnBack from '@/components/buttons/BtnBack.vue'
import BtnNext from '@/components/buttons/BtnNext.vue'
import BtnFull from '@/components/buttons/BtnFull.vue'
import { ref } from 'vue'
import { useProductos } from '@/composables/useProductos'

const { categoriaForm, actionState, errorApi, clearForm, updateCategoria } =
	useProductos()

const etiqueta = ref('')
const addEtiqueta = () => {
	if (etiqueta.value.trim()) {
		categoriaForm.value.etiquetas.push(etiqueta.value.trim())
		etiqueta.value = ''
	}
}
const removeEtiqueta = (index) => {
	categoriaForm.value.etiquetas.splice(index, 1)
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
