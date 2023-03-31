<template>
    <div class="row row-cols-1 row-cols-md-2 g-3">
        <div class="col">
            <barChart :chartTotalArray="chartTotales" />
        </div>
        <div class="col">
            <pieChart :chartItemArray="chartItems" />
        </div>
        <div class="col">
            <div class="row row-cols-1 row-cols-xl-2 g-3">
                <topItems />
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import barChart from '../components/analiticas/barChart.vue'
import pieChart from '../components/analiticas/pieChart.vue'
import topItems from '../components/analiticas/topItems.vue'
import { useAnalitics } from '../composables/useAnaliticas'

const { loadAnalitics, chartTotales, chartItems } = useAnalitics()
const route = useRoute()
loadAnalitics(route.params.id)
</script>

<style scoped></style>
