<template>
	<Layout>
		<template #header>
			<NavBar />
		</template>
		<template #main>
			<router-view v-slot="{ Component, route }">
				<Transition name="fade" mode="out-in">
					<div :key="route.name">
						<Suspense>
							<component :is="Component"></component>
							<template #fallback>
								<div
									class="d-flex align-items-center justify-content-center"
									style="height: 80vh"
								>
									<span class="loader"></span>
								</div>
							</template>
						</Suspense>
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

contentNavBar()
await listEmpresas()
</script>
<style scoped>
.loader {
	position: relative;
	width: 48px;
	height: 48px;
	background: #198754;
	transform: rotateX(65deg) rotate(45deg);
	color: #20c997;
	animation: layers1 1s linear infinite alternate;
}
.loader:after {
	content: '';
	position: absolute;
	inset: 0;
	background: rgba(255, 255, 255, 0.7);
	animation: layerTr 1s linear infinite alternate;
}

@keyframes layers1 {
	0% {
		box-shadow: 0px 0px 0 0px;
	}
	90%,
	100% {
		box-shadow: 20px 20px 0 -4px;
	}
}
@keyframes layerTr {
	0% {
		transform: translate(0, 0) scale(1);
	}
	100% {
		transform: translate(-25px, -25px) scale(1);
	}
}
</style>
