<template>
  <div
    class="tarjeta rounded-2 bd-callout bd-callout-left bd-callout-secondary p-2 d-flex align-items-center"
  >
    <div>
      <h2 class="fw-bold m-0 text-success ms-2">
        {{ monthYear }}
      </h2>
    </div>
    <div class="ms-auto">
      <select
        class="form-select border-0 fw-bold bg-light fs-5"
        name=""
        id=""
        v-model="fechaFormateada"
        @change="loadAnaliticsSpecific($route.params.id, fechaFormateada)"
      >
        <option v-for="(el, index) in month" :value="index">
          {{ el }}
        </option>
      </select>
    </div>
  </div>
  <div class="row row-cols-1 row-cols-md-2 g-3 mb-3">
    <div class="col">
      <barChart :chartTotalArray="chartTotales" />
    </div>
    <div class="col">
      <pieChart :chartItemArray="chartItems" />
    </div>
  </div>
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
    <topItems />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import barChart from '../components/analiticas/barChart.vue'
import pieChart from '../components/analiticas/pieChart.vue'
import topItems from '../components/analiticas/topItems.vue'
import { useAnalitics } from '../composables/useAnaliticas'

const { loadAnalitics, loadAnaliticsSpecific, chartTotales, chartItems } =
  useAnalitics()
const route = useRoute()
const month = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiempre',
  'Octubre',
  'Noviembre',
  'Diciembre',
]
const actualDate = new Date()
const fechaFormateada = ref(actualDate.getMonth())
const monthYear = computed(() => {
  return `${month[fechaFormateada.value]} ${actualDate.getFullYear()}`
})

loadAnalitics(route.params.id)
</script>

<style scoped></style>
