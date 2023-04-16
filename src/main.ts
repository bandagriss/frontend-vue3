import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueApexCharts from "vue3-apexcharts";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faUserSecret,
  faHome,
  faBalanceScale,
  faUsers,
  faGear,
  faIdCard,
  faMoneyBills,
  faRocket,
  faUserTie,
  faPowerOff,
  faCircleQuestion,
  faEnvelope,
  faBell,
  faUserCircle,
  faBox,
  faBoxes
} from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faHome, faBalanceScale, faUsers, faGear, faIdCard, faMoneyBills, faRocket, faUserTie, faPowerOff, faCircleQuestion, faEnvelope, faBell, faUserCircle, faBox, faBoxes)



import App from './App.vue'
import router from './router'

import './assets/tailwind.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueApexCharts);

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
