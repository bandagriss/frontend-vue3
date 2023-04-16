<template>
  <div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 w-full"
    >
      <div
        class="p-8 bg-white rounded-lg shadow border-l-[0.8rem]"
        :class="`border-${card.color}`"
        v-for="(card, index) in cards"
        :key="index"
      >
        <div class="w-full h-full flex">
          <div
            class="w-full h-full felx justify-center items-center border-r-2"
          >
            <span class="text-6xl pl-2" :class="`text-${card.color}`">
              <font-awesome-icon :icon="card.icon"></font-awesome-icon>
            </span>
          </div>
          <div
            class="text-center pl-2 w-full h-full flex flex-col justify-center items-center"
          >
            <div class="text-xl text-gray-600">{{ card.name }}</div>
            <div class="text-3xl font-medium text-gray-700">
              {{ card.monto }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- grafica -->
    <h1 class="mt-8 text-xl font-semibold text-gray-700">Reports</h1>
    <div
      class="grid grid-cols-1 gap-2 mt-4 md:grid-cols-1 lg:grid-cols-1 2xl:grid-cols-2"
    >
      <div class="bg-white p-2 rounded-xl">
        <apexchart
          type="line"
          height="350"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
      <div class="bg-white p-2 rounded-xl">
        <apexchart
          type="line"
          height="350"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
    </div>
    <!-- actualizaciones -->
    <h1 class="mt-6 text-xl font-semibold text-gray-700">Updates</h1>
    <div class="relative overflow-x-auto mt-3">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Product name</th>
            <th scope="col" class="px-6 py-3">Color</th>
            <th scope="col" class="px-6 py-3">Category</th>
            <th scope="col" class="px-6 py-3">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4">Silver</td>
            <td class="px-6 py-4">Laptop</td>
            <td class="px-6 py-4">$2999</td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Microsoft Surface Pro
            </th>
            <td class="px-6 py-4">White</td>
            <td class="px-6 py-4">Laptop PC</td>
            <td class="px-6 py-4">$1999</td>
          </tr>
          <tr class="bg-white dark:bg-gray-800">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Magic Mouse 2
            </th>
            <td class="px-6 py-4">Black</td>
            <td class="px-6 py-4">Accessories</td>
            <td class="px-6 py-4">$99</td>
          </tr>
        </tbody>
      </table>
    </div>
    <h1 class="mt-6 text-xl font-semibold text-gray-700">Sails</h1>
    <div class="relative overflow-x-auto mt-3">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Product name</th>
            <th scope="col" class="px-6 py-3">Color</th>
            <th scope="col" class="px-6 py-3">Category</th>
            <th scope="col" class="px-6 py-3">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4">Silver</td>
            <td class="px-6 py-4">Laptop</td>
            <td class="px-6 py-4">$2999</td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Microsoft Surface Pro
            </th>
            <td class="px-6 py-4">White</td>
            <td class="px-6 py-4">Laptop PC</td>
            <td class="px-6 py-4">$1999</td>
          </tr>
          <tr class="bg-white dark:bg-gray-800">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Magic Mouse 2
            </th>
            <td class="px-6 py-4">Black</td>
            <td class="px-6 py-4">Accessories</td>
            <td class="px-6 py-4">$99</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const cards = ref([
  {
    name: 'Produccion',
    monto: '1500 Bs.',
    icon: 'box',
    color: 'primary'
  },
  {
    name: 'Almacenes',
    monto: '1500 Bs.',
    icon: 'boxes',
    color: 'success'
  },
  {
    name: 'Ventas',
    monto: '1500 Bs.',
    icon: 'money-bills',
    color: 'warning'
  }
])

const chartOptions = ref({
  chart: {
    height: 350,
    type: 'line'
  },
  stroke: {
    width: [0, 4]
  },
  title: {
    text: 'Traffic Sources'
  },
  dataLabels: {
    // enabled: true,
    enabledOnSeries: [1]
  },
  labels: [
    '01 Jan 2001',
    '02 Jan 2001',
    '03 Jan 2001',
    '04 Jan 2001',
    '05 Jan 2001',
    '06 Jan 2001',
    '07 Jan 2001',
    '08 Jan 2001',
    '09 Jan 2001',
    '10 Jan 2001',
    '11 Jan 2001',
    '12 Jan 2001'
  ],
  xaxis: {
    type: 'datetime'
  },
  yaxis: [
    {
      title: {
        text: 'Website Blog'
      }
    },
    {
      opposite: true,
      title: {
        text: 'Social Media'
      }
    }
  ]
})

const series = [
  {
    name: 'Website Blog',
    type: 'column',
    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
  },
  {
    name: 'Social Media',
    type: 'line',
    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
  }
]
</script>
