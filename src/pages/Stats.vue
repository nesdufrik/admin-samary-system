<template>
    <div class="row row-cols-1 row-cols-md-2 g-3">
        <div class="col">
            <barChart />
        </div>
        <div class="col">
            <pieChart />
        </div>
        <div class="col">
            <div class="row row-cols-1 row-cols-xl-2 g-3">
                <topItems />
            </div>
        </div>
    </div>
</template>

<script setup>
import barChart from '../components/analiticas/barChart.vue'
import pieChart from '../components/analiticas/pieChart.vue'
import topItems from '../components/analiticas/topItems.vue'
import { useNavBar } from '../composables/useNavBar'

const { showNavBar, contentNavBar } = useNavBar()
showNavBar.value = true

contentNavBar()
</script>

<style scoped></style>
