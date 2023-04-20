<script setup lang="ts"></script>

<template>
  <div class="w-screen h-screen font-poppins">
    <span class="text-primary border-primary"></span>
    <span class="text-success border-success"></span>
    <span class="text-secondary border-secondary"></span>
    <span class="text-warning border-warning"></span>
    <div class="w-full h-full bg-white flex flex-row p-2">
      <!-- menu -->
      <div class="w-80 flex-none h-full hidden md:block bg-blue-100 rounded-xl">
        <div
          class="h-2/6 w-full flex flex-col space-y-4 justify-center items-center"
        >
          <font-awesome-icon
            icon="user-tie"
            class="text-9xl text-primary brightness-110"
          ></font-awesome-icon>
          <div class="text-center">
            <p class="text-xl text-primary font-medium">Juan Ramirez</p>
            <p class="text-sm text-gray-500">Administrador</p>
          </div>
        </div>
        <div class="h-3/6 w-full">
          <MenuBase></MenuBase>
        </div>
        <div class="relative h-1/6 w-full">
          <div class="absolute bottom-0 w-full h-20">
            <ul class="px-8">
              <RouterLink to="/login">
                <li
                  class="bg-primary p-3 mt-0 rounded-xl flex items-center hover:bg-blue-300 text-white hover:text-white"
                >
                  <div class="text-xl p-2 font-extrabold flex">
                    <font-awesome-icon
                      icon="power-off"
                      class="pr-4"
                    ></font-awesome-icon>
                    <span class="font-semibold text-sm">Logout</span>
                  </div>
                </li>
              </RouterLink>
            </ul>
          </div>
        </div>
      </div>
      <!-- container -->
      <div
        class="pt-1 md:pt-0 pr-1 md:pr-1 pb-1 md:pb-0 pl-1 md:pl-1 w-4/5 h-full"
      >
        <div class="bg-[#f7f8fc] w-full h-full rounded-3xl">
          <div class="w-full h-full p-8">
            <!-- container -->
            <div class="h-full w-full overflow-y-auto">
              <RouterView></RouterView>
            </div>
          </div>
        </div>
      </div>
      <!-- panel derecho -->
      <MenuDerecho></MenuDerecho>
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuBase from '@/components/common/MenuBase.vue'
import MenuDerecho from '@/components/common/MenuDerecho.vue'
</script>
