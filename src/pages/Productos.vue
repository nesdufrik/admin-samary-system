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
				@click="cat_switch = !cat_switch"
			>
				{{ cat_switch ? 'visibility_off' : 'visibility' }}
			</button>
		</BoxTitle>
	</div>
	<div class="row row-cols-1 row-cols-md-4 g-2" v-show="cat_switch">
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
						data-bs-target="#editarCategoria"
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
					<th class="align-middle fs-4">Productos</th>
					<th colspan="2" class="align-middle fs-6">
						<div class="d-flex flex-wrap flex-md-nowrap">
							<div class="d-flex w-100 align-items-center">
								<span class="material-icons-round fs-5">filter_list</span>
								<select
									v-model="filterCategoria"
									class="form-select border-0 fw-bold bg-light fs-6 ps-2 py-0"
									@change="filter"
								>
									<option value="" selected>Todos...</option>
									<option v-for="cat in categoriasArr" :value="cat.name">
										{{ cat.name }}
									</option>
								</select>
							</div>
							<div class="d-flex w-100 align-items-center">
								<span class="material-icons-round fs-5">filter_list</span>
								<select
									v-model="filterSubcategoria"
									class="form-select border-0 fw-bold fs-6 ps-2 py-0"
									@change="filter"
									:class="[
										subcatArr
											? 'bg-light '
											: 'bg-secondary-subtle text-secondary',
									]"
									:disabled="!subcatArr"
								>
									<option value="">Todos...</option>
									<option v-for="sub in subcatArr" :value="sub">
										{{ sub }}
									</option>
								</select>
							</div>
						</div>
					</th>
					<th colspan="2" class="align-middle">Precio</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="producto in productosArr" :key="producto._id">
					<td class="align-middle col-6">{{ producto.name }}</td>
					<td class="align-middle col-2">
						{{ producto.categoria }}
					</td>
					<td class="align-middle col-2">
						{{ producto.etiqueta }}
					</td>
					<td class="align-middle">
						{{
							new Intl.NumberFormat('es-BO', {
								style: 'currency',
								currency: 'BOB',
							}).format(producto.precio)
						}}
					</td>
					<td class="align-middle text-end">
						<span
							class="tarjeta__link text-secondary material-icons-round me-md-2"
							data-bs-target="#editarProducto"
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
		<nav>
			<ul class="pagination mt-3 justify-content-center user-select-none">
				<li
					:class="[
						pageProducto.hasPrevPage ? 'page-item' : 'page-item disabled',
					]"
				>
					<a
						class="page-link"
						aria-label="Previous"
						role="button"
						@click="changePage(pageProducto.prevPage)"
					>
						Anterior
					</a>
				</li>
				<li class="page-item">
					<a class="page-link" role="button">{{ pageProducto.page }}</a>
				</li>
				<li
					:class="[
						pageProducto.hasNextPage ? 'page-item' : 'page-item disabled',
					]"
				>
					<a
						class="page-link"
						aria-label="Next"
						role="button"
						@click="changePage(pageProducto.nextPage)"
					>
						Próximo
					</a>
				</li>
			</ul>
		</nav>
	</div>
	<Teleport to="#modal">
		<addCategoriaModal />
		<editCategoriaModal />
		<delCategoriaModal />

		<addProductoModal />
		<editProductoModal />
		<delProductoModal />
	</Teleport>
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
import { ref, watch } from 'vue'
import { useProductos } from '@/composables/useProductos'
import { useSucursales } from '@/composables/useSucursales'

const {
	categoriasArr,
	subcatArr,
	productosArr,
	pageProducto,
	filterCategoria,
	filterSubcategoria,
	listCategorias,
	editarCategoria,
	listProductos,
	editarProducto,
} = useProductos()

const { sucursalData } = useSucursales()

const cat_switch = ref(true)

const changePage = (page) => {
	listProductos(
		sucursalData.value._id,
		page,
		filterCategoria.value,
		filterSubcategoria.value
	)
}

const filter = () => {
	listProductos(
		sucursalData.value._id,
		1,
		filterCategoria.value,
		filterSubcategoria.value
	)
}

watch(filterCategoria, () => {
	if (filterCategoria.value) {
		const filter = categoriasArr.value.filter(
			(el) => el.name === filterCategoria.value
		)
		subcatArr.value = filter[0].etiquetas
		filterSubcategoria.value = ''
	} else {
		subcatArr.value = null
		filterSubcategoria.value = ''
	}
})

watch(sucursalData, async () => {
	await listCategorias(sucursalData.value._id)
	await listProductos(sucursalData.value._id)
})

await listCategorias(sucursalData.value._id)
await listProductos(sucursalData.value._id)
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
