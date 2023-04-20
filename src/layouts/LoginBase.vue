<template>
  <div class="w-screen h-screen font-poppins">
    <div class="w-full h-full bg-fondo-login bg-no-repeat bg-cover bg-center">
      <div class="bg-blue-100 w-full h-full bg-opacity-0">
        <div class="w-full h-full flex justify-center items-center">
          <div
            class="w-11/12 h-5/6 md:w-1/2 md:h-3/5 lg:w-1/3 lg:h-3/5 xl:w-1/3 xl:h-3/5 2xl:w-1/4 2xl:h-3/5 bg-white rounded-2xl shadow-lg shadown bg-opacity-60 flex justify-center items-center"
          >
            <div class="p-6 grid grid-cols-1">
              <h1
                class="mb-4 text-center text-5xl font-bold uppercase tracking-widest text-primary brightness-110"
              >
                Login
              </h1>
              <form class="space-y-12 pt-8" @submit.prevent="login">
                <!-- usuario -->
                <div class="relative flex w-full justify-center">
                  <div
                    class="pointer-events-none absolute inset-y-0 left-5 flex items-center md:left-5"
                  >
                    <font-awesome-icon
                      icon="user"
                      class="h-5 w-5 text-primary dark:text-lightDark"
                    ></font-awesome-icon>
                  </div>
                  <input
                    type="text"
                    class="block h-14 w-full rounded-full border border-gray-400 bg-gray-50 px-14 text-sm focus:border-2 focus:border-primary focus:outline-none focus:ring-primary dark:bg-dark dark:text-light dark:focus:border-primary"
                    placeholder="Username"
                    v-model="form.usuario"
                  />
                </div>
                <!-- contasena -->
                <div class="relative flex w-full justify-center">
                  <div
                    class="pointer-events-none absolute inset-y-0 left-5 flex items-center md:left-5"
                  >
                    <font-awesome-icon
                      icon="key"
                      class="h-5 w-5 text-primary dark:text-lightDark"
                    ></font-awesome-icon>
                  </div>
                  <input
                    type="text"
                    class="block h-14 w-full rounded-full border border-gray-400 bg-gray-50 px-14 text-sm focus:border-2 focus:border-primary focus:outline-none focus:ring-primary dark:bg-dark dark:text-light dark:focus:border-primary"
                    placeholder="Password"
                    v-model="form.contrasena"
                  />
                </div>
                <div class="w-full">
                  <button
                    class="w-full rounded-full bg-primary p-4 text-white dark:bg-primary"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>
              <p class="text-secondary opacity-100 text-base mt-12">
                Haven't Account?
                <span class="text-blue-800 underline cursor-pointer ml-3"
                  >Register</span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router'

const dataForm = {
  usuario: '',
  contrasena: ''
}

const form = ref(dataForm)

const login = () => {
  router.push({ name: 'home' })
}
</script>
