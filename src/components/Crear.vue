<template>
    <div class="container">

        <div class="min-h-screen py-6 flex flex-col  sm:py-12">
            <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                <div class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                <div class="max-w-md mx-auto">
                    <div class="flex items-center space-x-5">
                        <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
                            <h2 class="leading-relaxed">Agregar Nuevo Producto</h2>
                        </div>
                    </div>

                    <div class="divide-y divide-gray-200">
                        <form v-on:submit.prevent="addProduct" >
                            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                
                                <div class="flex items-center space-x-4">
                                    <div class="flex flex-col">
                                        <label class="leading-loose">Nombre del Producto</label>
                                        <input 
                                            class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" 
                                            v-model="producto.nombre_producto"
                                            type="text"
                                            id="nombre_producto"
                                            name="nombre_producto" 
                                            placeholder="Nombre del Producto"
                                            required
                                        >
                                    </div>

                                    <div class="flex flex-col">
                                        <label class="leading-loose">Descripcion</label>
                                        <input 
                                            class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" 
                                            v-model="producto.descripcion"
                                            type="text"
                                            id="descripcion"
                                            name="descripcion" 
                                            placeholder="Descripción"
                                            required
                                        >
                                    </div>
                                </div>
                                
                                <div class="flex items-center space-x-4">
                                    <div class="flex flex-col">
                                        <label class="leading-loose">Tipo de Producto</label>
                                        <input 
                                            class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" 
                                            v-model="producto.tipo" 
                                            type="text"
                                            id="tipo"
                                            name="tipo" 
                                            placeholder="Tipo de Producto"
                                            required
                                        >
                                    </div>

                                    <div class="flex flex-col">
                                        <label class="leading-loose">Imagen del Producto</label>
                                        <input 
                                            class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" 
                                            v-model="producto.imagen" 
                                            type="text"
                                            id="imagen"
                                            name="imagen" 
                                            placeholder="Imagen del Producto"
                                            required
                                        >
                                    </div>
                                </div>

                                <div class="flex items-center space-x-4">

                                    <div class="flex flex-col">
                                        <label class="leading-loose">Precio</label>
                                        <input 
                                            class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" 
                                            v-model="producto.precio" 
                                            type="text"
                                            id="precio"
                                            name="precio" 
                                            placeholder="Precio del Producto"
                                            pattern="[0-9.]+"
                                        >
                                    </div>

                                    <div class="flex flex-col">
                                        <label class="leading-loose">Descuento</label>
                                        <input 
                                            class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" 
                                            v-model="producto.precio_descuento" 
                                            type="text"
                                            id="precio_descuento"
                                            name="precio_descuento" 
                                            placeholder="Monto de descuento"
                                            pattern="[0-9.]+"
                                        >
                                    </div>
                                </div>

                                <div class="flex flex-col">
                                    <label class="leading-loose">Cantidad de Stock</label>
                                    <input 
                                        class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" 
                                        v-model="producto.stock" 
                                        type="text"
                                        id="stock"
                                        name="stock" 
                                        placeholder="Cantidad de Stock"
                                        pattern="[0-9.]+"
                                    >
                                </div>
                                
                            </div>
                            <div class="pt-4 flex items-center space-x-4">
                                
                                <router-link :to="{name:'Listar'}" class="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">Cancelar</router-link>
                                <button type="submit" class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
       <br>

    </div>
</template>

<script>
import { useProductStore } from '../stores/product'
import {generateID} from '../utils'
export default {

    data(){
        return {
            producto: {}
        }
    },
    setup(){
        const productStore = useProductStore()

        return {
            productStore
        }
    },

    methods: {
        addProduct(){
            const productStore = useProductStore()
            var datosForm = {
                id: generateID(),
                nombre_producto : this.producto.nombre_producto,
                descripcion : this.producto.descripcion,
                tipo : this.producto.tipo,
                imagen : this.producto.imagen,
                precio : this.producto.precio,
                precio_descuento : this.producto.precio_descuento,
                stock : this.producto.stock
            }

            productStore.addProduct(datosForm)

            this.producto.nombre_producto = "";
            this.producto.descripcion = "";
            this.producto.tipo = "";
            this.producto.imagen = "";
            this.producto.precio = "";
            this.producto.precio_descuento = "";
            this.producto.stock = "";
        }
        
    }
    
}
</script>
