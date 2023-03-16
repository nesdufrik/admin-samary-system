<template>
    <div class="container-fluid">
        <h1>Productos</h1>
        <div v-for="(producto, index) in productos" :key="producto.categoria">
            <h2>
                <input
                    :value="producto.categoria"
                    @input="producto.categoria = $event.target.value"
                    class="form-control"
                />
            </h2>
            <ul class="list-group mb-3">
                <li class="list-group-item">
                    <span
                        class="badge bg-secondary me-2"
                        v-for="(etiqueta, etiquetaIndex) in producto.etiquetas"
                        :key="etiquetaIndex"
                    >
                        <span class="align-middle">
                            {{ etiqueta }}
                        </span>
                        <span
                            class="material-icons-outlined fs-6 align-middle __link"
                            @click="eliminarEtiqueta(index, etiquetaIndex)"
                        >
                            close
                        </span>
                    </span>
                </li>
                <li class="list-group-item">
                    <form @submit.prevent="agregarEtiqueta(index)">
                        <div class="row">
                            <div class="col-8">
                                <input
                                    type="text"
                                    class="form-control"
                                    v-model="nuevaEtiqueta"
                                    placeholder="Nueva etiqueta"
                                    required
                                />
                            </div>
                            <div class="col-4">
                                <button type="submit" class="btn btn-primary">
                                    Agregar
                                </button>
                            </div>
                        </div>
                    </form>
                </li>
            </ul>
            <button class="btn btn-danger" @click="eliminarCategoria(index)">
                Eliminar categoría
            </button>
        </div>
        <form @submit.prevent="agregarCategoria">
            <div class="row mt-3">
                <div class="col-8">
                    <input
                        type="text"
                        class="form-control"
                        v-model="nuevaCategoria"
                        placeholder="Nueva categoría"
                        required
                    />
                </div>
                <div class="col-4">
                    <button type="submit" class="btn btn-primary">
                        Agregar
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const productos = reactive([
    {
        categoria: 'Frutas',
        etiquetas: [
            'Manzanas',
            'Bananas',
            'Naranjas',
            'Peras',
            'Limones',
            'Papayas',
            'Mandarinas',
        ],
    },
    {
        categoria: 'Verduras',
        etiquetas: ['Lechuga', 'Tomates', 'Pepinos'],
    },
    {
        categoria: 'Lácteos',
        etiquetas: ['Leche', 'Queso', 'Yogur'],
    },
])

const nuevaCategoria = ref('')
const nuevaEtiqueta = ref('')

const agregarCategoria = () => {
    productos.push({
        categoria: nuevaCategoria.value,
        etiquetas: [],
    })
    nuevaCategoria.value = ''
}

const eliminarCategoria = index => {
    productos.splice(index, 1)
}

const agregarEtiqueta = index => {
    productos[index].etiquetas.push(nuevaEtiqueta.value)
    nuevaEtiqueta.value = ''
}

const eliminarEtiqueta = (categoriaIndex, etiquetaIndex) => {
    productos[categoriaIndex].etiquetas.splice(etiquetaIndex, 1)
}
</script>
<style scoped>
.__link {
    cursor: pointer;
}
</style>
