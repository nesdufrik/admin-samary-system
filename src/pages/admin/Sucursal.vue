<template>
    <div class="container-fluid">
        <div>
            <h1>Empresa: <strong>name_empresa</strong></h1>
        </div>
        <div>Dashboard Sucursal: <strong>name_sucursal</strong></div>
        <div class="row row-cols-1 row-cols-md-2 mt-3 g-3">
            <div class="col empresa__box">
                <div class="card rounded-3 shadow-sm">
                    <div class="card-body">
                        <barChart />
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="row row-cols-1 row-cols-md-2 g-2">
                    <div class="col empresa__box">
                        <div class="card rounded-3 shadow-sm">
                            <div class="card-body">Punto Nro 1</div>
                        </div>
                    </div>
                    <div class="col empresa__box">
                        <div class="card rounded-3 shadow-sm">
                            <div class="card-body">Punto Nro 2</div>
                        </div>
                    </div>
                    <div class="col empresa__box">
                        <div class="card rounded-3 shadow-sm">
                            <div class="card-body">Punto Nro 3</div>
                        </div>
                    </div>
                    <div class="col empresa__box">
                        <div class="card rounded-3 shadow-sm">
                            <div class="card-body">Punto Nro 4</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row row-cols-1 row-cols-md-2 mt-3 g-3">
            <div class="col empresa__box">
                <div class="card rounded-3 shadow-sm">
                    <div class="card-body">
                        <pieChart />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import barChart from '../../components/admin/barChart.vue'
import pieChart from '../../components/admin/pieChart.vue'

const route = useRoute
</script>

<style scoped></style>
