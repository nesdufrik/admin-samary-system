<template>
	<header
		class="navbar navbar-expand-lg bd-navbar bg-dark navbar-dark fixed-top"
	>
		<nav
			class="container-xl bd-gutter flex-wrap flex-lg-nowrap"
			aria-label="Main navigation"
		>
			<RouterLink
				class="p-lg-3 my-2 my-lg-0 text-white text-decoration-none"
				:to="`/`"
				aria-label="Home"
			>
				<img src="../assets/logo-icon.png" alt="logo" />
			</RouterLink>
			<div class="d-flex flex-column ms-3 me-auto">
				<BtnNavSelector
					title="Empresa"
					target-create="createEmpresa"
					target-edit="editarEmpresa"
					target-delete="deleteEmpresa"
					:elements="empresasArr"
					:name="empresaData?.name"
					@edit="(i) => editarEmpresa(i)"
					@select="(i, n) => selectEmpresa(i, n)"
				/>
				<BtnNavSelector
					title="Sucursal"
					target-create="createSucursal"
					target-edit="editarSucursal"
					target-delete="deleteSucursal"
					:elements="sucursales"
					:name="sucursalData?.name"
					@edit="(i) => editarSucursal(i)"
					@select="(i, n) => selectSucursal(i, n)"
				/>
			</div>

			<div class="d-flex">
				<button
					class="navbar-toggler d-flex d-md-none border-0"
					type="button"
					data-bs-toggle="offcanvas"
					data-bs-target="#bdNavbar"
					aria-controls="bdNavbar"
					aria-label="Toggle navigation"
				>
					<span class="material-icons-round"> menu </span>
				</button>
			</div>

			<div
				class="offcanvas-md offcanvas-bottom bg-dark"
				tabindex="-1"
				id="bdNavbar"
				aria-labelledby="bdNavbarOffcanvasLabel"
				data-bs-scroll="true"
			>
				<div
					class="offcanvas-body p-0 mt-3 mt-md-0 d-flex flex-column flex-md-row justify-content-start"
				>
					<ul class="navbar-nav flex-row flex-wrap ms-md-auto">
						<li
							class="nav-item col-3 col-md-auto text-center"
							v-if="showNavBar"
							v-for="elem in itemsNavBar"
						>
							<RouterLink
								:to="`${elem.link}`"
								class="nav-link py-2 px-0 px-md-2"
							>
								<span class="material-icons-round">
									{{ elem.icon }}
								</span>
								<br />
								{{ elem.title }}
							</RouterLink>
						</li>
					</ul>
					<hr class="text-white-50 mt-auto" />
					<div class="dropdown ps-3 d-none d-md-flex align-items-center">
						<div
							role="button"
							class="d-block link-light text-decoration-none"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							<img
								:src="person.avatar"
								alt="avatar"
								width="55"
								height="55"
								class="rounded-circle"
							/>
						</div>

						<ul class="dropdown-menu dropdown-menu-md-end">
							<li>
								<span
									class="dropdown-item-text text-center text-success fw-bold"
									>{{ person.name }}</span
								>
							</li>
							<li><hr class="dropdown-divider" /></li>
							<li>
								<div
									class="dropdown-item d-flex align-items-center gap-1 fw-bold text-secondary"
								>
									<span class="material-icons-round">settings</span>
									<span role="button"> Configuración </span>
								</div>
							</li>
							<li>
								<div
									class="dropdown-item d-flex align-items-center gap-1 fw-bold text-danger"
								>
									<span class="material-icons-round">power_settings_new</span>
									<span role="button" @click="logout"> Cerrar sesión </span>
								</div>
							</li>
						</ul>
					</div>
					<div
						class="px-3 pb-3 d-inline d-md-none d-flex align-items-center justify-content-start gap-3"
					>
						<img
							:src="person.avatar"
							alt="avatar"
							width="55"
							height="55"
							class="rounded-circle"
						/>
						<small class="nameAvatar text-success">{{ person.name }}</small>
						<div class="ms-auto d-flex flex-column fw-bold gap-3">
							<span class="text-secondary material-icons-round">settings</span>
							<span class="text-danger material-icons-round" @click="logout"
								>power_settings_new</span
							>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
import { useNavBar } from '@/composables/useNavBar'
import { useEmpresas } from '@/composables/useEmpresas'
import { useSucursales } from '@/composables/useSucursales'
import BtnNavSelector from './buttons/BtnNavSelector.vue'

const { logout } = useAuth()
const { showNavBar, itemsNavBar } = useNavBar()
const { empresasArr, empresaData, editarEmpresa } = useEmpresas()
const { sucursalesArr, sucursalData, editarSucursal } = useSucursales()

const person = ref(JSON.parse(localStorage.getItem('person')))
const sucursales = computed(() => {
	if (sucursalesArr.value.length === 0 && !empresaData.value.name) return null
	return sucursalesArr.value
})

const selectEmpresa = (id, name) => {
	localStorage.setItem('company', JSON.stringify({ id, name }))
	empresaData.value = { id, name }
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
.nameAvatar {
	width: 150px;
}
</style>
