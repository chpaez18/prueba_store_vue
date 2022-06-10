<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
<nav class="flex items-center bg-gray-800 p-3 flex-wrap">
      <a href="#" class="p-2 mr-4 inline-flex items-center">
        <router-link to="/" class="text-xl text-white font-bold uppercase tracking-wide">
            Prueba
        </router-link>
        
      </a>
      <div
        class="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
        id="navigation"
      >
        <div
          class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto"
        >
          <router-link to="/crear" class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white">
            Agregar Producto
          </router-link>

          <router-link to="/listar" class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white">
            Listado
          </router-link>

          <router-link to="/transaccion" class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white">
            Transacciones
          </router-link>
          
        </div>
      </div>
    </nav>
  <br>
  <router-view/>
</template>

