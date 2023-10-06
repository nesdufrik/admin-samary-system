<template>
	<apexchart
		height="300"
		type="donut"
		:options="options"
		:series="series"
	></apexchart>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
	chartItemArray: Object,
})

const options = computed(() => {
	return {
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
			show: false,
			position: 'bottom',
		},
		labels: Object.keys(props.chartItemArray),
	}
})

const series = computed(() => {
	return Object.values(props.chartItemArray)
})
</script>

<style lang="scss" scoped></style>
