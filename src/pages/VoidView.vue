<template>
	<div
		class="text-success bg-success-subtle border-end border-success-subtle border-5 rounded-3 text-end p-3 my-3"
	>
		<h1 class="fw-bold">Administrar Empresas</h1>
		<p>Sección de acceso a las diferentes empresas creadas del usuario</p>
	</div>
	<div class="contenido flex-column flex-md-row">
		<BtnSelector
			title="Empresa"
			target-create="createEmpresa"
			target-edit="editarEmpresa"
			target-delete="deleteEmpresa"
			:elements="empresasArr"
			:name="empresaData?.name"
			@edit="(i) => editarEmpresa(i)"
			@select="(i, n) => selectEmpresa(i, n)"
		/>
		<BtnSelector
			title="Sucursal"
			target-create="createSucursal"
			target-edit="editarSucursal"
			target-delete="deleteSucursal"
			:elements="sucursales"
			:name="sucursalData?.name"
			@edit="(i) => editarSucursal(i)"
			@select="(i) => selectSucursal(i)"
		/>
	</div>
</template>
<script setup>
import BtnSelector from '@/components/buttons/BtnSelector.vue'
import { computed } from 'vue'
import { useNavBar } from '@/composables/useNavBar'
import { useEmpresas } from '@/composables/useEmpresas'
import { useSucursales } from '@/composables/useSucursales'
const { empresasArr, empresaData, editarEmpresa } = useEmpresas()
const { sucursalesArr, sucursalData, editarSucursal } = useSucursales()
const { showNavBar } = useNavBar()

const sucursales = computed(() => {
	if (sucursalesArr.value.length === 0 && !empresaData.value.name) return null
	return sucursalesArr.value
})

const selectEmpresa = (id, name) => {
	localStorage.setItem('company', JSON.stringify({ id, name }))
	empresaData.value = { id, name }
	sucursalData.value = {}
	localStorage.removeItem('office')
	showNavBar.value = false
}
const selectSucursal = (id) => {
	sucursalData.value = JSON.parse(
		JSON.stringify(sucursalesArr.value.find((el) => el._id === id))
	)
	localStorage.setItem('office', JSON.stringify(sucursalData.value))
	showNavBar.value = true
}
</script>
<style scoped>
.contenido {
	height: 50vh;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;
}
</style>
