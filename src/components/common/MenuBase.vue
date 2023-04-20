<template>
  <div>
    <ul class="px-8">
      <RouterLink :to="menu.ruta" v-for="(menu, index) in menus" :key="index">
        <li
          class="p-3 mt-0 rounded-xl flex items-center text-primary hover:text-white"
          :class="$router.currentRoute.value.fullPath === menu.ruta ? 'bg-blue-500' : 'hover:text-white hover:bg-blue-400'"
        >
          <div
            class="text-xl p-2 font-extrabold flex"
            :class="
              $router.currentRoute.value.fullPath === menu.ruta ? 'text-white' : ''
            "
          >
            <font-awesome-icon :icon="menu.icon" class="pr-4"></font-awesome-icon>
            <span class="font-semibold text-sm">{{ menu.name }}</span>
          </div>
        </li>
      </RouterLink>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const menus = [
  {
    ruta: '/home',
    name: 'Home',
    icon: 'home'
  },
  {
    ruta: '/about',
    name: 'Balance',
    icon: 'balance-scale'
  },
  {
    ruta: '/about',
    name: 'Profile',
    icon: 'id-card'
  },
  {
    ruta: '/users',
    name: 'Users',
    icon: 'users'
  },
  {
    ruta: '/about',
    name: 'Configuration',
    icon: 'gear'
  },
]
</script>
