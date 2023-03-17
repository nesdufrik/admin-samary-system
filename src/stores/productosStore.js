import { defineStore } from 'pinia'

export const useProductosStore = defineStore('productos', {
    state: () => {
        return {
            categoriasArr: [],
            categoriaForm: {},
            categoriaEdit: {},
            productosArr: [],
            productoForm: {},
            productoEdit: {},
            actionState: false,
        }
    },
    actions: {
        loadCategorias(items) {
            this.categoriasArr = items
        },
        addCategoria(item) {
            this.categoriasArr.push({
                ...item,
            })
        },
        deleteCategoria(id) {
            this.categoriasArr = this.categoriasArr.filter(
                cat => cat._id !== id
            )
        },
        editCategoria(id) {
            const res = this.categoriasArr.find(element => element._id == id)
            this.categoriaEdit = {}
        },
        updtProducto(item) {
            const indiceEl = this.categoriasArr.findIndex(
                el => el._id == item._id
            )
            this.categoriasArr[indiceEl] = item
        },
    },
})
