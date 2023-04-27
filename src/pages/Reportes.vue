<template>
    <!-- #Titulo -->
    <div
        class="tarjeta rounded-2 bd-callout bd-callout-left bd-callout-secondary p-2"
    >
        <div class="d-flex flex-column flex-sm-row">
            <h2 class="fw-bold m-0 d-flex align-items-center ms-2">Fechas:</h2>
            <div class="ms-2 mt-2">
                <input
                    type="date"
                    class="form-control border-0 bg-light fw-bold fs-5"
                    v-model="fechaFormateadaDesde"
                    name=""
                    id=""
                    @change="
                        loadCajasDate(
                            $route.params.id,
                            fechaDesdeSend,
                            fechaHastaSend
                        )
                    "
                />
            </div>
            <div class="ms-2 mt-2">
                <input
                    type="date"
                    class="form-control border-0 bg-light fw-bold fs-5"
                    v-model="fechaFormateadaHasta"
                    name=""
                    id=""
                    @change="
                        loadCajasDate(
                            $route.params.id,
                            fechaDesdeSend,
                            fechaHastaSend
                        )
                    "
                />
            </div>
        </div>
    </div>

    <!-- ##Contenido -->
    <div id="reporteDiaParaImprimir" class="bg-light rounded-3 p-2">
        <div class="p-3">
            <div class="text-center mb-4">
                <h2 class="fw-bold">Reporte de Cajas</h2>
            </div>
            <div class="row row-cols-1 row-cols-md-4 g-3">
                <div class="col" v-for="caja in cajasArr">
                    <div class="border border-4 rounded p-2 h-100">
                        <div class="fw-bold">
                            {{ dateFormated(caja.createdAt) }}
                        </div>
                        <div class="fw-bold fs-5 mt-2">
                            Total: {{ caja.total }} Bs.
                        </div>
                        <div class="fw-bold mt-1 row row-cols-2 row-cols-md-1">
                            <div class="col" v-for="metodo in caja.reporte">
                                <div class="ms-2">
                                    {{ metodo.payMetodo }}:
                                    <span class="text-success">{{
                                        metodo.total
                                    }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-3 fs-4 fw-bold">
                Total: {{ totalCajasDates }} Bs.
            </div>
            <div class="fs-5" v-for="(total, name) in totalCajasDatesMetodos">
                Total de
                <span class="fw-bold text-success">"{{ name }}"</span>:
                <span class="fw-bold">{{ total }}</span> Bs.
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCaja } from '../composables/useCaja'
const router = useRoute()
const {
    cajasArr,
    loadCajas,
    loadCajasDate,
    totalCajasDates,
    totalCajasDatesMetodos,
    dateFormated,
} = useCaja()

const fecha = new Date()

const fechaFormateadaDesde = ref(
    `${fecha.getFullYear()}-${(fecha.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-01`
)
const fechaFormateadaHasta = ref(
    `${fecha.getFullYear()}-${(fecha.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${fecha.getDate().toString().padStart(2, '0')}`
)

const fechaDesdeSend = computed(() => {
    const fechaArray = fechaFormateadaDesde.value.split('-')
    const fechaSend = new Date(
        fechaArray[0],
        fechaArray[1] - 1,
        fechaArray[2],
        0,
        0,
        0
    )
    return fechaSend
})

const fechaHastaSend = computed(() => {
    const fechaArray = fechaFormateadaHasta.value.split('-')
    const fechaSend = new Date(
        fechaArray[0],
        fechaArray[1] - 1,
        fechaArray[2],
        23,
        59,
        59
    )
    return fechaSend
})

loadCajas(router.params.id)
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

.tarjeta__button--edit2 {
    margin-right: 4rem;
}
</style>
