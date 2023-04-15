<script setup lang="ts"></script>

<template>
  <div class="w-screen h-screen font-poppins">
    <div class="w-full h-full bg-sky-600 flex flex-row">
      <div class="w-80 flex-none h-full hidden md:block">
        <div class="h-2/6 w-full"></div>
        <div class="h-3/6 w-full">
          <MenuBase></MenuBase>
        </div>
        <div class="h-1/6 w-full"></div>
      </div>
      <div class="pt-1 md:pt-4 pr-1 md:pr-4 pb-1 md:pb-4 pl-1 md:pl-0 w-full h-full">
        <div class="bg-gray-100 w-full h-full rounded-3xl">
          <div class="w-full h-full p-8">
            <!-- container -->
            <div class="h-full w-full">
              <RouterView></RouterView>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuBase from '@/components/common/MenuBase.vue'
</script>
