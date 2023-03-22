<template>
    <div
        class="rounded-2 bd-callout bd-callout-left bd-callout-secondary p-3 mt-0 mb-0"
    >
        <h2 class="fw-bold">Ganancias del Mes</h2>
        <apexchart
            height="260"
            type="bar"
            :options="options"
            :series="series"
        ></apexchart>
    </div>
</template>

<script setup>
const fechaActual = new Date()
let mesActual = fechaActual.getMonth()
// mesActual = mesActual + 1
mesActual = 3
if (mesActual < 10) mesActual = `0${mesActual}`
const anioActual = fechaActual.getFullYear()

const actual = `${anioActual}-${mesActual}`

const data = [
    { order: 232, fecha: '2023-03-22', total: 23 },
    { order: 233, fecha: '2023-03-22', total: 13 },
    { order: 234, fecha: '2023-03-22', total: 43 },
    { order: 235, fecha: '2023-03-22', total: 63 },
    { order: 236, fecha: '2023-03-22', total: 43 },
    { order: 237, fecha: '2023-03-22', total: 23 },
    { order: 238, fecha: '2023-03-24', total: 23 },
    { order: 239, fecha: '2023-03-24', total: 13 },
    { order: 240, fecha: '2023-03-24', total: 43 },
    { order: 241, fecha: '2023-03-24', total: 43 },
    { order: 242, fecha: '2023-03-25', total: 43 },
    { order: 243, fecha: '2023-03-25', total: 23 },
    { order: 244, fecha: '2023-03-25', total: 76 },
]

const filteredData = data.filter(item => item.fecha.startsWith(actual))
let groupedData = {}
filteredData.forEach(item => {
    const day = item.fecha.slice(-2)
    groupedData[day] = groupedData[day]
        ? groupedData[day] + item.total
        : item.total
})

const options = {
    chart: {
        width: '380',
        id: 'vuechart-example',
        fontFamily: 'Nunito',
    },
    dataLabels: {
        enabled: false,
    },
    xaxis: {
        categories: Object.keys(groupedData),
    },
}
const series = [
    {
        name: 'Ventas',
        data: Object.values(groupedData),
    },
]
</script>

<style lang="scss" scoped></style>
