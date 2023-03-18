import { createApp, markRaw } from 'vue'
import BootstrapVueNext from 'bootstrap-vue-next'
import VueApexCharts from 'vue3-apexcharts'

import App from './App.vue'
import pinia from './stores'
import router from './router'

import './axios'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'material-icons/iconfont/material-icons.css'

pinia.use(({ store }) => {
    store.router = markRaw(router)
})

const app = createApp(App)

app.use(VueApexCharts)
app.use(pinia)
app.use(router)
app.use(BootstrapVueNext)

app.mount('#app')
