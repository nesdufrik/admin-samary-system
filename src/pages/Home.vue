<template>
	<Layout>
		<template #header>
			<NavBar />
		</template>
		<template #main>
			<router-view v-slot="{ Component, route }">
				<Transition name="fade" mode="out-in">
					<div :key="route.name">
						<component :is="Component"></component>
					</div>
				</Transition>
			</router-view>
		</template>
		<template #footer>
			<small class="text-secondary">
				powered by
				<a
					class="fw-bold text-decoration-none text-success"
					href="https://friktek.com"
					>FrikTek</a
				></small
			>
		</template>
	</Layout>
	<Teleport to="#modal">
		<addEmpresa />
		<editEmpresa />
		<delEmpresa />
		<addSucursal />
		<editSucursal />
		<delSucursal />
	</Teleport>
</template>

<script setup>
import Layout from '@/components/Layout.vue'
import NavBar from '@/components/NavBar.vue'
import addEmpresa from '@/components/modalsEmpresa/addEmpresa.vue'
import editEmpresa from '@/components/modalsEmpresa/editEmpresa.vue'
import delEmpresa from '@/components/modalsEmpresa/delEmpresa.vue'
import addSucursal from '@/components/modalsSucursal/addSucursal.vue'
import editSucursal from '@/components/modalsSucursal/editSucursal.vue'
import delSucursal from '@/components/modalsSucursal/delSucursal.vue'
import { useNavBar } from '../composables/useNavBar'
import { useEmpresas } from '@/composables/useEmpresas'
import { useSucursales } from '@/composables/useSucursales'

import { watch } from 'vue'

const { showNavBar, contentNavBar } = useNavBar()
const { empresaData, listEmpresas } = useEmpresas()
const { sucursalData, listSucursales } = useSucursales()

if (localStorage.getItem('company') && localStorage.getItem('office')) {
	empresaData.value = JSON.parse(localStorage.getItem('company'))
	sucursalData.value = JSON.parse(localStorage.getItem('office'))
	showNavBar.value = true
	await listSucursales(empresaData.value.id)
}

watch(empresaData, async () => {
	await listSucursales(empresaData.value.id)
})

watch(sucursalData, async (newVal, oldVal) => {
	console.log(newVal, oldVal)
})

contentNavBar()
await listEmpresas()
</script>

<style scoped></style>
