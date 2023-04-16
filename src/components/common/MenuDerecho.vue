<template>
  <div class="flex flex-col w-min pr-8 pl-5 overflow-y-auto flex-none">
    <!-- quitando w-1/5 -->
    <div
      class="flex justify-end items-center h-14 w-full mt-4 space-x-2 md:space-x-4 lg:space-x-4 xl:space-x-8"
    >
      <font-awesome-icon
        icon="circle-question"
        class="text-white text-xl cursor-pointer"
      ></font-awesome-icon>
      <font-awesome-icon
        icon="envelope"
        class="text-white text-xl cursor-pointer"
      ></font-awesome-icon>
      <font-awesome-icon
        icon="bell"
        class="text-white text-xl cursor-pointer"
      ></font-awesome-icon>
      <div class="pl-4">
        <button ref="dropdownButton" class="hover:opacity-50">
          <font-awesome-icon
            icon="user-circle"
            class="text-4xl text-white cursor-pointer"
          ></font-awesome-icon>
        </button>
        <!-- Dropdown menu -->
        <div
          ref="dropdownMenu"
          class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            class="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownButton"
          >
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Dashboard</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Settings</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Earnings</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Sign out</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="h-1/2 w-full flex-none mt-4">
      <!-- datepicker -->
      <div
        inline-datepicker
        :data-date="Date.now()"
        ref="datepickerId"
        datepicker-title="Flowbite datepicker"
      ></div>
      <!-- tareas -->
      <div class="w-full space-y-2 mt-2">
        <h3 class="text-white text-lg">Tasks</h3>
        <a
          href="#"
          class="w-full block p-2 bg-white rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 border-l-[0.8rem] border-l-cyan-600"
          v-for="(tarea, index) in tareas"
          :key="index"
        >
          <div class="w-full h-full flex">
            <div class="w-12 h-full flex justify-left items-center">
              <span class="text-4xl pl-2" :class="`text-${tarea.color}`">
                <font-awesome-icon :icon="tarea.icon"></font-awesome-icon>
              </span>
            </div>
            <div
              class="w-full h-auto flex flex-col text-left pl-2"
            >
              <div class="text-sm text-dark font-semibold">
                {{ tarea.tarea }}
              </div>
              <div class="text-sm font-medium text-gray-400">
                {{ tarea.fecha }}
              </div>
            </div>
          </div>
        </a>
      </div>
      <!-- mensajes -->
      <div class="w-full space-y-2 py-4">
        <h3 class="text-white text-lg">Messages</h3>
        <a
          href="#"
          class="w-full block p-2 bg-white rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 border-l-[0.8rem] border-l-success"
          v-for="(mensaje, index) in mensajes"
          :key="index"
        >
          <div class="w-full h-full flex">
            <div class="w-12 h-full flex justify-center items-center">
              <span class="text-4xl pl-2" :class="`text-${mensaje.color}`">
                <font-awesome-icon :icon="mensaje.icon"></font-awesome-icon>
              </span>
            </div>
            <div
              class="w-full h-auto flex flex-col pl-2"
            >
              <div class="text-sm text-dark font-semibold">
                {{ mensaje.titulo }}
              </div>
              <div class="text-sm font-medium text-gray-400">
                {{ mensaje.contenido }}
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Dropdown } from 'flowbite'
import type { DropdownOptions } from 'flowbite'
import Datepicker from 'flowbite-datepicker/Datepicker'

const dropdownMenu = ref(null)
const dropdownButton = ref(null)

const options: DropdownOptions = {
  placement: 'bottom',
  triggerType: 'click',
  offsetSkidding: 0,
  offsetDistance: 10,
  delay: 300
}

const datepickerId = ref(null)

const tareas = ref([
  {
    tarea: 'Update proyect to version 1.0',
    fecha: '17 de Abril de 2023',
    icon: 'user-circle',
    color: 'primary'
  },
  {
    tarea: 'Update proyect to version 0.9',
    fecha: '1 de Marzo de 2023',
    icon: 'user-circle',
    color: 'success'
  },
  {
    tarea: 'Update proyect to version 0.8',
    fecha: '17 de Febrero de 2023',
    icon: 'user-circle',
    color: 'warning'
  }
])

const mensajes = ref([
  {
    titulo: 'Abraham Tola',
    contenido: 'Que tal viste mi caso',
    icon: 'user-circle',
    color: 'primary'
  },
  {
    titulo: 'Javier Osorio',
    contenido: 'Ya te envie el recibo',
    icon: 'user-circle',
    color: 'success'
  },
  {
    titulo: 'Anabel Quispe',
    contenido: 'Su paquete fue entregado',
    icon: 'user-circle',
    color: 'warning'
  }
])

onMounted(() => {
  new Dropdown(dropdownMenu.value, dropdownButton.value, options)
  new Datepicker(datepickerId.value, {})
})
</script>
