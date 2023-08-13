<template>
	<div class="tarjeta">
		<BoxTitle titulo="Categorias">
			<button
				class="tarjeta__button link-secondary tarjeta__button--edit align-middle material-icons-round"
				data-bs-target="#newCategoria"
				data-bs-toggle="modal"
			>
				note_add
			</button>
			<button
				class="tarjeta__button link-secondary align-middle material-icons-round"
				v-if="cat_switch"
				:onclick="switched"
			>
				visibility_off
			</button>
			<button
				class="tarjeta__button link-secondary align-middle material-icons-round"
				v-else
				:onclick="switched"
			>
				visibility
			</button>
		</BoxTitle>
	</div>
	<div class="row row-cols-1 row-cols-md-4 g-2" v-if="cat_switch">
		<div class="col" v-for="categoria in categoriasArr" :key="categoria._id">
			<BoxArticle :nombre-categoria="categoria.name">
				<BoxBadge
					v-for="etiqueta in categoria.etiquetas"
					:nombre-etiqueta="etiqueta"
				/>
				<template #buttons>
					<button
						class="tarjeta__button tarjeta__button--delete link-danger material-icons-round"
						data-bs-toggle="modal"
						data-bs-target="#deleteCategoria"
						@click="editarCategoria(categoria._id)"
					>
						delete
					</button>
					<button
						class="tarjeta__button tarjeta__button--edit link-secondary material-icons-round"
						data-bs-toggle="modal"
						data-bs-target="#editCategoria"
						@click="editarCategoria(categoria._id)"
					>
						edit
					</button>
				</template>
			</BoxArticle>
		</div>
	</div>
	<div class="tarjeta">
		<BoxTitle titulo="Productos">
			<button
				class="tarjeta__button link-secondary align-middle material-icons-round"
				data-bs-target="#newProducto"
				data-bs-toggle="modal"
			>
				note_add
			</button>
		</BoxTitle>
	</div>
	<!-- Lista de productos -->
	<div
		class="bg-light rounded-3 table-responsive border-top border-dark-subtle border-5 p-2"
	>
		<table class="table table-light table-hover">
			<thead>
				<tr>
					<th colspan="3" class="align-middle fs-4">Productos</th>
					<th colspan="2" class="align-middle">Precio Bs.</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="producto in productosArr" :key="producto._id">
					<td class="align-middle">{{ producto.name }}</td>
					<td class="align-middle">{{ producto.categoria }}</td>
					<td class="align-middle">{{ producto.etiqueta }}</td>
					<td class="align-middle">{{ producto.precio }}</td>
					<td class="align-middle text-end">
						<span
							class="tarjeta__link text-secondary material-icons-round me-md-2"
							data-bs-target="#editProducto"
							data-bs-toggle="modal"
							@click="editarProducto(producto._id)"
							>edit</span
						>
						<span
							class="tarjeta__link text-danger material-icons-round"
							data-bs-target="#deleteProducto"
							data-bs-toggle="modal"
							@click="editarProducto(producto._id)"
							>delete</span
						>
					</td>
				</tr>
			</tbody>
		</table>
	</div>

	<addCategoriaModal />
	<editCategoriaModal />
	<delCategoriaModal />

	<addProductoModal />
	<editProductoModal />
	<delProductoModal />
</template>

<script setup>
import BoxTitle from '../components/BoxTitle.vue'
import BoxArticle from '../components/BoxArticle.vue'
import BoxBadge from '../components/BoxBadge.vue'
import addProductoModal from '../components/modalsProducto/addProducto.vue'
import editProductoModal from '../components/modalsProducto/editProducto.vue'
import delProductoModal from '../components/modalsProducto/delProducto.vue'
import addCategoriaModal from '../components/modalsCategoria/addCategoria.vue'
import editCategoriaModal from '../components/modalsCategoria/editCategoria.vue'
import delCategoriaModal from '../components/modalsCategoria/delCategoria.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useProductos } from '../composables/useProductos'

const {
	categoriasArr,
	productosArr,
	listCategorias,
	editarCategoria,
	listProductos,
	editarProducto,
} = useProductos()

const route = useRoute()
const cat_switch = ref(true)
const switched = () => {
	cat_switch.value = !cat_switch.value
}
listCategorias(route.params.id)
listProductos(route.params.id)
</script>
<style scoped>
.tarjeta {
	position: relative;
}

.tarjeta__button {
	user-select: none;
	background-color: transparent;
	border: none;
	cursor: pointer;
	font-size: 1.4rem;
	position: absolute;
	right: 0.5rem;
	top: 0.5rem;
}

.tarjeta__link {
	user-select: none;
	background-color: transparent;
	border: none;
	cursor: pointer;
}

.tarjeta__button--edit {
	margin-right: 2rem;
}
</style>
