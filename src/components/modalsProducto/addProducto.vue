<template>
	<ModalBase id-modal="newProducto" titulo="Agregar Producto">
		<form
			id="newProductoForm"
			class="row g-2"
			@submit.prevent="newProducto($route.params.id)"
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
						:disabled="!etiquetasArray"
						v-model="productoForm.etiqueta"
						class="form-select"
						id="productoEtiqueta"
					>
						<option selected></option>
						<option v-for="etiqueta in etiquetasArray" :value="etiqueta">
							{{ etiqueta }}
						</option>
					</select>
					<label for="productoEtiqueta">Etiquetas</label>
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
					v-if="previewUrl"
					:src="previewUrl"
					style="max-width: 200px; margin-top: 10px"
				/>
			</div>
		</form>
		<template #footer>
			<BtnBack @action-back="clearForm" />
			<BtnNext
				name="Agregar"
				form-id="newProductoForm"
				target="msgNewProducto"
			/>
		</template>
	</ModalBase>
	<ModalAlert
		:action="actionState"
		:error-api="errorApi"
		id-modal="msgNewProducto"
	>
		<BtnFull
			:action="actionState"
			:show="errorApi?.show"
			target="newProducto"
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
	previewUrl,
	categoriasArr,
	productoForm,
	errorApi,
	actionState,
	etiquetasArray,
	newProducto,
	clearForm,
	onFileChange,
} = useProductos()
</script>
