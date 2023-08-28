<template>
	<ModalBase id-modal="editarProducto" titulo="Editar Producto">
		<form
			id="editarProductoForm"
			class="row g-2"
			@submit.prevent="updateProducto(productoForm._id)"
		>
			<div class="form-floating">
				<input
					v-model="productoForm.name"
					type="text"
					class="form-control"
					id="productoName"
					@keydown.enter.prevent
				/>
				<label for="productoName">Nombre del Producto</label>
			</div>
			<div class="col-md">
				<div class="form-floating">
					<select
						v-model="productoForm.categoria"
						class="form-select"
						id="productoCategoria"
					>
						<option selected></option>
						<option v-for="categoria in categoriasArr" :value="categoria.name">
							{{ categoria.name }}
						</option>
					</select>
					<label for="productoCategoria">Categoria</label>
				</div>
			</div>
			<div class="col-md">
				<div class="form-floating">
					<select
						v-model="productoForm.etiqueta"
						class="form-select"
						id="productoEtiqueta"
					>
						<option selected></option>
						<option v-for="etiqueta in etiquetasArray" :value="etiqueta">
							{{ etiqueta }}
						</option>
					</select>
					<label for="productoEtiqueta">Etiqueta</label>
				</div>
			</div>
			<div class="form-floating">
				<input
					v-model="productoForm.precio"
					type="number"
					class="form-control"
					id="productoPrecio"
					step=".1"
					@keydown.enter.prevent
					required
				/>
				<label for="productoPrecio">Precio en Bs.</label>
			</div>
			<div class="text-start">
				<label class="text-secondary p-2" for="productoPrecio"
					>Cargar imágen:</label
				>
				<input
					class="form-control"
					type="file"
					id="image"
					ref="image"
					@change="onFileChange"
					@keydown.enter.prevent
				/>
			</div>
			<div>
				<img
					:src="previewUrl"
					v-if="previewUrl"
					style="max-width: 200px; margin-top: 10px"
				/>
			</div>
		</form>
		<template #footer>
			<BtnBack @action-back="clearForm" />
			<BtnNext
				name="Actualizar"
				form-id="editarProductoForm"
				target="msgEditarProducto"
			/>
		</template>
	</ModalBase>
	<ModalAlert
		:action="actionState"
		:error-api="errorApi"
		id-modal="msgEditarProducto"
	>
		<BtnFull
			:action="actionState"
			:show="errorApi?.show"
			target="editarProducto"
			@close="clearForm"
		/>
	</ModalAlert>
</template>

<script setup>
import ModalBase from '@/components/ModalBase.vue'
import ModalAlert from '@/components/ModalAlert.vue'
import BtnBack from '../buttons/BtnBack.vue'
import BtnNext from '../buttons/BtnNext.vue'
import BtnFull from '../buttons/BtnFull.vue'
import { useProductos } from '@/composables/useProductos'

const {
	productoForm,
	previewUrl,
	categoriasArr,
	actionState,
	errorApi,
	etiquetasArray,
	updateProducto,
	clearForm,
	onFileChange,
} = useProductos()
</script>
