<template>
	<div
		class="modal fade"
		:id="idModal"
		tabindex="-1"
		data-bs-backdrop="static"
		data-bs-keyboard="false"
		role="dialog"
	>
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-body text-center" v-if="!action">
					<h2
						class="modal-title fw-bold mb-4"
						:class="[errorApi?.show ? 'text-danger' : 'text-success']"
						id="exampleModalLabel"
					>
						{{ errorApi?.show ? 'Fracaso' : 'Éxito' }}
					</h2>
					<div class="fw-bold">
						{{ errorApi?.message }}
					</div>
				</div>
				<div class="modal-body text-center" v-else>
					<div class="fw-bold fs-4 text-success d-flex flex-column mt-3">
						<div class="d-flex justify-content-center">
							<div class="spinner-border" role="status">
								<span class="visually-hidden">Loading...</span>
							</div>
						</div>
						<span> Procesando... </span>
					</div>
				</div>
				<div class="modal-footer p-0 mt-3">
					<slot></slot>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
const props = defineProps({
	idModal: String,
	errorApi: Object,
	action: Boolean,
})

// const {idModal, errorApi, action} = computed(() => props)
</script>
<style scoped></style>
