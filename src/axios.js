import axios from 'axios'

//direccion de la api
axios.defaults.baseURL = import.meta.env.VITE_API_URL
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(
    'token'
)}`
