<template>
    <div
        class="rounded-2 bd-callout bd-callout-left bd-callout-secondary p-3 mt-0 mb-0"
    >
        <h2 class="fw-bold">Productos Vendidos</h2>
        <apexchart
            height="260"
            type="donut"
            :options="options"
            :series="series"
        ></apexchart>
    </div>
</template>

<script setup>
const data = [
    { fecha: '2023-03-22', item: 'Paceña 1lt', cantidad: 2 },
    { fecha: '2023-03-22', item: 'Huari 1lt', cantidad: 4 },
    { fecha: '2023-03-22', item: 'Potosina 1lt', cantidad: 5 },
    { fecha: '2023-03-22', item: 'Paceña 1lt', cantidad: 3 },
    { fecha: '2023-03-22', item: 'Paceña 2lt', cantidad: 3 },
    { fecha: '2023-03-22', item: 'Paceña 3lt', cantidad: 3 },
    { fecha: '2023-03-22', item: 'Paceña 4lt', cantidad: 3 },
    { fecha: '2023-03-22', item: 'Paceña 4lt', cantidad: 3 },
    { fecha: '2023-03-22', item: 'Paceña 4lt', cantidad: 3 },
    { fecha: '2023-03-22', item: 'Paceña 4lt', cantidad: 3 },
    { fecha: '2023-03-22', item: 'Paceña 5lt', cantidad: 3 },
    { fecha: '2023-03-22', item: 'Paceña 5lt', cantidad: 3 },
    { fecha: '2023-03-22', item: 'Paceña 6lt', cantidad: 3 },
    { fecha: '2023-03-22', item: 'Paceña 6lt', cantidad: 3 },
    { fecha: '2023-03-22', item: 'Paceña 7lt', cantidad: 3 },
    { fecha: '2023-03-22', item: 'Paceña 7lt', cantidad: 3 },
    { fecha: '2023-03-22', item: 'Wisky JW', cantidad: 3 },
    { fecha: '2023-03-22', item: 'Jugo del Valle', cantidad: 2 },
    { fecha: '2023-03-23', item: 'Paceña 1lt', cantidad: 12 },
    { fecha: '2023-03-23', item: 'Huari 1lt', cantidad: 5 },
    { fecha: '2023-03-23', item: 'Potosina 1lt', cantidad: 2 },
    { fecha: '2023-03-23', item: 'Jugo del Valle', cantidad: 6 },
    { fecha: '2023-03-24', item: 'Huari 1lt', cantidad: 1 },
    { fecha: '2023-03-24', item: 'Potosina 1lt', cantidad: 8 },
    { fecha: '2023-03-24', item: 'Paceña 1lt', cantidad: 2 },
    { fecha: '2023-03-24', item: 'Jugo del Valle', cantidad: 4 },
    { fecha: '2023-03-25', item: 'Huari 1lt', cantidad: 2 },
    { fecha: '2023-03-25', item: 'Paceña 1lt', cantidad: 2 },
    { fecha: '2023-03-26', item: 'Wisky JW', cantidad: 2 },
    { fecha: '2023-03-27', item: 'Potosina 1lt', cantidad: 2 },
]

const filteredData = data.filter(d => {
    const date = new Date(d.fecha)
    return date.getMonth() === 2 && date.getFullYear() === 2023
})

let groupedData = {}
filteredData.forEach(d => {
    if (groupedData[d.item]) {
        groupedData[d.item] += d.cantidad
    } else {
        groupedData[d.item] = d.cantidad
    }
})

const options = {
    plotOptions: {
        pie: {
            expandOnClick: false,
            donut: {
                size: '70%',
                labels: {
                    show: true,
                    value: {
                        show: true,
                        fontSize: '18px',
                        fontWeight: 600,
                    },
                    total: {
                        show: true,
                        fontSize: '22px',
                        fontWeight: 600,
                        color: '#373d3f',
                    },
                },
            },
        },
    },
    dataLabels: {
        enabled: false,
        dropShadow: {
            enabled: false,
        },
    },
    legend: {
        show: true,
        position: 'left',
    },
    chart: {
        fontFamily: 'Nunito',
    },
    labels: Object.keys(groupedData),
}
const series = Object.values(groupedData)
</script>

<style lang="scss" scoped></style>
